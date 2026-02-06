"use client";

import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import Confirmation from "@/components/landing/Confirmation";
import { Facebook, Linkedin, Instagram, Youtube, X } from "lucide-react";
import UpgradeSection from "@/components/landing/UpgradeSection";
import GoldPassAdvantages from "@/components/landing/GoldPassAdvantages";
import FastActionCTA from "@/components/landing/FastActionCTA";
import Link from "next/link";
import Image from "next/image";
import VIPAlertGroup from "@/components/landing/VIPAlertGroup";
import PricingTable from "@/components/landing/PricingTable";
import WhatsAppSupport from "@/components/landing/WhatsAppSupport";
import cxoImage from "../images/cxo-leaders.png";

export default function ThankYouPage() {
    useEffect(() => {
        // Small delay to ensure the browser has painted and user sees the start
        const timer = setTimeout(() => {
            const duration = 3 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            const randomInRange = (min, max) => Math.random() * (max - min) + min;

            const interval = setInterval(function () {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);
                confetti({
                    ...defaults,
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                });
                confetti({
                    ...defaults,
                    particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                });
            }, 250);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen selection:bg-amber-500/30">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[20%] left-[-5%] w-[30%] h-[30%] bg-blue-600/5 blur-[100px] rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-6xl mx-auto px-6 py-8 relative z-10 space-y-8"
            >
                <Confirmation />
                <UpgradeSection />
                <GoldPassAdvantages />
                <PricingTable />
                <FastActionCTA />
                <VIPAlertGroup />

            </motion.div>

            {/* Footer info - Compact Full Width */}
            <footer className="w-full border-t border-white/5 relative z-10 pt-4 pb-6 px-6">
                <div className="max-w-[1800px] mx-auto space-y-4">
                    {/* Seamless Marquee (Reduced Space) */}
                    <div className="w-full overflow-hidden">
                        <motion.div
                            className="flex gap-8"
                            animate={{
                                x: ["0%", "-50%"],
                            }}
                            transition={{
                                duration: 35,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{ width: "fit-content" }}
                        >
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="relative group flex-shrink-0 w-[70vw] md:w-[600px]">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/5 to-blue-600/5 rounded-xl blur-2xl opacity-20 group-hover:opacity-100 transition duration-1000" />
                                    <div className="relative w-full border border-white/5 rounded-xl overflow-hidden shadow-xl bg-slate-900/40 backdrop-blur-md transition-all duration-700 group-hover:border-white/10">
                                        <Image
                                            src={cxoImage}
                                            alt="Global CXO Leaders"
                                            placeholder="blur"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Bottom Row: Icons/Copyright (Left) + Centered Privacy & Terms */}
                    <div className="relative pt-4 border-t border-white/5 flex items-center justify-center min-h-[60px]">
                        {/* Left Group: Icons & Copyright */}
                        <div className="absolute left-0 flex flex-col gap-2">
                            <div className="flex justify-start gap-4">
                                <a href="https://x.com/i/broadcasts/1lPJqvODqqdxb" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-500 transition-colors">
                                    <X className="w-4 h-4" />
                                </a>
                                <a href="https://www.facebook.com/share/v/1C4Wv4DE7u/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-500 transition-colors">
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a href="https://www.linkedin.com/events/7424113166231470080/theater/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-500 transition-colors">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a href="https://www.instagram.com/muditsaxenaglobalcxocoach/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-500 transition-colors">
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a href="https://www.youtube.com/watch?v=xh4a16UTpAg" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-500 transition-colors">
                                    <Youtube className="w-4 h-4" />
                                </a>
                            </div>
                            <p className="text-[9px] text-slate-600 uppercase tracking-[0.15em] font-medium whitespace-nowrap">
                                Global CXO Summit 2026 &copy; All Rights Reserved
                            </p>
                        </div>

                        {/* Centered Privacy/Terms */}
                        <div className="flex gap-4 items-center">
                            <a href="https://docs.google.com/document/d/1ZU3bqVgoSxhsM-TTEQrEn9u5lGLTWElrGFSnDNOFv8U/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-600 uppercase tracking-[0.1em] font-medium hover:text-amber-500 transition-colors">
                                Privacy Policy
                            </a>
                            <span className="text-slate-800">•</span>
                            <a href="https://docs.google.com/document/d/1WW_fJc7sa3lCB5Q05fxIWpoBc7WiPjzndo0_cvHzubY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-600 uppercase tracking-[0.1em] font-medium hover:text-amber-500 transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <WhatsAppSupport />
        </main>
    );
}
