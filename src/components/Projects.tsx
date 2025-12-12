import { ArrowUpRight } from "lucide-react";
import projectPlaceholder from "@/assets/project-placeholder.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Irrigação IoT",
      description:
        "Sistema automatizado de irrigação utilizando sensores e microcontroladores para otimizar o uso de água.",
      tags: ["IoT", "C++", "Automação"],
      github: "https://github.com/HelenaCard",
    },
    {
      title: "E-book Gerado com IA",
      description:
        "Projeto explorando geração de conteúdo educacional utilizando inteligência artificial.",
      tags: ["Python", "IA", "NLP"],
      github: "https://github.com/HelenaCard",
    },
    {
      title: "Clima Sudeste Game",
      description:
        "Jogo educativo sobre o clima da região sudeste do Brasil, desenvolvido de forma interativa.",
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/HelenaCard",
    },
    {
      title: "Jogo da Velha",
      description:
        "Implementação clássica do jogo da velha com interface moderna e lógica de IA.",
      tags: ["JavaScript", "Lógica"],
      github: "https://github.com/HelenaCard",
    },
    {
      title: "ToDo List Python",
      description:
        "Aplicação de gerenciamento de tarefas desenvolvida em Python com persistência de dados.",
      tags: ["Python", "CLI"],
      github: "https://github.com/HelenaCard",
    },
  ];

  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-4 animate-fade-up">
            Projetos
          </h2>
          <div className="hairline animate-fade-up-delay-1" />
        </div>

        {/* Projects list */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-6 border-b border-border hover:border-primary transition-colors animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-3 max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs text-muted-foreground"
                      >
                        {tag}{tagIndex < project.tags.length - 1 && " · "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View more */}
        <div className="mt-12 animate-fade-up" style={{ animationDelay: "600ms" }}>
          <a
            href="https://github.com/HelenaCard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:opacity-70 transition-opacity link-underline"
          >
            <span className="font-medium">Ver todos os projetos no GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
