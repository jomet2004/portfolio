import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, description, tags, link, image }) {
  return (
    <div className={`${styles.card} glass`}>
      <div className={styles.imageContainer}>
        {/* Placeholder if no image provided */}
        {image ? (
          <img src={image} alt={title} className={styles.image} />
        ) : (
          <div className={styles.placeholderImage}></div>
        )}
        <div className={styles.overlay}>
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Project
          </a>
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
