import { api } from '../index.api';

import { TTaskItem } from './tasks.types';

export const tasksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<TTaskItem[], string | null>({
      query: (value) => ({
        url: `/tasks?${value ? `search=${value}` : ''}`,
      }),
      providesTags: ['tasks'],
    }),
    addTask: builder.mutation<any, TTaskItem>({
      query: (body) => ({
        url: '/tasks',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['tasks'],
    }),
  }),
});
