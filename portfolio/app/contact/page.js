"use client";

import { useState } from 'react';
import styles from './page.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container section">
      <h1 className="section-title">
        Get In <span className="text-gradient">Touch</span>
      </h1>
      <p className={styles.subtitle}>
        Have a project in mind or just want to say hi? Feel free to reach out!
      </p>

      <div className={styles.contactWrapper}>
        <div className={`${styles.formContainer} glass`}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="John Doe"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="john@example.com"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textarea}
                placeholder="Your message here..."
                rows={5}
              />
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {status.message && (
              <div className={`${styles.statusMsg} ${styles[status.type]}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
        
        <div className={styles.contactInfo}>
          <div className={`${styles.infoCard} glass`}>
            <h3>Email</h3>
            <p>hello@johndoe.com</p>
          </div>
          <div className={`${styles.infoCard} glass`}>
            <h3>Location</h3>
            <p>San Francisco, CA</p>
          </div>
          <div className={`${styles.infoCard} glass`}>
            <h3>Socials</h3>
            <div className={styles.socialLinks}>
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
