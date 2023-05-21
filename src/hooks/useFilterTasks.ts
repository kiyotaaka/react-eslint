import React from 'react';
import { useLocation } from 'react-router-dom';
import { TTaskItem } from 'src/store/tasks/tasks.types';

export const useFilterTasks = (data?: TTaskItem[]) => {
  const [filterData, setFilterData] = React.useState<TTaskItem[]>([]);
  const { pathname } = useLocation();
  React.useEffect(() => {
    if (data) {
      if (pathname === '/') setFilterData(data);
      if (pathname === '/today') setFilterData(data.filter((el) => el.date === '05/21/2023'));
      if (pathname === '/important') setFilterData(data.filter((el) => el.important));
      if (pathname === '/completed') setFilterData(data.filter((el) => el.completed));
      if (pathname === '/uncompleted') setFilterData(data.filter((el) => !el.completed));
    }
  }, [data, pathname]);
  return { filterData };
};
