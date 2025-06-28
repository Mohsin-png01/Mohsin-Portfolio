import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
      >
        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-8">
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
                <span className="block mb-2 mt-20 animate-pulse"> Hi, I'm</span>
                <span className="text-blue-400 block text-shadow-lg animate-pulse" style={{animationDelay: '0.5s'}}>
                  Mohsin
                </span>
                <span className="ml-2 block bg-gradient-to-r from-purple-400 via-purple-500 to-red-500 bg-clip-text text-transparent animate-pulse" style={{animationDelay: '1s'}}>
                  Jawad
                </span>
              </h1>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-bounce"></div>
            </div>
            
            <div className="relative max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed animate-pulse" style={{animationDelay: '1.5s'}}>
                I craft engaging and responsive web experiences using modern technologies.
                Specializing in front-end development with 
                <span className="text-blue-400 font-semibold"> HTML, CSS, Bootstrap, and JavaScript</span>, 
                I design user-friendly interfaces that are both visually appealing and functional.
              </p>
              
              {/* Highlight box */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 rounded-lg -z-10"></div>
            </div>
            
            <div className="pt-8 animate-pulse" style={{animationDelay: '2s'}}>
              <a 
                href="#projects" 
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-10 w-4 h-4 border border-blue-400/30 rotate-45 animate-bounce"></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 border border-purple-400/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-20 w-3 h-3 bg-pink-400/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
      </section>
    </div>
  );
}