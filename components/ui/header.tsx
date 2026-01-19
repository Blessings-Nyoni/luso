"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<null | "talent" | "equipment" | "why">(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path
      ? "text-slate-900 font-semibold"
      : "text-slate-600 hover:text-slate-900";

  return (
    <div className="relative" onMouseLeave={() => setOpen(null)}>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <Image src="/logo.png" alt="Luso logo" width={100} height={100} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {/* Find Talent */}
            <div
              className="flex items-center gap-1 cursor-pointer transition-colors"
              onMouseEnter={() => setOpen("talent")}
            >
              <span className={isActive("/talent")}>Find Talent</span>
              {open === "talent" ? (
                <ChevronUp className="w-4 h-4 text-slate-600" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-600" />
              )}
            </div>

            {/* Find Equipment */}
            <div
              className="flex items-center gap-1 cursor-pointer transition-colors"
              onMouseEnter={() => setOpen("equipment")}
            >
              <span className={isActive("/equipment")}>Find Equipment</span>
              {open === "equipment" ? (
                <ChevronUp className="w-4 h-4 text-slate-600" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-600" />
              )}
            </div>

            {/* Why Luso */}
            <div
              className="flex items-center gap-1 cursor-pointer transition-colors"
              onMouseEnter={() => setOpen("why")}
            >
              <span className={isActive("/why")}>Why Luso</span>
              {open === "why" ? (
                <ChevronUp className="w-4 h-4 text-slate-600" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-600" />
              )}
            </div>

            <Link
              href="/pricing"
              className={`${isActive(
                "/pricing"
              )} cursor-pointer transition-colors`}
            >
              Pricing
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className={`${isActive(
                "/login"
              )} px-4 py-2 cursor-pointer transition-colors rounded-lg hover:bg-slate-50`}
            >
              Log in
            </Link>
            <Link href="/signup">
              <Button className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:opacity-90 cursor-pointer shadow-md hover:shadow-lg transition-all">
                Sign up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-6 py-4 space-y-4">
              <Link
                href="/talent"
                className={`block ${isActive("/talent")} py-2`}
              >
                Find Talent
              </Link>
              <Link
                href="/equipment"
                className={`block ${isActive("/equipment")} py-2`}
              >
                Find Equipment
              </Link>
              <Link href="/why" className={`block ${isActive("/why")} py-2`}>
                Why Luso
              </Link>
              <Link
                href="/pricing"
                className={`block ${isActive("/pricing")} py-2`}
              >
                Pricing
              </Link>
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <Link href="/login" className="block">
                  <Button variant="outline" className="w-full rounded-xl">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup" className="block">
                  <Button className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white">
                    Sign up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* TALENT MEGA MENU */}
      {open === "talent" && (
        <div className="absolute left-0 right-0 top-full bg-white border-t border-slate-200 shadow-2xl z-50">
          <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-3 gap-16">
            {/* Column 1 */}
            <div className="space-y-6">
              <Link href="/marketplace" className="block group">
                <p className="font-semibold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors">
                  Post a job and hire a pro
                </p>
                <p className="text-sm text-indigo-600 mt-1">
                  Talent Marketplace →
                </p>
              </Link>
              <Link href="/catalog" className="block group">
                <p className="font-semibold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors">
                  Browse and buy projects
                </p>
                <p className="text-sm text-indigo-600 mt-1">
                  Project Catalog →
                </p>
              </Link>
              <Link href="/consultations" className="block group">
                <p className="font-semibold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors">
                  Get advice from an expert
                </p>
                <p className="text-sm text-indigo-600 mt-1">Consultations →</p>
              </Link>
            </div>

            {/* Column 2 */}
            <div>
              <p className="font-semibold text-slate-900 mb-4 text-lg">
                Hire on Talent Marketplace
              </p>
              <ul className="space-y-3 text-slate-600">
                {[
                  "Development & IT",
                  "Design & Creative",
                  "Sales & Marketing",
                  "Writing & Translation",
                  "Admin & Customer Support",
                  "Finance & Accounting",
                  "HR & Training",
                  "Legal",
                  "Engineering & Architecture",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/categories/${item
                        .toLowerCase()
                        .replace(/ & /g, "-")}`}
                      className="hover:text-slate-900 hover:translate-x-1 inline-block transition-all cursor-pointer"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col justify-between bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl p-6">
              <div>
                <p className="font-semibold text-slate-900 text-xl">
                  Talent Marketplace
                </p>
                <p className="text-slate-600 mt-2 leading-relaxed">
                  Learn about working with talent or explore your hiring needs.
                </p>
              </div>
              <Link href="/hire" className="mt-6">
                <Button className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white cursor-pointer shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  Hire freelancers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* WHY LUSO MEGA MENU */}
      {open === "why" && (
        <div className="absolute left-0 right-0 top-full bg-white border-t border-slate-200 shadow-2xl z-50">
          <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-4 gap-12">
            {/* Column 1 - Discovery */}
            <div className="space-y-6">
              <Link href="/success-stories" className="block group">
                <p className="font-semibold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors">
                  Success stories
                </p>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Discover how teams work strategically and grow together.
                </p>
              </Link>
              <Link href="/reviews" className="block group">
                <p className="font-semibold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors">
                  Reviews
                </p>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  See what it's like to collaborate on Luso.
                </p>
              </Link>
            </div>

            {/* Column 2 - How to Guides */}
            <div className="space-y-6">
              <Link href="/how-to-hire" className="block group">
                <p className="font-semibold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors">
                  How to hire
                </p>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Learn about the different ways to get work done.
                </p>
              </Link>
              <Link href="/how-to-find-work" className="block group">
                <p className="font-semibold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors">
                  How to find work
                </p>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Learn about how to grow your independent career.
                </p>
              </Link>
            </div>

            {/* Column 3 - Featured Resources */}
            <div className="space-y-4">
              <p className="font-semibold text-slate-900 text-lg mb-3">
                Featured resources
              </p>
              <Link
                href="/resources/hire-freelancers"
                className="block text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all"
              >
                How to Hire Freelancers on Luso
              </Link>
              <Link
                href="/resources/use-as-freelancer"
                className="block text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all"
              >
                How to Use Luso as a Freelancer
              </Link>
              <Link
                href="/resources/grow-business"
                className="block text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all"
              >
                Grow Your Freelance Business
              </Link>
              <Link
                href="/resources"
                className="block text-indigo-600 font-semibold hover:text-indigo-700 hover:translate-x-1 transition-all mt-6"
              >
                More resources →
              </Link>
            </div>

            {/* Column 4 - CTA */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <p className="font-semibold text-slate-900 text-xl">
                  Ready to get started?
                </p>
                <p className="text-slate-600 mt-2 leading-relaxed">
                  Join thousands of businesses and freelancers building success
                  together.
                </p>
              </div>
              <Link href="/get-started" className="mt-6">
                <Button className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white cursor-pointer shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  Get started today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* EQUIPMENT MEGA MENU */}
      {open === "equipment" && (
        <div className="absolute left-0 right-0 top-full bg-white border-t border-slate-200 shadow-2xl z-50">
          <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-4 gap-12">
            <div className="space-y-4">
              <p className="font-semibold text-slate-900 text-lg mb-3">
                Heavy Equipment
              </p>
              <Link
                href="/equipment/excavators"
                className="block text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all cursor-pointer"
              >
                Excavators
              </Link>
              <Link
                href="/equipment/bulldozers"
                className="block text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all cursor-pointer"
              >
                Bulldozers
              </Link>
              <Link
                href="/equipment/cranes"
                className="block text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all cursor-pointer"
              >
                Cranes
              </Link>
              <Link
                href="/equipment/loaders"
                className="block text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all cursor-pointer"
              >
                Loaders
              </Link>
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-slate-900 text-lg mb-3">
                Transport
              </p>
              <Link
                href="/equipment/trucks"
                className="block text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all cursor-pointer"
              >
                Trucks
              </Link>
              <Link
                href="/equipment/vans"
                className="block text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all cursor-pointer"
              >
                Vans
              </Link>
              <Link
                href="/equipment/trailers"
                className="block text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all cursor-pointer"
              >
                Trailers
              </Link>
              <Link
                href="/equipment/pickups"
                className="block text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all cursor-pointer"
              >
                Pickups
              </Link>
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-slate-900 text-lg mb-3">
                Tools & Machinery
              </p>
              <Link
                href="/equipment/generators"
                className="block text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all cursor-pointer"
              >
                Generators
              </Link>
              <Link
                href="/equipment/welding"
                className="block text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all cursor-pointer"
              >
                Welding Machines
              </Link>
              <Link
                href="/equipment/compressors"
                className="block text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all cursor-pointer"
              >
                Compressors
              </Link>
              <Link
                href="/equipment/power-tools"
                className="block text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all cursor-pointer"
              >
                Power Tools
              </Link>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <p className="font-semibold text-slate-900 text-xl">
                  Need equipment?
                </p>
                <p className="text-slate-600 mt-2 leading-relaxed">
                  Browse thousands of equipment listings from verified
                  providers.
                </p>
              </div>
              <Link href="/equipment/browse" className="mt-6">
                <Button className="w-full rounded-xl bg-slate-900 text-white cursor-pointer hover:bg-slate-800 transition-colors shadow-lg">
                  Browse all equipment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
