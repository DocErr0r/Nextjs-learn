import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseAdmin";
import slugify from "slugify";

// {
//     "title" == in body
//     "introduction"  == in body
//     "content" == in body
//     "conclusion" == in body
//     "image" == in body

//     "author": { name,bio,avatar }, -- direct
//     "date" -- now date

//     "slug"
//     "category"
//     "tags": ["Web", "Browser", "HTML", "CSS", "JavaScript"],

// }

const author = {
    name: "Jane Doe",
    bio: "Jane Doe is a web developer and tech enthusiast with over 10 years of experience in creating dynamic web applications.",
    avatar: "https://github.com/shadcn.png"
}

export async function POST(req, res) {
    const body = await req.json();

    const newBlog = {
        ...body,
        author: author,
        date: new Date(),
    }

    try {
        const blogsCollection = db.collection('blogs');
        const blogRef = await blogsCollection.add(newBlog)
        return NextResponse.json({ message: 'Blog added successfully!' });
    } catch (error) {
        console.error("Error adding blog:", error);
        return NextResponse.json({ message: 'Failed to add the blog.' });
    }
}