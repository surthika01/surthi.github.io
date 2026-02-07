import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript (ES6+)", "HTML5", "CSS3", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Vue.js", "Node.js", "Express.js", "Bootstrap", "Vuetify", "Sequelize"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL"]
    },
    {
      title: "Cloud",
      skills: ["AWS (S3)"]
    },
    {
      title: "Tools & Practices",
      skills: ["Git", "GitHub", "Bitbucket", "Postman", "CI/CD", "RESTful APIs"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Skills & Interests
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            A comprehensive toolkit for modern web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2 border-gray-100">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
