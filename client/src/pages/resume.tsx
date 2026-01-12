import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Briefcase, Code, FolderOpen, Mail, Phone, MapPin, 
  Linkedin, Github, ExternalLink, GraduationCap, Award,
  Calendar, ChevronRight, Download, Send, Languages
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const profileData = {
  name: "Nestor Fabian Bernal",
  title: "Líder Comercial - Consultor Para La Industria",
  location: "Bogotá D.C, Colombia",
  email: "nfabianbp@hotmail.com",
  phone: "+57 316 049 3179",
  linkedin: "linkedin.com/in/nestorbernal",
  github: "",
  bio: "Ingeniero Mecánico especialista en Gestión de Proyectos y más de 13 años de experiencia en ventas consultivas, liderazgo comercial y desarrollo estratégico de negocios para soluciones técnicas, tecnología y proyectos industriales. Amplia trayectoria en las industrias petroquímica, Oil & Gas, energía, metalmecánica y alimentos, gestionando portafolios comerciales y proyectos de alto impacto.\n\nProfesional con sólidas habilidades de liderazgo, capaz de dirigir equipos comerciales y técnicos multidisciplinarios, definir e implementar estrategias comerciales y empresariales, y liderar procesos de preventa, negociación y cierre de contratos complejos. Experiencia en gestión de cuentas clave, expansión de mercados, análisis financiero-comercial y alineación de objetivos comerciales con la estrategia corporativa.\n\nOrientado a resultados, rentabilidad y crecimiento sostenible, con fuerte enfoque en la toma de decisiones estratégicas, generación de valor para el cliente y construcción de relaciones comerciales de largo plazo en entornos industriales altamente competitivos."
};

const experiences = [
  {
    id: 1,
    company: "GEA ANDINA SAS",
    role: "Senior Services Sales Engineer – Andean Cluster",
    period: "2022 - Actual",
    description: "Lideré la estrategia comercial de servicios para cuentas industriales clave, integrando soluciones técnicas, contratos de servicio y proyectos de valor agregado, contribuyendo al crecimiento sostenible del negocio y al fortalecimiento de relaciones comerciales de largo plazo.\n\nGestioné y desarrollé portafolios estratégicos de clientes en industrias como energía, alimentos y procesos industriales, actuando como enlace entre clientes, equipos técnicos y liderazgo regional, con enfoque en rentabilidad, retención y expansión de oportunidades.\n\nImpulsé iniciativas de liderazgo comercial y mejora estratégica, participando activamente en la definición de planes de ventas, forecast, priorización de mercados y alineación de objetivos comerciales con la estrategia corporativa, demostrando capacidad para roles de dirección y toma de decisiones de alto nivel.",
    technologies: ["Ventas Consultivas", "Gestión de Cuentas", "Estrategia Comercial", "Oil & Gas", "Energía"]
  },
  {
    id: 2,
    company: "StartupMX",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description: "Desarrollé aplicaciones móviles y web para clientes del sector fintech. Colaboré en un equipo ágil de 8 personas utilizando metodología Scrum.",
    technologies: ["React Native", "TypeScript", "MongoDB", "Firebase"]
  },
  {
    id: 3,
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2018 - 2020",
    description: "Creé interfaces de usuario interactivas para clientes corporativos. Mejoré la accesibilidad web y optimicé el rendimiento de múltiples sitios.",
    technologies: ["Vue.js", "JavaScript", "SASS", "Webpack"]
  }
];

const skills = [
  { name: "React / Next.js", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Node.js / Express", level: 88, category: "backend" },
  { name: "PostgreSQL / MongoDB", level: 85, category: "backend" },
  { name: "AWS / GCP", level: 80, category: "devops" },
  { name: "Docker / Kubernetes", level: 75, category: "devops" },
  { name: "Python", level: 70, category: "backend" },
  { name: "GraphQL", level: 78, category: "backend" }
];

const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico con procesamiento de pagos, gestión de inventario y panel de administración.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    link: "#"
  },
  {
    id: 2,
    name: "Task Management App",
    description: "Aplicación de gestión de tareas con colaboración en tiempo real, tableros Kanban y notificaciones.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    technologies: ["React", "Socket.io", "Redis", "Node.js"],
    link: "#"
  },
  {
    id: 3,
    name: "Analytics Dashboard",
    description: "Dashboard de análisis de datos con visualizaciones interactivas y reportes automatizados.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    technologies: ["React", "D3.js", "Python", "FastAPI"],
    link: "#"
  }
];

const education = [
  {
    degree: "Esp. Gestión de Proyectos",
    school: "BUAP - Universidad Autónoma de Puebla, MX",
    year: "2014"
  },
  {
    degree: "Prof. Ingeniería Mecánica",
    school: "Universidad Los Libertadores, CO",
    year: "2013"
  },
  {
    degree: "Tecn. Prof. Mecánica Industrial",
    school: "SENA - Escuela Técnica",
    year: "2006"
  }
];

const certifications = [
  "Entrenamiento Avanzado en Ventas SSS (México, 2019)",
  "Juice - Value Based Sales Training (México, 2014)"
];

