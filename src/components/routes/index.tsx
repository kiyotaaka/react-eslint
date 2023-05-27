import loadable from '@loadable/component';

const Tasks = loadable(() => import('../screens/tasks/Tasks'));
const NotFound = loadable(() => import('../screens/notFound/NotFound'));

export const routes = [
  { path: '/', element: <Tasks /> },
  { path: '/today', element: <Tasks /> },
  { path: '/important', element: <Tasks /> },
  { path: '/completed', element: <Tasks /> },
  { path: '/uncompleted', element: <Tasks /> },
  { path: '*', element: <NotFound /> },
];
