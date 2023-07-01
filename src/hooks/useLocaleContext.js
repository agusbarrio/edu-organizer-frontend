import { useContext } from 'react';
import { LocaleContext } from '../contexts/LocaleContext';

function useLocaleContext() {
  const { translate, dateFormat, lang, formatDate } = useContext(LocaleContext);
  return { translate, dateFormat, lang, formatDate };
}

export default useLocaleContext;
