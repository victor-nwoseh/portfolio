export interface AboutContent {
  paragraphs: string[];
}

export interface WhatIDoItem {
  title: string;
  description: string;
  bullets: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface WhatIDoContent {
  items: WhatIDoItem[];
}

export interface SiteContent {
  about: AboutContent;
  whatIDo: WhatIDoContent;
}

