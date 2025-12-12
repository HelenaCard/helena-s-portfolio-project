import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Irrigação IoT",
      description:
        "Sistema automatizado de irrigação utilizando sensores e microcontroladores para otimizar o uso de água em jardins e plantações.",
      tags: ["IoT", "C++", "Sensores", "Automação"],
      github: "https://github.com/HelenaCard",
    },
    {
      title: "E-book Gerado com IA",
      description:
        "Projeto explorando geração de conteúdo educacional utilizando inteligência artificial e processamento de linguagem natural.",
      tags: ["Python", "IA", "NLP"],
      github: "https://github.com/HelenaCard",
    },
    {
      title: "Clima Sudeste Game",
      description:
        "Jogo educativo sobre o clima da região sudeste do Brasil, desenvolvido para ensinar sobre meteorologia de forma interativa.",
      tags: ["JavaScript", "HTML", "CSS", "Game"],
      github: "https://github.com/HelenaCard",
    },
    {
      title: "Jogo da Velha",
      description:
        "Implementação clássica do jogo da velha com interface moderna e lógica de IA para jogar contra o computador.",
      tags: ["JavaScript", "Lógica", "UI"],
      github: "https://github.com/HelenaCard",
    },
    {
      title: "ToDo List com Python",
      description:
        "Aplicação de gerenciamento de tarefas desenvolvida em Python com interface de linha de comando e persistência de dados.",
      tags: ["Python", "CLI", "CRUD"],
      github: "https://github.com/HelenaCard",
    },
  ];

  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Meus <span className="text-gradient">Projetos</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-card rounded-xl border border-border hover:border-primary/50 overflow-hidden transition-all duration-300 hover-lift"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Ver ${project.title} no GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/HelenaCard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all duration-300 hover:glow text-foreground"
          >
            <span>Ver mais no GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
