import { Github, Linkedin, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
      {/* Background image with subtle overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-6 animate-fade-up">
          Olá, eu sou
        </p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-up-delay-1 text-foreground">
          Helena Cardoso
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-up-delay-2 max-w-xl mx-auto leading-relaxed">
          Estudante de <span className="text-foreground font-medium">Análise e Desenvolvimento de Sistemas</span> e{" "}
          <span className="text-foreground font-medium">Engenharia Elétrica</span>. 
          Apaixonada por tecnologia, IoT e soluções inovadoras.
        </p>

        <div className="flex gap-4 justify-center animate-fade-up-delay-3">
          <a
            href="https://github.com/HelenaCard"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 border border-border hover:border-primary rounded-lg transition-all duration-300 hover-lift"
          >
            <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
            <span className="font-medium">GitHub</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/helena-cardoso-9b2b9b200/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all duration-300 hover:opacity-90 hover-lift"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-10 text-muted-foreground hover:text-primary transition-colors animate-fade-up-delay-4"
        aria-label="Rolar para baixo"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
