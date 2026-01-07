// src/app/page.tsx
import Link from "next/link";

const BOT_DASHBOARD_URL = "https://bot.dropifybot.com";

const howItWorksSteps = [
  {
    step: "01",
    title: "Connect Twitch + Shopify",
    body: "Link your Twitch channel and Shopify store in the dashboard. Dropify joins your chat and is ready to create discounts in your store.",
  },
  {
    step: "02",
    title: "Viewers claim personal codes",
    body: "Viewers type !discount to get a unique single-use code. Dropify enforces per-viewer limits + cooldowns automatically.",
  },
  {
    step: "03",
    title: "You trigger global drops",
    body: "Only the streamer can run !drop 20 to create a stream-wide promo. Codes are created in Shopify instantly and sent back to chat.",
  },
];

const features = [
  {
    title: "Viewer codes (single-use)",
    body: "Viewers type !discount → they get a unique, one-time code created in your Shopify store. No reuse, no leaking, no copy-paste chaos.",
  },
  {
    title: "Streamer-only global drops",
    body: "You control the hype moments. Only the broadcaster can run !drop 10–50 for a global discount across chat.",
  },
  {
    title: "Plan limits you can trust",
    body: "Atomic monthly counters prevent abuse and race conditions. Your dashboard shows live usage and when it resets.",
  },
  {
    title: "Abuse-resistant by design",
    body: "Cooldowns, per-viewer rules, and minimum subtotal protections keep your margins safe during spikes.",
  },
  {
    title: "Live usage dashboard",
    body: "See current plan, monthly usage bars, and reset timing. Upgrade via Stripe when you need higher limits.",
  },
  {
    title: "Zero code, no theme edits",
    body: "No scripts, no theme hacking. OAuth Twitch + Shopify and you’re ready to drop codes on stream.",
  },
];

const faqs = [
  {
    q: "Who can use !drop?",
    a: "Only the streamer (broadcaster) can trigger global drops with !drop. Viewers can only claim personal codes with !discount.",
  },
  {
    q: "Do viewers get the same code?",
    a: "No. Viewer codes are single-use and unique per viewer (and protected by cooldowns). That prevents reuse and sharing.",
  },
  {
    q: "Is there a limit?",
    a: "Yes. Dropify uses atomic monthly counters per plan (viewer drops + global drops). Your dashboard shows live usage and reset timing.",
  },
  {
    q: "Do I need to install anything on my PC?",
    a: "No. Dropify is hosted. You connect Twitch + Shopify in the browser and the bot runs in your chat.",
  },
  {
    q: "What happens if my stream disconnects?",
    a: "Nothing breaks. Your Shopify store is safe. When you go live again, you can keep using commands immediately (and optionally auto-enable in settings).",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">
      {/* Top gradient glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_top,_rgba(147,51,234,0.35),_transparent_60%)] blur-3xl" />
        <div className="absolute top-20 -right-32 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.3),_transparent_60%)] blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header className="border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-emerald-500 shadow-lg shadow-violet-500/40">
              <span className="text-sm font-semibold text-white">D</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">
                Dropify <span className="text-slate-400">bot</span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                Twitch → Shopify discount automation
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#how-it-works" className="transition hover:text-slate-50">
              How it works
            </a>
            <a href="#features" className="transition hover:text-slate-50">
              Features
            </a>
            <a href="#pricing" className="transition hover:text-slate-50">
              Pricing
            </a>
            <a href="#faq" className="transition hover:text-slate-50">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={BOT_DASHBOARD_URL}
              className="hidden rounded-full border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-slate-500 hover:text-slate-50 md:inline-flex"
            >
              Open dashboard
            </Link>
            <Link
              href={BOT_DASHBOARD_URL}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-emerald-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-lg shadow-violet-500/40 hover:from-violet-400 hover:to-emerald-400 md:px-5 md:py-2 md:text-sm"
            >
              Connect Twitch & Shopify
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-slate-800/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-12 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:pb-24 lg:pt-16">
          <div className="max-w-xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-slate-950/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-violet-200 shadow-sm shadow-violet-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Live chat → Shopify discounts
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Turn chat spam into{" "}
              <span className="bg-gradient-to-r from-violet-400 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                real Shopify sales
              </span>
              .
            </h1>

            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Dropify automates discounts during stream. Viewers type{" "}
              <code className="rounded-md bg-slate-900/80 px-1.5 py-0.5 text-[11px] font-mono text-violet-300">
                !discount
              </code>{" "}
              for a personal single-use code. You (the streamer) trigger hype
              moments with{" "}
              <code className="rounded-md bg-slate-900/80 px-1.5 py-0.5 text-[11px] font-mono text-violet-300">
                !drop 20
              </code>{" "}
              for a global drop — without leaving your game.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={BOT_DASHBOARD_URL}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-500/40 hover:from-violet-400 hover:to-emerald-400"
              >
                Launch Dropify
              </Link>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 text-sm text-slate-300 hover:text-slate-50"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xs">
                  ▶
                </span>
                See the commands in action
              </a>
            </div>

            <div className="flex flex-col gap-2 text-[12px] text-slate-500 sm:flex-row sm:items-center sm:gap-4">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Streamer-controlled global drops
              </span>
              <span className="hidden text-slate-700 sm:inline">•</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                Atomic monthly limits (no race conditions)
              </span>
            </div>

            <p className="text-[12px] text-slate-500">
              Start in minutes. Upgrade later when you need more drops.
            </p>
          </div>

          {/* Right side: hero preview */}
          <div className="relative flex flex-1 justify-end">
            <div className="relative w-full max-w-md rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Live · <span className="font-mono text-slate-200">@yourchannel</span>
                </div>
                <span className="rounded-full bg-slate-900 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">
                  Dashboard
                </span>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-3">
                  <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Status</span>
                    <span className="inline-flex items-center gap-1 text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Twitch + Shopify connected
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-300">
                    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2">
                      <div className="text-[10px] uppercase tracking-wide text-slate-500">
                        Viewer drops
                      </div>
                      <div className="mt-1 text-sm font-semibold text-slate-50">
                        3 / 10
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2">
                      <div className="text-[10px] uppercase tracking-wide text-slate-500">
                        Global drops
                      </div>
                      <div className="mt-1 text-sm font-semibold text-emerald-300">
                        2 / 10
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2">
                      <div className="text-[10px] uppercase tracking-wide text-slate-500">
                        Resets
                      </div>
                      <div className="mt-1 text-sm font-semibold text-violet-300">
                        12d
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                  <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Recent activity</span>
                    <span className="text-slate-500">Live</span>
                  </div>
                  <div className="space-y-2 text-[11px]">
                    <div className="flex items-center justify-between rounded-xl border border-violet-500/40 bg-slate-950 px-3 py-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-100">
                            Viewer code
                          </span>
                          <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-400">
                            !discount
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-500">
                          @viewer123 • 10% off
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-[11px] text-violet-300">
                          DROP-VIEWER-5938
                        </div>
                        <div className="text-[10px] text-slate-500">
                          8s ago
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 px-3 py-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-100">
                            Global drop
                          </span>
                          <span className="rounded-full bg-violet-900/60 px-2 py-0.5 text-[10px] uppercase tracking-wide text-violet-200">
                            !drop
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-500">
                          Streamer activated • 20% off
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-[11px] text-violet-300">
                          DROP-STREAM-2042
                        </div>
                        <div className="text-[10px] text-slate-500">
                          2m ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Upgrade anytime</span>
                    <span className="text-slate-500">Stripe</span>
                  </div>
                  <p className="mt-2 text-[11px] text-slate-500">
                    Upgrade from the dashboard to unlock higher monthly limits.
                  </p>
                </div>
              </div>
            </div>

            {/* floating badge */}
            <div className="pointer-events-none absolute -bottom-4 -left-3 hidden rounded-2xl border border-emerald-500/30 bg-slate-950/90 px-3 py-2 text-[11px] text-emerald-200 shadow-lg shadow-emerald-500/30 sm:block">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-[10px]">
                ⚡
              </span>
              Streamer controls the drops.
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="border-b border-slate-800/60 bg-slate-950/80"
      >
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-violet-300">
                How Dropify works
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                From chat command to Shopify code — instantly.
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-400">
              Dropify handles the full flow: Twitch command → safety checks →
              Shopify discount creation → live usage in your dashboard.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {howItWorksSteps.map((step) => (
              <div
                key={step.step}
                className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-5 transition hover:border-violet-500/60 hover:bg-slate-900"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    Step {step.step}
                  </span>
                  <span className="h-7 w-7 rounded-full border border-slate-700 bg-slate-900 text-center text-[11px] leading-[26px] text-slate-300 group-hover:border-violet-500/70 group-hover:text-violet-200">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-100">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-b border-slate-800/60">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-violet-300">
                Streamer-first feature set
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Keep hype high — and control tight.
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-400">
              Designed for real streams: spikes, raids, hype trains, and chat
              chaos — without giving chat control of your margins.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-5 transition hover:-translate-y-0.5 hover:border-violet-500/60 hover:bg-slate-900"
              >
                <h3 className="text-sm font-semibold text-slate-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{feature.body}</p>
                <div className="mt-4 h-px w-12 bg-gradient-to-r from-violet-500 to-emerald-400 opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO SECTION */}
      <section id="demo" className="border-b border-slate-800/60 bg-slate-950/90">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-violet-300">
                Commands in action
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                This is what it feels like on stream.
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-400">
              A clean mental model: viewers claim personal codes, streamer triggers global drops.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Fake chat */}
            <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.9)]">
              <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-slate-300">twitch.tv/yourchannel</span>
                <span className="rounded-full bg-slate-900 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-300">
                  Chat · Demo
                </span>
              </div>
              <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/80 p-3 text-[12px] leading-relaxed text-slate-200">
                <p>
                  <span className="font-semibold text-emerald-300">viewer123</span>{" "}
                  <span className="text-slate-400">:</span> yo this boss is crazy 😳
                </p>
                <p>
                  <span className="font-semibold text-sky-300">mod_sarah</span>{" "}
                  <span className="text-slate-400">:</span> if Musa wipes we all spam{" "}
                  <code className="rounded bg-slate-900 px-1 font-mono text-[11px] text-violet-300">
                    !discount
                  </code>
                </p>
                <p>
                  <span className="font-semibold text-emerald-300">viewer123</span>{" "}
                  <span className="text-slate-400">:</span>{" "}
                  <code className="rounded bg-slate-900 px-1 font-mono text-[11px] text-violet-300">
                    !discount
                  </code>
                </p>

                <div className="mt-2 rounded-2xl border border-violet-500/50 bg-gradient-to-r from-violet-600/60 via-violet-500/60 to-emerald-500/70 px-3 py-2 text-[11px] font-medium text-slate-950 shadow-lg shadow-violet-500/40">
                  <span className="mr-1">🎁</span> Dropify created a{" "}
                  <span className="font-semibold">single-use</span> code for{" "}
                  <span className="font-mono">viewer123</span> ·{" "}
                  <span className="font-mono">DROP-VIEWER123-2042</span>{" "}
                  (expires in ~10 minutes)
                </div>

                <p>
                  <span className="font-semibold text-amber-300">yourchannel</span>{" "}
                  <span className="text-slate-400">:</span>{" "}
                  <code className="rounded bg-slate-900 px-1 font-mono text-[11px] text-violet-300">
                    !drop 20
                  </code>
                </p>

                <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-[11px] font-medium text-emerald-100">
                  <span className="mr-1">🔥</span> GLOBAL DROP ACTIVATED —{" "}
                  <span className="font-semibold">20% OFF</span> · Code{" "}
                  <span className="font-mono text-emerald-200">DROPIFYBOT20-8752</span>{" "}
                  (10 minutes)
                </div>

                <p className="text-slate-400">
                  <span className="font-semibold text-emerald-300">viewer123</span>{" "}
                  <span className="text-slate-400">:</span> yo it worked 😭 tytyty
                </p>
              </div>
            </div>

            {/* Explanation */}
            <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
              <h3 className="text-sm font-semibold text-slate-100">
                What happens behind the scenes
              </h3>
              <ol className="space-y-3 text-sm text-slate-400">
                <li>
                  <span className="mr-2 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                    1
                  </span>
                  Viewer claims a personal code with{" "}
                  <code className="text-[11px] font-mono text-violet-300">!discount</code>.
                </li>
                <li>
                  <span className="mr-2 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                    2
                  </span>
                  Dropify checks cooldowns, per-viewer rules, and monthly plan limits (atomically).
                </li>
                <li>
                  <span className="mr-2 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                    3
                  </span>
                  A single-use discount code is created in Shopify and posted back to chat instantly.
                </li>
                <li>
                  <span className="mr-2 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                    4
                  </span>
                  Streamer triggers a global drop with{" "}
                  <code className="text-[11px] font-mono text-violet-300">!drop 20</code>{" "}
                  (streamer-only), and usage updates live in the dashboard.
                </li>
              </ol>
              <p className="pt-1 text-xs text-slate-500">
                Next up: embed a live sandbox demo on this page so you can test commands without going live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-b border-slate-800/60 bg-slate-950/95">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="mb-8 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-violet-300">
              Pricing
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Start free. Upgrade when you scale.
            </h2>
            <p className="mt-3 text-sm text-slate-400 sm:mx-auto sm:max-w-md">
              Dropify is live and plan-limited. Your dashboard shows monthly usage and reset timing. Upgrade via Stripe when you need more drops.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {/* Free */}
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
              <h3 className="text-sm font-semibold text-slate-100">Free</h3>
              <p className="mt-2 text-sm text-slate-400">For small streams and testing.</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-3xl font-semibold text-slate-50">$0</span>
                <span className="text-xs text-slate-400">/ month</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>· Viewer drops: 10 / month</li>
                <li>· Global drops: 10 / month</li>
                <li>· Core cooldown + safety rules</li>
                <li>· Live usage dashboard</li>
              </ul>
              <div className="mt-6">
                <Link
                  href={BOT_DASHBOARD_URL}
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-slate-500 hover:text-slate-50"
                >
                  Get started
                </Link>
              </div>
            </div>

            {/* Pro */}
            <div className="relative overflow-hidden rounded-3xl border border-violet-500/60 bg-slate-950/90 p-6 shadow-[0_20px_60px_rgba(88,28,135,0.6)]">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-violet-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-200">
                Most popular
              </div>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">Pro</h3>
              <p className="mt-2 text-sm text-slate-400">
                For growing streams that run drops regularly.
              </p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-3xl font-semibold text-slate-50">$9</span>
                <span className="text-xs text-slate-400">/ month</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>· Viewer drops: 500 / month</li>
                <li>· Global drops: 30 / month</li>
                <li>· Stripe billing + upgrades in dashboard</li>
                <li>· Live usage + reset timing</li>
              </ul>
              <div className="mt-6">
                <Link
                  href={BOT_DASHBOARD_URL}
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-500/40 hover:from-violet-400 hover:to-emerald-400"
                >
                  Go Pro
                </Link>
                <p className="mt-2 text-[11px] text-slate-500">
                  Upgrade in seconds. Cancel anytime.
                </p>
              </div>
            </div>

            {/* Creator */}
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
              <h3 className="text-sm font-semibold text-slate-100">Creator</h3>
              <p className="mt-2 text-sm text-slate-400">
                For high-volume drops + no global cap.
              </p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-3xl font-semibold text-slate-50">$29</span>
                <span className="text-xs text-slate-400">/ month</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>· Viewer drops: 3000 / month</li>
                <li>· Global drops: Unlimited</li>
                <li>· Built for daily streams + launches</li>
                <li>· Live usage + reset timing</li>
              </ul>
              <div className="mt-6">
                <Link
                  href={BOT_DASHBOARD_URL}
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-slate-500 hover:text-slate-50"
                >
                  Go Creator
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-[12px] text-slate-500">
            Pricing shown as example — final amounts may change. Your dashboard always shows your current limits.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-slate-800/60">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="mb-6 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-violet-300">
              FAQ
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Quick answers.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-sm transition hover:border-violet-500/60"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-slate-100">
                  <span>{item.q}</span>
                  <span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 text-xs text-slate-400 group-open:border-violet-500 group-open:text-violet-300">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-400">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-gradient-to-br from-violet-500 to-emerald-500 p-[1px]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-[11px] text-slate-50">
                D
              </span>
            </span>
            <span>Dropify bot · Twitch → Shopify discount automation</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Dropify. All rights reserved.</span>
            <Link
              href={BOT_DASHBOARD_URL}
              className="text-slate-400 hover:text-slate-200"
            >
              Open dashboard
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
