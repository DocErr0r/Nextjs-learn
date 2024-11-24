import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link';
import Image from 'next/image';

import blogData from '@/contents/blog.json'
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

const BlogInfoPage = ({ params }) => {
    const { blog } = blogData;
    if (params.slug !== blog.slug) {
        return notFound()
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-contain max-sm:h-full"
                    priority
                />
            </div>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="text-4xl font-bold">{blog.title}</CardTitle>
                    <div className="flex items-center space-x-4 mt-4">
                        <Avatar>
                            <AvatarImage src={blog.author.avatar} alt={blog.author.name} />
                            <AvatarFallback>{blog.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{blog.author.name}</p>
                            <p className="text-sm text-gray-400">Published: {blog.date}</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="mb-4">
                        <Badge variant="secondary" className="mr-2">{blog.category}</Badge>
                        {blog.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="mr-2">{tag}</Badge>
                        ))}
                    </div>

                    <p className="mb-6 ">{blog.introduction}</p>

                    {/* Blog Sections with Images */}
                    <div className="my-4">
                        <div className="mt-2 max-w-none prose prose-code:font-mono dark:prose-invert" dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </div>


                    <p className="mt-6 "><span className='font-bold'>Conclusion: </span>{blog.conclusion}</p>
                </CardContent>
            </Card>

            {/* Author Card */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-semibold">About the Author</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center space-x-4">
                        <Avatar className="w-16 h-16">
                            <AvatarImage src={blog.author.avatar} alt={blog.author.name} />
                            <AvatarFallback>{blog.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{blog.author.name}</p>
                            <p className="">{blog.author.bio}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Share Buttons */}
            <div className="mt-8 flex justify-center space-x-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Share on Twitter
                </button>
                <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900">
                    Share on LinkedIn
                </button>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray -900">
                    Copy Link
                </button>
            </div>
        </div>
    );
};

export default BlogInfoPage;