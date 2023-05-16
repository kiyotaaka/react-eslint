import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api/tasks',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  refetchOnFocus: true,
  refetchOnMountOrArgChange: true,
  tagTypes: ['tasks'],
  endpoints: (builder) => ({
    getUsers: builder.query<any, string>({
      query: () => '/tasks',
    }),
  }),
});
