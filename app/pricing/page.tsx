"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const plans = [
  {
    name: "Starter",
    price: "Free",
    desc: "For individuals just getting started",
    features: [
      "Browse equipment & skills",
      "Send enquiries",
      "Basic profile",
      "Limited listings",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19 / month",
    desc: "For active freelancers and small businesses",
    features: [
      "Unlimited listings",
      "Priority search visibility",
      "Direct messaging",
      "Booking management",
      "Email support",
    ],
    cta: "Upgrade to Pro",
    highlight: true,
  },
  {
    name: "Business",
    price: "$49 / month",
    desc: "For companies with teams",
    features: [
      "Everything in Pro",
      "Team accounts",
      "Advanced analytics",
      "Featured listings",
      "Priority support",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Header />

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900"
          >
            Simple, transparent pricing
          </motion.h1>
          <p className="mt-4 text-slate-600 text-lg">
            Choose the plan that fits your needs on Luso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -6 }}
              className={`rounded-2xl border p-8 bg-white shadow-sm flex flex-col justify-between ${
                plan.highlight
                  ? "border-indigo-500 shadow-indigo-100"
                  : "border-slate-200"
              }`}
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {plan.name}
                </h2>
                <p className="text-slate-500 mt-1">{plan.desc}</p>
                <div className="mt-6 text-4xl font-extrabold text-slate-900">
                  {plan.price}
                </div>

                <ul className="mt-6 space-y-3 text-slate-600">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-indigo-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button
                  className={`w-full rounded-xl cursor-pointer ${
                    plan.highlight
                      ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-600">
            Not sure which plan is right for you?{" "}
            <Link
              href="/contact"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Talk to us
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
