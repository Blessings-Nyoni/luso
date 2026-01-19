"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, Truck } from "lucide-react";

export default function SignupRolePage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-lg p-8"
      >
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-8">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Luso logo"
              width={64}
              height={64}
              priority
            />
          </Link>
          <h1 className="mt-3 text-2xl font-bold text-slate-900">Luso</h1>
          <p className="text-slate-500 text-sm mt-1">
            Choose how you want to use Luso
          </p>
        </div>

        {/* Choices */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Client */}
          <Link href="/signup/client" className="group cursor-pointer">
            <div className="h-full rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-6 h-6 text-indigo-600" />
                <h2 className="text-xl font-semibold text-slate-800">
                  I’m looking to hire
                </h2>
              </div>
              <p className="text-slate-600 mb-4">
                Register as a client to find and hire equipment or specialised
                skills for your business or project.
              </p>
              <span className="inline-block text-indigo-600 font-medium group-hover:underline">
                Continue as Client →
              </span>
            </div>
          </Link>

          {/* Provider */}
          <Link href="/signup/provider" className="group cursor-pointer">
            <div className="h-full rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-cyan-600" />
                <h2 className="text-xl font-semibold text-slate-800">
                  I’m offering a service
                </h2>
              </div>
              <p className="text-slate-600 mb-4">
                Register as a freelancer or equipment owner to advertise your
                services and get hired.
              </p>
              <span className="inline-block text-cyan-600 font-medium group-hover:underline">
                Continue as Provider →
              </span>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-indigo-600 hover:text-indigo-700 cursor-pointer"
          >
            Log in
          </Link>
        </p>
      </motion.div>
    </main>
  );
}
