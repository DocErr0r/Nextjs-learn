import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BaseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.BASEURL }),
    tagTypes:['blogs'],
    endpoints: () => ({}),
})

export const { useGetUserQuery } = BaseApi