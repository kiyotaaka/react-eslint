import React from 'react';
import { BsCheckSquareFill } from 'react-icons/bs';
import { IoMdCalendar } from 'react-icons/io';
import { MdCancel } from 'react-icons/md';

import './task-item.scss';

const GeneralTaskItem: React.FC = () => {
  // eslint-disable-next-line object-curly-newline
  const { id, completed, date, description, dir, important, title } = {
    title: 'Task 1',
    dir: 'Main',
    description: 'This is the description for this task',
    date: '2023-04-12',
    completed: true,
    important: true,
    id: 't1',
  };
  return (
    <div className="task-item">
      <div className="task-item__content">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="task-item__content-date">
          <IoMdCalendar />
          <span>{date}</span>
        </div>
      </div>
      <div className="task-item__status">
        <BsCheckSquareFill />
        <MdCancel />
      </div>
    </div>
  );
};

export { GeneralTaskItem };
