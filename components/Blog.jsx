import React from 'react';
import Link from 'next/link';
import styles from '../styles/Blog.module.css'
const Blog = ({ title, description, slug }) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a className={styles.card}>
        <h2>{title} &rarr;</h2>
        <p>{description}.</p>
      </a>
    </Link>
  );
};

export default Blog;
