import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api/tasks',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_KEY,
  }),
  refetchOnFocus: true,
  refetchOnMountOrArgChange: true,
  tagTypes: ['tasks'],
  endpoints: (build) => ({
    default: build.query({
      query: () => 'default',
    }),
  }),
});
