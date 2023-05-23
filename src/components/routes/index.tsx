import { NotFound, Tasks } from '../screens';

export const routes = [
  { path: '/', element: <Tasks /> },
  { path: '/today', element: <Tasks /> },
  { path: '/important', element: <Tasks /> },
  { path: '/completed', element: <Tasks /> },
  { path: '/uncompleted', element: <Tasks /> },
  { path: '*', element: <NotFound /> },
];
