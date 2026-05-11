import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={`${styles.header} glass`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className="text-gradient">{"<JD />"}</span>
        </Link>
        <nav className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/projects" className={styles.navLink}>Projects</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
