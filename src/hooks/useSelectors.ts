import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'src/store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useSelectors = () => {
  const { custom } = useAppSelector((s) => s);
  return { ...custom };
};
