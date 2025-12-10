// /var/www/dropifybotfrontpage/src/components/PricingSection.tsx
"use client";

import Link from "next/link";
import React from "react";

type TierId = "free" | "pro" | "creator";

interface Tier {
  id: TierId;
  name: string;
  price: string;
  badge?: string;
  mostPopular?: boolean;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  idealFor: string;
  limits: string[];
  features: string[];
}

const tiers: Tier[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    description: "Perfect for testing Dropify on stream and running small drops.",
    ctaLabel: "Start free",
    ctaHref: "https://bot.dropifybot.com",
    idealFor: "Trying Dropify for the first time, smaller streams.",
    limits: [
      "50 viewer drops / month",
      "0 global drops",
      "1 Twitch channel & 1 Shopify store",
      "14 days of drop & order history",
    ],
    features: [
      "Viewer !discount command",
      "Basic dashboard",
      "Recent drops & recent redemptions",
      "Shopify orders webhook integration",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$9",
    badge: "Most popular",
    mostPopular: true,
    description:
      "Run drops every stream with proper limits, analytics and global campaigns.",
    ctaLabel: "Get Pro",
    ctaHref: "https://bot.dropifybot.com",
    idealFor: "Affiliates & partners who drop codes regularly.",
    limits: [
      "500 viewer drops / month",
      "30 global drops / month",
      "Up to 2 Twitch channels / stores",
      "90 days of drop & order history",
    ],
    features: [
      "Everything in Free",
      "Global !drop campaigns",
      "Stream performance stats",
      "Priority webhook handling",
      "Email support",
    ],
  },
  {
    id: "creator",
    name: "Creator",
    price: "$29",
    description:
      "For high-volume creators who want Dropify to run every stream, every day.",
    ctaLabel: "Talk to us",
    ctaHref: "https://bot.dropifybot.com",
    idealFor: "Bigger creators, agencies and brands.",
    limits: [
      "3,000 viewer drops / month",
      "Unlimited global drops (fair use)",
      "Up to 5 Twitch channels / stores",
      "365 days of drop & order history",
    ],
    features: [
      "Everything in Pro",
      "Advanced analytics & revenue insights",
      "Higher rate limits & safeguards",
      "Priority support",
    ],
  },
];

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
            Pricing
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
            Simple tiers based on how many drops you run.
          </h2>
          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Every plan uses the same bot, the same real-time engine and the same
            Twitch → Shopify pipeline. The only thing that changes is how many
            discounts you drop and how deep the analytics go.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-950/40 px-3 py-1 text-[11px] text-violet-100">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-violet-500/80 text-[10px]">
              🎯
            </span>
            <span>
              Limits are clearly defined: Free, Pro and Creator see the exact
              same bot, just different caps.
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                "relative flex flex-col rounded-2xl border bg-slate-950/60 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.85)] backdrop-blur",
                tier.mostPopular
                  ? "border-violet-500/70 ring-2 ring-violet-500/50"
                  : "border-slate-800/80"
              )}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-3 right-4 inline-flex items-center rounded-full bg-violet-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-950">
                  {tier.badge}
                </div>
              )}

              {/* Header */}
              <div className="mb-3">
                <h3 className="text-sm font-semibold text-slate-50">
                  {tier.name}
                </h3>
                <p className="mt-1 text-xs text-slate-400">{tier.description}</p>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-2xl font-semibold text-slate-50">
                    {tier.price}
                  </span>
                  <span className="text-xs text-slate-400">/ month</span>
                </div>
              </div>

              {/* Limits */}
              <div className="mt-2 border-t border-slate-800/80 pt-3 text-xs">
                <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  Limits
                </p>
                <ul className="space-y-1.5 text-slate-200">
                  {tier.limits.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[2px] h-1.5 w-1.5 rounded-full bg-violet-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="mt-3 border-t border-slate-800/80 pt-3 text-xs">
                <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  Includes
                </p>
                <ul className="space-y-1.5 text-slate-200">
                  {tier.features.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[3px] text-[13px]">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="mt-4 flex flex-1 flex-col justify-end gap-3">
                <p className="text-[11px] text-slate-400">{tier.idealFor}</p>
                <Link
                  href={tier.ctaHref}
                  className={classNames(
                    "inline-flex items-center justify-center rounded-full px-3 py-2 text-xs font-semibold transition-all",
                    tier.mostPopular
                      ? "bg-violet-500 text-slate-950 hover:bg-violet-400"
                      : "bg-slate-800 text-slate-50 hover:bg-slate-700"
                  )}
                >
                  {tier.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-[11px] text-slate-500">
          No credit card is required for the Free plan. Limits will later be
          enforced on the backend (drops / month, global drops, history), but
          the bot behaviour stays the same across all tiers.
        </p>
      </div>
    </section>
  );
}
