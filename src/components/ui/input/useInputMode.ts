export const useInputMode = (mode: 'dark' | 'light') => {
  const dark = {
    colorText: '#94A3B8',
    colorTextPlaceholder: '#94A3B8',
    colorPrimaryBg: '#141E33',
    colorPrimaryHover: '#5B21B6',
    colorPrimaryTextHover: '#94A3B8',
    colorBgContainer: '#141E33',
    colorBgElevated: '#141E33',
    controlItemBgActive: '#1A253A',
    controlItemBgHover: '#1A253A',
  };
  const light = {
    colorText: '#6D5580',
    colorTextPlaceholder: '#94A3B8',
    colorPrimaryBg: '#F1F5F9',
    colorPrimaryHover: '#5B21B6',
    colorPrimaryTextHover: '#94A3B8',
    colorBgContainer: '#F1F5F9',
    colorBgElevated: '#F1F5F9',
    controlItemBgActive: '#EDE9FE',
    controlItemBgHover: '#EDE9FE',
  };
  if (mode === 'dark') return dark;
  return light;
};
