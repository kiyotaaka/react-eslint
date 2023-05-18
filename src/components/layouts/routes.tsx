import { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsFillClipboardCheckFill, BsUiRadiosGrid } from 'react-icons/bs';
import { ImFolderOpen } from 'react-icons/im';
import { MdOutlineNotificationImportant, MdToday } from 'react-icons/md';
import { TbNotesOff } from 'react-icons/tb';

export const getRoutes = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();
  const routes: MenuProps['items'] = [
    {
      key: '/',
      label: t('all'),
      icon: <BsUiRadiosGrid />,
    },
    {
      key: '/today',
      label: t('today'),
      icon: <MdToday />,
    },
    {
      key: '/important',
      label: t('important'),
      icon: <MdOutlineNotificationImportant />,
    },
    {
      key: '/completed',
      label: t('completed'),
      icon: <BsFillClipboardCheckFill />,
    },
    {
      key: '/uncompleted',
      label: t('uncompleted'),
      icon: <TbNotesOff />,
    },
    {
      key: '/directories',
      label: t('directories'),
      icon: <ImFolderOpen />,
      children: [
        { label: t('mainDirectories'), key: '/directories/main' },
        {
          label: t('newDirectories'),
          key: '/directories/new',
          icon: <AiOutlinePlus />,
          style: {
            border: '1px dashed',
          },
        },
      ],
    },
  ];
  return routes;
};
