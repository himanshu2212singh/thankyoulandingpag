"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppSupport() {
    return (
        <a
            href="https://wa.me/916364904890?text=Hi!%20I%20need%20support%20regarding%20the%20Summit%20Pass."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[100] group flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all hover:-translate-y-1 active:scale-95"
        >
            <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-bold uppercase opacity-90">Talk to us</span>
                <span className="text-sm font-black">WhatsApp</span>
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 fill-current" />
            </div>
        </a>
    );
}
