import { useState } from "react";
import hydroelectricImg from "@assets/image_1768258004921.png";
import dashboardImg from "@assets/stock_images/industrial_process_a_5250e847.jpg";
import refineryImg from "@assets/stock_images/oil_refinery_pipes_i_d50c23a2.jpg";
import soporteriaImg from "@assets/image_1768269179998.png";
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

const translations = {
  es: {
    langButton: "English",
    downloadCV: "Descargar CV",
    contact: "Contactar",
    aboutMe: "Sobre Mí",
    experience: "Experiencia",
    skills: "Habilidades",
    projects: "Proyectos",
    dashboard: "Dashboard",
    profile: "Perfil Profesional",
    educationLabel: "Formación Académica",
    certifications: "Certificaciones",
    softwareTools: "Herramientas de Software",
    allSkills: "Todas",
    software: "Software",
    viewProject: "Ver Proyecto",
    yearsExp: "Años de Experiencia",
    companies: "Empresas",
    importantProjects: "Proyectos más importantes",
    countries: "Países",
    profTrajectory: "Trayectoria Profesional",
    skillsLevel: "Nivel de Competencias",
    industriesLabel: "Industrias de Experiencia",
    featuredProjects: "Proyectos Destacados",
    languages: "Idiomas",
    englishLevel: "Inglés B2 - Intermedio",
    spanishLevel: "Español - Nativo",
    profileData: {
      name: "Néstor Fabián Bernal",
      title: "Líder Comercial - Consultor Para La Industria",
      location: "Bogotá D.C, Colombia",
      email: "nfabianbp@hotmail.com",
      phone: "+57 316 049 3179",
      bio: "Ingeniero Mecánico especialista en Gestión de Proyectos y más de 13 años de experiencia en ventas consultivas, liderazgo comercial y desarrollo estratégico de negocios para soluciones técnicas, tecnología y proyectos industriales. Amplia trayectoria en las industrias petroquímica, Oil & Gas, energía, metalmecánica y alimentos, gestionando portafolios comerciales y proyectos de alto impacto.\n\nProfesional con sólidas habilidades de liderazgo, capaz de dirigir equipos comerciales y técnicos multidisciplinarios, definir e implementar estrategias comerciales y empresariales, y liderar procesos de preventa, negociación y cierre de contratos complejos. Experiencia en gestión de cuentas clave, expansión de mercados, análisis financiero-comercial y alineación de objetivos comerciales con la estrategia corporativa.\n\nOrientado a resultados, rentabilidad y crecimiento sostenible, con fuerte enfoque en la toma de decisiones estratégicas, generación de valor para el cliente y construcción de relaciones comerciales de largo plazo en entornos industriales altamente competitivos."
    },
    experiences: [
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
    ],
    projectsList: [
      {
        id: 1,
        name: "Refrigeración Generación de Energía",
        description: "Remplazo e implementación de intercambiadores de calor de última generación para refrigeración óptima de las turbinas de generación de energía en hidroeléctrica Amoya CO.",
        image: hydroelectricImg,
        technologies: ["Energía", "Intercambio de Calor", "Hidroeléctrica"],
        link: "#"
      },
      {
        id: 2,
        name: "OPTIPARTNER® Secador",
        description: "Implementación de primera solución digital de optimización de proceso de secado en la región, para los secadores de emulsión de la planta de resinas - MEXICHEM CO.",
        image: dashboardImg,
        technologies: ["Solución Digital", "Optimización", "Procesos Industriales"],
        link: "#"
      },
      {
        id: 3,
        name: "Soportería Modular para Tubería",
        description: "Venta de primer proyecto de soportería modular para tubería de proceso en construcción de buque Oceanográfico desarrollado por COTECMAR CO.",
        image: soporteriaImg,
        technologies: ["Construcción Naval", "Soportería Modular", "Oil & Gas"],
        link: "#"
      }
    ],
    educationList: [
      { degree: "Esp. Gestión de Proyectos", school: "BUAP - Universidad Autónoma de Puebla, MX", year: "2014" },
      { degree: "Prof. Ingeniería Mecánica", school: "Universidad Los Libertadores, CO", year: "2013" },
      { degree: "Tecn. Prof. Mecánica Industrial", school: "SENA - Escuela Técnica", year: "2006" }
    ],
    certificationsList: [
      "Entrenamiento Avanzado en Ventas SSS (México, 2019)",
      "Juice - Value Based Sales Training (México, 2014)"
    ],
    industries: ["Oil & Gas", "Energía", "Petroquímica", "Alimentos", "Metalmecánica", "Construcción Naval", "Hidroeléctrica"]
  },
  en: {
    langButton: "Español",
    downloadCV: "Download CV",
    contact: "Contact",
    aboutMe: "About Me",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    dashboard: "Dashboard",
    profile: "Professional Profile",
    educationLabel: "Education",
    certifications: "Certifications",
    languages: "Languages",
    englishLevel: "English B2 - Intermediate",
    spanishLevel: "Spanish - Native",
    softwareTools: "Software Tools",
    allSkills: "All",
    software: "Software",
    viewProject: "View Project",
    yearsExp: "Years of Experience",
    companies: "Companies",
    importantProjects: "Key Projects",
    countries: "Countries",
    profTrajectory: "Professional Trajectory",
    skillsLevel: "Skill Levels",
    industriesLabel: "Industries",
    featuredProjects: "Featured Projects",
    profileData: {
      name: "Néstor Fabián Bernal",
      title: "Commercial Leader - Industry Consultant",
      location: "Bogotá D.C, Colombia",
      email: "nfabianbp@hotmail.com",
      phone: "+57 316 049 3179",
      bio: "Mechanical Engineer specialized in Project Management with over 13 years of experience in consultative sales, commercial leadership, and strategic business development for technical solutions, technology, and industrial projects. Extensive background in the petrochemical, Oil & Gas, energy, metalworking, and food industries, managing commercial portfolios and high-impact projects.\n\nProfessional with strong leadership skills, capable of leading multidisciplinary commercial and technical teams, defining and implementing commercial and business strategies, and leading presales, negotiation, and complex contract closing processes. Experience in key account management, market expansion, financial-commercial analysis, and aligning commercial objectives with corporate strategy.\n\nResults-oriented, focused on profitability and sustainable growth, with a strong emphasis on strategic decision-making, customer value generation, and building long-term commercial relationships in highly competitive industrial environments."
    },
    experiences: [
      {
        id: 1,
        company: "GEA ANDINA SAS",
        role: "Senior Services Sales Engineer – Andean Cluster\n(Mexico, Colombia, Peru, Panama)",
        period: "2022 - Present",
        description: "Led the commercial services strategy for key industrial accounts, integrating technical solutions, service contracts, and value-added projects, contributing to sustainable business growth and strengthening long-term commercial relationships.\n\nManaged and developed strategic client portfolios in industries such as energy, food, and industrial processes, acting as a liaison between clients, technical teams, and regional leadership, with a focus on profitability, retention, and opportunity expansion.\n\nDrove commercial leadership initiatives and strategic improvement, actively participating in defining sales plans, forecasting, market prioritization, and aligning commercial objectives with corporate strategy, demonstrating capacity for management roles and high-level decision-making.",
        technologies: ["Consultative Sales", "Account Management", "Commercial Strategy", "Oil & Gas", "Energy"]
      },
      {
        id: 2,
        company: "HILTI LATINOAMERICA COLOMBIA",
        role: "Key Account Manager O&G, Energy & Industry",
        period: "2019 - 2022",
        description: "Developed and executed market growth strategies for key accounts in the construction, Oil & Gas, and energy industries, positioning high-value technical solutions and strengthening brand presence in strategic projects.\n\nLed comprehensive key account management, including commercial planning, framework contract negotiation, and relationship development at management level, coordinating technical and commercial teams to maximize value and customer loyalty.\n\nManaged coordination with distribution channels and supply chain, aligning demand, product availability, and service levels to ensure operational continuity, compliance with commercial agreements, and customer satisfaction.",
        technologies: ["Key Account Management", "Oil & Gas", "Energy", "Negotiation", "Supply Chain"]
      },
      {
        id: 3,
        company: "PFERD PANAMERICANA",
        role: "Industrial Sales Representative\n(Andean Region Countries)",
        period: "2016 - 2018",
        description: "Led market development and expansion in the region, increasing commercial coverage and brand positioning through strategic distributor management, defining sell-in and sell-out plans, and executing commercial actions aligned with regional objectives.\n\nDrove sales growth through direct work with sales force and end users, conducting training, technical demonstrations, and field support, strengthening the value proposition, product adoption, and customer loyalty.",
        technologies: ["Market Development", "Distributor Management", "Industrial Sales", "Technical Training"]
      }
    ],
    projectsList: [
      {
        id: 1,
        name: "Power Generation Cooling",
        description: "Replacement and implementation of state-of-the-art heat exchangers for optimal cooling of power generation turbines at Amoya Hydroelectric Plant, CO.",
        image: hydroelectricImg,
        technologies: ["Energy", "Heat Exchange", "Hydroelectric"],
        link: "#"
      },
      {
        id: 2,
        name: "OPTIPARTNER® Dryer",
        description: "Implementation of the first digital drying process optimization solution in the region, for the emulsion dryers at the resins plant - MEXICHEM CO.",
        image: dashboardImg,
        technologies: ["Digital Solution", "Optimization", "Industrial Processes"],
        link: "#"
      },
      {
        id: 3,
        name: "Modular Pipe Support System",
        description: "Sale of the first modular pipe support project for process piping in the construction of an Oceanographic vessel developed by COTECMAR CO.",
        image: soporteriaImg,
        technologies: ["Naval Construction", "Modular Supports", "Oil & Gas"],
        link: "#"
      }
    ],
    educationList: [
      { degree: "Spec. Project Management", school: "BUAP - Autonomous University of Puebla, MX", year: "2014" },
      { degree: "B.Eng. Mechanical Engineering", school: "Universidad Los Libertadores, CO", year: "2013" },
      { degree: "Tech. Industrial Mechanics", school: "SENA - Technical School", year: "2006" }
    ],
    certificationsList: [
      "Advanced Sales Training SSS (Mexico, 2019)",
      "Juice - Value Based Sales Training (Mexico, 2014)"
    ],
    industries: ["Oil & Gas", "Energy", "Petrochemical", "Food", "Metalworking", "Naval Construction", "Hydroelectric"]
  }
};

