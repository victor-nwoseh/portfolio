"use client";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Hero from "@/components/sections/Hero";
import SectionTitle from "@/components/layout/SectionTitle";
import About from "@/components/sections/About";
import WhatIDo from "@/components/sections/WhatIDo";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import FancyCTA from "@/components/ui/FancyCTA";

export default function Home() {
  return (
    <div>
      <main>
      <Section id="hero">
      <Container className="mb-10 md:mb-14">
        <Hero
          name="Victor Nwoseh"
          role="Software Engineer"
          valueProp=""
          ctaHref="mailto:victor.nwoseh05@gmail.com?subject=So%E2%80%A6%20when%20can%20you%20start%3F"
          socials={[
            { label: "GitHub", href: "https://github.com/victor-nwoseh" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/victor-nwoseh/" },
          ]}
        />
      </Container>
      </Section>
      <Section id="about">
      <SectionTitle title="About" />
      <Container className="mt-6 md:mt-8 mb-10 md:mb-14">
        <About />
      </Container>
      </Section>
      <Section id="what-i-do">
      <SectionTitle title="Areas of focus" />
      <Container className="mt-6 md:mt-8 mb-10 md:mb-14">
        <WhatIDo />
      </Container>
      </Section>
      <Section id="skills">
      <SectionTitle title="Skills" />
      <Container className="mt-6 md:mt-8 mb-10 md:mb-14">
        <Skills />
      </Container>
      </Section>
      <Section id="projects">
      <SectionTitle title="Projects" />
      <Container className="mt-6 md:mt-8 mb-10 md:mb-14">
        <Projects />
      </Container>
      </Section>
      </main>
      <footer>
        <Container className="py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-left text-sm md:text-base text-secondary leading-relaxed max-w-3xl">
              Loosely designed in <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors duration-200">Figma</a> and coded in <a href="https://cursor.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors duration-200">Cursor</a> with <a href="https://www.anthropic.com/news/claude-sonnet-4-5" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors duration-200">Claude 4.5 Sonnet</a> and <a href="https://platform.openai.com/docs/models/gpt-5-codex" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors duration-200">GPT 5 Codex</a>. Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors duration-200">Next.js</a>, <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors duration-200">Tailwind CSS</a>, <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors duration-200">TypeScript</a>, and <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors duration-200">Framer Motion</a>, deployed with <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors duration-200">Vercel</a>. All text is set in <a href="https://rsms.me/inter/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors duration-200">Inter</a> typeface.
            </p>
            <div className="flex-shrink-0">
              <FancyCTA href="mailto:victor.nwoseh05@gmail.com?subject=So%E2%80%A6%20when%20can%20you%20start%3F" bounce={true} showEmoji={true}>Hire me</FancyCTA>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
