"use client";

import React from "react";
import { motion } from "framer-motion";
import { Crown, Users, BookOpen, ShieldCheck } from "lucide-react";

export default function GoldPassAdvantages() {
    const advantages = [
        { icon: Users, title: "Physical Presence", desc: "2 Days of immersive workshops in Bengaluru (Feb 21-22)." },
        { icon: Crown, title: "The CXO Lunch", desc: "2 days of Networking with our Silicon Valley & Fortune 500 speakers." },
        { icon: BookOpen, title: "The Blueprint", desc: "A physical, 8 session Live session lifetime access course." },
        { icon: ShieldCheck, title: "7-Day Full Access", desc: "Including the 5-day virtual deep-dives." },
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
        >
            <h3 className="text-2xl font-bold text-white flex items-center gap-4">
                <div className="h-px bg-white/10 grow" />
                <span className="shrink-0 uppercase tracking-widest text-amber-500">What the Gold Pass Unlocks</span>
                <div className="h-px bg-white/10 grow" />
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {advantages.map((item, idx) => (
                    <div key={idx} className="bg-slate-800/40 p-6 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all hover:bg-slate-800/60 group">
                        <item.icon className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                        <h4 className="text-white font-bold text-lg mb-1 italic underline decoration-amber-500/10 underline-offset-4">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>

        </motion.section>
    );
}
