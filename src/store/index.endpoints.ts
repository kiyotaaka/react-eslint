import { tasksApi } from './tasks/tasks.api';

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useEditTaskMutation,
  useEditTaskStatusMutation,
  useDeleteTaskMutation,
} = tasksApi;
