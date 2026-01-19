"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 text-slate-500 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Luso logo" width={64} height={64} />
          <p className="text-sm max-w-sm">
            A digital marketplace for hiring equipment and specialised skills.
          </p>
        </div>

        <div className="flex gap-10 text-sm">
          <div className="space-y-2">
            <div className="font-medium text-slate-700">Platform</div>
            <Link
              href="/pricing"
              className="block hover:text-slate-900 cursor-pointer"
            >
              Pricing
            </Link>
            <a className="block hover:text-slate-900 cursor-pointer">
              How it works
            </a>
          </div>

          <div className="space-y-2">
            <div className="font-medium text-slate-700">Account</div>
            <Link
              href="/login"
              className="block hover:text-slate-900 cursor-pointer"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="block hover:text-slate-900 cursor-pointer"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-8">
        © {new Date().getFullYear()} Luso. All rights reserved.
      </div>
    </footer>
  );
}
