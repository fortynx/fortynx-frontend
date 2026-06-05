import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code, ShieldCheck, Zap } from 'lucide-react';
import SEO from './SEO';

type Project = {
  title: string;
  description: string;
  category: 'Web Development' | 'Digital Marketing' | 'Cybersecurity';
  tech: string[];
  metrics?: string;
};

type ProjectsSectionProps = {
  showAll?: boolean;
  isPage?: boolean;
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ showAll = false, isPage = false }) => {
  const [activeCategory, setActiveCategory] = React.useState<'Web Development' | 'Digital Marketing' | 'Cybersecurity'>('Web Development');

  const projects: Project[] = [
    // Web Development
    {
      title: 'Grocery App',
      description: 'A premium full-stack grocery ordering system featuring product catalog filters, dynamic cart management, and stripe checkout.',
      category: 'Web Development',
      tech: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB'],
      metrics: '99% Core Speed Score'
    },
    {
      title: 'Restaurant Billing App',
      description: 'A high-speed desktop & web application for table seating layouts, instant receipt printing, and secure POS integrations.',
      category: 'Web Development',
      tech: ['Electron', 'React', 'Tailwind CSS', 'SQLite'],
      metrics: '60% faster checkouts'
    },
    {
      title: 'LMS with Adaptive AI',
      description: 'An AI-powered Learning Management System featuring personalized course recommendations and responsive analytics dashboards.',
      category: 'Web Development',
      tech: ['Next.js', 'FastAPI', 'OpenAI API', 'PostgreSQL'],
      metrics: 'Adaptive pathways'
    },
    {
      title: 'Enterprise E-commerce',
      description: 'A multi-vendor online marketplace optimized for massive inventory scaling, smart filtering, and secure payment pathways.',
      category: 'Web Development',
      tech: ['React', 'Django', 'PostgreSQL', 'Redis'],
      metrics: '10k concurrent sessions'
    },
    {
      title: 'Corporate Portal UI',
      description: 'A clean corporate landing page with optimized visual layout sections, testimonial cards, and custom form captures.',
      category: 'Web Development',
      tech: ['HTML5', 'Tailwind CSS', 'TypeScript', 'Vite'],
      metrics: '100% lighthouse SEO'
    },
    {
      title: 'SaaS Analytics Dashboard',
      description: 'An interactive business analytics dashboard featuring dynamic charting, secure user roles, and real-time logs parsing.',
      category: 'Web Development',
      tech: ['React', 'ChartJS', 'Tailwind CSS', 'Express'],
      metrics: 'Real-time sync'
    },

    // Digital Marketing
    {
      title: 'SEO Audit Platform',
      description: 'A comprehensive web auditing system tracking live page ranks, keyword densities, backlink volumes, and on-page improvements.',
      category: 'Digital Marketing',
      tech: ['Ahrefs API', 'Python', 'React', 'ChartJS'],
      metrics: '+140% traffic growth'
    },
    {
      title: 'Social Campaign Tracker',
      description: 'A marketing automation tool planning content calendars and tracking clicks across Meta, LinkedIn, and Twitter portals.',
      category: 'Digital Marketing',
      tech: ['Buffer API', 'Django', 'PostgreSQL', 'Tailwind CSS'],
      metrics: 'Omnichannel sync'
    },
    {
      title: 'Email Automation Flows',
      description: 'Automated email marketing software sending trigger campaigns, subscriber segmentation, and click-rate telemetry.',
      category: 'Digital Marketing',
      tech: ['SendGrid', 'React', 'Node.js', 'MongoDB'],
      metrics: '99% inbox placement'
    },
    {
      title: 'Conversions Pixel Analytics',
      description: 'Custom tracking dashboards recording pixel conversion rates, landing page click maps, and general ad-spend values.',
      category: 'Digital Marketing',
      tech: ['Google Ads', 'Meta Pixel', 'GA4 Analytics'],
      metrics: 'Direct ROI reporting'
    },

    // Cybersecurity
    {
      title: 'VAPT Posture Monitor',
      description: 'Continuous port and domain vulnerability scanning system reporting server misconfigurations and outdated library errors.',
      category: 'Cybersecurity',
      tech: ['Docker', 'Python', 'Wazuh', 'React'],
      metrics: '24/7 endpoint checks'
    },
    {
      title: 'Web Application Hardening',
      description: 'Enterprise-grade app security setup deploying Web Application Firewalls (WAF) and patching directory-traversal vulnerabilities.',
      category: 'Cybersecurity',
      tech: ['Nginx', 'ModSecurity', 'OWASP Rules'],
      metrics: 'Zero security leakage'
    },
    {
      title: 'Threat Detection Dashboard',
      description: 'Anomaly monitoring dashboard utilizing classification trees to flags suspicious remote access logs and DDoS spikes.',
      category: 'Cybersecurity',
      tech: ['TensorFlow', 'FastAPI', 'React', 'ChartJS'],
      metrics: 'ML-based alerts'
    },
    {
      title: 'Enterprise Identity IAM',
      description: 'Secure authentication modules implementing Role-Based Access Controls (RBAC), multi-factor tokens, and cryptographic logs.',
      category: 'Cybersecurity',
      tech: ['OAuth2', 'JWT', 'Firebase Auth', 'Node.js'],
      metrics: 'MFA Hardened'
    }
  ];

  const filteredProjects = projects.filter((project) => project.category === activeCategory);
  // Show first 3 projects on the home page if not showAll
  const projectsToShow = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  // Category Color Codes
  const getCategoryStyles = (cat: string) => {
    switch (cat) {
      case 'Web Development':
        return {
          glow: 'hover:border-orange-500/30 dark:hover:border-orange-500/20 hover:shadow-orange-500/5',
          techBg: 'bg-orange-500/10 text-orange-650 dark:text-orange-400',
          metricColor: 'text-orange-500',
          icon: <Code size={14} className="text-orange-500" />
        };
      case 'Cybersecurity':
        return {
          glow: 'hover:border-cyan-500/30 dark:hover:border-cyan-500/20 hover:shadow-cyan-500/5',
          techBg: 'bg-cyan-500/10 text-cyan-650 dark:text-cyan-400',
          metricColor: 'text-cyan-500',
          icon: <ShieldCheck size={14} className="text-cyan-500" />
        };
      case 'Digital Marketing':
        return {
          glow: 'hover:border-purple-500/30 dark:hover:border-purple-500/20 hover:shadow-purple-500/5',
          techBg: 'bg-purple-500/10 text-purple-650 dark:text-purple-400',
          metricColor: 'text-purple-500',
          icon: <Zap size={14} className="text-purple-500" />
        };
      default:
        return {
          glow: 'hover:border-orange-500/30 dark:hover:border-orange-500/20',
          techBg: 'bg-orange-500/10 text-orange-400',
          metricColor: 'text-orange-500',
          icon: <Code size={14} className="text-orange-500" />
        };
    }
  };

  const currentTheme = getCategoryStyles(activeCategory);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
      {isPage && (
        <SEO 
          title="Case Studies & Projects – Fortynx Technologies"
          description="Explore our portfolio of secure web engineering, custom application development, VAPT audits, and high-ROI digital marketing campaigns in Vijaywada & Hyderabad."
          keywords="Fortynx projects, web development portfolio, digital marketing case studies, cybersecurity VAPT audits"
          ogUrl="https://fortynx.com/projects"
        />
      )}
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-wider uppercase font-sans">
            Our Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-4 font-heading tracking-tight">
            Featured Case Studies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-3 mb-14 flex-wrap">
          {['Web Development', 'Cybersecurity', 'Digital Marketing'].map((category) => {
            const isActive = activeCategory === category;
            const categoryTabColor = () => {
              if (!isActive) return 'bg-white hover:bg-gray-100 dark:bg-gray-900/50 dark:hover:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-800/30';
              if (category === 'Web Development') return 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/15';
              if (category === 'Cybersecurity') return 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md shadow-cyan-500/15';
              if (category === 'Digital Marketing') return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md shadow-purple-500/15';
              return 'bg-orange-500 text-white';
            };
            
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category as 'Web Development' | 'Digital Marketing' | 'Cybersecurity')}
                className={`px-5 py-2.5 rounded-2xl text-[14px] font-semibold transition-all duration-250 ${categoryTabColor()}`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map((project) => (
            <div
              key={project.title}
              className={`group bg-white dark:bg-gray-950 border border-gray-150 dark:border-gray-900/60 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${currentTheme.glow}`}
            >
              <div>
                
                {/* Metric/Card Header */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${currentTheme.techBg}`}>
                    {project.metrics || 'Case Study'}
                  </span>
                  <div className="text-gray-400 group-hover:text-orange-500 transition duration-200">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-heading mb-2 group-hover:text-orange-500 transition duration-250">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

              </div>



            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        {!showAll && (
          <div className="mt-14 flex justify-center">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-sm hover:from-orange-600 hover:to-amber-600 shadow-md hover:shadow-orange-500/20 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              View All Projects Case Studies
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
