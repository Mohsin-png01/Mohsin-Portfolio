import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Site",
    description: "A beautiful ecommerce website built using MERN Stack with modern design and seamless user experience.",
    image: "/project1.png", 
    tags: ["MERN", "ReactJs", "MongoDB"],
    githubUrl: "https://github.com/Mohsin-png01/E-commerce-FYP.git",
  },
  {
    id: 2,
    title: "WhatsApp Clone",
    description: "Feature-rich WhatsApp clone built with Flutter, featuring beautiful UI and smooth animations.",
    image: "/project2.png", 
    tags: ["Flutter", "Dart"],
    githubUrl: "https://github.com/Mohsin-png01/whatsappclone-in-flutter.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-full max-w-sm border border-border/50"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#1f2937"/>
                        <text x="50%" y="50%" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="16">
                          Project Image
                        </text>
                      </svg>
                    `)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-center group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 text-center leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex justify-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-all duration-300 hover:scale-105"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Mohsin-png01" // Updated to your actual GitHub username
          >
            View All Projects
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};