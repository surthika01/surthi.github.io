import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-2xl font-bold">Surthika<span className="text-indigo-500">.</span></span>
            <p className="mt-4 text-gray-400 text-sm">
              Building scalable, high-performance applications with expertise in both Frontend and Backend development.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
             <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
             </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                surthikasathishraj@gmail.com
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 88385 73865
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13 21.314a3.42 3.42 0 01-4.828 0L3.546 16.657a3.42 3.42 0 010-4.828l9.9-9.9a3.42 3.42 0 014.828 0l2.365 2.365a3.42 3.42 0 010 4.828z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  No 32, Ideal Hostel, Dharmaraja Kovil Street,
                  Suriyammapet, Saidapet,<br/>
                  Chennai, TN, INDIA - 600015
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Surthika Vasantha S. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="text-gray-400 hover:text-white transition-colors">
                 <span className="sr-only">LinkedIn</span>
                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                 </svg>
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
