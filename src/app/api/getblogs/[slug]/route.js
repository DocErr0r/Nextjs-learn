import { NextResponse } from "next/server";
import { readFileSync } from 'fs'
import path from "path";



export async function GET(req, { params }, res,) {
    const slug = await params.slug

    try {
        const filePath = path.join(process.cwd(), 'src', 'contents', `${slug}.json`)
        console.log(filePath);
        const fileContent = readFileSync(filePath, 'utf-8')

        const jsonData = JSON.parse(fileContent)
        return NextResponse.json(jsonData)
    } catch (err) {
        console.log(err);
        return NextResponse.json({})

    }
}