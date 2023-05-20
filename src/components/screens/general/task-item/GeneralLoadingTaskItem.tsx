import { Skeleton } from 'antd';
import React from 'react';

const GeneralLoadingTaskItem: React.FC = () => (
  <div className="task-item">
    <Skeleton />
  </div>
);

export { GeneralLoadingTaskItem };
