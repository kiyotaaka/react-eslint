import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { GeneralTaskItem } from './task-item/GeneralTaskItem';

const GeneralTaskPage: React.FC = () => {
  const { pathname } = useLocation();
  const [lists, setLists] = React.useState([1, 2, 3, 4, 5]);
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
  const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <AnimatePresence>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          {lists.map((prev) => (
            <motion.div variants={child} key={prev}>
              <GeneralTaskItem />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export { GeneralTaskPage };
