"use client";

import { motion } from "framer-motion";
import { Briefcase, Clock, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Header />

      {/* Hero */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
              Post a job and hire a pro
            </h1>
            <p className="text-lg text-slate-600">
              Connect with skilled professionals ready to bring your project to
              life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, value: "10,000+", label: "Active Professionals" },
            { icon: Briefcase, value: "50,000+", label: "Jobs Completed" },
            { icon: Clock, value: "24hr", label: "Avg Response Time" },
            { icon: DollarSign, value: "95%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <Card key={i} className="bg-white border border-slate-200">
              <CardContent className="py-8 flex flex-col items-center gap-2">
                <stat.icon className="w-7 h-7 text-slate-700" />
                <div className="text-3xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm text-center">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Job Form */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <Card className="bg-white border border-slate-200">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Create a job posting
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-slate-800 font-medium mb-1">
                  Job title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Full Stack Developer for SaaS Platform"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:border-slate-900 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-800 font-medium mb-1">
                  Category
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 focus:border-slate-900 outline-none">
                  <option>Development & IT</option>
                  <option>Design & Creative</option>
                  <option>Sales & Marketing</option>
                  <option>Writing & Translation</option>
                  <option>Admin & Customer Support</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-800 font-medium mb-1">
                  Project description
                </label>
                <textarea
                  rows={6}
                  placeholder="Describe your project, skills required, timeline, and expectations..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:border-slate-900 outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-800 font-medium mb-1">
                    Budget range
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. $5,000 - $10,000"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:border-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-800 font-medium mb-1">
                    Duration
                  </label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 focus:border-slate-900 outline-none">
                    <option>Less than 1 month</option>
                    <option>1–3 months</option>
                    <option>3–6 months</option>
                    <option>6+ months</option>
                  </select>
                </div>
              </div>

              <Button className="w-full bg-slate-900 text-white py-5 text-lg hover:bg-slate-800">
                Post job
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </main>
  );
}
