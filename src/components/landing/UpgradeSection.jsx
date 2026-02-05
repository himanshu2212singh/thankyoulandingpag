"use client";

import React from "react";
import { motion } from "framer-motion";
import { Crown, MapPin } from "lucide-react";

export default function UpgradeSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/5 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-600/10 transition-colors" />

            <div className="space-y-8 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest">
                    <Crown className="w-3.5 h-3.5" />
                    Limited Upgrade Available
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Why wait for the briefing to <span className="text-amber-500 underline decoration-amber-500/30 underline-offset-8">claim your seat?</span>
                </h2>

                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                    <p>
                        The <span className="text-white font-medium italic underline decoration-slate-700 decoration-2 underline-offset-4 px-1">CXO-SummitSync</span> series is designed to show you the <span className="text-white">"Why"</span> and the <span className="text-white">"How."</span> But for those who already know they are ready to shatter their growth ceiling, the Gold Pass is already available.
                    </p>

                    <div className="bg-amber-500/5 border-l-4 border-amber-500 p-6 rounded-r-2xl">
                        <p className="text-white font-semibold flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                            The Bengaluru Reality:
                        </p>
                        <p className="mt-2 leading-relaxed">
                            The live sessions at <span className="text-amber-500 font-bold underline decoration-amber-500/20 underline-offset-4">The Chancery Pavilion</span> are strictly limited by venue capacity. While the SummitSync is open to hundreds, the Gold Pass networking experience is reserved for a select cohort of leaders.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
