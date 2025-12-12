import { GraduationCap, Cpu, Lightbulb } from "lucide-react";

const About = () => {
  const education = [
    {
      icon: Cpu,
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "Cursando",
    },
    {
      icon: Lightbulb,
      title: "Engenharia Elétrica",
      institution: "Cursando",
    },
    {
      icon: GraduationCap,
      title: "Técnico em Eletrotécnica",
      institution: "Concluído",
    },
  ];

  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Sobre <span className="text-gradient">Mim</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Sou uma desenvolvedora em formação com forte interesse em{" "}
              <span className="text-foreground font-medium">tecnologia</span>,{" "}
              <span className="text-foreground font-medium">automação</span> e{" "}
              <span className="text-foreground font-medium">IoT</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Minha jornada combina conhecimentos de engenharia elétrica com 
              desenvolvimento de software, permitindo criar soluções completas 
              que integram hardware e software.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Busco constantemente aprender novas tecnologias e aplicá-las 
              em projetos práticos que resolvam problemas reais.
            </p>
          </div>

          <div className="space-y-4">
            {education.map((item, index) => (
              <div
                key={index}
                className="group p-5 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.institution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
