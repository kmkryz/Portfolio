'use client'

const Skills = () => {
  const frontendSkills = [
    { name: 'React', icon: '⚛️', proficiency: 90 },
    { name: 'Next.js', icon: '▲', proficiency: 85 },
    { name: 'TypeScript', icon: '📘', proficiency: 80 },
    { name: 'HTML/CSS', icon: '🌐', proficiency: 95 },
    { name: 'JavaScript', icon: '🟨', proficiency: 90 },
  ]

  const backendSkills = [
    { name: 'Node.js', icon: '🟢', proficiency: 80 },
    { name: 'Python', icon: '🐍', proficiency: 85 },
    { name: 'Java', icon: '☕', proficiency: 80 },
    { name: 'C#/.NET', icon: '🔷', proficiency: 75 },
    { name: 'SQL/MySQL', icon: '🗄️', proficiency: 85 },
  ]

  const toolsSkills = [
    { name: 'Git/GitHub', icon: '📚', proficiency: 90 },
    { name: 'Docker', icon: '🐳', proficiency: 75 },
    { name: 'Postman', icon: '📮', proficiency: 80 },
    { name: 'VS Code', icon: '💻', proficiency: 95 },
    { name: 'Vercel', icon: '🚀', proficiency: 80 },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            I&apos;ve worked with a variety of technologies and frameworks to create robust, scalable applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Frontend Development */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium text-gray-700">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Development */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Backend Development</h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium text-gray-700">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tools & Others</h3>
            <div className="space-y-6">
              {toolsSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium text-gray-700">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">MongoDB</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">pgAdmin 4</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">AI/ML Libraries</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">Agile/Scrum</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">Data Analysis</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">Problem-solving</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">Communication</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">Attention to Detail</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">Render</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 