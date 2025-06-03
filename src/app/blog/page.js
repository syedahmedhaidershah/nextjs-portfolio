"use client";
import BlogNavbar from "../components/BlogNavbar";
import EmailSection from "../components/EmailSection";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <BlogNavbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-lg mb-4">
          Welcome to My Blog! Here, I share insights, experiences, and stories about my journey, passions, and the things that inspire me.
        </p>
        <p className="text-lg mb-8">
          Stay tuned for updates and reflections on various aspects of my blog, including personal growth, hobbies, and more.
        </p>
      </div>
      <div className="container mt-0 mx-auto px-12 py-0">
        <EmailSection pageId="blog-contact" />
      </div>
    </main>
  );
} 