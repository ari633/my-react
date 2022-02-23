import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api/' }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    getUsers: build.query({
      query: (params) => {
        const {
          page,
          results,
          pageSize,
          gender,
          sortBy,
          sortOrder
        } = params
        return `?results=${results}&page=${page}&pageSize=${pageSize}&gender=${gender}&sortBy=${sortBy}&sortOrder=${sortOrder}`
      }
    })
  })
})

export const { useGetUsersQuery } = api