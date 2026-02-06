"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FastActionCTA() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-6 py-6 border-y border-white/5"
        >
            <div className="max-w-2xl mx-auto space-y-4">
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
                    Quick Access
                </p>
            </div>

            <div className="flex flex-col items-center gap-6">
                <motion.button
                    whileHover={{ scale: 1.05, shadow: "0px 0px 20px rgba(34, 197, 94, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open("https://wa.me/916364904890?text=I%20want%20to%20upgrade%20my%20pass", "_blank")}
                    className="group px-10 py-5 bg-green-600 hover:bg-green-500 text-white font-black text-lg md:text-xl rounded-2xl transition-all shadow-[0_20px_40px_rgba(22,163,74,0.2)] flex items-center gap-3 uppercase tracking-tight"
                >
                    <MessageCircle className="w-6 h-6 fill-current" />
                    Call us to upgrade your pass
                </motion.button>
                <p className="text-slate-500 text-sm font-medium">
                    Direct access to the Feb 21-22 Main Event
                </p>
            </div>
        </motion.section>
    );
}
