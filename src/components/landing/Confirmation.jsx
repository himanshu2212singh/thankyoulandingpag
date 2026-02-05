"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail } from "lucide-react";

export default function Confirmation() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4 pt-4"
        >
            <div className="space-y-0 flex flex-col items-center">
                <span className="text-amber-500 font-black text-4xl md:text-6xl uppercase italic drop-shadow-[0_0_20px_rgba(217,119,6,0.3)]">Congratulations</span>
                <div className="flex justify-center">
                    <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center border border-amber-500/20 shadow-[0_0_30px_rgba(217,119,6,0.1)]">
                        <CheckCircle2 className="w-7 h-7 text-amber-500" />
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic leading-[1.1]">
                    You’re In. <br />
                    <span className="text-amber-500">The Next CXO-SummitSync is Locked.</span>
                </h1>
                <p className="text-slate-400 text-base flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-amber-500/60" />
                    Check your inbox for the calendar invite and Zoom link.
                </p>
            </div>
        </motion.section>
    );
}
