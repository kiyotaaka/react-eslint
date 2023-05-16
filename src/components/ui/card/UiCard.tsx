import { Card, CardProps, ConfigProvider } from 'antd';
import React from 'react';

const UiCard: React.FC<CardProps> = (_props) => (
  <ConfigProvider
    theme={{
      token: {
        colorText: '#fff',
        colorPrimaryBg: '#5B21B6',
        colorBgContainer: '#5B21B6',
        colorBgElevated: '#5B21B6',
        controlItemBgActive: '#1A253A',
        controlItemBgHover: '#1A253A',
      },
    }}
  >
    <Card {..._props} />
  </ConfigProvider>
);

export { UiCard };
