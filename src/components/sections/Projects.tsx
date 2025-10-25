"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { reveal } from "@/lib/motion/presets";

// Project data
const projects = [
  {
    id: 1,
    title: "Full-Stack Personal Finance Platform",
    description: "A finance app that helps users manage their money by tracking spending, creating budgets, and monitoring transactions",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS", "shadcn/ui"],
    image: "/images/projects/finance-dashboard.png",
    liveUrl: "https://finance-tracker-frontend-9ec4.onrender.com/",
    githubUrl: "https://github.com/victor-nwoseh/finance-tracker"
  },
  {
    id: 2,
    title: "Enterprise Investment Management Platform – Wells Fargo",
    description: "An enterprise system for financial advisors to manage client portfolios, track investments, and perform secure calculations.",
    technologies: ["Java", "JPA", "Spring Boot", "REST API"],
    image: "/images/projects/wells-fargo-investment.png",
    liveUrl: null,
    githubUrl: "https://github.com/victor-nwoseh/wells-fargo-task-2"
  },
  {
    id: 3,
    title: "Full-Stack Book Review Platform",
    description: "A book review platform where users can discover books, read reviews, and share their own ratings with automatic book details.",
    technologies: ["PHP", "Symfony", "MySQL", "Google Books API", "Twig"],
    image: "/images/projects/book-review-platform.png",
    liveUrl: null,
    githubUrl: "https://github.com/victor-nwoseh/review-shelf"
  },
  {
    id: 4,
    title: "Deep Learning AI Models",
    description: "AI models that analyze social media sentiment and AI models that learn to make decisions through reinforcement learning in simulated environments.",
    technologies: ["Python", "TensorFlow", "OpenAI Gym", "Pandas/NumPy"],
    image: "/images/projects/deep-learning-ai.png",
    liveUrl: null,
    githubUrl: "https://github.com/victor-nwoseh/RL-SentimentSeq"
  },
  {
    id: 5,
    title: "Deep Learning Image Classifier",
    description: "An AI model that accurately identifies and categorizes images using advanced neural networks, achieving 95% accuracy on standard datasets.",
    technologies: ["Python", "TensorFlow", "CNN", "Transfer Learning"],
    image: "/images/projects/image-classifier.png",
    liveUrl: null,
    githubUrl: "https://github.com/victor-nwoseh/CNN-Development"
  },
  {
    id: 6,
    title: "To-Do List App",
    description: "An organized to-do list app where users can create, track, and complete tasks with deadlines.",
    technologies: ["React", "Express", "PostgreSQL"],
    image: "/images/projects/todo-list-app.png",
    liveUrl: null,
    githubUrl: "https://github.com/victor-nwoseh/task-manager"
  }
];

export default function Projects() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [visibleCount, setVisibleCount] = useState(4);
  
  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, projects.length));
  };
  
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <motion.div
      {...reveal}
      transition={{
        ...reveal.transition,
        delay: prefersReducedMotion ? 0 : 0.2,
      }}
      className="w-full space-y-16"
    >
      {visibleProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: prefersReducedMotion ? 0 : 0.3 + index * 0.1,
            duration: 0.5
          }}
          className="group/project flex flex-col-reverse md:flex-row gap-8 items-start rounded-xl p-6 -mx-6 border border-transparent transition-all duration-300 hover:backdrop-blur-xl hover:bg-white/5 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:border-white/10"
        >
          {/* Project Details */}
          <div className="flex-1 space-y-4">
            {/* Title with links */}
            <div className="flex items-start gap-3">
              <h3 className="text-xl font-semibold text-primary flex-1 leading-tight">
                {project.title}
              </h3>
              
              {/* External link icon */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors duration-300 flex-shrink-0"
                  aria-label="View live project"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              )}
              
              {/* GitHub link icon */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors duration-300 flex-shrink-0"
                  aria-label="View GitHub repository"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
            </div>

            {/* Description */}
            <p className="text-secondary text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.5 + techIndex * 0.05,
                    duration: 0.3
                  }}
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : {
                          x: 4,
                          transition: { duration: 0.2 }
                        }
                  }
                  className="group relative"
                >
                  <div
                    className="relative rounded-lg p-[1px] transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.3), rgba(226, 232, 240, 0.2))'
                    }}
                  >
                    <div
                      className="relative rounded-lg px-2.5 py-1.5 flex items-center gap-2 transition-all duration-300"
                      style={{
                        backgroundColor: 'rgba(15, 23, 42, 0.6)',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      <div 
                        className="absolute inset-0 bg-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ zIndex: 0 }}
                      />
                      <span className="text-xs font-light text-accent group-hover:text-background group-hover:font-semibold transition-all duration-300 relative z-10">
                        {tech}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Show More Button */}
      {hasMore && (
        <div className="flex justify-center pt-4">
          <motion.button
            onClick={handleShowMore}
            className="group relative"
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    x: 4,
                    transition: { duration: 0.2 }
                  }
            }
          >
            <div
              className="relative rounded-lg p-[1px] transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.3), rgba(226, 232, 240, 0.2))'
              }}
            >
              <div
                className="relative rounded-lg px-6 py-2.5 transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.6)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div 
                  className="absolute inset-0 bg-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ zIndex: 0 }}
                />
                <span className="relative z-10 text-sm font-medium text-white group-hover:text-background group-hover:font-bold transition-all duration-300">
                  SHOW MORE
                </span>
              </div>
            </div>
          </motion.button>
        </div>
      )}
    </motion.div>
  );
}

