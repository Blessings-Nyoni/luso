"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function ClientSignupPage() {
  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4">
      {/* Switcher */}
      <div className="mb-4 text-sm text-slate-600">
        Are you offering a service?{" "}
        <Link
          href="/signup/provider"
          className="text-indigo-600 hover:text-indigo-700 font-medium cursor-pointer"
        >
          Sign up as Provider →
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
          <p className="text-slate-500 text-sm">Create a client account</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          {/* Left: Social Signup (vertically centered) */}
          <div className="flex flex-col justify-center space-y-3">
            <Button
              variant="outline"
              className="w-full rounded-xl border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer flex items-center justify-center gap-2"
            >
              <FcGoogle className="text-red-500" /> Continue with Google
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
