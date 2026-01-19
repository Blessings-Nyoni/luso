"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { useMemo, useState } from "react";

const OFFER_OPTIONS = [
  "Web Design",
  "Web Development",
  "Mobile App Development",
  "Graphic Design",
  "Digital Marketing",
  "SEO",
  "Content Writing",
  "Photography",
  "Videography",
  "Event Planning",
  "Catering",
  "Excavator Hire",
  "Truck Hire",
  "Logistics",
  "Electrical Services",
  "Plumbing",
  "Carpentry",
  "Construction Equipment",
  "Cleaning Services",
  "Security Services",
];

export default function ProviderSignupPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return OFFER_OPTIONS.filter(
      (opt) => opt.toLowerCase().includes(q) && !selected.includes(opt)
    ).slice(0, 6);
  }, [query, selected]);

  const addItem = (item: string) => {
    setSelected((prev) => [...prev, item]);
    setQuery("");
  };

  const removeItem = (item: string) => {
    setSelected((prev) => prev.filter((i) => i !== item));
  };

  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4">
      {/* Switcher */}
      <div className="mb-4 text-sm text-slate-600">
        Looking to hire instead?{" "}
        <Link
          href="/signup/client"
          className="text-indigo-600 hover:text-indigo-700 font-medium cursor-pointer"
        >
          Sign up as Client →
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-lg p-6"
      >
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-4">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/logo.png"
              alt="Luso logo"
              width={100}
              height={100}
              priority
            />
          </Link>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">Luso</h1>
          <p className="text-slate-500 text-sm">Create a provider account</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          {/* Left: Social Signup */}
          <div className="flex flex-col justify-center space-y-3">
            <Button
              variant="outline"
              className="w-full rounded-xl border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer flex items-center justify-center gap-2"
            >
              <FcGoogle className="text-xl" /> Continue with Google
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-xl border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer flex items-center justify-center gap-2"
            >
              <FaApple className="text-slate-900" /> Continue with Apple
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-xl border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer flex items-center justify-center gap-2"
            >
              <FaFacebookF className="text-blue-600" /> Continue with Facebook
            </Button>
          </div>

          {/* Divider */}
          <div className="hidden md:flex items-center">
            <div className="h-full w-px bg-slate-200" />
          </div>

          {/* Right: Form */}
          <form className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 hover:border-indigo-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 hover:border-indigo-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Work email address
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 hover:border-indigo-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Password (8 or more characters)"
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 hover:border-indigo-300"
              />
            </div>

            {/* Provider specific: Multi-select with suggestions */}
            <div className="relative">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                What do you offer?
              </label>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to search services"
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 hover:border-indigo-300"
              />
              {suggestions.length > 0 && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-slate-300 rounded-xl shadow text-slate-800">
                  {suggestions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => addItem(opt)}
                      className="w-full text-left px-3 py-2 text-slate-800 hover:bg-slate-100 cursor-pointer"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {selected.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {selected.map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-1 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full px-2 py-1 text-xs"
                    >
                      {item}
                      <button
                        type="button"
                        onClick={() => removeItem(item)}
                        className="ml-1 hover:text-indigo-900"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-start gap-2 text-xs text-slate-600">
              <input
                type="checkbox"
                className="mt-1 rounded border-slate-300 cursor-pointer"
              />
              <span>
                Yes, I agree to the{" "}
                <a className="text-indigo-600 hover:text-indigo-700 cursor-pointer">
                  Luso Terms
                </a>
                ,{" "}
                <a className="text-indigo-600 hover:text-indigo-700 cursor-pointer">
                  User Agreement
                </a>{" "}
                and{" "}
                <a className="text-indigo-600 hover:text-indigo-700 cursor-pointer">
                  Privacy Policy
                </a>
                .
              </span>
            </div>

            <Button className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white cursor-pointer">
              Create account
            </Button>

            <p className="text-center text-xs text-slate-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-indigo-600 hover:text-indigo-700 cursor-pointer"
              >
                Log in
              </Link>
            </p>
          </form>
        </div>
      </motion.div>
    </main>
  );
}
