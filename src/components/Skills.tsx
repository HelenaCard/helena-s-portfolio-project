const Skills = () => {
  const skills = [
    { name: "Python", category: "Linguagem" },
    { name: "JavaScript", category: "Linguagem" },
    { name: "TypeScript", category: "Linguagem" },
    { name: "C++", category: "Linguagem" },
    { name: "HTML", category: "Web" },
    { name: "CSS", category: "Web" },
    { name: "Power BI", category: "Dados" },
    { name: "Excel", category: "Dados" },
    { name: "Azure", category: "Cloud" },
    { name: "Git", category: "Ferramenta" },
    { name: "VS Code", category: "Ferramenta" },
    { name: "IoT", category: "Hardware" },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Tecnologias</span> & Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative p-5 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift text-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
              <h3 className="font-mono font-semibold text-foreground mb-1 relative z-10">
                {skill.name}
              </h3>
              <p className="text-xs text-muted-foreground relative z-10">
                {skill.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
