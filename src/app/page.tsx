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
      <Section id="about">
      <Container>
        <h2 className="text-2xl font-bold text-primary">About</h2>
        <p className="text-secondary mt-2">Coming soon.</p>
      </Container>
      </Section>
      <Section id="what-i-do">
      <Container>
        <h2 className="text-2xl font-bold text-primary">What I do</h2>
        <p className="text-secondary mt-2">Coming soon.</p>
      </Container>
      </Section>
      <Section id="skills">
      <Container>
        <h2 className="text-2xl font-bold text-primary">Skills</h2>
        <p className="text-secondary mt-2">Coming soon.</p>
      </Container>
      </Section>
      <Section id="projects">
      <Container>
        <h2 className="text-2xl font-bold text-primary">Projects</h2>
        <p className="text-secondary mt-2">Coming soon.</p>
      </Container>
      </Section>
      <Section id="contact">
      <Container>
        <h2 className="text-2xl font-bold text-primary">Contact</h2>
        <p className="text-secondary mt-2">Coming soon.</p>
      </Container>
      </Section>
      </main>
      <footer></footer>
    </div>
  );
}
