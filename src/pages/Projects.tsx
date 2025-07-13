
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, TrendingUp, BookOpen, Code, GraduationCap, Building } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Accenture - North America Data Analytics",
      period: "MORE Scholarship Recipient",
      role: "Graduate Student Researcher",
      description: "Strategic data analytics consulting project for North American market analysis.",
      achievements: [
        "Conducted comprehensive market analysis for North American operations",
        "Developed data-driven recommendations for business strategy",
        "Created analytical frameworks for decision making",
        "Performed competitive analysis and market research",
        "Delivered insights to support strategic planning"
      ],
      technologies: ["Business Analytics", "Market Research", "Strategic Planning", "Consulting", "Data Strategy"],
      metrics: { focus: "Sustainability", impact: "Environment and Material science" },
      icon: Code
    },
    {
      title: "Portable Universal Testing Machine",
      period: "Academic Project",
      role: "Graduate Student Researcher",
      description: "Developing a portable universal testing machine using Lead-Screw mechanism and Arduino using Feedback Control.",
      achievements: [
        "Designed, modeled, and prototyped a precision universal testing machine using SolidWorks intuitive Arduino-based HMI",
        "Fabricated critical components through 3D printing, incorporating lead screw mechanism using displacement sensors and custom grippers",
        "improving measurement accuracy & reducing variability by 20%, ensuring reliability for testing of tensile strength, fatigue and yield strength. ",
        "Reduced execution time by 30%,significantly enhancing test consistency and streamlining user interaction through the IDE.",
        "Validated the equipment to ASTM standards through rigorous calibration and iterative optimization"
      ],
      technologies: ["Arduino Programming", "Feedback Control", "3-D Printing", "Solidworks", "C/C++"],
      metrics: { focus: "Real-time", impact: "Product Development" },
      icon: Building
    },
    {
      title: "Weld Bead Monitoring via Image Recognition",
      period: "Academic Project",
      role: "Graduate Student Researcher",
      description: "Data-driven machine learning project for weld bead inspection using computer vision.",
      achievements: [
        "Designed and deployed a CNN and Vision Transformer-based image recognition system to automate weld bead inspection",
        "Achievied 96% accuracy in defect detection and reducing manual inspection time by 40%",
        "Integrated the AI model with robotic welding systems to enable real-time feedback minimizing rework by 50% ",
        "Leveraged vision transformer architectures to analyze weld bead thermal patterns and spatial inconsistencies",
        "Reducied material waste by 20% and enabled predictive maintenance of welding equipment, cutting downtime by 30%"
      ],
      technologies: ["AI/ML", "Computer Vision", "Manufacturing Operations", "Robotics", "Welding", "TIG/MIG/GMAW/GTAW Welding"],
      metrics: { focus: "Quality Assurance", impact: "Manufacturing Efficiency" },
      icon: Users
    },
    {
      title: "FEA of Laser Powder Bed Fusion process for Additive Manufacturing ",
      period: "Academic Project",
      role: "Data Analyst",
      description: "Comprehensive data analytics project focusing on retail and customer behavior analysis.",
      achievements: [
        "Analyzed customer purchasing patterns and behavior",
        "Developed insights for retail strategy optimization",
        "Created data visualizations and dashboards",
        "Performed statistical analysis on large datasets",
        "Generated actionable recommendations for business growth"
      ],
      technologies: ["Python", "Data Analytics", "Statistical Analysis", "Data Visualization", "Retail Analytics"],
      metrics: { scope: "Retail Analytics", impact: "Business Insights" },
      icon: TrendingUp
    },
  ];

  return (
    <Layout>
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">My Projects</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
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
                          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border-blue-400/30"
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
