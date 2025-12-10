// src/app/page.tsx
import Link from "next/link";

const BOT_DASHBOARD_URL = "https://bot.dropifybot.com";

const howItWorksSteps = [
  {
    step: "01",
    title: "Connect your Twitch",
    body: "Authorize Dropify as a bot in your channel so it can listen for commands like !drop and !discount.",
  },
  {
    step: "02",
    title: "Connect your Shopify store",
    body: "Install the Dropify app in Shopify. We create single-use codes directly in your store when a drop happens.",
  },
  {
    step: "03",
    title: "Go live & let chat farm codes",
    body: "Viewers trigger drops in real time. Codes are unique, single-use and automatically synced with Shopify.",
  },
];

const features = [
  {
    title: "Single-use discount codes",
    body: "Every drop is a unique, one-time code created directly in your Shopify store. No code reuse, no leeching.",
  },
  {
    title: "Global & viewer drops",
    body: "Reward a single viewer or drop a global blast for everyone in chat. Perfect for hype moments and milestones.",
  },
  {
    title: "Abuse-resistant by design",
    body: "Per-viewer limits, global cooldowns and minimum subtotal rules so your margins stay safe during chaos.",
  },
  {
    title: "Live Twitch + Shopify overview",
    body: "See connection health, active codes and revenue influenced in the last 24 hours at a glance.",
  },
  {
    title: "Stream-first UX",
    body: "Dashboard is tuned for streamers: simple toggles, clear defaults and copy that speaks the language of chat.",
  },
  {
    title: "Zero code, no theme edits",
    body: "No custom scripts, no theme hacking. Just OAuth into Twitch + Shopify and you’re ready.",
  },
];

