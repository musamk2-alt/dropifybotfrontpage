"use client";

import {
  useCallback,
  useEffect,
  useState,
  type CSSProperties,
} from "react";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://api.dropifybot.com";

type Viewer = {
  twitchId: string;
  login: string;
  displayName?: string;
};

type Discount = {
  code: string;
  type?: string;
  value?: number;
  expiresAt: string;
};

type Claim = {
  id: string;

  status:
    | "pending"
    | "processing"
    | "claimed";

  expiresAt: string;

  streamer: {
    twitchLogin: string;
    displayName: string;
  };

  discount?: Discount | null;
};

type Screen =
  | "loading"
  | "anonymous"
  | "ready"
  | "no_claim"
  | "success"
  | "error";

const styles: Record<
  string,
  CSSProperties
> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    background:
      "radial-gradient(circle at top, #25134d 0%, #10091f 42%, #07050d 100%)",
    color: "#fff",
    fontFamily:
      "Arial, Helvetica, sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "570px",
    padding: "40px",
    borderRadius: "24px",
    background:
      "rgba(18, 13, 31, 0.96)",
    border:
      "1px solid rgba(255,255,255,0.12)",
    boxShadow:
      "0 24px 80px rgba(0,0,0,0.45)",
    textAlign: "center",
  },

  logo: {
    marginBottom: "28px",
    fontSize: "24px",
    fontWeight: 800,
  },

  purple: {
    color: "#a970ff",
  },

  badge: {
    display: "inline-block",
    marginBottom: "18px",
    padding: "7px 12px",
    borderRadius: "999px",
    background:
      "rgba(169,112,255,0.14)",
    border:
      "1px solid rgba(169,112,255,0.35)",
    color: "#c9a7ff",
    fontSize: "13px",
    fontWeight: 700,
    textTransform: "uppercase",
  },

  heading: {
    margin: "0 0 14px",
    fontSize: "36px",
    lineHeight: 1.1,
  },

  description: {
    margin: "0 auto 24px",
    color: "#c7c2d3",
    fontSize: "16px",
    lineHeight: 1.6,
  },

  viewerBox: {
    marginBottom: "20px",
    padding: "16px",
    borderRadius: "14px",
    background:
      "rgba(255,255,255,0.05)",
    border:
      "1px solid rgba(255,255,255,0.09)",
  },

  label: {
    margin: "0 0 6px",
    color: "#aaa4b7",
    fontSize: "13px",
  },

  value: {
    margin: 0,
    fontSize: "20px",
    fontWeight: 800,
  },

  claimList: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    marginTop: "20px",
  },

  claimCard: {
    padding: "18px",
    borderRadius: "15px",
    background:
      "rgba(255,255,255,0.045)",
    border:
      "1px solid rgba(255,255,255,0.1)",
    textAlign: "left",
  },

  claimedCard: {
    padding: "18px",
    borderRadius: "15px",
    background:
      "rgba(72,187,120,0.08)",
    border:
      "1px solid rgba(72,187,120,0.3)",
    textAlign: "left",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
  },

  streamer: {
    margin: 0,
    fontSize: "19px",
    fontWeight: 800,
  },

  login: {
    margin: "5px 0 13px",
    color: "#aaa4b7",
    fontSize: "13px",
  },

  status: {
    padding: "5px 9px",
    borderRadius: "999px",
    background:
      "rgba(169,112,255,0.14)",
    color: "#c9a7ff",
    fontSize: "11px",
    fontWeight: 800,
    textTransform: "uppercase",
  },

  activeStatus: {
    padding: "5px 9px",
    borderRadius: "999px",
    background:
      "rgba(72,187,120,0.15)",
    color: "#8ce6ae",
    fontSize: "11px",
    fontWeight: 800,
    textTransform: "uppercase",
  },

  codeBox: {
    margin: "12px 0",
    padding: "15px",
    borderRadius: "12px",
    background:
      "rgba(0,0,0,0.18)",
    textAlign: "center",
  },

  code: {
    margin: 0,
    fontSize: "23px",
    fontWeight: 900,
    letterSpacing: "1px",
    overflowWrap: "anywhere",
  },

  expiry: {
    margin: "12px 0",
    color: "#938da0",
    fontSize: "12px",
  },

  error: {
    marginBottom: "20px",
    padding: "15px",
    borderRadius: "12px",
    background:
      "rgba(245,101,101,0.1)",
    border:
      "1px solid rgba(245,101,101,0.3)",
    color: "#ffb0b0",
    fontSize: "14px",
  },

  primary: {
    width: "100%",
    padding: "14px 18px",
    border: 0,
    borderRadius: "11px",
    background: "#9147ff",
    color: "#fff",
    fontSize: "15px",
    fontWeight: 800,
    cursor: "pointer",
    textDecoration: "none",
    boxSizing: "border-box",
    display: "block",
    textAlign: "center",
  },

  secondary: {
    width: "100%",
    marginTop: "12px",
    padding: "13px 18px",
    borderRadius: "11px",
    background: "transparent",
    border:
      "1px solid rgba(255,255,255,0.18)",
    color: "#d2cddc",
    fontSize: "14px",
    fontWeight: 700,
    cursor: "pointer",
  },

  disabled: {
    width: "100%",
    padding: "14px 18px",
    border: 0,
    borderRadius: "11px",
    background: "#7040b8",
    color: "#d5c7e8",
    fontSize: "14px",
    fontWeight: 800,
    cursor: "not-allowed",
    opacity: 0.7,
  },

  note: {
    margin: "12px 0 0",
    color: "#938da0",
    fontSize: "12px",
  },

  footer: {
    display: "inline-block",
    marginTop: "26px",
    color: "#b68cff",
    fontSize: "14px",
    textDecoration: "none",
  },
};

