'use client'
import MyEditor from "@/components/Editor/Editor";
import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters"),
    // image: z.string().url("Invalid image URL").optional(),
    image: z.string(),
    introduction: z.string().min(10, "Introduction must be at least 10 characters").max(200, "Introduction must be at most 100 characters"),
    content: z.string().min(20, "Content must be at least 20 characters"),
    conclusion: z.string().min(5, "Conclusion must be at least 5 characters"),
});

const AddBlog = () => {
    const { toast } = useToast()
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
    const contentValue =form.watch("content");

    const handleSubmit = async (blog) => {
        // e.preventDefault();
        // console.log(blog);
        try {
            const response = await fetch('/api/addblog', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(blog),
            });
            const data = await response.json();
            // console.log(data);

            if (response.ok) {
                toast({
                    title: "Blog added successfully!",
                })
                form.reset();
            } else {
                toast({
                    title: "Failed to add the blog.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Failed to add the blog.",
                variant: "destructive",
            });
            console.error(error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">Add a New Blog</h1>
            <Card>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className=" space-y-4 py-4">
                            {/* Title Field */}
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Blog title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Image Field */}
                            <FormField
                                control={form.control}
                                name="image"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Image URL</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Blog image URL" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Introduction Field */}
                            <FormField
                                control={form.control}
                                name="introduction"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Introduction</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Enter introduction" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Content Field */}

                            <FormItem>
                                <FormLabel>Content</FormLabel>
                                <Controller name="content" control={form.control} render={({ field }) => (
                                    <MyEditor value={field.value} setValue={(value) => form.setValue("content", value)} />
                                )} />
                                <FormMessage>{form.formState.errors.content?.message}</FormMessage>
                            </FormItem>



                            {/* Conclusion Field */}
                            <FormField
                                control={form.control}
                                name="conclusion"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Conclusion</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Enter conclusion" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Submit Button */}
                            <Button type="submit" className="w-full">Add Blog</Button>
                        </form>
                    </Form>
                    {/* <div>
                        <Label className="block font-medium mb-2">Preview Content:</Label>
                        <div
                            className="max-w-none prose prose-code:font-mono dark:prose-invert border rounded-md p-4 mt-4"
                            dangerouslySetInnerHTML={{ __html: contentValue }}
                        ></div>
                    </div> */}
                </CardContent>
            </Card>
        </div>
    );
};

export default AddBlog;