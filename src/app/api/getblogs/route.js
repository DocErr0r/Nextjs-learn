import { NextResponse } from "next/server";
import { readdirSync, readFileSync } from 'fs'
import path from "path";
import { db } from "@/lib/firebase/firebaseAdmin";



export async function GET(req, res) {
    try {
        const blogsCollection = db.collection('blogs');
        const snapshot = await blogsCollection.get();

        // snapshot.forEach((doc) => {
        //     console.log(doc.data(), doc.id);
        // })

        const data = []
        snapshot.forEach((doc) => {
            const jsonData = doc.data()
            data.push({
                title: jsonData.title,
                description: jsonData.introduction,
                slug: jsonData.slug,
                date: jsonData.date,
                author: jsonData.author,
                image: jsonData.image,
            })
        })
        return NextResponse.json(data)
    } catch (err) {
        console.log(err);
        return NextResponse.json({}, { status: 500 })

    }
}