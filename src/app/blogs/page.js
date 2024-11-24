import BlogCard from '@/components/BlogCard/BlogCard';
import React from 'react';

const blogs = [
    {
        title: "Getting Started with React",
        description: "Learn the basics of React and start building your first component.",
        slug: "getting-started-with-react",
        date: "May 15, 2023",
        author: {
            name: "John Doe",
            image: "https://github.com/shadcn.png",
        },
        image: "/res.jpg",
    },
    {
        title: "Advanced React Hooks",
        description: "Dive deep into React Hooks and discover how they can simplify your code.",
        slug: "advanced-react-hooks",
        date: "May 22, 2023",
        author: {
            name: "Jane Smith",
            image: "https://github.com/shadcn.png",
        },
        image: "/res.jpg",
    },
    {
        title: "Styling in React",
        description: "Explore different ways to style your React components effectively.",
        slug: "styling-in-react",
        date: "May 29, 2023",
        author: {
            name: "Bob Johnson",
            image: "https://github.com/shadcn.png",
        },
        image: "/res.jpg",
    },
];

const Blog = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">My Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
                {blogs.map((blog, index) => (
                    <BlogCard key={index} {...blog} />
                ))}
            </div>
        </div>
    );
};

export default Blog;