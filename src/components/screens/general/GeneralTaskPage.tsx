import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useGetTasksQuery } from 'src/store/index.endpoints';

import { GeneralTaskItem } from './task-item/GeneralTaskItem';

import './general-task-page.scss';

const GeneralTaskPage: React.FC = () => {
  const { data } = useGetTasksQuery(null);
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <AnimatePresence>
        <div className="tasks">
          {data?.map((task) => (
            <GeneralTaskItem key={task.id} {...task} />
          ))}
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export { GeneralTaskPage };
