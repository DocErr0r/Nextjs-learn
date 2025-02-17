const { BaseApi } = require("./apiSlice");

export const blogApiSlice = BaseApi.injectEndpoints({
  endpoints: builder => ({
    getBlogs: builder.query({
      query: () => '/api/getblogs'
    }),
    getBlog: builder.query({
      query: id => `/api/getblogs/${id}`,
      noCache: true
    }),
    // createBlog: builder.mutation({
    //   query: data => ({
    //     url: 'blogs',
    //     method: 'POST',
    //     body: data
    //   })
    // }),
    // updateBlog: builder.mutation({
    //   query: data => ({
    //     url: `blogs/${data.id}`,
    //     method: 'PUT',
    //     body: data
    //   })
    // }),
    // deleteBlog: builder.mutation({
    //   query: id => ({
    //     url: `blogs/${id}`,
    //     method: 'DELETE'
    //   })
    // })
  })
});

export const { useGetBlogsQuery, useGetBlogQuery } = blogApiSlice