export default function Resume() {
  const [activeTab, setActiveTab] = useState("about");
  const [skillFilter, setSkillFilter] = useState("all");

  const filteredSkills = skillFilter === "all" 
    ? skills 
    : skills.filter(s => s.category === skillFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-8 md:py-12">
        <motion.header 
          className="glass rounded-2xl p-6 md:p-10 mb-8 shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-2xl">
                NB
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white" />
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold mb-2" data-testid="text-name">
                <span className="gradient-text">{profileData.name}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4" data-testid="text-title">
                {profileData.title}
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {profileData.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4" />
                  {profileData.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4" />
                  {profileData.phone}
                </span>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <Button className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700" data-testid="button-download-cv">
                  <Download className="w-4 h-4" />
                  Descargar CV
                </Button>
                <Button variant="outline" className="gap-2" data-testid="button-contact">
                  <Send className="w-4 h-4" />
                  Contactar
                </Button>
                <Button variant="ghost" size="icon" data-testid="button-linkedin">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" data-testid="button-github">
                  <Github className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <TabsList className="w-full glass mb-8 p-1.5 h-auto flex-wrap">
              <TabsTrigger value="about" className="flex-1 gap-2 py-3 data-[state=active]:bg-white data-[state=active]:shadow-md" data-testid="tab-about">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Sobre Mí</span>
              </TabsTrigger>
              <TabsTrigger value="experience" className="flex-1 gap-2 py-3 data-[state=active]:bg-white data-[state=active]:shadow-md" data-testid="tab-experience">
                <Briefcase className="w-4 h-4" />
                <span className="hidden sm:inline">Experiencia</span>
              </TabsTrigger>
              <TabsTrigger value="skills" className="flex-1 gap-2 py-3 data-[state=active]:bg-white data-[state=active]:shadow-md" data-testid="tab-skills">
                <Code className="w-4 h-4" />
                <span className="hidden sm:inline">Habilidades</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex-1 gap-2 py-3 data-[state=active]:bg-white data-[state=active]:shadow-md" data-testid="tab-projects">
                <FolderOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Proyectos</span>
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <AnimatePresence mode="wait">
            <TabsContent value="about" className="mt-0">
              <motion.div
                key="about"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-6"
              >
                <div className="glass rounded-2xl p-6 card-hover">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-indigo-500" />
                    Perfil Profesional
                  </h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-justify" data-testid="text-bio">
                    {profileData.bio}
                  </p>
                </div>

                <div className="glass rounded-2xl p-6 card-hover">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-indigo-500" />
                    Educación
                  </h2>
                  <div className="space-y-4">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-indigo-500 pl-4">
                        <h3 className="font-medium" data-testid={`text-degree-${index}`}>{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.school}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <Calendar className="w-3 h-3" />
                          {edu.year}
                        </p>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-xl font-semibold mb-4 mt-14 flex items-center gap-2">
                    <Languages className="w-5 h-5 text-indigo-500" />
                    Idiomas
                  </h2>
                  <div className="space-y-2">
                    <div className="border-l-2 border-indigo-500 pl-4">
                      <h3 className="font-medium" data-testid="text-language-english">Inglés B2 - Intermedio</h3>
                    </div>
                    <div className="border-l-2 border-indigo-500 pl-4">
                      <h3 className="font-medium" data-testid="text-language-spanish">Español - Nativo</h3>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 card-hover md:col-span-2">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-indigo-500" />
                    Certificaciones
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {certifications.map((cert, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="px-4 py-2 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100"
                        data-testid={`badge-cert-${index}`}
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="experience" className="mt-0">
              <motion.div
                key="experience"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-6"
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={fadeInUp}
                    className="glass rounded-2xl p-6 card-hover"
                    data-testid={`card-experience-${exp.id}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                        <p className="text-indigo-600 font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="w-fit flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 whitespace-pre-line text-justify">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          className="bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="skills" className="mt-0">
              <motion.div
                key="skills"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass rounded-2xl p-6 mb-6">
                  <div className="flex flex-wrap gap-2">
                    {["all", "frontend", "backend", "devops"].map((filter) => (
                      <Button
                        key={filter}
                        variant={skillFilter === filter ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSkillFilter(filter)}
                        className={skillFilter === filter ? "bg-gradient-to-r from-indigo-500 to-purple-600" : ""}
                        data-testid={`button-filter-${filter}`}
                      >
                        {filter === "all" ? "Todas" : filter.charAt(0).toUpperCase() + filter.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <AnimatePresence mode="popLayout">
                    {filteredSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className="glass rounded-xl p-4 card-hover"
                        data-testid={`card-skill-${skill.name.replace(/\s+/g, '-').toLowerCase()}`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full skill-bar rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="projects" className="mt-0">
              <motion.div
                key="projects"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={fadeInUp}
                    className="glass rounded-2xl overflow-hidden card-hover group"
                    data-testid={`card-project-${project.id}`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                        <Button size="sm" variant="secondary" className="gap-1.5" data-testid={`button-view-project-${project.id}`}>
                          Ver Proyecto
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>

        <motion.footer 
          className="mt-12 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>© 2026 {profileData.name}. Diseñado con pasión.</p>
        </motion.footer>
      </div>
    </div>
  );
}
