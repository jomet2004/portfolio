import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

export default function Projects() {
  const allProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#',
    },
    {
      title: 'AI Productivity Tool',
      description: 'An AI-powered task management application that helps organize and prioritize daily workflows automatically.',
      tags: ['React', 'Python', 'FastAPI', 'OpenAI API'],
      link: '#',
    },
    {
      title: 'Real-time Chat App',
      description: 'A scalable messaging application supporting group chats, typing indicators, and file sharing.',
      tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Crypto Portfolio Tracker',
      description: 'A sleek dashboard to track cryptocurrency investments, utilizing external APIs for live pricing data.',
      tags: ['Vue.js', 'Firebase', 'CoinGecko API'],
      link: '#',
    },
    {
      title: 'DevBlog CMS',
      description: 'A custom headless CMS designed specifically for developers to publish technical articles with syntax highlighting.',
      tags: ['Next.js', 'MDX', 'Tailwind', 'Prisma'],
      link: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautifully designed weather application providing 7-day forecasts and interactive radar maps.',
      tags: ['JavaScript', 'OpenWeatherMap API', 'Chart.js'],
      link: '#',
    }
  ];

  return (
    <div className="container section">
      <h1 className="section-title">
        All <span className="text-gradient">Projects</span>
      </h1>
      <p className={styles.subtitle}>
        A collection of my recent work, side projects, and open source contributions.
      </p>
      
      <div className={styles.projectsGrid}>
        {allProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
