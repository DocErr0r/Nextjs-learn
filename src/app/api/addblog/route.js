import { NextResponse } from "next/server";
import { writeFileSync } from 'fs';
import path from 'path';

export async function POST(req, res) {
    const body = await req.json();
    const filePath = path.join(process.cwd(), 'src', 'contents', `${body.slug}.json`);

    try {
        writeFileSync(filePath, JSON.stringify(body, null, 2));
        return NextResponse.json({ message: 'Blog added successfully!' });
    } catch (error) {
        console.error("Error adding blog:", error);
        return NextResponse.json({ message: 'Failed to add the blog.' });
    }
}