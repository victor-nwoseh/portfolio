export interface AboutContent {
  paragraphs: string[];
}

export interface WhatIDoItem {
  title: string;
  description: string;
  tagline?: string;
  visual?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface WhatIDoContent {
  items: WhatIDoItem[];
}

export interface Skill {
  name: string;
  logo: string;
  color: string;
}

export interface SkillsContent {
  development: Skill[];
  tools: Skill[];
  knowledge: Skill[];
}

export interface SiteContent {
  about: AboutContent;
  whatIDo: WhatIDoContent;
  skills: SkillsContent;
}

