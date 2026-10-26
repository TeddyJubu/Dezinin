import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export const SocialIcons = () => {
    // Reduced size to w-9 h-9 to match compact layout
    const iconClass = "w-9 h-9 rounded-full border border-muted-foreground text-muted-foreground flex items-center justify-center hover:text-brand-orange hover:border-brand-orange transition-all duration-300 cursor-pointer";
    const iconSize = 16;
    const strokeWidth = 1.5;

    return (
        <div className="flex gap-3">
            {/* TikTok - Keeping SVG as specific brand icon not in standard Lucide */}
            <a href="#" className={iconClass} aria-label="TikTok">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
            </a>
            
            {/* Instagram */}
            <a href="https://www.instagram.com/dezininofficial" className={iconClass} aria-label="Instagram">
                <Instagram size={iconSize} strokeWidth={strokeWidth} />
            </a>

            {/* X (Twitter) - Keeping SVG for modern X logo
            <a href="#" className={iconClass} aria-label="X">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
            </a> */}

            {/* Facebook */}
            <a href="https://www.facebook.com/dezininfashion" className={iconClass} aria-label="Facebook">
                <Facebook size={iconSize} strokeWidth={strokeWidth} />
            </a>

            {/* YouTube */}
            <a href="#" className={iconClass} aria-label="YouTube">
                <Youtube size={iconSize} strokeWidth={strokeWidth} />
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/company/dezinin" className={iconClass} aria-label="LinkedIn">
                <Linkedin size={iconSize} strokeWidth={strokeWidth} />
            </a>
        </div>
    );
};