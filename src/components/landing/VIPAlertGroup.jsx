"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function VIPAlertGroup() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-green-500/5 border border-green-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="w-20 h-20 bg-green-500/10 rounded-3xl flex items-center justify-center border border-green-500/20 rotate-3 shrink-0">
                    <MessageCircle className="w-10 h-10 text-green-500" />
                </div>

                <div className="space-y-4 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white uppercase italic tracking-wide">
                        One Last Thing: <span className="text-green-500">Join the VIP Alert Group</span>
                    </h3>
                    <p className="text-slate-400 text-lg max-w-lg">
                        Don't miss the "Intel Drops." Join our private WhatsApp channel to get <span className="text-green-500 font-bold underline decoration-green-500/10 underline-offset-4">15-minute reminders</span> before we go live.
                    </p>

                    <a
                        href="https://chat.whatsapp.com/BRpMqwQtVDfE4YHbIp7Poh?mode=gi_c"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-auto px-5 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wide shadow-lg shadow-green-900/20 active:scale-95"
                    >
                        JOIN WHATSAPP ANNOUNCEMENT GROUP
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>

        </motion.section>
    );
}
