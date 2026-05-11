import styles from './SkillBadge.module.css';

export default function SkillBadge({ icon, name }) {
  return (
    <div className={`${styles.badge} glass`}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.name}>{name}</span>
    </div>
  );
}
