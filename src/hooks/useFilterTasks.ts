import React from 'react';
import { useLocation } from 'react-router-dom';
import { TTaskItem } from 'src/store/tasks/tasks.types';

type TUseFilterTask = {
  data?: TTaskItem[];
};

export const useFilterTasks = ({ data }: TUseFilterTask) => {
  const { pathname } = useLocation();
  const onFilterData = React.useCallback(
    (data?: TTaskItem[]) => {
      if (data) {
        switch (pathname) {
          case '/':
            return data;
          case '/today':
            return data.filter((el) => el.date === '05/21/2023');
          case '/important':
            return data.filter((el) => el.important);
          case '/completed':
            return data.filter((el) => el.completed);
          case '/uncompleted':
            return data.filter((el) => !el.completed);
          default:
            return [];
        }
      }
    },
    [pathname],
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const newFilterData = React.useMemo(() => onFilterData(data), [data, pathname]);
  return newFilterData;
};
