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
          <p className="text-center text-bodyMd md:text-bodyLg text-secondary">Coming soon...</p>
        </Container>
      </footer>
    </div>
  );
}
