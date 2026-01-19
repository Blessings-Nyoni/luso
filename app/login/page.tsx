"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-lg p-8"
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <Link href="/">
            <Image src="/logo.png" alt="Luso logo" width={100} height={100} />
          </Link>
          <p className="text-slate-500 text-sm mt-1">
            Welcome back. Log in to continue.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
              <input type="checkbox" className="rounded border-slate-300" />{" "}
              Remember me
            </label>
            <a className="text-indigo-500 hover:text-indigo-600 cursor-pointer">
              Forgot password?
            </a>
          </div>

          <Button className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white cursor-pointer">
            Log in
          </Button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-500">
          Don’t have an account?{" "}
          <a className="text-indigo-500 hover:text-indigo-600 cursor-pointer">
            Sign up
          </a>
        </p>
      </motion.div>
    </main>
  );
}
