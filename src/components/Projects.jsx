import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Field Force Automation",
      company: "Senzr AIOT",
      duration: "July 2025 – Jan 2026",
      tech: ["Vue.js", "Tailwind CSS", "Node.js", "PostgreSQL", "AWS (S3)"],
      description: [
        "Developed a SaaS product with hierarchical role-based access to optimize Digital Work Order Management, enabling seamless task creation, assignment, and status tracking.",
        "Implemented real-time GPS tracking for field staff to monitor live locations and movement history.",
        "Built Work Order & Task Management workflows to streamline task prioritization and completion tracking."
      ]
    },
    {
      title: "Payroll Automation Platform",
      company: "Senzr AIOT",
      duration: "Dec 2024 - Jun 2025",
      tech: ["React.js", "Directus (Plugin)", "AWS"],
      description: [
        "Automated Payroll Processing & Payslip System: End-to-end payroll module with automated payslip generation and distribution.",
        "Real-time Calculation & Compliance Engine: Architected a cloud-based calculation engine on AWS to automate statutory deductions and tax compliance.",
        "Salary Reporting & Analytics Dashboards: Designed responsive UI dashboards using Tailwind CSS for comprehensive financial insights."
      ]
    },
    {
      title: "Device Access Management Platform",
      company: "Senzr AIOT",
      duration: "May 2024 – Nov 2024",
      tech: ["Vue.js", "Vuetify", "Node.js", "PostgreSQL"],
      description: [
        "Built a centralized Device Access Management Platform handling employee attendance, real-time entry/exit tracking, and working-hour calculations.",
        "Designed controller-based door access control with granular permissions.",
        "Implemented shift management and automated attendance logic for accurate reporting."
      ]
    },
    {
      title: "Trade Management Platform",
      company: "Icanio Technologies",
      duration: "Dec 2023 – Mar 2024",
      tech: ["Node.js", "MySQL"],
      description: [
        "Built a scalable trade management backend system to handle secure transactions, validation, and audit tracking.",
        "Developed RESTful APIs with strong payload validation, error handling, and audit logs."
      ]
    },
    {
      title: "Asset Management Platform",
      company: "Icanio Technologies",
      duration: "Sep 2023 – Dec 2023",
      tech: ["Node.js", "PostgreSQL"],
      description: [
        "Developed an asset management backend platform for tracking assets, monitoring status, and managing operational data.",
        "Engineered notification systems and reporting APIs to support analytics."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Showcasing my technical contributions and solutions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="p-6 flex-grow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-1 sm:mt-0">
                    {project.duration}
                  </span>
                </div>
                <div className="mb-4">
                   <p className="text-sm font-medium text-indigo-600 mb-2">{project.company}</p>
                   <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t, i) => (
                        <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-100 text-green-800">
                          {t}
                        </span>
                      ))}
                   </div>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
