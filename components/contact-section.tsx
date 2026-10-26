"use client";

import { FormEvent, useState } from "react";
import { SocialRow } from "./chrome";
import type { ContactContent, SocialLink } from "./content";

export function ContactSection({
  contact,
  socials,
}: {
  contact?: ContactContent | null;
  socials?: SocialLink[] | null;
}) {
  const [interest, setInterest] = useState("");
  const email = contact?.email || "info@dezinin.com";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `Name: ${data.get("full_name") || ""}`,
      `Company: ${data.get("company") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Interest: ${interest}`,
      "",
      String(data.get("full_text") || ""),
    ];
    window.location.href = `mailto:${email}?subject=${encodeURIComponent("Dezinin enquiry")}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <section id="contact-section" className="bg-background w-full">
      <div className="w-full min-h-[80vh] items-center justify-center py-6 md:py-18 pt-12">
        <div className="w-full mx-auto px-4 sm:px-8 lg:px-14 py-16 md:py-24 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-center">
          <div className="w-full lg:w-[45%] h-auto flex flex-col justify-center">
            <div className="text-left">
              <p className="text-[#fe4101] text-xs md:text-sm mb-3 font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fe4101]" />
                {contact?.kicker}
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-[1.1] mb-6 lg:mb-8 tracking-tight">
                {contact?.heading}
              </h2>
              <div className="border-t border-muted-foreground pt-6 mt-2">
                <a href={`mailto:${email}`} className="flex items-center text-foreground text-base hover:text-brand-orange transition-colors gap-3 group">
                  <div className="w-9 h-9 rounded-full border border-muted-foreground/30 flex items-center justify-center group-hover:border-brand-orange transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b9b3b1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                    </svg>
                  </div>
                  {email}
                </a>
              </div>
              <div className="mt-8 lg:mt-10">
                <SocialRow socials={socials} />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[45%]">
            <h4 className="text-xl md:text-2xl font-bold text-foreground leading-tight mb-6">{contact?.formTitle}</h4>
            <form className="space-y-5 w-full" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm md:text-xl">
                <input name="full_name" required placeholder={contact?.namePlaceholder || ""} className="w-full bg-transparent border-b border-muted-foreground pb-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#fe4101] transition-colors text-sm" />
                <input name="company" placeholder={contact?.companyPlaceholder || ""} className="w-full bg-transparent border-b border-muted-foreground pb-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#fe4101] transition-colors text-sm" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="email" name="email" required placeholder={contact?.emailPlaceholder || ""} className="w-full bg-transparent border-b border-muted-foreground pb-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#fe4101] transition-colors text-sm" />
                <input type="tel" name="phone" placeholder={contact?.phonePlaceholder || ""} className="w-full bg-transparent border-b border-muted-foreground pb-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#fe4101] transition-colors text-sm" />
              </div>
              <div className="pt-2">
                <p className="text-foreground/30 mb-3 text-[10px] uppercase tracking-wider">{contact?.interestLabel}</p>
                <div className="flex flex-wrap gap-2.5">
                  {(contact?.interests || []).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setInterest(item || "")}
                      className={`px-3 md:px-4 py-2 rounded-full text-[10px] md:text-xs transition-all duration-300 border ${interest === item ? "border-[#fe4101] text-[#fe4101]" : "text-muted-foreground border-muted-foreground hover:border-[#fe4101] hover:text-[#fe4101]"}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-2">
                <textarea name="full_text" required rows={2} placeholder={contact?.messagePlaceholder || ""} className="w-full bg-transparent border-b border-muted-foreground pb-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#fe4101] transition-colors resize-none text-sm" />
              </div>
              <button type="submit" className="px-8 py-3 border border-muted-foreground/40 rounded-full text-foreground text-sm tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-colors">
                {contact?.submitLabel || "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
