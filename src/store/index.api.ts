import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api/tasks',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64610c83185dd9877e3602eb.mockapi.io/api/',
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
