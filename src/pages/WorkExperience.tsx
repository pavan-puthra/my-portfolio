import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, TrendingUp, BookOpen, Code, Building2, GraduationCap, Cog, MonitorCog, ChartPie, Microscope, Columns3} from "lucide-react";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Mehcanical Engineer Intern",
      company: "Arizona State University",
      period: "July 2025 - Present",
      location: "Tempe, Arizona, USA",
      description: "Working on cutting-edge projects in sutainability for renewable energy and manufacturing.",
      achievements: [
        "Working on Building Automation for large scale Graphene Production",
        "Optimizing Operations to convert landill waste into Valuable Carbon for Energy Storage",
        "Designing and prototyping a factory scaled process for The Salt River Project (SRP)",
        "Performing Mterial Characterization and Raman Scpectroscopy analysis to find put characteristics of Graphene",
      ],
      technologies: ["Automation", "Design for Manufacturing","Energy Storage systems", "Material Characterization", "Raman Scpectroscopy", "Sustainability"],
      icon: Cog
    },
    {
      title: "Inventory Control Analyst Intern",
      company: "Sodexo",
      period: "August 2024 - May 2025",
      location: "Tempe, Arizona, USA",
      description: "Coordinated inventory operations and managed supply chain for the company with a focus on food safety.",
      achievements: [
        "Minimized spoilage and waste by 30% through real-time tracking using FIFO/FEFO systems for perishable goods",
        "Monitored expiry dates & demand forecasting aligned with shelf-life constraints by stock rotation & logistic operations",
        "Ensured strict adherence to food safety regulations by FDA and conducted bi-weekly audits maintaining traceability",
        "Reduced compliance-related stock write-offs by 25% for maintaining required goods in the inventory",
        "Optimized inventory management levels for seasonal/event-driven demand, reducing stockouts by 20%",
        "Lowered excess inventory costs by 15% through agile replenishment strategies and methodologies"
      ],
      technologies: ["Tableau", "Excel VBA", "Inventory Management", "Operations Management", "Team Leadership"],
      icon: ChartPie
    },
    {
      title: "Manufacturing Engineer Intern",
      company: "Shape Corp.",
      period: "May 2024 - August 2024",
      location: "Grand Haven, Michigan, USA",
      description: "Managed large-scale manufacturing operations and drove significant efficiency growth initiatives.",
      achievements: [
        "Worked shoulder-to-shoulder with plant leadership in a fast-paced environment to resolve operational challenges",
        "Applied root cause analysis and optimized workflows for production lines, enhancing loading time by 18% and OEE by 10%",
        "Mentored 20+ team members in deploying PLEX smart manufacturing HMI software, improving real-time monitoring of throughput ",
        "Reduced daily production costs by $15K by implementing Statistical Process Control (SPC) methodologies ",
        "Depricaiated defect rates by 22% and enhancing process stability by training and teaching pendant on FANUC robots"
      ],
      technologies: ["FANUC Robots", "Statistical Process Control", "Root Cause Analysis", "PLEX Smart Manufacturing", "Workflow Optimization"],
      icon: MonitorCog
    },
    {
      title: "Fleet management Assistant",
      company: "Arizona State University - Facilities Development and Management",
      period: "November 2023 - May 2024",
      location: "Tempe, Arizona, USA",
      description: "Spearheaded fleet operations and managed the university's EV fleet and maintenance.",
      achievements: [
        "Maximized EV battery efficiency, implementing advanced health monitoring protocols, automated maintenance, and predictive maintenance",
        "optimized charge cycles to off-peak hours, extending battery lifespan, recycling used batteries and tires, saving fleet cost by 25%",
        "Secured grants and led the expansion of university fleet by 50 EVs, overseeing the installation of 30+ EV charging stations",
        "Designed Parking layouts using AutoCAD for the facilities and operations fleet leading to a reduction of annual fuel costs by 40%",
        "Leveraged GPS and telematics data to analyze EV energy consumption patterns, improving route efficiency by 18%"
      ],
      technologies: ["AutoCAD", "Battery Managament Systems", "EV Charging Stations", "Fleet Management", "Energy Management", "Data Analytics"],
      icon: Columns3
    },
    {
      title: "Research and Development Intern",
      company: "ARCI - International Advanced Research Center for Materials and Additive Manufacturing",
      period: "June 2022 - August 2022",
      location: "Hyderabad, India",
      description: "Tested Multimaterial alloys  built using SLM technology and evaluated their durability and structural performance.",
      achievements: [
        "Constructed alloys and structural designs and applying SLM technology to perform durability and structural evaluations.",
        "Reduced feed input by 9% and achieved less porous metal structure through high dense filling and less moisture atmosphere",
        "Analyzed the metal physical properties and applied numerous tensile strength and fatigue tests on multiple build samples"
      ],
      technologies: ["Additive Manufacturing", "Selective Laser Sintering", "CATIA", "FEA", "ANSYS"],
      icon: Microscope
    }
  ];

  return (
    <Layout>
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-semibold text-white mb-6">Work Experience</h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              2+ years of professional experience spanning engineering, research, technology, and operations. 
              Building innovative solutions and driving meaningful impact across diverse industries.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-white mb-2 flex items-center gap-3">
                        <experience.icon className="h-6 w-6 text-blue-400" />
                        {experience.title}
                      </CardTitle>
                      <h3 className="text-xl text-blue-300 font-semibold mb-3">{experience.company}</h3>
                      <div className="flex items-center gap-4 text-white/60 mb-3">
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {experience.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {experience.location}
                        </span>
                      </div>
                      <p className="text-white/80 text-lg leading-relaxed">{experience.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
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
                      {experience.technologies.map((tech, i) => (
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WorkExperience;
