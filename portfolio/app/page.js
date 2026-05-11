import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import SkillBadge from '@/components/SkillBadge';
import styles from './page.module.css';

export default function Home() {
  const featuredProjects = [
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
    }
  ];

  const skills = [
    { name: 'JavaScript (ES6+)', icon: '⚡' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'React / Next.js', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'CSS / SCSS', icon: '🎨' },
    { name: 'Git / GitHub', icon: '📦' },
  ];

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={`container section ${styles.hero}`}>
        <h1 className={styles.heroTitle}>
          Hi, I'm <span className="text-gradient">John Doe</span>
        </h1>
        <h2 className={styles.heroSubtitle}>
          Building Digital <span className={styles.heroHighlight}>Experiences</span>
        </h2>
        <p className={styles.heroText}>
          I'm a Full-Stack Developer specializing in building exceptional, 
          high-quality websites and applications with modern technologies.
        </p>
        <div className={styles.heroCta}>
          <Link href="/projects" className="btn btn-primary">
            View My Work
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact Me
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`container section ${styles.skillsSection}`}>
        <h2 className="section-title">My Toolkit</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className={`container section ${styles.projectsSection}`}>
        <h2 className="section-title">Featured Projects</h2>
        <div className={styles.projectsGrid}>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className={styles.viewAllContainer}>
          <Link href="/projects" className="btn btn-outline">
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
