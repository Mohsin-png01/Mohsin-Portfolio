import { Linkedin, Mail, MapPin, Phone, Github } from "lucide-react";
export const ContactSection = () => {
  return (
    <section id="contact" className="contact-enhanced py-28 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="contact-item flex items-start gap-6 p-6 rounded-xl">
                <div className="contact-icon p-4 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-lg mb-1">Email</h4>
                  <a
                    href="mailto:mohsinjawad592@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    mohsinjawad592@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-item flex items-start gap-6 p-6 rounded-xl">
                <div className="contact-icon p-4 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Phone</h4>
                  <a
                    href="tel:+923314728568"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +92 331 4728568
                  </a>
                </div>
              </div>
              <div className="contact-item flex items-start gap-6 p-6 rounded-xl">
                <div className="contact-icon p-4 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Location</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Lahore, Pakistan
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md">
              <h3 className="text-2xl font-semibold mb-8 text-center">
                Connect With Me
              </h3>
              <div className="flex justify-center gap-6">
                <a 
                  href="https://www.linkedin.com/in/mohsin-jawad-170b3a30b/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link p-5 hover:bg-primary/10 transition-all duration-300"
                >
                  <Linkedin size={24} className="text-primary" />
                </a>
                <a 
                  href="https://github.com/Mohsin-png01" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link p-5 hover:bg-primary/10 transition-all duration-300"
                >
                  <Github size={24} className="text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
