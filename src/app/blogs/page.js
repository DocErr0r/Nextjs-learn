'use client'
import BlogCard from '@/components/BlogCard/BlogCard';
import Loader from '@/components/Loader/Loader';
import { useGetBlogsQuery } from '@/lib/ReduxToolkit/slices/blogApiSlice';
import React, { useEffect, useState } from 'react';




const Blog = () => {


    const { isError, isLoading, data: blogs } = useGetBlogsQuery();
    // console.log(blogs);




    return (
        <div className="container mx-auto py-8 max-sm:p-4">
            <h1 className="text-3xl font-bold mb-8">My Blog</h1>
            {isLoading && <Loader />}
            {isError && <p className='text-center'>Somthing error. Refresh the page ...</p>}
            {/* {!blogs?.length && <p className='text-center text-xl'>No blogs found</p>} */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
                {blogs?.map((blog, index) => (
                    <BlogCard key={index} {...blog} />
                ))}
            </div>
        </div>
    );
};

export default Blog;