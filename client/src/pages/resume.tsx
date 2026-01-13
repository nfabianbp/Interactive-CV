import { useState } from "react";
import hydroelectricImg from "@assets/image_1768258004921.png";
import dashboardImg from "@assets/stock_images/industrial_process_a_5250e847.jpg";
import refineryImg from "@assets/stock_images/oil_refinery_pipes_i_d50c23a2.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Briefcase, Code, FolderOpen, Mail, Phone, MapPin, 
  Linkedin, Github, ExternalLink, GraduationCap, Award,
  Calendar, ChevronRight, Download, Send, Languages, LayoutDashboard,
  TrendingUp, Target, Globe, Building2
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
  name: "Néstor Fabián Bernal",
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
    role: "Senior Services Sales Engineer – Andean Cluster\n(México, Colombia, Perú, Panamá)",
    period: "2022 - Actual",
    description: "Lideré la estrategia comercial de servicios para cuentas industriales clave, integrando soluciones técnicas, contratos de servicio y proyectos de valor agregado, contribuyendo al crecimiento sostenible del negocio y al fortalecimiento de relaciones comerciales de largo plazo.\n\nGestioné y desarrollé portafolios estratégicos de clientes en industrias como energía, alimentos y procesos industriales, actuando como enlace entre clientes, equipos técnicos y liderazgo regional, con enfoque en rentabilidad, retención y expansión de oportunidades.\n\nImpulsé iniciativas de liderazgo comercial y mejora estratégica, participando activamente en la definición de planes de ventas, forecast, priorización de mercados y alineación de objetivos comerciales con la estrategia corporativa, demostrando capacidad para roles de dirección y toma de decisiones de alto nivel.",
    technologies: ["Ventas Consultivas", "Gestión de Cuentas", "Estrategia Comercial", "Oil & Gas", "Energía"]
  },
  {
    id: 2,
    company: "HILTI LATINOAMERICA COLOMBIA",
    role: "Key Account Manager O&G, Energía e Industria",
    period: "2019 - 2022",
    description: "Desarrollé y ejecuté estrategias de crecimiento de mercado para cuentas clave en las industrias de construcción, Oil & Gas y energía, posicionando soluciones técnicas de alto valor y fortaleciendo la presencia de la marca en proyectos estratégicos.\n\nLideré la gestión integral de cuentas clave, incluyendo planificación comercial, negociación de contratos marco y desarrollo de relaciones a nivel gerencial, coordinando equipos técnicos y comerciales para maximizar valor y fidelización.\n\nGestioné la coordinación con canales de distribución y cadena de suministro, alineando demanda, disponibilidad de producto y niveles de servicio para asegurar continuidad operativa, cumplimiento de acuerdos comerciales y satisfacción del cliente.",
    technologies: ["Gestión de Cuentas Clave", "Oil & Gas", "Energía", "Negociación", "Cadena de Suministro"]
  },
  {
    id: 3,
    company: "PFERD PANAMERICANA",
    role: "Representante de Ventas Industriales\n(Países Región Andina)",
    period: "2016 - 2018",
    description: "Lideré el desarrollo y expansión de mercado en la región, incrementando la cobertura comercial y el posicionamiento de la marca mediante la gestión estratégica de distribuidores, definición de planes de sell in y sell out, y ejecución de acciones comerciales alineadas con los objetivos regionales.\n\nImpulsé el crecimiento de ventas a través del trabajo directo con la fuerza de ventas y usuarios finales, realizando entrenamientos, demostraciones técnicas y acompañamiento en campo, fortaleciendo la propuesta de valor, la adopción de productos y la fidelización de clientes.",
    technologies: ["Desarrollo de Mercado", "Gestión de Distribuidores", "Ventas Industriales", "Capacitación Técnica"]
  }
];

const skills = [
  { name: "CRM Cloud", level: 90, category: "software" },
  { name: "SAP Business One", level: 85, category: "software" },
  { name: "Ms Office", level: 95, category: "software" },
  { name: "Power BI", level: 80, category: "software" },
  { name: "Workday", level: 75, category: "software" },
  { name: "Ms Outlook", level: 95, category: "software" }
];

