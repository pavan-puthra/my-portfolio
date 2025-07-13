
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Design & FEA",
      skills: ["AutoCAD", "Ansys", "CATIA", "COMSOL", "Fusion 360", "GD&T", "Revit", "SolidWorks","Siemens NX"]
    },
    {
      category: "Operations & Strategies",
      skills: ["Additive Manufacturing", "DFMEA", "DMAIC", "Lean Six Sigma", "Lean 5S","Manufacturing Operations", "Workflow Optimization"]
    },
    {
      category: "Analytics & Programming",
      skills: ["Excel", "Github", "Google Cloud", "JMP pro", "Machine Learning", "Minitab", "PLC Programming", "Power BI", "Python", "SQL", "Tableau"]
    },
    {
      category: "Leadership & Management",
      skills: ["Inventory Management", "Product Management", "Team Leadership", "Warehouse Management"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Technical Skills & Expertise</h2>
          <p className="text-xl text-white/80">A comprehensive skill set spanning Design, Technology and Leadership</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-black border-blue-400/30 hover:border-blue-400/50 transition-colors px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
