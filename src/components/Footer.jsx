import { ArrowUp, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-black border-t border-white ">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4">
          {/* Social links */}
          <div className="flex gap-5">
            <a
              href="https://github.com/Mohsin-png01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohsin-jawad-170b3a30b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Footer text */}
          <div className="flex flex-col items-center">
            <p className="text-[15px] text-white font-medium tracking-wide">
              M O H S I N &nbsp;&nbsp; J A W A D
            </p>
            <p className="text-[15px] text-white mt-1">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* Back-to-top button */}
          <a
            href="#hero"
            className="text-white mt-2"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
