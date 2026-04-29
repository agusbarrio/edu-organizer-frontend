import { useContext } from 'react';
import { LocaleContext } from '../contexts/LocaleContext';

function useLocaleContext() {
  const { translate, dateFormat, lang, formatDate, formatCalendarDate } = useContext(LocaleContext);
  return { translate, dateFormat, lang, formatDate, formatCalendarDate };
}

export default useLocaleContext;
