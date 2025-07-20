
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, TrendingUp, BookOpen, Code, GraduationCap, Building } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Salt River Project (SRP) - Carbonization of XLPE into Graphene",
      period: "MORE Scholarship Recipient",
      role: "Graduate Student Researcher",
      description: "Converting 300 Tons of Landill waste into Valuable Carbon for Energy Storage",
      achievements: [
        "Refined XLPE and prepared samples with various weight percentages of carbon black",
        "Retrieved Graphene from the Sample using Flash Joule Heating (FJH) Process",
        "Performed Raman Scpectroscopy analysis to find put yield percentage and characteristics of Graphene",
        "Designed and developed a prototype for Industrial Scale Graphene Production"
      ],
      technologies: ["Flash Joule Heating", "Sustainability", "Solidworks", "Raman Scpectroscopy"],
      metrics: { focus: "Sustainability", impact: "Environment and Material science" },
      icon: Code,
      images: [
        "/Images/Antelopes.png",
        "/Images/GC.png",
      ]
    },
    {
      title: "Portable Universal Testing Machine",
      period: "Academic Project",
      role: "Graduate Student Researcher",
      description: "Developing a portable universal testing machine using Lead-Screw mechanism and Arduino using Feedback Control",
      achievements: [
        "Designed, modeled, and prototyped a precision universal testing machine using SolidWorks intuitive Arduino-based HMI",
        "Fabricated critical components through 3D printing, incorporating lead screw mechanism using displacement sensors and custom grippers",
        "improving measurement accuracy & reducing variability by 20%, ensuring reliability for testing of tensile strength, fatigue & yield strength",
        "Reduced execution time by 30%,significantly enhancing test consistency and streamlining user interaction through the IDE",
        "Validated the equipment to ASTM standards through rigorous calibration and iterative optimization"
      ],
      technologies: ["Arduino Programming", "Feedback Control", "3-D Printing", "Solidworks", "C/C++", "PFMEA"],
      metrics: { focus: "Real-time", impact: "Product Development" },
      icon: Building,
      images: [
        "/Images/Antelopes.png",
        "/Images/GC.png",
      ]
    },
    {
      title: "Optimization of Power Delivery Networks",
      period: "Academic Project",
      role: "Graduate Student Researcher",
      description: "Thermomechanical Analysis of Power Delivery Networks in Wafers for improving Signal Integrity",
      achievements: [
        "Led an interdisciplinary project optimizing Power Delivery Networks (PDNs) to improve signal, power, and thermal performance",
        "Leveraged simulation in Ansys, KiCAD, and MATLAB to model the PDN and analyze key metrics like noise and voltage drops for targeted optimization",
        "Enhanced system performance by strategically placing varying decoupling capacitors, refined power planes to reduce noise & voltage drops",
        "Achieved a near-100% reduction in power rail noise, successfully mitigating 2% peak-to-peak voltage fluctuation to deliver stable 5V DC output"
      ],
      technologies: ["ANSYS", "KICAD", "MATLAB", "FEA", "Semiconductor Manufacturing", "PCB Design", "Power Delivery Networks (PDNs)"],
      metrics: { scope: "Semiconductor Manufacturing", impact: "Improving PDN Performance" },
      icon: TrendingUp,
      images: [
        "/Images/Antelopes.png",
        "/Images/GC.png",
      ]
    },
    {
      title: "Weld Bead Monitoring via Image Recognition",
      period: "Academic Project",
      role: "Graduate Student Researcher",
      description: "Data-driven machine learning project for weld bead inspection using computer vision and robotic welding",
      achievements: [
        "Designed and deployed a CNN and Vision Transformer-based image recognition system to automate weld bead inspection",
        "Achievied 96% accuracy in defect detection and reducing manual inspection time by 40%",
        "Integrated the AI model with robotic welding systems to enable real-time feedback minimizing rewelding by 50%",
        "Leveraged vision transformer architectures to analyze weld bead thermal patterns and spatial inconsistencies",
        "Reducied material waste by 20% and enabled predictive maintenance of welding equipment, cutting downtime by 30%"
      ],
      technologies: ["AI/ML", "Computer Vision", "Manufacturing Operations", "Robotics", "Welding", "TIG/MIG/GMAW/GTAW Welding"],
      metrics: { focus: "Quality Assurance", impact: "Manufacturing Efficiency" },
      icon: Users,
      images: [
        "/Images/Antelopes.png",
        "/Images/GC.png",
      ]
    },
    {
      title: "FEA of Laser Powder Bed Fusion process",
      period: "Academic Project",
      role: "Graduate Student Researcher",
      description: "Finite Element Analysis of Selective Laser Melting Process impacting various parameters during the build process",
      achievements: [
        "Built a 3D transient model in COMSOL integrating Heat Transfer and Structural Mechanics modules",
        "simulated coupled thermal-structural phenomena, including phase changes and thermal expansion of Ti-6Al-4V",
        "Correlated results with experimental data to validate accuracy, achieving <10% deviation in predicted vs. actual residual stresses",
        "Harnessed COMSOL’s Optimization Module to identify parameter sets reducing residual stress by 25% while maintaining part density"
      ],
      technologies: ["ANSYS", "COMSOL", "Structural Analysis", "Solidworks", "FEA", "Additive Manufacturing", "DFMEA"],
      metrics: { scope: "Customization", impact: "Improving Build Parameters" },
      icon: TrendingUp,
      images: [
        "/Images/Antelopes.png",
        "/Images/GC.png",
      ]
    },
  ];

  return (
    <Layout>
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-semibold text-white mb-6">My Projects</h1>
            <p className="text-xl text-white/80 max-w-5xl mx-auto">
              A showcase of impactful projects spanning solutions to problems in Real Time Science and Technology. 
              Each project demonstrates my ability to drive meaningful results across my domains building my expertise.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                    <div className="grid md:grid-cols-2 gap-6 mb-16" style={{marginBottom: "2rem"}}>
            {project.images.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={`Hobby ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
                      <CardTitle className="text-2xl text-white mb-2 flex items-center gap-3">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-white/60 mb-3">
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {project.period}
                        </span>
                        <span className="font-medium text-blue-300">{project.role}</span>
                      </div>
                      <p className="text-white/80 text-lg leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="text-white/70 flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary" 
                          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-black border-blue-400/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Impact Metrics</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value], i) => (
                        <div key={i} className="text-center">
                          <div className="text-xl font-bold text-white">{value}</div>
                          <div className="text-sm text-white/60 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
