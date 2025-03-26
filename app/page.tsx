import PostGrid from "./components/PostGrid";
import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";

async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-store", // ⬅ Ensures fresh data (SSR)
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch posts. Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { error: "Failed to load blog posts. Please try again later." };
  }
}

export default async function Home() {
  const data = await getPosts();
  const posts = data.error ? [] : data;
  const error = data.error || null;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>

      {error ? <ErrorMessage message={error} /> : <PostGrid posts={posts} />}
    </div>
  );
}
