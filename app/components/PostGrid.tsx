import React from 'react';
import styles from '../styles/PostGrid.module.css';
import PostCard from './PostCard';
// import PostCard from './PostCard';

const PostGrid = ({ posts }: any) => {
  return (
    <div className={styles.grid}>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostGrid;