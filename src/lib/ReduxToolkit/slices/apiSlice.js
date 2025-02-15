import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BaseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASEURL }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (name) => `pokemon/${name}`,
        }),
    }),
})

export const { useGetUserQuery } = BaseApi