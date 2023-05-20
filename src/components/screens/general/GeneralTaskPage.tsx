import React from 'react';
import { useGetTasksQuery } from 'src/store/index.endpoints';

import { GeneralTaskItem } from './task-item/GeneralTaskItem';

import './general-task-page.scss';

const GeneralTaskPage: React.FC = () => {
  const { data, isLoading } = useGetTasksQuery(null);
  return (
    <div className="tasks">
      {data?.map((task) => (
        <GeneralTaskItem key={task.id} {...task} />
      ))}
    </div>
  );
};

export { GeneralTaskPage };
