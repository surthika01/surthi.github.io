import surthiImage from '../assets/surthi-image.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pb-24 overflow-hidden bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                    <div className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4 animate-fade-in-up">
                        Available for Opportunities
                    </div>
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-4">
                        <span className="block xl:inline">Hi, I'm</span>
                        <span className="block text-primary xl:inline"> Surthika Vasantha S</span>
                    </h1>
                    <h2 className="text-xl sm:text-2xl text-gray-600 mb-6 font-medium">
                        Software Engineer | Full Stack Developer
                    </h2>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 leading-relaxed">
                        With 2 years of experience in frontend and backend development, including leadership as a Lead Frontend Developer. Expert in <span className="text-secondary font-semibold">React.js</span>, <span className="text-secondary font-semibold">Vue.js</span>, and <span className="text-secondary font-semibold">Node.js</span>, building scalable, high-performance applications using component-based architecture and state management.
                    </p>
                    <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                        <p className="text-sm font-medium text-gray-900 mb-4 flex items-center justify-center lg:justify-start gap-2">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13 21.314a3.42 3.42 0 01-4.828 0L3.546 16.657a3.42 3.42 0 010-4.828l9.9-9.9a3.42 3.42 0 014.828 0l2.365 2.365a3.42 3.42 0 010 4.828z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                           </svg>
                           Tamil Nadu, IN
                           <span className="mx-2">|</span>
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                           </svg>
                           surthikasathishraj@gmail.com
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                            <div className="rounded-md shadow">
                                <a href="mailto:surthikasathishraj@gmail.com" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700 transition-colors md:py-4 md:text-lg md:px-10">
                                    Contact Me
                                </a>
                            </div>
                            <div className="mt-3 sm:mt-0">
                                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-indigo-100 hover:bg-indigo-200 transition-colors md:py-4 md:text-lg md:px-10">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                    <div className="relative mx-auto w-full rounded-2xl shadow-xl lg:max-w-md overflow-hidden transform hover:scale-105 transition-transform duration-500">
                        <div className="relative block w-full bg-gray-100 aspect-w-4 aspect-h-5">
                             <img 
                                className="w-full h-full object-cover object-center" 
                                src={surthiImage} 
                                alt="Surthika Vasantha S" 
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20">
             <div className="w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20">
             <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
    </section>
  );
};

export default Hero;
