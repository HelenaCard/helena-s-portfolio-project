import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/HelenaCard"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all duration-300 hover:glow group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/helena-cardoso-9b2b9b200/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all duration-300 hover:glow group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
          </div>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-primary" /> por Helena Cardoso
          </p>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
