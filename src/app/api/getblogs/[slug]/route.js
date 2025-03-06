import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebaseAdmin";



export async function GET(req, { params }, res,) {
    const id = await params.slug

    try {

        const blogsCollection = db.collection('blogs');
        const blogDoc = await blogsCollection.doc(id).get()

        if (!blogDoc.exists) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }
        
        const blogData = { id: blogDoc.id, ...blogDoc.data() };
        return NextResponse.json(blogData)
    } catch (err) {
        console.log(err);
        return NextResponse.json({})

    }
}