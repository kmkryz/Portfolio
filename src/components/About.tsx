'use client'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I&apos;m a passionate Computer Programming student at Brigham Young University, maintaining a 3.97 GPA while pursuing my B.S. in Computer Programming. My journey in technology began with a Web & Computer Programming Certificate from the University of Maryland Global Campus.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I&apos;ve gained hands-on experience through internships, including AI-powered application development at Travelogue where I worked with Python and machine learning libraries. My technical expertise spans modern web technologies like React, Next.js, TypeScript, and backend development with Node.js, Python, and Java.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              When I&apos;m not coding, you can find me contributing to open-source projects on GitHub, exploring new technologies, or applying my problem-solving skills to real-world challenges. I believe in continuous learning and collaboration to build innovative digital solutions.
            </p>

            {/* Key Strengths */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Problem Solver</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">AI Enthusiast</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Fast Learner</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Detail Oriented</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Summary */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3.97</div>
                  <div className="text-gray-600">GPA at BYU</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">17+</div>
                  <div className="text-gray-600">GitHub Repositories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Dedication</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 