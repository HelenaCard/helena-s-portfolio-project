import avatar from "@/assets/avatar.jpg";

const About = () => {
  const education = [
    {
      title: "Análise e Desenvolvimento de Sistemas",
      status: "Cursando",
    },
    {
      title: "Engenharia Elétrica",
      status: "Cursando",
    },
    {
      title: "Técnico em Eletrotécnica",
      status: "Concluído",
    },
  ];

  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-4 animate-fade-up">
            Sobre
          </h2>
          <div className="hairline animate-fade-up-delay-1" />
        </div>

        <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
          {/* Avatar */}
          <div className="animate-fade-up-delay-1">
            <img 
              src={avatar} 
              alt="Helena Cardoso" 
              className="w-40 h-40 md:w-full md:h-auto rounded-lg object-cover mx-auto md:mx-0"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4 animate-fade-up-delay-2">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou uma desenvolvedora em formação com forte interesse em{" "}
                <span className="text-foreground">tecnologia</span>,{" "}
                <span className="text-foreground">automação</span> e{" "}
                <span className="text-foreground">IoT</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Minha jornada combina conhecimentos de engenharia elétrica com 
                desenvolvimento de software, permitindo criar soluções completas 
                que integram hardware e software.
              </p>
            </div>

            {/* Education list */}
            <div className="space-y-3 animate-fade-up-delay-3">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Formação
              </h3>
              {education.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-border group hover:border-primary transition-colors"
                >
                  <span className="font-display font-medium text-foreground">
                    {item.title}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
