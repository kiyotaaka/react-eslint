/* eslint-disable @typescript-eslint/indent */
import { ConfigProvider, Input, InputProps } from 'antd';
import React from 'react';
import { useAppSelector } from 'src/hooks/useAppSelector';

const UiInput: React.FC<InputProps> = (_props) => {
  const { mode } = useAppSelector((s) => s.custom);
  return (
    <ConfigProvider
      theme={{
        token:
          mode === 'dark'
            ? {
                colorText: '#94A3B8',
                colorTextPlaceholder: '#94A3B8',
                colorPrimaryBg: '#141E33',
                colorPrimaryHover: '#5B21B6',
                colorPrimaryTextHover: '#94A3B8',
                colorBgContainer: '#141E33',
                colorBgElevated: '#141E33',
                controlItemBgActive: '#1A253A',
                controlItemBgHover: '#1A253A',
              }
            : {
                colorText: '#6D5580',
                colorTextPlaceholder: '#94A3B8',
                colorPrimaryBg: '#F1F5F9',
                colorPrimaryHover: '#5B21B6',
                colorPrimaryTextHover: '#94A3B8',
                colorBgContainer: '#F1F5F9',
                colorBgElevated: '#F1F5F9',
                controlItemBgActive: '#EDE9FE',
                controlItemBgHover: '#EDE9FE',
              },
      }}
    >
      <Input {..._props} />
    </ConfigProvider>
  );
};

export { UiInput };
