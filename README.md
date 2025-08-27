# Kaitlyn Kryzanski - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases professional skills, projects, and provides a clean way for potential employers to learn about your work.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: Dynamic project filtering, contact form, and smooth scrolling
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Customization

### Personal Information

Update the following files with your information:

- **Hero Section** (`src/components/Hero.tsx`): Change name, title, and description
- **About Section** (`src/components/About.tsx`): Update bio and personal details
- **Skills Section** (`src/components/Skills.tsx`): Modify skills, proficiency levels, and categories
- **Projects Section** (`src/components/Projects.tsx`): Add your actual projects
- **Contact Section** (`src/components/Contact.tsx`): Update contact details and social links
- **Layout** (`src/app/layout.tsx`): Update metadata and title

### Styling

- **Colors**: Modify the color scheme in Tailwind classes throughout components
- **Fonts**: Change fonts in `src/app/layout.tsx` and `src/app/globals.css`
- **Layout**: Adjust spacing, padding, and grid layouts in component files

### Projects

To add your projects, edit the `projects` array in `src/components/Projects.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description...",
    image: "/path-to-image.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "fullstack", // frontend, backend, or fullstack
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true, // Set to true for featured projects
  },
];
```

### Skills

Update skills in `src/components/Skills.tsx`:

```typescript
const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 90, icon: "⚛️" },
      // Add more skills...
    ],
  },
];
```

## 📱 Responsive Design

The portfolio is fully responsive and includes:

- Mobile-first design approach
- Responsive navigation with mobile menu
- Adaptive grid layouts
- Touch-friendly interactions
- Optimized typography for all screen sizes

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms

The portfolio can be deployed to any static hosting service:

```bash
npm run build
npm run export  # If using static export
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/          # React components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   ├── Contact.tsx     # Contact section
│   ├── Navbar.tsx      # Navigation
│   └── Footer.tsx      # Footer
└── types/              # TypeScript type definitions
```

## 🎨 Design System

### Color Palette

- Primary: Blue (#2563eb)
- Secondary: Indigo (#4f46e5)
- Text: Gray (#111827, #374151, #6b7280)
- Background: White, Gray (#f9fafb, #f3f4f6)

### Typography

- Font Family: Inter (Google Fonts)
- Headings: Bold weights for hierarchy
- Body: Regular weight for readability

### Spacing

- Consistent spacing using Tailwind's spacing scale
- Section padding: 5rem (py-20)
- Component spacing: 1.5rem (space-y-6)

## 🔍 SEO Optimization

- Meta tags for social sharing
- Open Graph and Twitter Card support
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## 📧 Contact Form

The contact form is currently set up with a placeholder submission handler. To make it functional:

1. Add form handling logic in `src/components/Contact.tsx`
2. Integrate with a service like Formspree, Netlify Forms, or your own backend
3. Add proper validation and error handling

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Happy coding! 🚀**
