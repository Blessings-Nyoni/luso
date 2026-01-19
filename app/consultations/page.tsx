"use client";

import { motion } from "framer-motion";
import { Star, Calendar, Clock, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function ConsultationsPage() {
  const experts = [
    {
      name: "Webster Chipwaila",
      expertise: "Business Strategy",
      rate: 200,
      rating: 5.0,
      reviews: 87,
      sessions: 340,
      bio: "Former McKinsey consultant helping startups scale and structure operations.",
    },
    {
      name: "Marcus Phiri",
      expertise: "Cloud & Architecture",
      rate: 250,
      rating: 4.9,
      reviews: 124,
      sessions: 520,
      bio: "Ex-Google engineer specializing in scalable cloud systems.",
    },
    {
      name: "Sofia Banda",
      expertise: "Marketing & Growth",
      rate: 180,
      rating: 5.0,
      reviews: 156,
      sessions: 420,
      bio: "Built growth teams at unicorn startups, 10+ years experience.",
    },
    {
      name: "Ahmed Hussein",
      expertise: "Finance & Planning",
      rate: 220,
      rating: 4.8,
      reviews: 98,
      sessions: 280,
      bio: "CFO advisor helping businesses optimize finances.",
    },
  ];

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
            <h1 className="text-5xl font-extrabold text-slate-900 mb-4">
              Get expert advice, fast
            </h1>
            <p className="text-lg text-slate-600">
              Book 1-on-1 sessions with industry professionals and get clear,
              practical guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: Calendar,
              title: "Find an expert",
              desc: "Browse by skill or industry",
            },
            {
              icon: Clock,
              title: "Pick a time",
              desc: "Choose what fits your schedule",
            },
            {
              icon: Video,
              title: "Meet online",
              desc: "Video call from anywhere",
            },
            {
              icon: Star,
              title: "Apply advice",
              desc: "Take action with confidence",
            },
          ].map((step, i) => (
            <Card key={i} className="bg-white border border-slate-200">
              <CardContent className="p-6">
                <step.icon className="w-7 h-7 text-slate-700 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experts */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Featured experts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experts.map((expert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card className="bg-white border border-slate-200 hover:shadow-lg transition">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-slate-200" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {expert.name}
                      </h3>
                      <p className="text-slate-700 text-sm">
                        {expert.expertise}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm">{expert.bio}</p>

                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-slate-900">
                        {expert.rating}
                      </span>
                      <span>({expert.reviews})</span>
                    </div>
                    <span>{expert.sessions} sessions</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <p className="text-xs text-slate-500">Rate</p>
                      <p className="text-xl font-bold text-slate-900">
                        ${expert.rate}/hr
                      </p>
                    </div>
                    <Button className="bg-slate-900 text-white hover:bg-slate-800">
                      Book session
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
