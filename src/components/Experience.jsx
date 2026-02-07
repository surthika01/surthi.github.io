import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Senzr AIOT Partner Edge To Cloud",
      location: "Srivaikundam, IN",
      role: "Software Engineer",
      duration: "April 2024 – Jan 2026",
      points: [
        "Lead and manage frontend development across multiple projects, coordinating tasks, priorities, and delivery timelines within the team.",
        "Leading a cross-functional team of 4 developers, providing mentorship and establishing coding standards aligned with enterprise-grade scalability.",
        "Engineered robust and scalable RESTful APIs incorporating advanced payload validation techniques, improving system reliability across multi-tenant environments."
      ]
    },
    {
      company: "Icanio Technologies",
      location: "Nazareth, IN",
      role: "Backend Developer Trainee",
      duration: "Sep 2023 – Mar 2024",
      points: [
        "Developed and maintained Node.js-based backend APIs with strong error handling, authentication, and audit logging.",
        "Collaborated with the engineering team to deliver production-ready backend services, including documentation and testing support."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Work Experience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            My professional journey in software engineering.
          </p>
        </div>

        <div className="relative border-l-4 border-indigo-200 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div className="absolute -left-3.5 top-1 h-6 w-6 rounded-full border-4 border-white bg-indigo-600 shadow-sm"></div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mt-1 sm:mt-0">
                  {exp.duration}
                </span>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-700">{exp.company}</h4>
                <p className="text-sm text-gray-500">{exp.location}</p>
              </div>
              
              <ul className="list-disc leading-relaxed text-gray-600 space-y-2 ml-4">
                {exp.points.map((point, idx) => (
                  <li key={idx}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
