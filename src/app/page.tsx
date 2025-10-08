"use client";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div>
      <main>
      <Section id="hero">
      <Container>
        <Hero
          name="Victor Nwoseh"
          role="Software Engineer"
          valueProp="I build accessible, performant web experiences with React, TypeScript, and Next.js."
          ctaHref="mailto:victor.nwoseh05@gmail.com?subject=Hire%20me%20for%20solutions"
          socials={[
            { label: "GitHub", href: "https://github.com/victor-nwoseh" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/victor-nwoseh/" },
          ]}
        />
      </Container>
      </Section>
      </main>
      <footer></footer>
    </div>
  );
}
