import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const buildQuery = (gender, sortBy, sortOrder, keyword) => {
  let qq = ''

  if (gender) {
    qq += `&gender=${gender}`
  }

  if (sortBy && sortOrder) {
    qq += `&sortBy=${sortBy}&sortOrder=${sortOrder}`
  }

  if (keyword) {
    qq += `&keyword=${keyword}`
  }

  return qq
}

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
          sortOrder,
          keyword
        } = params

        const bq = buildQuery(gender, sortBy, sortOrder, keyword)

        return `?results=${results}&page=${page}&pageSize=${pageSize}${bq}`
      }
    })
  })
})

export const { useGetUsersQuery } = api
