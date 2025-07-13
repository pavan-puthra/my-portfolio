
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Cog, Code } from "lucide-react";

const About = () => {
  const experiences = [
    {
      icon: Cog,
      title: "Technical Experience",
      description: "Former Manufacturing Engineer Intern from Shape Corp. and Inventory Analyst Intern from Sodexo with expertise in Process Improvement and Inventory management along with robotic process automation.",
      highlight: ""
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "A research-oriented Mechanical Engineer from Arizona State University, specializing in Manufacturing and Automation. Proficient in designing and optimizing automations using lean manufacturing principles.",
      highlight: ""
    },
    {
      icon: Code,
      title: "Data Driven ",
      description: "Proficient in Python and SQL for data analysis, visualization and building Machine Learning models for process improvement and efficiency optimization.",
      highlight: ""
    },
    {
      icon: Users,
      title: "Program Management",
      description: "Led teams of 25+ people, managed operations across multiple events, and drove significant growth initivatives in management and operations at Sodexo.",
      highlight: ""
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-6">About Me</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Man & Machine enthusiast trying to create and solve science problems with a graduate degree in Mechanical Engineering from Arizona State University. 
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <exp.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <span className="text-sm text-blue-300 font-medium">{exp.highlight}</span>
                    </div>
                    <p className="text-white/70 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
