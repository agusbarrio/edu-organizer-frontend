import { useContext } from 'react';
import { LocaleContext } from '../contexts/LocaleContext';

function useLocaleContext() {
  const { translate, dateFormat } = useContext(LocaleContext);
  return { translate, dateFormat };
}

export default useLocaleContext;
