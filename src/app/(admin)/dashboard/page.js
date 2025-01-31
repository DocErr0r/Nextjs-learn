import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"; // Assuming you have a Card component in your UI library
import Link from "next/link";

export default function Dashboard() {
  const blogPosts = [
    { id: 1, title: "First Blog Post", description: "This is a brief description of the first blog post." },
    { id: 2, title: "Second Blog Post", description: "This is a brief description of the second blog post." },
    { id: 3, title: "Third Blog Post", description: "This is a brief description of the third blog post." },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="flex gap-2 justify-between flex-wrap">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <Button className="mb-6">
          <Link href="/post-blog">Add Blog</Link>
        </Button>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Your Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="p-4 shadow-lg mx-auto hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">
              <Link href={`/edit-blog/${post.id}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-700 mb-4">{post.description}</p>
            <Link href={`/edit-blog/${post.id}`}>
              <Button className="bg-blue-500 text-white hover:bg-blue-600">Edit</Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}