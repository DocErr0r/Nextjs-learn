'use client'
import MyEditor from "@/components/Editor/Editor";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form,FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters"),
    image: z.string().url("Invalid image URL").optional(),
    introduction: z.string().min(10, "Introduction must be at least 10 characters").max(100, "Introduction must be at most 100 characters"),
    content: z.string().min(20, "Content must be at least 20 characters"),
    conclusion: z.string().min(5, "Conclusion must be at least 5 characters"),
});

const AddBlog = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            image: "",
            introduction: "",
            content: '',
            conclusion: "",
        },
    });    
    
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
            setBlog((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target);

        // try {
        //     const response = await fetch('/api/addblog', {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(blog),
        //     });
        //     const data = await response.json();
        //     console.log(data);

        //     if (response.ok) {
        //         alert("Blog added successfully!");
        //         setBlog({
        //             title: "",
        //             slug: "",
        //             image: "",
        //             introduction: "",
        //             content: "",
        //             conclusion: "",
        //         });
        //     } else {
        //         alert("Failed to add the blog.");
        //     }
        // } catch (error) {
        //     console.error("Error adding blog:", error);
        // }
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">Add a New Blog</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="w-2/3 space-y-6">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Title" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
            {/* <Card>
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
                                required
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
                                required
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
            </Card> */}
        </div>
    );
};

export default AddBlog;