"use client";

import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function CatalogPage() {
  const projects = [
    {
      title: "Professional Website Design",
      price: 500,
      seller: "John Design Studio",
      rating: 5.0,
      reviews: 124,
    },
    {
      title: "Complete Brand Identity Package",
      price: 850,
      seller: "Creative Minds Co.",
      rating: 4.9,
      reviews: 89,
    },
    {
      title: "SEO & Content Strategy",
      price: 450,
      seller: "Digital Growth Agency",
      rating: 4.8,
      reviews: 156,
    },
    {
      title: "Mobile App Development",
      price: 2500,
      seller: "Tech Solutions Ltd",
      rating: 5.0,
      reviews: 67,
    },
    {
      title: "Social Media Management (30 days)",
      price: 350,
      seller: "Social Boost Media",
      rating: 4.9,
      reviews: 201,
    },
    {
      title: "Video Production & Editing",
      price: 750,
      seller: "Motion Pictures Pro",
      rating: 4.9,
      reviews: 94,
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
            <h1 className="text-5xl font-extrabold text-slate-900 leading-tight mb-4">
              Browse ready-made projects
            </h1>
            <p className="text-lg text-slate-600">
              Purchase pre-packaged services and deliverables from top
              professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-3">
          {[
            "All",
            "Design",
            "Development",
            "Marketing",
            "Writing",
            "Video",
          ].map((filter, i) => (
            <Button
              key={filter}
              variant={i === 0 ? "default" : "outline"}
              className={
                i === 0
                  ? "bg-slate-900 text-white"
                  : "border-slate-300 text-slate-700 hover:border-slate-900"
              }
            >
              {filter}
            </Button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card className="bg-white border border-slate-200 hover:shadow-lg transition">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                      {project.title}
                    </h3>
                    <button className="p-1 rounded hover:bg-slate-100">
                      <Heart className="w-5 h-5 text-slate-500" />
                    </button>
                  </div>

                  <p className="text-sm text-slate-600 mb-3">
                    by {project.seller}
                  </p>

                  <div className="flex items-center gap-2 mb-6">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-slate-900">
                      {project.rating}
                    </span>
                    <span className="text-slate-500 text-sm">
                      ({project.reviews})
                    </span>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">Starting at</p>
                      <p className="text-xl font-bold text-slate-900">
                        ${project.price}
                      </p>
                    </div>
                    <Button className="bg-slate-900 text-white hover:bg-slate-800">
                      Buy now
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
