import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Mohsin Resume.pdf';
    link.download = 'Mohsin_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about-enhanced py-28 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
              Passionate Web Developer & App Developer
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              With over 8 months of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="#contact" className="cosmic-button px-8 py-3 text-center">
                Get In Touch
              </a>

              <button
                onClick={handleDownloadCV}
                className="px-8 py-3 rounded-full border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary/80 transition-all duration-300 hover:shadow-lg"
              >
                Download CV
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="about-card gradient-border p-8">
              <div className="flex items-start gap-6">
                <div className="about-icon p-4 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-xl mb-2">Web Development</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-card gradient-border p-8">
              <div className="flex items-start gap-6">
                <div className="about-icon p-4 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-xl mb-2">App Development</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Building seamless apps and intuitive experiences with Flutter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
