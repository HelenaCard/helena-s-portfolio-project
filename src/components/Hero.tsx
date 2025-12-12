import { Github, Linkedin, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up tracking-wider">
          Olá, eu sou
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up-delay-1">
          <span className="text-gradient">Helena Cardoso</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up-delay-2 max-w-2xl mx-auto leading-relaxed">
          Estudante de <span className="text-foreground">Análise e Desenvolvimento de Sistemas</span> e{" "}
          <span className="text-foreground">Engenharia Elétrica</span>. 
          Apaixonada por tecnologia, IoT e soluções inovadoras.
        </p>

        <div className="flex gap-4 justify-center animate-fade-up-delay-3">
          <a
            href="https://github.com/HelenaCard"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all duration-300 hover:glow"
          >
            <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
            <span className="font-medium">GitHub</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/helena-cardoso-9b2b9b200/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg transition-all duration-300 hover:opacity-90 hover:glow"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 animate-float text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
