import { NextResponse } from "next/server";
import { readdirSync, readFileSync } from 'fs'
import path from "path";



export async function GET(req, res) {
    const contentPath = path.join(process.cwd(), 'src', 'contents')
    try {
        const dirContent = readdirSync(contentPath)
        const data = dirContent.map((file) => {
            const filePath = path.join(contentPath, file)
            const fileContent = readFileSync(filePath, 'utf-8')
            const jsonData = JSON.parse(fileContent)
            return {
                title: jsonData.title,
                description: jsonData.introdection,
                slug: jsonData.slug,
                date: jsonData.date,
                author: jsonData.author,
                image: jsonData.image,
            }
        })
        return NextResponse.json(data)
    } catch (err) {
        console.log(err);
        return NextResponse.json({})

    }
}