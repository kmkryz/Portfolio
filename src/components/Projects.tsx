'use client'

import { useState } from 'react'
import ProjectPlaceholder from './ProjectPlaceholder'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, interactive components, and professional design.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
      category: 'frontend',
      github: 'https://github.com/kmkryz/Portfolio',
      featured: true,
      collaborative: false,
      placeholderType: 'portfolio' as const
    },
    {
      id: 2,
      title: 'WDD330 Web Development',
      description: 'Comprehensive web development course projects covering modern JavaScript, DOM manipulation, and interactive web applications.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Web APIs'],
      category: 'frontend',
      github: 'https://github.com/kmkryz/wdd330',
      collaborative: false,
      placeholderType: 'web-dev' as const
    },
    {
      id: 3,
      title: 'Starter Repository',
      description: 'Template and starter code repository for various development projects, showcasing best practices and project structure.',
      technologies: ['JavaScript', 'Git', 'Project Templates'],
      category: 'tools',
      github: 'https://github.com/kmkryz/starter-repo',
      collaborative: false,
      placeholderType: 'starter' as const
    },
    {
      id: 4,
      title: 'AI-Powered Application',
      description: 'Internship project at Travelogue involving AI generation testing, data analysis, and Python machine learning libraries.',
      technologies: ['Python', 'Machine Learning', 'AI Libraries', 'Data Analysis'],
      category: 'backend',
      github: '#',
      collaborative: false,
      placeholderType: 'ai' as const
    },
    {
      id: 5,
      title: 'Database Management System',
      description: 'Course project demonstrating database concepts, SQL queries, and data management using MySQL and pgAdmin 4.',
      technologies: ['MySQL', 'SQL', 'pgAdmin 4', 'Database Design'],
      category: 'backend',
      github: '#',
      collaborative: false,
      placeholderType: 'database' as const
    },
    {
      id: 6,
      title: 'React Component Library',
      description: 'Collection of reusable React components built with TypeScript, featuring modern design patterns and accessibility features.',
      technologies: ['React', 'TypeScript', 'Component Design', 'Accessibility'],
      category: 'frontend',
      github: '#',
      collaborative: false,
      placeholderType: 'react' as const
    }
  ]

  const collaborativeProjects = [
    {
      id: 7,
      title: 'ResuMatch - AI-Powered Resume Matching',
      description: 'Collaborative full-stack web application that helps job seekers match their resumes to job descriptions using OpenAI integration. Features user authentication, resume storage in S3, and AI-powered resume analysis.',
      technologies: ['Node.js', 'Vanilla JavaScript', 'CSS', 'OpenAI API', 'BCRYPT JWT', 'MongoDB', 'Mongoose', 'S3 Bucket'],
      category: 'fullstack',
      github: 'https://github.com/Sadly4343/ResuMatch',
      collaborative: true,
      featured: false,
      placeholderType: 'resumatch' as const
    },
    {
      id: 8,
      title: 'Handcrafted Haven - E-commerce Platform',
      description: 'Group project for Web Application Development course at BYU-Idaho. Built a complete e-commerce platform for handcrafted products with team collaboration and modern web technologies.',
      technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Team Collaboration', 'Git Workflow', 'Responsive Design'],
      category: 'fullstack',
      github: 'https://github.com/dvardcr/wdd430-t08-handcrafted-haven',
      collaborative: true,
      featured: true,
      placeholderType: 'ecommerce' as const
    },
    {
      id: 9,
      title: 'CSE341 Final Project',
      description: 'Collaborative project for CSE341 course demonstrating full-stack development skills with modern web technologies and team collaboration.',
      technologies: ['Full Stack', 'Web Development', 'Team Collaboration', 'Modern Technologies'],
      category: 'fullstack',
      github: 'https://github.com/joy935/cse341-fproject',
      collaborative: true,
      featured: false,
      placeholderType: 'fullstack' as const
    }
  ]

  const allProjects = [...projects, ...collaborativeProjects]

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'tools', label: 'Tools' },
    { id: 'collaborative', label: 'Collaborative' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : activeFilter === 'collaborative'
    ? collaborativeProjects
    : allProjects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            I&apos;ve worked on various projects that showcase my skills in web development, AI, and software engineering.
            Including both individual projects and collaborative team efforts.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                <ProjectPlaceholder 
                  projectType={project.placeholderType} 
                  title={project.title}
                />
                {project.collaborative && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Collaborative
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/kmkryz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects 