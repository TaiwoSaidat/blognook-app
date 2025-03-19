import React from "react";
import styles from '../styles/PostCard.module.css'

const PostCard = ({ post }: any) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.body}>{post.body}</p>
    </div>
  );
};

export default PostCard;
