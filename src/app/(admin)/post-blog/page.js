'use client'
import MyEditor from "@/components/Editor/Editor";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const AddBlog = () => {
    const [blog, setBlog] = useState({
        title: "",
        image: "",
        introduction: "",
        content: '',
        conclusion: "",
    });
    const handleContent = (value) => {
        setBlog({ ...blog, content: value })
    }

    // Handle field changes
    const handleInputChange = (e, nestedKey) => {
        const { name, value } = e.target;
        if (nestedKey) {
            setBlog((prev) => ({
                ...prev,
                [nestedKey]: {
                    ...prev[nestedKey],
                    [name]: value,
                },
            }));
        } else {
            // Update top-level fields
            setBlog((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     const response = await fetch('/api/addblog', {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(blog),
        //     });
        //     const data=await response.json()
        //     console.log(data);
            
        //     // if (response.ok) {
        //     //     alert("Blog added successfully!");
        //     //     setBlog({
        //     //         title: "",
        //     //         date: "",
        //     //         image: "",
        //     //         introduction: "",
        //     //         content: "",
        //     //         conclusion: "",
        //     //     });
        //     // } else {
        //     //     alert("Failed to add the blog.");
        //     // }
        // } catch (error) {
        //     console.error("Error adding blog:", error);
        // }
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">Add a New Blog</h1>
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4 py-4">
                        <div>
                            <Label className="block font-medium mb-2">Title</Label>
                            <Input
                                type="text"
                                name="title"
                                value={blog.title}
                                onChange={handleInputChange}
                                placeholder="Enter blog title"
                                // required
                            />
                        </div>

                        <div>
                            <Label className="block font-medium mb-2">Image URL</Label>
                            <Input
                                type="text"
                                name="image"
                                value={blog.image}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <Label className="block font-medium mb-2">Introduction</Label>
                            <Textarea
                                name="introduction"
                                value={blog.introduction}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <Label className="block font-medium mb-2">Content</Label>
                            <MyEditor value={blog.content} setValue={handleContent} />
                        </div>

                        <div>
                            <Label className="block font-medium mb-2">Conclusion</Label>
                            <Textarea
                                name="conclusion"
                                value={blog.conclusion}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <Label className="block font-medium mb-2">Preview Content:</Label>
                            <div
                                className="max-w-none prose prose-code:font-mono dark:prose-invert border rounded-md p-4 mt-4"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            ></div>
                        </div>
                        <Button type="submit" className="w-full">
                            Add Blog
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default AddBlog;