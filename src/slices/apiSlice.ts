import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({baseUrl: '', responseHandler: (response) => response.text()});

export const apiSlice = createApi({
    baseQuery, 
    tagTypes: ['Users'],
    endpoints: () => ({
        
    })
})