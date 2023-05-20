/* eslint-disable no-nested-ternary */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillCheckCircle } from 'react-icons/ai';
import { IoMdCalendar } from 'react-icons/io';
import { MdCancel } from 'react-icons/md';
import { useAppSelector, useResponsive } from 'src/hooks';
import { TTaskItem } from 'src/store/tasks/tasks.types';

import './task-item.scss';

const GeneralTaskItem: React.FC<TTaskItem> = (task) => {
  // eslint-disable-next-line object-curly-newline
  const { completed, date, description, dir, important, title } = task;
  const { t } = useTranslation();
  const { isMobile } = useResponsive(992);
  const { mode } = useAppSelector((s) => s.custom);
  return (
    <div className={`task-item ${mode}`}>
      <div className="task-item__dir">{dir}</div>
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
      </div>
    </div>
  );
};

export { GeneralTaskItem };