const projects = [
  {
    id: 1,
    name: "Refrigeración Generación de Energía",
    description: "Reemplazo equipos de intercambio de calor para refrigeración turbinas de generación de energía de hidroeléctrica Amoya CO - ISAGEN.",
    image: hydroelectricImg,
    technologies: ["Energía", "Intercambio de Calor", "Hidroeléctrica"],
    link: "#"
  },
  {
    id: 2,
    name: "OPTIPARTNER® Secador",
    description: "Implementación primera solución digital de optimización de proceso de secado, para secador de emulsiones en planta de resinas MEXICHEM CO.",
    image: dashboardImg,
    technologies: ["Solución Digital", "Optimización", "Procesos Industriales"],
    link: "#"
  },
  {
    id: 3,
    name: "Soportería Modular para Tubería",
    description: "Venta de primer proyecto de soportería modular para tubería de proceso en construcción de buque Oceanográfico desarrollado por COTECMAR CO.",
    image: refineryImg,
    technologies: ["Construcción Naval", "Soportería Modular", "Oil & Gas"],
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-1 sm:px-3 md:px-6 py-4 md:py-12 w-full box-border" style={{ overflowX: 'hidden' }}>
        <motion.header 
          className="glass rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-10 mb-4 md:mb-8 shadow-xl"
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
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#1557cc] flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-2xl">
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
                <Button className="gap-2 bg-[#1557cc] hover:bg-[#1e3a8a]" data-testid="button-download-cv">
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
            <TabsList className="w-full glass mb-6 md:mb-8 p-1 md:p-1.5 h-auto grid grid-cols-5 gap-1">
              <TabsTrigger 
                value="about" 
                className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 py-2 md:py-3 px-1 md:px-3 text-xs md:text-sm font-medium transition-all data-[state=active]:bg-[#1557cc] data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg" 
                data-testid="tab-about"
              >
                <User className="w-4 h-4 flex-shrink-0" />
                <span className="text-[10px] md:text-sm leading-tight text-center">Sobre Mí</span>
              </TabsTrigger>
              <TabsTrigger 
                value="experience" 
                className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 py-2 md:py-3 px-1 md:px-3 text-xs md:text-sm font-medium transition-all data-[state=active]:bg-[#1557cc] data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg" 
                data-testid="tab-experience"
              >
                <Briefcase className="w-4 h-4 flex-shrink-0" />
                <span className="text-[10px] md:text-sm leading-tight text-center">Experiencia</span>
              </TabsTrigger>
              <TabsTrigger 
                value="skills" 
                className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 py-2 md:py-3 px-1 md:px-3 text-xs md:text-sm font-medium transition-all data-[state=active]:bg-[#1557cc] data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg" 
                data-testid="tab-skills"
              >
                <Code className="w-4 h-4 flex-shrink-0" />
                <span className="text-[10px] md:text-sm leading-tight text-center">Habilidades</span>
              </TabsTrigger>
              <TabsTrigger 
                value="projects" 
                className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 py-2 md:py-3 px-1 md:px-3 text-xs md:text-sm font-medium transition-all data-[state=active]:bg-[#1557cc] data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg" 
                data-testid="tab-projects"
              >
                <FolderOpen className="w-4 h-4 flex-shrink-0" />
                <span className="text-[10px] md:text-sm leading-tight text-center">Proyectos</span>
              </TabsTrigger>
              <TabsTrigger 
                value="dashboard" 
                className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 py-2 md:py-3 px-1 md:px-3 text-xs md:text-sm font-medium transition-all data-[state=active]:bg-[#1557cc] data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg" 
                data-testid="tab-dashboard"
              >
                <LayoutDashboard className="w-4 h-4 flex-shrink-0" />
                <span className="text-[10px] md:text-sm leading-tight text-center">Dashboard</span>
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
                className="grid md:grid-cols-2 gap-2 sm:gap-3 md:gap-6 w-full" style={{ maxWidth: '100%' }}
              >
                <div className="glass rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-6 card-hover min-w-0 w-full" style={{ overflow: 'hidden' }}>
                  <h2 className="text-sm sm:text-base md:text-xl font-semibold mb-2 md:mb-4 flex items-center gap-2">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#1557cc] flex-shrink-0" />
                    Perfil Profesional
                  </h2>
                  <p className="text-[11px] sm:text-xs md:text-base text-muted-foreground leading-relaxed md:text-justify w-full" style={{ wordBreak: 'break-word', hyphens: 'auto', overflowWrap: 'break-word' }} data-testid="text-bio">
                    {profileData.bio}
                  </p>
                </div>

                <div className="glass rounded-2xl p-6 card-hover">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#1557cc]" />
                    Educación
                  </h2>
                  <div className="space-y-4">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-[#1557cc] pl-4">
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
                    <Languages className="w-5 h-5 text-[#1557cc]" />
                    Idiomas
                  </h2>
                  <div className="space-y-2">
                    <div className="border-l-2 border-[#1557cc] pl-4">
                      <h3 className="font-medium" data-testid="text-language-english">Inglés B2 - Intermedio</h3>
                    </div>
                    <div className="border-l-2 border-[#1557cc] pl-4">
                      <h3 className="font-medium" data-testid="text-language-spanish">Español - Nativo</h3>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 card-hover md:col-span-2">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#1557cc]" />
                    Certificaciones
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {certifications.map((cert, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="px-4 py-2 text-sm bg-gradient-to-r from-blue-50 to-slate-50 border border-[#1557cc]/20"
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
                        <h3 className="text-xl font-semibold text-foreground whitespace-pre-line">{exp.role}</h3>
                        <p className="text-[#1557cc] font-medium">{exp.company}</p>
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
                          className="bg-[#1557cc]/10 text-[#1557cc] hover:bg-[#1557cc]/20"
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
                    {["all", "software"].map((filter) => (
                      <Button
                        key={filter}
                        variant={skillFilter === filter ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSkillFilter(filter)}
                        className={skillFilter === filter ? "bg-[#1557cc]" : ""}
                        data-testid={`button-filter-${filter}`}
                      >
                        {filter === "all" ? "Todas" : "Software"}
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

            <TabsContent value="dashboard" className="mt-0">
              <motion.div
                key="dashboard"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <motion.div 
                    className="glass rounded-2xl p-5 card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-[#1557cc]">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm text-muted-foreground">Años Exp.</span>
                    </div>
                    <p className="text-3xl font-bold gradient-text">13+</p>
                  </motion.div>

                  <motion.div 
                    className="glass rounded-2xl p-5 card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600">
                        <Building2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm text-muted-foreground">Empresas</span>
                    </div>
                    <p className="text-3xl font-bold text-green-600">{experiences.length}</p>
                  </motion.div>

                  <motion.div 
                    className="glass rounded-2xl p-5 card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm text-muted-foreground">Proyectos</span>
                    </div>
                    <p className="text-3xl font-bold text-orange-600">{projects.length}</p>
                  </motion.div>

                  <motion.div 
                    className="glass rounded-2xl p-5 card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm text-muted-foreground">Países</span>
                    </div>
                    <p className="text-3xl font-bold text-blue-600">4</p>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    className="glass rounded-2xl p-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-[#1557cc]" />
                      Trayectoria Profesional
                    </h3>
                    <div className="space-y-4">
                      {experiences.map((exp, index) => (
                        <div key={exp.id} className="flex items-start gap-3">
                          <div className="w-3 h-3 rounded-full bg-[#1557cc] mt-1.5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex justify-between items-start flex-wrap gap-2">
                              <p className="font-medium text-sm">{exp.company}</p>
                              <Badge variant="outline" className="text-xs">{exp.period}</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">{exp.role.split('\n')[0]}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="glass rounded-2xl p-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-[#1557cc]" />
                      Dominio de Herramientas
                    </h3>
                    <div className="space-y-3">
                      {skills.map((skill, index) => (
                        <div key={skill.name}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full skill-bar rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.8, delay: 0.4 + index * 0.05 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div 
                    className="glass rounded-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-[#1557cc]" />
                      Formación
                    </h3>
                    <div className="space-y-3">
                      {education.map((edu, index) => (
                        <div key={index} className="border-l-2 border-[#1557cc] pl-3">
                          <p className="font-medium text-sm">{edu.degree}</p>
                          <p className="text-xs text-muted-foreground">{edu.school}</p>
                          <p className="text-xs text-[#1557cc]">{edu.year}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="glass rounded-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#1557cc]" />
                      Certificaciones
                    </h3>
                    <div className="space-y-2">
                      {certifications.map((cert, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#1557cc]" />
                          <p className="text-sm">{cert}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="glass rounded-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Languages className="w-5 h-5 text-[#1557cc]" />
                      Idiomas
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Español</span>
                          <span className="text-[#1557cc]">Nativo</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full skill-bar rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 0.55 }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Inglés</span>
                          <span className="text-[#1557cc]">B2 - Intermedio</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full skill-bar rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "70%" }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  className="glass rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                >
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <FolderOpen className="w-5 h-5 text-[#1557cc]" />
                    Proyectos Destacados
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                      <div key={project.id} className="flex items-start gap-3 p-3 rounded-xl bg-white/50">
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                        />
                        <div>
                          <p className="font-medium text-sm">{project.name}</p>
                          <p className="text-xs text-muted-foreground line-clamp-2">{project.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  className="glass rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#1557cc]" />
                    Industrias de Experiencia
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Oil & Gas", "Energía", "Petroquímica", "Alimentos", "Metalmecánica", "Construcción Naval", "Hidroeléctrica"].map((industry, index) => (
                      <Badge 
                        key={index}
                        className="px-4 py-2 bg-[#1557cc] text-white"
                      >
                        {industry}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
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
