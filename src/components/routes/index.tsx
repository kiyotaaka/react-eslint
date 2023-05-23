import { GeneralTaskPage, NotFound } from '../screens';

export const routes = [
  { path: '/', element: <GeneralTaskPage /> },
  { path: '/today', element: <GeneralTaskPage /> },
  { path: '/important', element: <GeneralTaskPage /> },
  { path: '/completed', element: <GeneralTaskPage /> },
  { path: '/uncompleted', element: <GeneralTaskPage /> },
  { path: '*', element: <NotFound /> },
];