const skills = [
  { name: "CRM Cloud", level: 90, category: "software" },
  { name: "SAP Business One", level: 85, category: "software" },
  { name: "Ms Office", level: 95, category: "software" },
  { name: "Power BI", level: 80, category: "software" },
  { name: "Workday", level: 75, category: "software" },
  { name: "Ms Outlook", level: 95, category: "software" }
];

export default function Resume() {
  const [activeTab, setActiveTab] = useState("about");
  const [skillFilter, setSkillFilter] = useState("all");
  const [language, setLanguage] = useState<"es" | "en">("es");
  
  const t = translations[language];

  const filteredSkills = skillFilter === "all" 
    ? skills 
    : skills.filter(s => s.category === skillFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
      </div>

      {/* Fixed header and tabs for desktop */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-slate-50/98 via-white/98 to-indigo-50/98 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <header className="glass rounded-2xl p-10 shadow-xl mb-4">
            <div className="flex items-center gap-10">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-40 h-40 rounded-full bg-[#1557cc] flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
                  NB
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white" />
              </motion.div>

              <div className="flex-1 text-left">
                <h1 className="text-5xl font-bold mb-2" data-testid="text-name">
                  <span className="gradient-text">{t.profileData.name}</span>
                </h1>
                <p className="text-2xl text-muted-foreground mb-4" data-testid="text-title">
                  {t.profileData.title}
                </p>
                
                <div className="flex flex-wrap justify-start gap-3 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {t.profileData.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-4 h-4" />
                    {t.profileData.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-4 h-4" />
                    {t.profileData.phone}
                  </span>
                </div>

                <div className="flex flex-wrap justify-start gap-3">
                  <Button className="gap-2 bg-[#1557cc] hover:bg-[#1e3a8a] cursor-pointer" data-testid="button-download-cv">
                    <Download className="w-4 h-4" />
                    {t.downloadCV}
                  </Button>
                  <a href="https://wa.me/573160493179" target="_blank" rel="noopener noreferrer">
                    <Button className="gap-2 bg-[#1557cc] hover:bg-[#1e3a8a] cursor-pointer" data-testid="button-contact">
                      <Send className="w-4 h-4" />
                      {t.contact}
                    </Button>
                  </a>
                  <Button className="gap-2 bg-[#1557cc] hover:bg-[#1e3a8a] cursor-pointer" data-testid="button-language" onClick={() => setLanguage(language === "es" ? "en" : "es")}>
                    <Globe className="w-4 h-4" />
                    {t.langButton}
                  </Button>
                  <a href="https://www.linkedin.com/in/fabian-bernal-1032" target="_blank" rel="noopener noreferrer" data-testid="button-linkedin" className="flex items-center justify-center h-9 w-9 rounded-md bg-[#1557cc] hover:bg-[#1e3a8a] cursor-pointer transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </header>
          <div className="glass rounded-xl p-1.5">
            <div className="grid grid-cols-5 gap-1">
              {[
                { value: "about", icon: User, label: t.aboutMe },
                { value: "experience", icon: Briefcase, label: t.experience },
                { value: "skills", icon: Code, label: t.skills },
                { value: "projects", icon: FolderOpen, label: t.projects },
                { value: "dashboard", icon: LayoutDashboard, label: t.dashboard }
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`flex items-center justify-center gap-2 py-3 px-3 text-sm font-medium transition-all rounded-lg ${
                    activeTab === tab.value 
                      ? "bg-[#1557cc] text-white shadow-lg" 
                      : "hover:bg-white/50"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile header (scrolls normally) */}
      <div className="md:hidden relative max-w-6xl mx-auto px-1 sm:px-3 py-4 w-full box-border">
        <motion.header 
          className="glass rounded-xl p-3 sm:p-4 mb-4 shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-32 h-32 rounded-full bg-[#1557cc] flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                NB
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white" />
            </motion.div>

            <div className="flex-1 text-center">
              <h1 className="text-3xl font-bold mb-2" data-testid="text-name-mobile">
                <span className="gradient-text">{t.profileData.name}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4" data-testid="text-title-mobile">
                {t.profileData.title}
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {t.profileData.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4" />
                  {t.profileData.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4" />
                  {t.profileData.phone}
                </span>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <Button className="gap-2 bg-[#1557cc] hover:bg-[#1e3a8a] cursor-pointer" data-testid="button-download-cv-mobile">
                  <Download className="w-4 h-4" />
                  {t.downloadCV}
                </Button>
                <a href="https://wa.me/573160493179" target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2 bg-[#1557cc] hover:bg-[#1e3a8a] cursor-pointer" data-testid="button-contact-mobile">
                    <Send className="w-4 h-4" />
                    {t.contact}
                  </Button>
                </a>
                <Button className="gap-2 bg-[#1557cc] hover:bg-[#1e3a8a] cursor-pointer" data-testid="button-language-mobile" onClick={() => setLanguage(language === "es" ? "en" : "es")}>
                  <Globe className="w-4 h-4" />
                  {t.langButton}
                </Button>
                <a href="https://www.linkedin.com/in/fabian-bernal-1032" target="_blank" rel="noopener noreferrer" data-testid="button-linkedin-mobile" className="flex items-center justify-center h-9 w-9 rounded-md bg-[#1557cc] hover:bg-[#1e3a8a] cursor-pointer transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.header>
      </div>

      {/* Content area */}
      <div className="relative max-w-6xl mx-auto px-1 sm:px-3 md:px-6 py-4 md:pt-[420px] w-full box-border">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Mobile tabs */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <TabsList className="w-full glass mb-6 p-1 h-auto grid grid-cols-5 gap-1">
              <TabsTrigger 
                value="about" 
                className="flex flex-col items-center justify-center gap-1 py-2 px-1 text-xs font-medium transition-all data-[state=active]:bg-[#1557cc] data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg" 
                data-testid="tab-about"
              >
                <User className="w-4 h-4 flex-shrink-0" />
                <span className="text-[10px] leading-tight text-center">{t.aboutMe}</span>
              </TabsTrigger>
              <TabsTrigger 
                value="experience" 
                className="flex flex-col items-center justify-center gap-1 py-2 px-1 text-xs font-medium transition-all data-[state=active]:bg-[#1557cc] data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg" 
                data-testid="tab-experience"
              >
                <Briefcase className="w-4 h-4 flex-shrink-0" />
                <span className="text-[10px] leading-tight text-center">{t.experience}</span>
              </TabsTrigger>
              <TabsTrigger 
                value="skills" 
                className="flex flex-col items-center justify-center gap-1 py-2 px-1 text-xs font-medium transition-all data-[state=active]:bg-[#1557cc] data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg" 
                data-testid="tab-skills"
              >
                <Code className="w-4 h-4 flex-shrink-0" />
                <span className="text-[10px] leading-tight text-center">{t.skills}</span>
              </TabsTrigger>
              <TabsTrigger 
                value="projects" 
                className="flex flex-col items-center justify-center gap-1 py-2 px-1 text-xs font-medium transition-all data-[state=active]:bg-[#1557cc] data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg" 
                data-testid="tab-projects"
              >
                <FolderOpen className="w-4 h-4 flex-shrink-0" />
                <span className="text-[10px] leading-tight text-center">{t.projects}</span>
              </TabsTrigger>
              <TabsTrigger 
                value="dashboard" 
                className="flex flex-col items-center justify-center gap-1 py-2 px-1 text-xs font-medium transition-all data-[state=active]:bg-[#1557cc] data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg" 
                data-testid="tab-dashboard"
              >
                <LayoutDashboard className="w-4 h-4 flex-shrink-0" />
                <span className="text-[10px] leading-tight text-center">{t.dashboard}</span>
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
                className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 w-full"
              >
                <div className="glass rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-6 card-hover min-w-0 w-full" style={{ overflow: 'hidden' }}>
                  <h2 className="text-sm sm:text-base md:text-xl font-semibold mb-2 md:mb-4 flex items-center gap-2">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#1557cc] flex-shrink-0" />
                    {t.profile}
                  </h2>
                  <p className="text-[13px] sm:text-sm md:text-base text-muted-foreground leading-relaxed text-justify w-full whitespace-pre-line" style={{ wordBreak: 'break-word', hyphens: 'auto', overflowWrap: 'break-word' }} data-testid="text-bio">
                    {t.profileData.bio}
                  </p>
                </div>

                <div className="glass rounded-2xl p-6 card-hover">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#1557cc]" />
                    {t.educationLabel}
                  </h2>
                  <div className="space-y-4">
                    {t.educationList.map((edu, index) => (
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
                    {t.languages}
                  </h2>
                  <div className="space-y-2">
                    <div className="border-l-2 border-[#1557cc] pl-4">
                      <h3 className="font-medium" data-testid="text-language-english">{t.englishLevel}</h3>
                    </div>
                    <div className="border-l-2 border-[#1557cc] pl-4">
                      <h3 className="font-medium" data-testid="text-language-spanish">{t.spanishLevel}</h3>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl md:rounded-2xl p-3 md:p-6 card-hover md:col-span-2">
                  <h2 className="text-base md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 md:w-5 md:h-5 text-[#1557cc]" />
                    {t.certifications}
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 md:gap-3">
                    {t.certificationsList.map((cert, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="px-3 md:px-4 py-2 text-xs md:text-sm bg-gradient-to-r from-blue-50 to-slate-50 border border-[#1557cc]/20 w-full sm:w-auto text-center whitespace-normal"
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
                {t.experiences.map((exp, index) => (
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
                    <p className="text-[13px] sm:text-sm md:text-base text-muted-foreground mb-4 whitespace-pre-line text-justify">{exp.description}</p>
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
                        {filter === "all" ? t.allSkills : t.software}
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
                {t.projectsList.map((project) => (
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
                          {t.viewProject}
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
                      <span className="text-sm text-muted-foreground">{t.yearsExp}</span>
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
                      <span className="text-sm text-muted-foreground">{t.companies}</span>
                    </div>
                    <p className="text-3xl font-bold text-green-600">{t.experiences.length}</p>
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
                      <span className="text-sm text-muted-foreground">{t.importantProjects}</span>
                    </div>
                    <p className="text-3xl font-bold text-orange-600">{t.projectsList.length}</p>
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
                      <span className="text-sm text-muted-foreground">{t.countries}</span>
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
                      {t.profTrajectory}
                    </h3>
                    <div className="space-y-4">
                      {t.experiences.map((exp, index) => (
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
                      {t.skillsLevel}
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
                      {t.educationList.map((edu, index) => (
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
                      {t.certificationsList.map((cert, index) => (
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
                    {t.featuredProjects}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {t.projectsList.map((project, index) => (
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
                    {t.industriesLabel}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {t.industries.map((industry, index) => (
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
          <p>© 2026 {t.profileData.name}. {language === "es" ? "Diseñado con pasión." : "Designed with passion."}</p>
        </motion.footer>
      </div>
    </div>
  );
}
