import { MenuProps } from 'antd';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillClipboardCheckFill, BsUiRadiosGrid } from 'react-icons/bs';
import { ImFolderOpen } from 'react-icons/im';
import { MdOutlineNotificationImportant, MdToday } from 'react-icons/md';
import { TbNotesOff } from 'react-icons/tb';

export const routes: MenuProps['items'] = [
  {
    key: '/all',
    label: 'Все задачи',
    icon: <BsUiRadiosGrid />,
  },
  {
    key: '/today',
    label: 'Сегодняшние задачи',
    icon: <MdToday />,
  },
  {
    key: '/important',
    label: 'Важные задачи',
    icon: <MdOutlineNotificationImportant />,
  },
  {
    key: '/completed',
    label: 'Выполненные задачи',
    icon: <BsFillClipboardCheckFill />,
  },
  {
    key: '/uncompleted',
    label: 'Невыполненные задачи',
    icon: <TbNotesOff />,
  },
  {
    key: '/directories',
    label: 'Каталоги',
    icon: <ImFolderOpen />,
    children: [
      { label: 'Главный', key: '/directories/main' },
      {
        label: 'Новый',
        key: '/directories/new',
        icon: <AiOutlinePlus />,
        style: {
          border: '1px dashed',
        },
      },
    ],
  },
];
