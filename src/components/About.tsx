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
              I&apos;m a passionate Computer Programming graduate from Brigham Young University, having completed my B.S. in Computer Programming with a 3.97 GPA. My journey in technology began with a Web & Computer Programming Certificate from the University of Maryland Global Campus.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I&apos;ve gained hands-on experience through internships, including AI-powered application development at Travelogue where I worked with Python and machine learning libraries. My technical expertise spans modern web technologies like React, Next.js, TypeScript, and backend development with Node.js, Python, and Java.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I thrive in collaborative environments and have contributed to various team projects, from e-commerce platforms to real-time applications. Working with others has taught me the importance of clear communication, code reviews, and maintaining consistent coding standards.
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
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Team Player</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Collaborative</span>
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

        {/* Collaborative Work Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Collaborative Experience</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Team Projects</h4>
              <p className="text-gray-600">Collaborated on full-stack applications like ResuMatch (AI resume matching) and Handcrafted Haven (e-commerce platform) with development teams.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Code Reviews</h4>
              <p className="text-gray-600">Participated in peer code reviews across multiple collaborative projects, ensuring code quality and maintaining consistent coding standards.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Agile Development</h4>
              <p className="text-gray-600">Worked in Agile/Scrum environments across multiple courses and projects, participating in sprint planning and team coordination.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 