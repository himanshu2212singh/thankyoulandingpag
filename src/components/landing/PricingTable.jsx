"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const passes = [
    {
        name: "Bronze Pass",
        accent: "from-orange-800 to-orange-900",
        badge: "1 Day Event Access",
        features: [
            "5 Days Online Learning",
            "Physical Live Event Pass (1-Day)",
            "Networking Opportunity",
            "Welcome Pack (notebook, pen, gifts)",
            "Lunch",
            "2 Tea Breaks"
        ]
    },
    {
        name: "Silver Pass",
        accent: "from-blue-100 to-blue-200",
        badge: "2 Day Event + Blueprint Access",
        discount: "Save ₹10K",
        features: [
            "All Bronze Pass Benefits (Both Days)",
            "Global CXO Blueprint Course",
            "8 Live Sessions (LinkedIn, Resume, Interviews, Neuroscience of success, CXO skills, Career Planning)",
            "10 Video Courses (Leadership, Executive Presence, Personal Branding, Politics, Promotions, Meditations etc)",
            "Lifetime access to Blueprint course and CXO community"
        ]
    },
    {
        name: "Gold Pass",
        accent: "from-amber-400 to-amber-500",
        badge: "2 Day Event + Additional Access",
        features: [
            "All Silver Pass Benefits",
            "Session Recordings",
            "Private Lunch With Event Speakers",
            "Photograph With Event Speakers",
            "Photograph With Mudit Saxena",
            "10 Books (CXO quiz, 7 secrets to become CXO, How to become a CXO, Promotion etc)",
            "One 45-Minute Coaching Call With Mudit Saxena"
        ]
    },
    {
        name: "Diamond Pass",
        accent: "from-red-500 via-pink-500 to-orange-500",
        badge: "2 Day Event + Extended Program",
        features: [
            "All Gold Pass Benefits",
            "1 Month Advanced Group Coaching Certification Program",
            "4 Live Sessions"
        ]
    }
];

export default function PricingTable() {
    return (
        <section className="py-2 space-y-8">
            <div className="max-w-3xl mx-auto text-center space-y-2">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tight">
                    Secure the <span className="text-amber-500">Early-Bird Advantage.</span>
                </h3>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                    If you’ve seen enough and are ready to bypass the <span className="text-white font-medium underline px-1 underline-offset-4 decoration-amber-500/30 italic">"Mid-Career Trap,"</span> you can secure your pass right now.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {passes.map((pass, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            y: -10,
                            scale: 1.02,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                        }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 transition-colors hover:border-blue-100"
                    >
                        {/* Top Accent Bar */}
                        <div className={`h-3 w-full bg-gradient-to-r ${pass.accent}`} />

                        {/* Save Badge */}
                        {pass.discount && (
                            <div className="absolute top-6 right-4 w-11 h-11 bg-orange-500 rounded-full flex flex-col items-center justify-center text-[9px] font-black text-white leading-none shadow-lg z-10">
                                <span>Save</span>
                                <span className="text-xs">₹10K</span>
                            </div>
                        )}

                        <div className="p-6 flex flex-col items-center text-center space-y-4 flex-grow">
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                                Access Level
                            </span>

                            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                                {pass.name}
                            </h3>

                            <div className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-xl text-xs font-extrabold w-full">
                                {pass.badge}
                            </div>

                            <div className="w-full space-y-3 pt-2">
                                {pass.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex gap-2 text-left">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <p className="text-gray-500 text-[13px] leading-tight">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