function errorMessage(
  data: unknown,
  fallback: string
) {
  if (
    data &&
    typeof data === "object"
  ) {
    const value =
      data as Record<string, unknown>;

    if (
      typeof value.message === "string"
    ) {
      return value.message;
    }

    if (
      typeof value.error === "string"
    ) {
      return value.error;
    }
  }

  return fallback;
}

function expiryText(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Expires soon";
  }

  return `Available until ${date.toLocaleTimeString(
    [],
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  )}`;
}

export default function ClaimPage() {
  const [screen, setScreen] =
    useState<Screen>("loading");

  const [viewer, setViewer] =
    useState<Viewer | null>(null);

  const [claims, setClaims] =
    useState<Claim[]>([]);

  const [busyClaimId, setBusyClaimId] =
    useState<string | null>(null);

  const [
    copiedClaimId,
    setCopiedClaimId,
  ] = useState<string | null>(null);

  const [successDiscount, setSuccessDiscount] =
    useState<Discount | null>(null);

  const [
    successStreamer,
    setSuccessStreamer,
  ] = useState("");

  const [error, setError] =
    useState("");

  const twitchLoginUrl =
    `${API_URL}/api/auth/viewer/twitch/login`;

  const loadClaims =
    useCallback(async () => {
      setScreen("loading");
      setError("");
      setBusyClaimId(null);

      try {
        const response = await fetch(
          `${API_URL}/api/claims/active`,
          {
            method: "GET",
            credentials: "include",
            cache: "no-store",
            headers: {
              Accept:
                "application/json",
            },
          }
        );

        const data =
          await response
            .json()
            .catch(() => null);

        if (response.status === 401) {
          setViewer(null);
          setClaims([]);
          setScreen("anonymous");
          return;
        }

        if (
          !response.ok ||
          !data?.ok
        ) {
          throw new Error(
            errorMessage(
              data,
              "Unable to load your discounts."
            )
          );
        }

        const received =
          Array.isArray(data.claims)
            ? data.claims
            : [];

        setClaims(received);

        setScreen(
          received.length
            ? "ready"
            : "no_claim"
        );
      } catch (loadError) {
        setError(
          loadError instanceof Error
            ? loadError.message
            : "Unable to load your discounts."
        );

        setScreen("error");
      }
    }, []);

  useEffect(() => {
    async function start() {
      try {
        const response = await fetch(
          `${API_URL}/api/auth/viewer/me`,
          {
            method: "GET",
            credentials: "include",
            cache: "no-store",
          }
        );

        if (response.status === 401) {
          setScreen("anonymous");
          return;
        }

        const data =
          await response.json();

        if (
          !response.ok ||
          data?.authenticated !== true ||
          !data?.viewer
        ) {
          throw new Error(
            "Unable to verify your Twitch account."
          );
        }

        setViewer(data.viewer);
        await loadClaims();
      } catch (loadError) {
        setError(
          loadError instanceof Error
            ? loadError.message
            : "Unable to verify your Twitch account."
        );

        setScreen("error");
      }
    }

    void start();
  }, [loadClaims]);

  async function redeem(
    claim: Claim
  ) {
    setBusyClaimId(claim.id);
    setError("");

    try {
      const response = await fetch(
        `${API_URL}/api/claims/redeem`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            Accept:
              "application/json",

            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            claimId: claim.id,
          }),
        }
      );

      const data =
        await response
          .json()
          .catch(() => null);

      if (
        !response.ok ||
        !data?.ok ||
        !data?.discount
      ) {
        throw new Error(
          errorMessage(
            data,
            "Unable to create your discount."
          )
        );
      }

      setSuccessDiscount(
        data.discount
      );

      setSuccessStreamer(
        data.streamer?.displayName ||
        data.streamer?.twitchLogin ||
        claim.streamer.displayName
      );

      setClaims((current) =>
        current.map((item) =>
          item.id === claim.id
            ? {
                ...item,
                status: "claimed",
                discount:
                  data.discount,
                expiresAt:
                  data.discount
                    .expiresAt,
              }
            : item
        )
      );

      setBusyClaimId(null);
      setScreen("success");
    } catch (redeemError) {
      setBusyClaimId(null);

      setError(
        redeemError instanceof Error
          ? redeemError.message
          : "Unable to create your discount."
      );
    }
  }

  async function copyDiscount(
    claimId: string,
    code: string
  ) {
    await navigator.clipboard.writeText(
      code
    );

    setCopiedClaimId(claimId);

    window.setTimeout(() => {
      setCopiedClaimId(null);
    }, 2000);
  }

  async function switchAccount() {
    try {
      await fetch(
        `${API_URL}/api/auth/viewer/logout`,
        {
          method: "POST",
          credentials: "include",
        }
      );
    } finally {
      window.location.assign(
        twitchLoginUrl
      );
    }
  }

  const viewerName =
    viewer?.displayName ||
    viewer?.login;

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <div style={styles.logo}>
          Dropify
          <span style={styles.purple}>
            Bot
          </span>
        </div>

        <div style={styles.badge}>
          Private discount
        </div>

        {screen === "loading" && (
          <>
            <h1 style={styles.heading}>
              Checking your discounts
            </h1>

            <p style={styles.description}>
              Looking for active discounts
              connected to your Twitch
              account.
            </p>

            <button
              disabled
              style={styles.disabled}
            >
              Checking…
            </button>
          </>
        )}

        {screen === "anonymous" && (
          <>
            <h1 style={styles.heading}>
              Claim your discount
            </h1>

            <p style={styles.description}>
              Sign in with Twitch to view
              your pending and active
              discounts.
            </p>

            <a
              href={twitchLoginUrl}
              style={styles.primary}
            >
              Continue with Twitch
            </a>
          </>
        )}

        {screen === "ready" &&
          viewer && (
            <>
              <h1 style={styles.heading}>
                Your discounts
              </h1>

              <div style={styles.viewerBox}>
                <p style={styles.label}>
                  Signed in as
                </p>

                <p style={styles.value}>
                  @{viewerName}
                </p>
              </div>

              {error && (
                <div style={styles.error}>
                  {error}
                </div>
              )}

              <div style={styles.claimList}>
                {claims.map((claim) => {
                  const busy =
                    busyClaimId ===
                    claim.id;

                  const claimed =
                    claim.status ===
                    "claimed";

                  const processing =
                    claim.status ===
                    "processing";

                  return (
                    <div
                      key={claim.id}
                      style={
                        claimed
                          ? styles.claimedCard
                          : styles.claimCard
                      }
                    >
                      <div style={styles.header}>
                        <p
                          style={
                            styles.streamer
                          }
                        >
                          {
                            claim.streamer
                              .displayName
                          }
                        </p>

                        <span
                          style={
                            claimed
                              ? styles.activeStatus
                              : styles.status
                          }
                        >
                          {claimed
                            ? "Active"
                            : processing
                              ? "Processing"
                              : "Ready"}
                        </span>
                      </div>

                      <p style={styles.login}>
                        @
                        {
                          claim.streamer
                            .twitchLogin
                        }
                      </p>

                      {claimed &&
                      claim.discount ? (
                        <>
                          <div
                            style={
                              styles.codeBox
                            }
                          >
                            <p
                              style={
                                styles.label
                              }
                            >
                              Your discount code
                            </p>

                            <p
                              style={
                                styles.code
                              }
                            >
                              {
                                claim.discount
                                  .code
                              }
                            </p>
                          </div>

                          <button
                            type="button"
                            style={
                              styles.primary
                            }
                            onClick={() =>
                              copyDiscount(
                                claim.id,
                                claim.discount!
                                  .code
                              )
                            }
                          >
                            {copiedClaimId ===
                            claim.id
                              ? "Copied!"
                              : "Copy code"}
                          </button>
                        </>
                      ) : claimed ? (
                        <div
                          style={styles.error}
                        >
                          This discount code
                          could not be loaded.
                        </div>
                      ) : (
                        <button
                          type="button"
                          disabled={
                            busy ||
                            processing
                          }
                          style={
                            busy ||
                            processing
                              ? styles.disabled
                              : styles.primary
                          }
                          onClick={() =>
                            redeem(claim)
                          }
                        >
                          {busy
                            ? "Creating discount…"
                            : processing
                              ? "Already processing"
                              : `Claim from ${claim.streamer.displayName}`}
                        </button>
                      )}

                      <p style={styles.expiry}>
                        {expiryText(
                          claim.expiresAt
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                style={styles.secondary}
                onClick={loadClaims}
              >
                Refresh discounts
              </button>

              <button
                type="button"
                style={styles.secondary}
                onClick={switchAccount}
              >
                Switch Twitch account
              </button>
            </>
          )}

        {screen === "success" &&
          successDiscount && (
            <>
              <h1 style={styles.heading}>
                Discount claimed
              </h1>

              <p style={styles.description}>
                Your discount from{" "}
                <strong>
                  {successStreamer}
                </strong>{" "}
                is ready.
              </p>

              <div style={styles.codeBox}>
                <p style={styles.label}>
                  Your discount code
                </p>

                <p style={styles.code}>
                  {successDiscount.code}
                </p>
              </div>

              <button
                type="button"
                style={styles.primary}
                onClick={() =>
                  copyDiscount(
                    "success",
                    successDiscount.code
                  )
                }
              >
                {copiedClaimId ===
                "success"
                  ? "Copied!"
                  : "Copy code"}
              </button>

              <button
                type="button"
                style={styles.secondary}
                onClick={() =>
                  setScreen("ready")
                }
              >
                View all discounts
              </button>

              <p style={styles.note}>
                You can return to this page
                and view the code again until
                it expires.
              </p>
            </>
          )}

        {screen === "no_claim" &&
          viewer && (
            <>
              <h1 style={styles.heading}>
                No active discounts
              </h1>

              <div style={styles.viewerBox}>
                <p style={styles.label}>
                  Signed in as
                </p>

                <p style={styles.value}>
                  @{viewerName}
                </p>
              </div>

              <p style={styles.description}>
                Type{" "}
                <strong>!discount</strong>{" "}
                in a supported streamer&apos;s
                chat and return here.
              </p>

              <button
                type="button"
                style={styles.primary}
                onClick={loadClaims}
              >
                Check again
              </button>

              <button
                type="button"
                style={styles.secondary}
                onClick={switchAccount}
              >
                Switch Twitch account
              </button>
            </>
          )}

        {screen === "error" && (
          <>
            <h1 style={styles.heading}>
              Something went wrong
            </h1>

            <div style={styles.error}>
              {error}
            </div>

            <button
              type="button"
              style={styles.primary}
              onClick={loadClaims}
            >
              Try again
            </button>
          </>
        )}

        <a
          href="/"
          style={styles.footer}
        >
          Return to DropifyBot
        </a>
      </section>
    </main>
  );
}
