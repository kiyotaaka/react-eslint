import { ConfigProvider, Slider, SliderSingleProps } from 'antd';
import React from 'react';

const UiSlider: React.FC<SliderSingleProps> = (_props) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#5B21B6',
      },
    }}
  >
    <Slider {..._props} />
  </ConfigProvider>
);

export { UiSlider };
