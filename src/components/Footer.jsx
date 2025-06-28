import { ArrowUp, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="footer-enhanced py-12 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          {/* Social links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/Mohsin-png01"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social text-white hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohsin-jawad-170b3a30b/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social text-white hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* Footer text */}
          <div className="flex flex-col items-center">
            <p className="footer-text text-lg text-white font-medium tracking-wider">
              M O H S I N &nbsp;&nbsp; J A W A D
            </p>
            <p className="footer-text text-sm text-white/80 mt-2">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* Back-to-top button */}
          <a
            href="#hero"
            className="footer-back-to-top mt-4 text-white hover:text-primary transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};