"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function FastActionCTA() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-8 py-12 border-y border-white/5"
        >
            <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-3xl font-bold text-white uppercase italic">Secure the Early-Bird Advantage.</h3>
                <p className="text-slate-400 text-lg">
                    If you’ve seen enough and are ready to bypass the <span className="text-white font-medium underline px-1 underline-offset-4 decoration-amber-500/30 italic">"Mid-Career Trap,"</span> you can secure your Gold Pass right now and skip the queue.
                </p>
            </div>

            <div className="flex flex-col items-center gap-6">
                <button
                    onClick={() => window.open("https://rzp.io/rzp/7JhGFhwt", "_blank")}
                    className="group px-10 py-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-lg md:text-xl rounded-2xl transition-all shadow-[0_20px_40px_rgba(217,119,6,0.2)] hover:shadow-[0_25px_50px_rgba(217,119,6,0.3)] hover:-translate-y-1 active:scale-95 flex items-center gap-3 uppercase tracking-tight"
                >
                    UPGRADE TO GOLD PASS – ₹18,000
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-slate-500 text-sm font-medium">
                    Direct access to the Feb 21-22 Main Event
                </p>

                <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors text-sm underline decoration-slate-800 underline-offset-8">
                    No thanks, I’ll just attend the free SummitSync sessions for now
                </a>
            </div>
        </motion.section>
    );
}
