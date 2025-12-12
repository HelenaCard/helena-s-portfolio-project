const Skills = () => {
  const skillGroups = [
    {
      category: "Linguagens",
      skills: ["Python", "JavaScript", "TypeScript", "C++"],
    },
    {
      category: "Web",
      skills: ["HTML", "CSS"],
    },
    {
      category: "Dados & Cloud",
      skills: ["Power BI", "Excel", "Azure"],
    },
    {
      category: "Ferramentas",
      skills: ["Git", "VS Code", "IoT"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-4 animate-fade-up">
            Tecnologias
          </h2>
          <div className="hairline animate-fade-up-delay-1" />
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {skillGroups.map((group, groupIndex) => (
            <div 
              key={groupIndex} 
              className="animate-fade-up"
              style={{ animationDelay: `${(groupIndex + 1) * 100}ms` }}
            >
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
