import React from 'react';
import { Link } from 'react-router-dom';

type Project = {
  title: string;
  description: string;
  category: 'Web Development' | 'Digital Marketing' | 'Cybersecurity';
};

type ProjectsSectionProps = {
  showAll?: boolean;
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ showAll = false }) => {
  const [activeCategory, setActiveCategory] = React.useState<'Web Development' | 'Digital Marketing' | 'Cybersecurity'>('Web Development');

  const projects: Project[] = [
    {
      title: 'Grocery App',
      description:
        'A full-stack grocery ordering app with product catalog, cart checkout, and order tracking in a responsive web interface.',
      category: 'Web Development',
    },
    {
      title: 'Restaurant Billing Application',
      description:
        'A fast, accurate restaurant billing system with table management, invoice generation, and secure payment integration.',
      category: 'Web Development',
    },
    {
      title: 'LMS with AI',
      description:
        'An AI-enhanced learning management platform with adaptive learning paths, personalized course recommendations, and analytics dashboards.',
      category: 'Web Development',
    },
    {
      title: 'E-commerce Website',
      description:
        'A modern e-commerce website example featuring product filtering, responsive design, secure checkout flow, and inventory management.',
      category: 'Web Development',
    },
    {
      title: 'Corporate Landing Page',
      description:
        'A clean corporate landing page with optimized hero section, client testimonials, service overview, and contact CTA.',
      category: 'Web Development',
    },
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio site with projects gallery, skill sections, blog previews, and contact form conversion tracking.',
      category: 'Web Development',
    },
    {
      title: 'SaaS Dashboard',
      description:
        'An interactive SaaS analytics dashboard with dynamic charts, user management, and secure API integration.',
      category: 'Web Development',
    },
    {
      title: 'Digital Marketing Website',
      description:
        'A digital marketing showcase site with campaign analytics, lead capture forms, SEO optimization, and content management controls.',
      category: 'Digital Marketing',
    },
    {
      title: 'Social Media Campaign Tracker',
      description:
        'A tool for planning, tracking and analyzing social media campaigns with performance metrics and automation workflows.',
      category: 'Digital Marketing',
    },
    {
      title: 'Email Automation Platform',
      description:
        'An automated email marketing platform with campaign templates, A/B testing, subscriber segmentation, and reporting.',
      category: 'Digital Marketing',
    },
    {
      title: 'SEO Optimization Suite',
      description:
        'An advanced SEO suite with keyword research tools, site audits, backlink tracking, and content scoring.',
      category: 'Digital Marketing',
    },
    {
      title: 'Cybersecurity Posture Monitoring',
      description:
        'A cyber defense portal for continuous monitoring, threat intelligence alerts, and secure configuration tracking for web app infrastructure.',
      category: 'Cybersecurity',
    },
    {
      title: 'Secure Web Application Hardening',
      description:
        'An enterprise-grade security service focused on application hardening, vulnerability remediations, and secure deployment pipelines.',
      category: 'Cybersecurity',
    },
    {
      title: 'Threat Detection Dashboard',
      description:
        'A dashboard for detecting, categorizing, and alerting on live security threats with machine learning-based anomaly scoring.',
      category: 'Cybersecurity',
    },
    {
      title: 'Identity & Access Management',
      description:
        'A secure IAM system with role-based access control, MFA, audit logs, and single sign-on integration.',
      category: 'Cybersecurity',
    },
  ];

  const filteredProjects = projects.filter((project) => project.category === activeCategory);
  const projectsToShow = showAll ? filteredProjects : filteredProjects.slice(0, 2);

  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Featured Projects
        </h2>

        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {['Web Development', 'Digital Marketing', 'Cybersecurity'].map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category as 'Web Development' | 'Digital Marketing' | 'Cybersecurity')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  isActive
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {showAll ? (
          ['Web Development', 'Digital Marketing', 'Cybersecurity'].map((section) => {
            const sectionProjects = projectsToShow.filter((project) => project.category === section);
            if (sectionProjects.length === 0) return null;
            return (
              <div key={section} className="mb-10">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">{section}</h3>
                <div className="grid md:grid-cols-2 gap-10">
                  {sectionProjects.map((project) => (
                    <div
                      key={project.title}
                      className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-transparent hover:border-orange-500 hover:shadow-lg transform transition-all duration-300"
                    >
                      <h4 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-center">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="grid md:grid-cols-2 gap-10">
            {projectsToShow.map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-transparent hover:border-orange-500 hover:shadow-lg transform transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-center">{project.description}</p>
              </div>
            ))}
          </div>
        )}

        {!showAll && (
          <div className="mt-8 flex justify-center">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
            >
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
