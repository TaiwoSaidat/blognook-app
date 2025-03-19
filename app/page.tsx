'use client';
import { useState, useMemo } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import PostGrid from './components/PostGrid';
import SearchBar from './components/SearchBar';
import ErrorMessage from './components/ErrorMessage';

export default function Home({ posts, error }: any) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Memoize filtered posts to prevent unnecessary re-renders
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    
    return posts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [posts, searchQuery]);

  const handleSearch = (query: any) => {
    setSearchQuery(query);
  };

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Posts</title>
        <meta name="description" content="A list of blog posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Blog Posts</h1>
        
        <SearchBar onSearch={handleSearch} searchQuery={searchQuery} />
        
        {filteredPosts.length > 0 ? (
          <PostGrid posts={filteredPosts} />
        ) : (
          <p className={styles.noPosts}>No posts found matching your search.</p>
        )}
      </main>

      <footer className={styles.footer}>
        <p>Blog Posts Demo - Next.js SSR Implementation</p>
      </footer>
    </div>
  );
}

// Server-side rendering using getServerSideProps
export async function getServerSideProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // Check if the response is ok (status in the range 200-299)
    if (!res.ok) {
      throw new Error(`Failed to fetch posts. Status: ${res.status}`);
    }
    
    const posts = await res.json();
    
    return {
      props: {
        posts,
        error: null,
      },
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    
    return {
      props: {
        posts: [],
        error: 'Failed to load blog posts. Please try again later.',
      },
    };
  }
}



