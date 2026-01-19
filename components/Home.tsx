"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Briefcase, Truck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/* ---------------- Header ---------------- */
const Header = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
    <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 cursor-pointer">
        <Image src="/logo.png" alt="Luso logo" width={100} height={100} />
      </div>

      <div className="hidden md:flex gap-6 text-slate-600">
        <a className="hover:text-slate-900 cursor-pointer">Find Equipment</a>
        <a className="hover:text-slate-900 cursor-pointer">Find Skills</a>
        <a className="hover:text-slate-900 cursor-pointer">Pricing</a>
        <a className="hover:text-slate-900 cursor-pointer">How It Works</a>
      </div>

      <div className="flex items-center gap-3">
        <a className="text-slate-600 hover:text-slate-900 px-3 py-2 cursor-pointer">
          Log in
        </a>
        <Button className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:opacity-90 cursor-pointer">
          Sign up
        </Button>
      </div>
    </div>
  </nav>
);

/* ---------------- Footer ---------------- */
const Footer = () => (
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
          <a className="block hover:text-slate-900 cursor-pointer">Pricing</a>
          <a className="block hover:text-slate-900 cursor-pointer">
            How it works
          </a>
        </div>
        <div className="space-y-2">
          <div className="font-medium text-slate-700">Account</div>
          <a className="block hover:text-slate-900 cursor-pointer">Log in</a>
          <a className="block hover:text-slate-900 cursor-pointer">Sign up</a>
        </div>
      </div>
    </div>

    <div className="text-center text-xs mt-8">
      © {new Date().getFullYear()} Luso. All rights reserved.
    </div>
  </footer>
);

/* ---------------- Page ---------------- */
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute -top-40 -left-40 h-96 w-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-96 w-96 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Hire equipment. <br /> Discover specialised skills. <br />
              <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                Do business smarter.
              </span>
            </h1>
            <p className="mt-6 text-slate-600 text-lg">
              Luso connects equipment owners, skilled professionals, and
              businesses into one powerful digital marketplace.
            </p>
            <div className="mt-8 flex gap-4">
              <Button
                size="lg"
                className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white cursor-pointer"
              >
                Find Equipment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-indigo-400 text-indigo-600 hover:bg-indigo-50 cursor-pointer"
              >
                Find Skills
              </Button>
            </div>
          </motion.div>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-4">Start your search</h3>
            <div className="flex items-center bg-white border border-indigo-300 focus-within:border-indigo-500 rounded-xl px-4 py-3 gap-2">
              <Search className="w-5 h-5 text-indigo-400" />
              <input
                placeholder="Search equipment or skills"
                className="bg-transparent outline-none flex-1 text-slate-700 placeholder:text-slate-400"
              />
            </div>
            <Button className="w-full mt-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white cursor-pointer">
              Search
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Truck, label: "Construction Equipment" },
            { icon: Briefcase, label: "Professional Services" },
            { icon: Star, label: "Specialised Skills" },
            { icon: Truck, label: "Logistics & Transport" },
          ].map((item, i) => (
            <Card
              key={i}
              className="bg-white border border-slate-200 hover:shadow-lg transition cursor-pointer"
            >
              <CardContent className="flex flex-col items-center justify-center py-10 gap-4">
                <item.icon className="w-8 h-8 text-cyan-500" />
                <span className="text-slate-700 font-medium">{item.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">How Luso Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Post or Search",
                desc: "List your equipment or skills, or search what you need.",
              },
              {
                title: "Connect",
                desc: "Send enquiries and agree on short or long-term deals.",
              },
              {
                title: "Hire & Deliver",
                desc: "Complete the deal and grow your business.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
              >
                <div className="text-4xl font-bold text-cyan-500 mb-2">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Ready to get started?</h2>
        <p className="text-slate-600 mb-8">
          Join Luso and start connecting today.
        </p>
        <Button
          size="lg"
          className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white cursor-pointer"
        >
          Create an Account
        </Button>
      </section>

      <Footer />
    </main>
  );
}
