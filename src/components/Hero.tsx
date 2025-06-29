
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <img 
                src="/lovable-uploads/TW.jpg" 
                alt="Pavan Puthra Reddy Thangella"
                className="relative w-96 h-96 object-cover rounded-full border-4 border-white/20 shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technology</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Business</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed"> 
              Mechanical Engineer designed to build systems where efficiency meets innovation with experience built in food, science and Technology.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12">
              <Link to="/projects">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg group">
                  View My Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <a href="mailto:pthangel@asu.edu">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg">
                  Get In Touch
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
