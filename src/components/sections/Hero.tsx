"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import FancyCTA from "@/components/ui/FancyCTA";
import { reveal } from "@/lib/motion/presets";
import { GitHubIcon, LinkedInIcon, CVIcon } from "@/components/ui/Icons";

interface SocialLink {
  label: string;
  href: string;
}

interface HeroProps {
  name: string;
  role: string;
  ctaHref: string; // mailto
  socials: SocialLink[]; // e.g., GitHub, LinkedIn
}

type SnippetToken = { text: string; className?: string };

export default function Hero({ name, role, ctaHref, socials }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const snippetTokens = useMemo<SnippetToken[]>(
    () => [
      { text: "const", className: "text-[#ff6b9d]" }, // Hot pink
      { text: " " },
      { text: "dev", className: "text-[#ffd93d]" }, // Bright yellow
      { text: " " },
      { text: "=", className: "text-[#c0c0c0]" }, // Silver
      { text: " " },
      { text: "{", className: "text-[#f0f0f0]" }, // Off-white
      { text: "\n" },
      { text: "  " },
      { text: "type", className: "text-[#6bcf7f]" }, // Mint green
      { text: ":", className: "text-[#c0c0c0]" }, // Silver
      { text: " " },
      { text: "'Full-Stack Developer'", className: "text-[#4facfe]" }, // Sky blue
      { text: ",", className: "text-[#f0f0f0]" }, // Off-white
      { text: "\n" },
      { text: "  " },
      { text: "interest", className: "text-[#6bcf7f]" }, // Mint green
      { text: ":", className: "text-[#c0c0c0]" }, // Silver
      { text: " " },
      { text: "'AI Enthusiast'", className: "text-[#4facfe]" }, // Sky blue
      { text: ",", className: "text-[#f0f0f0]" }, // Off-white
      { text: "\n" },
      { text: "  " },
      { text: "state", className: "text-[#6bcf7f]" }, // Mint green
      { text: ":", className: "text-[#c0c0c0]" }, // Silver
      { text: " " },
      { text: "'Probably over-engineering something right now'", className: "text-[#4facfe]" }, // Sky blue
      { text: "\n" },
      { text: "};", className: "text-[#f0f0f0]" }, // Off-white
    ],
    []
  );

  const fullSnippet = useMemo(
    () => snippetTokens.map((token) => token.text).join(""),
    [snippetTokens]
  );

  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(fullSnippet);
      setIsComplete(true);
      return;
    }

    let timeoutId: number;
    let index = 0;

    const type = () => {
      if (index <= fullSnippet.length) {
        setDisplayedText(fullSnippet.slice(0, index));
        index += 1;
        timeoutId = window.setTimeout(type, 38);
      } else {
        setIsComplete(true);
      }
    };

    type();

    return () => window.clearTimeout(timeoutId);
  }, [fullSnippet, prefersReducedMotion]);

  const typedCharacters = prefersReducedMotion ? fullSnippet.length : displayedText.length;
  let consumedCharacters = 0;

  return (
    <motion.div {...reveal} className="pt-1 sm:pt-2">
      <div className="p-0">
      <h1 className="text-[clamp(2.3rem,7vw,3.2rem)] md:text-[3.25rem] font-semibold text-primary leading-tight">
        {name}
      </h1>
      <p className="mt-2 text-[clamp(1.1rem,4.2vw,1.55rem)] md:text-[1.6rem] font-semibold text-secondary leading-tight">
        {role}
      </p>
      <div className="mt-4 text-[clamp(0.95rem,4vw,1.05rem)] md:text-bodyLg text-primary max-w-prose">
        <pre className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] p-4 font-mono text-[0.95em] leading-relaxed whitespace-pre-wrap" style={{ boxShadow: '8px 8px 0px rgba(255, 107, 157, 0.3)' }}>
          {!prefersReducedMotion && (
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: 0 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="pointer-events-none absolute inset-0 bg-[rgba(2,6,23,0.55)]"
            />
          )}
          <code className="relative block">
            {snippetTokens.map((token, idx) => {
                const tokenLength = token.text.length;
                const start = consumedCharacters;
                const end = start + tokenLength;
                consumedCharacters = end;
                const visibleCount = Math.max(0, Math.min(typedCharacters - start, tokenLength));

                if (token.text === "\n") {
                  return visibleCount > 0 ? <br key={idx} /> : null;
                }

                const visibleText = token.text.slice(0, visibleCount);
                const isWhitespace = token.text.trim().length === 0;

                return (
                  <span
                    key={idx}
                    className={token.className}
                    style={{
                      whiteSpace: isWhitespace ? "pre" : undefined,
                    }}
                  >
                    {prefersReducedMotion ? token.text : visibleCount > 0 ? visibleText : null}
                  </span>
                );
              })}
            <span
              className={`ml-1 inline-block h-[1.1em] w-[2px] bg-[#f8fafc] align-middle ${
                isComplete ? "animate-blink" : prefersReducedMotion ? "hidden" : ""
              }`}
            />
          </code>
        </pre>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <FancyCTA href={ctaHref} bounce={isComplete} showEmoji={isComplete}>Hire me</FancyCTA>
        <div className="flex items-center gap-5">
          <a href={socials.find(s=>s.label.toLowerCase()==="github")?.href || "#"} className="text-accent hover:text-accent-hover flex items-center justify-center" aria-label="GitHub">
            <GitHubIcon className="w-6 h-6 flex-shrink-0" />
          </a>
          <a href={socials.find(s=>s.label.toLowerCase()==="linkedin")?.href || "#"} className="text-accent hover:text-accent-hover flex items-center justify-center" aria-label="LinkedIn">
            <LinkedInIcon className="w-6 h-6 flex-shrink-0" />
          </a>
          <a href="https://drive.google.com/file/d/1YlOo3y9pjRzQRd5XEZG4T7-BI-63VSQu/view?pli=1" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover flex items-center justify-center" aria-label="Resume/CV">
            <CVIcon className="w-6 h-6 flex-shrink-0" />
          </a>
        </div>
      </div>
      </div>
    </motion.div>
  );
}


