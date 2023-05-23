/* eslint-disable no-nested-ternary */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillCheckCircle, AiFillDelete, AiFillStar } from 'react-icons/ai';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { IoMdCalendar } from 'react-icons/io';
import { MdCancel } from 'react-icons/md';
import { useResponsive, useSelectors } from 'src/hooks';
import { TTaskItem } from 'src/store/tasks/tasks.types';

const TaskItem: React.FC<TTaskItem> = (task) => {
  // eslint-disable-next-line object-curly-newline
  const { completed, date, description, dir, title, important } = task;
  const { t } = useTranslation();
  const { isMobile } = useResponsive(770);
  const { mode } = useSelectors();
  return (
    <div className={`task-item ${mode}`}>
      <div className="task-item__dir none">{dir}</div>
      <div className="task-item__content">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="task-item__content-date">
          <IoMdCalendar />
          <span>{date}</span>
        </div>
      </div>
      <div className="task-item__status">
        <span className="task-item__status-check">
          {isMobile ? (
            completed ? (
              <AiFillCheckCircle className="task-item__status-check-ci" />
            ) : (
              <MdCancel className="task-item__status-check-ui" />
            )
          ) : completed ? (
            <span className="task-item__status-check-ct">{t('completedText')}</span>
          ) : (
            <span className="task-item__status-check-ut">{t('uncompletedText')}</span>
          )}
        </span>
        <span className="task-item__status-edit">
          <AiFillStar className={`task-item__status-edit-icon ${important && 'active'}`} />
          <AiFillDelete className="task-item__status-edit-icon" />
          <HiEllipsisVertical className="task-item__status-edit-icon" />
        </span>
      </div>
    </div>
  );
};

export { TaskItem };
