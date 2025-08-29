'use client'

interface ProjectPlaceholderProps {
  projectType: 'portfolio' | 'web-dev' | 'starter' | 'ai' | 'database' | 'react' | 'resumatch' | 'ecommerce' | 'fullstack'
  title: string
}

const ProjectPlaceholder = ({ projectType, title }: ProjectPlaceholderProps) => {
  const getPlaceholderContent = () => {
    switch (projectType) {
      case 'portfolio':
        return {
          icon: '🎨',
          color: 'from-purple-100 to-pink-100',
          text: 'Portfolio Design'
        }
      case 'web-dev':
        return {
          icon: '🌐',
          color: 'from-blue-100 to-cyan-100',
          text: 'Web Development'
        }
      case 'starter':
        return {
          icon: '🚀',
          color: 'from-green-100 to-emerald-100',
          text: 'Starter Template'
        }
      case 'ai':
        return {
          icon: '🤖',
          color: 'from-indigo-100 to-purple-100',
          text: 'AI Application'
        }
      case 'database':
        return {
          icon: '🗄️',
          color: 'from-orange-100 to-red-100',
          text: 'Database System'
        }
      case 'react':
        return {
          icon: '⚛️',
          color: 'from-cyan-100 to-blue-100',
          text: 'React Components'
        }
      case 'resumatch':
        return {
          icon: '📋',
          color: 'from-emerald-100 to-teal-100',
          text: 'Resume Matching'
        }
      case 'ecommerce':
        return {
          icon: '🛍️',
          color: 'from-pink-100 to-rose-100',
          text: 'E-commerce Platform'
        }
      case 'fullstack':
        return {
          icon: '⚡',
          color: 'from-violet-100 to-indigo-100',
          text: 'Full Stack App'
        }
      default:
        return {
          icon: '💻',
          color: 'from-gray-100 to-slate-100',
          text: 'Project Preview'
        }
    }
  }

  const content = getPlaceholderContent()

  return (
    <div className={`w-full h-full bg-gradient-to-br ${content.color} flex flex-col items-center justify-center p-4`}>
      <div className="text-5xl mb-3">{content.icon}</div>
      <div className="text-center">
        <div className="text-sm font-medium text-gray-600 mb-1">{content.text}</div>
        <div className="text-xs text-gray-500">{title}</div>
      </div>
    </div>
  )
}

export default ProjectPlaceholder 