const faqs = [
  {
    q: "Is Dropify free?",
    a: "While we’re in beta, Dropify is completely free for early streamers. We’ll introduce paid tiers later, but existing beta users will keep generous limits.",
  },
  {
    q: "Do I need to install anything on my PC?",
    a: "No desktop app required. Dropify is a hosted bot. You just connect Twitch + Shopify in your browser and keep the bot in your channel.",
  },
  {
    q: "What permissions does the Shopify app need?",
    a: "Dropify only asks for scopes required to create and manage discount codes, plus basic store info to display in your dashboard.",
  },
  {
    q: "Does Dropify work with any Twitch bot commands?",
    a: "Dropify listens for its own commands like !drop and !discount. You can keep using Nightbot, Moobot, etc. alongside it.",
  },
  {
    q: "What happens if my stream disconnects?",
    a: "Your Shopify store and existing codes are safe. When you go live again, Dropify can auto-enable drops if you’ve toggled that option in settings.",
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
                Twitch → Shopify discounts
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#how-it-works" className="hover:text-slate-50 transition">
              How it works
            </a>
            <a href="#features" className="hover:text-slate-50 transition">
              Features
            </a>
            <a href="#pricing" className="hover:text-slate-50 transition">
              Pricing
            </a>
            <a href="#faq" className="hover:text-slate-50 transition">
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
              Live discount drops for real streams
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Turn Twitch hype into{" "}
              <span className="bg-gradient-to-r from-violet-400 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                real Shopify revenue
              </span>
              .
            </h1>

            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Dropify listens to your Twitch chat and creates single-use Shopify
              discount codes in real time when viewers trigger commands like{" "}
              <code className="rounded-md bg-slate-900/80 px-1.5 py-0.5 text-[11px] font-mono text-violet-300">
                !drop
              </code>{" "}
              or{" "}
              <code className="rounded-md bg-slate-900/80 px-1.5 py-0.5 text-[11px] font-mono text-violet-300">
                !discount
              </code>
              . No spreadsheets, no manual code juggling.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={BOT_DASHBOARD_URL}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-500/40 hover:from-violet-400 hover:to-emerald-400"
              >
                Launch Dropify bot
              </Link>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 text-sm text-slate-300 hover:text-slate-50"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xs">
                  ▶
                </span>
                Watch how a drop works
              </a>
            </div>

            <p className="text-[12px] text-slate-500">
              Built for streamers. No credit card required while we&apos;re in
              beta.
            </p>
          </div>

          {/* Right side: hero preview / mock dashboard */}
          <div className="relative flex flex-1 justify-end">
            <div className="relative w-full max-w-md rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Live preview ·{" "}
                  <span className="font-mono text-slate-200">@yourchannel</span>
                </div>
                <span className="rounded-full bg-slate-900 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">
                  Dashboard
                </span>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-3">
                  <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Connection status</span>
                    <span className="inline-flex items-center gap-1 text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Twitch · Shopify connected
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-300">
                    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2">
                      <div className="text-[10px] uppercase tracking-wide text-slate-500">
                        Active codes today
                      </div>
                      <div className="mt-1 text-sm font-semibold text-slate-50">
                        14
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2">
                      <div className="text-[10px] uppercase tracking-wide text-slate-500">
                        Redemption rate
                      </div>
                      <div className="mt-1 text-sm font-semibold text-emerald-300">
                        32%
                      </div>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2">
                      <div className="text-[10px] uppercase tracking-wide text-slate-500">
                        Revenue (24h)
                      </div>
                      <div className="mt-1 text-sm font-semibold text-violet-300">
                        $184
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                  <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Recent drops</span>
                    <span className="text-slate-500">Last 10</span>
                  </div>
                  <div className="space-y-2 text-[11px]">
                    <div className="flex items-center justify-between rounded-xl border border-violet-500/40 bg-slate-950 px-3 py-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-100">
                            dropifybot
                          </span>
                          <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-400">
                            Viewer
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-500">
                          @dropifybot • 51% off
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-[11px] text-violet-300">
                          DROP-YOURVIEWER-7938
                        </div>
                        <div className="text-[10px] text-slate-500">
                          3 seconds ago
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
                            Global
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-500">
                          Everyone in chat • 20% off
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-[11px] text-violet-300">
                          DROP-STREAM-2024
                        </div>
                        <div className="text-[10px] text-slate-500">
                          2 mins ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* floating badge */}
            <div className="pointer-events-none absolute -bottom-4 -left-3 hidden rounded-2xl border border-emerald-500/30 bg-slate-950/90 px-3 py-2 text-[11px] text-emerald-200 shadow-lg shadow-emerald-500/30 sm:block">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-[10px]">
                ⚡
              </span>
              Single-use codes, dropped live.
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
                From chat command to Shopify code in three steps.
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-400">
              No webhooks to script, no theme edits. Dropify handles the full
              flow from Twitch event → Shopify discount code → analytics.
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
                Built to keep hype high and margins safe.
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-400">
              Every feature is designed around real stream flow: raids, hype
              trains, scuffed disconnects and late-night grind sessions.
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
      <section
        id="demo"
        className="border-b border-slate-800/60 bg-slate-950/90"
      >
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-violet-300">
                Live demo concept
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Imagine this running in your chat.
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-400">
              Soon you&apos;ll be able to embed a live demo directly here. For
              now, this mock shows what a typical Dropify moment looks like.
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
                  <span className="font-semibold text-emerald-300">
                    viewer123
                  </span>{" "}
                  <span className="text-slate-400">:</span> yo this boss is
                  crazy 😳
                </p>
                <p>
                  <span className="font-semibold text-sky-300">
                    mod_sarah
                  </span>{" "}
                  <span className="text-slate-400">:</span> if Musa wipes we all
                  spam{" "}
                  <code className="rounded bg-slate-900 px-1 font-mono text-[11px] text-violet-300">
                    !discount
                  </code>
                </p>
                <p>
                  <span className="font-semibold text-pink-300">
                    hype_frog
                  </span>{" "}
                  <span className="text-slate-400">:</span> !drop 20
                </p>
                <div className="mt-2 rounded-2xl border border-violet-500/50 bg-gradient-to-r from-violet-600/60 via-violet-500/60 to-emerald-500/70 px-3 py-2 text-[11px] font-medium text-slate-950 shadow-lg shadow-violet-500/40">
                  <span className="mr-1">🎉</span> Dropify dropped a{" "}
                  <span className="font-semibold">20% OFF</span> code for{" "}
                  <span className="font-mono">hype_frog</span> ·{" "}
                  <span className="font-mono">DROP-HYPEFROG-2042</span>{" "}
                  (single-use, expires in 15 minutes).
                </div>
                <p className="text-slate-400">
                  <span className="font-semibold text-emerald-300">
                    hype_frog
                  </span>{" "}
                  <span className="text-slate-400">:</span> yo it worked 😭
                  tytyty
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
                  Viewer triggers a command in chat (
                  <code className="text-[11px] font-mono text-violet-300">
                    !drop 20
                  </code>
                  ).
                </li>
                <li>
                  <span className="mr-2 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                    2
                  </span>
                  Dropify validates cooldowns, limits and your pricing rules.
                </li>
                <li>
                  <span className="mr-2 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                    3
                  </span>
                  A unique, single-use discount code is created in Shopify and
                  instantly sent back into chat.
                </li>
                <li>
                  <span className="mr-2 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                    4
                  </span>
                  Redemptions + revenue influenced show up in your dashboard so
                  you can see what actually moved product.
                </li>
              </ol>
              <p className="pt-1 text-xs text-slate-500">
                When we ship the live demo, you&apos;ll be able to test commands
                in a sandbox chat directly on this page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="border-b border-slate-800/60 bg-slate-950/95"
      >
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="mb-8 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-violet-300">
              Pricing
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Free while we&apos;re in beta.
            </h2>
            <p className="mt-3 text-sm text-slate-400 sm:max-w-md sm:mx-auto">
              We&apos;re working closely with early creators to harden the bot,
              APIs and dashboards. Join now, help shape Dropify and keep
              generous limits when paid tiers launch.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            {/* Beta plan */}
            <div className="relative overflow-hidden rounded-3xl border border-violet-500/60 bg-slate-950/90 p-6 shadow-[0_20px_60px_rgba(88,28,135,0.6)]">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    Creator beta
                  </h3>
                  <p className="text-xs text-slate-400">
                    Everything you need to start dropping codes on stream.
                  </p>
                </div>
                <span className="rounded-full bg-violet-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-100">
                  Current plan
                </span>
              </div>
              <div className="mb-4 flex items-end gap-2">
                <span className="text-3xl font-semibold text-slate-50">
                  Free
                </span>
                <span className="text-xs text-slate-400">during beta</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>· Single-use viewer & global drops</li>
                <li>· Twitch + Shopify connections</li>
                <li>· Core safety limits & cooldowns</li>
                <li>· Basic 24h revenue & redemption stats</li>
                <li>· Early access to new features</li>
              </ul>
              <div className="mt-6">
                <Link
                  href={BOT_DASHBOARD_URL}
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-violet-500/40 hover:from-violet-400 hover:to-emerald-400"
                >
                  Start free with Dropify
                </Link>
                <p className="mt-2 text-[11px] text-slate-500">
                  No credit card required. We&apos;ll email you well before any
                  paid plans roll out.
                </p>
              </div>
            </div>

            {/* Future Pro plan */}
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
              <h3 className="text-sm font-semibold text-slate-100">
                Pro tiers (coming soon)
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                We&apos;re designing higher-volume plans for partner-level
                streamers and brands that need more drops, more analytics and
                more control.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>· Higher monthly drop & redemption limits</li>
                <li>· Deeper revenue & cohort analytics</li>
                <li>· Priority support and onboarding</li>
                <li>· Whitelabel & campaign tracking options</li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                If you already know you&apos;ll need this, you can still start
                on the free creator beta today and grow into higher tiers later.
              </p>
            </div>
          </div>
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
              Questions streamers usually ask.
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
            <span>Dropify bot · Twitch → Shopify drops</span>
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
