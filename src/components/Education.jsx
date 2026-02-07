import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Education
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            My academic foundation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-indigo-50 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="px-6 py-8 sm:p-10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                 <h3 className="text-2xl font-bold text-gray-900">Bachelor of Engineering</h3>
                 <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mt-2 sm:mt-0">
                    Sep 2019 – Jun 2023
                 </span>
              </div>
              <p className="text-lg font-medium text-gray-900">Electronics and Communication Engineering (ECE)</p>
              <p className="text-md text-gray-600 mt-2">Dr. Sivanthi Aditanar College of Engineering, Tiruchchendur</p>
              
              <div className="mt-6 border-t border-indigo-100 pt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-2">
                     <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-900">CGPA: 7.8 / 10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
