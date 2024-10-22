import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "./store";


const baseQuery = fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
    prepareHeaders: (headers, { getState }) => {   // add headers with request
        const state = getState();
        const token = state //  get token from redux state, if exists

        headers.set('Custom-Header', 'Value');

        return headers;
    },
})


export const apiSlice = createApi({
    baseQuery,
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => 'posts'
        }),


    })
})


export const { useGetAllPostsQuery } = apiSlice