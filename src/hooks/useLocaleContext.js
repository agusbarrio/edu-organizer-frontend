import { useContext } from 'react';
import { LocaleContext } from '../contexts/LocaleContext';

function useLocaleContext() {
  const { translate, dateFormat, lang } = useContext(LocaleContext);
  return { translate, dateFormat, lang };
}

export default useLocaleContext;
