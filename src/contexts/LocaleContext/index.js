import { createContext, useCallback, useEffect, useMemo } from 'react';
import _ from 'lodash';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { renderText } from 'utils/text';
import moment from 'moment';
export const LocaleContext = createContext();

function LocaleContextProvider({
  children,
  lang,
  defaultLang = 'es',
  dateFormat,
  defaultDateFormat = 'DD-MM-YYYY',
}) {
  const currentLang = useMemo(() => lang || defaultLang, [defaultLang, lang])

  useEffect(() => {
    import(`moment/locale/${currentLang}`).then(() => {
      moment.locale(currentLang);
    })
  }, [currentLang])

  const translate = useCallback(
    (translation, params = {}) => {
      if (_.isString(translation)) return translation;
      const errorMessage = 'Translation not found';
      const text =
        translation && translation[currentLang]
          ? translation[currentLang]
          : errorMessage;
      return renderText(text, params);
    },
    [currentLang]
  );

  const resultDateFormat = useMemo(
    () => dateFormat || defaultDateFormat,
    [dateFormat, defaultDateFormat]
  );

  const formatDate = useCallback((date, format = resultDateFormat) => {
    return moment(date).format(format);
  }, [resultDateFormat])

  return (
    <LocaleContext.Provider value={{ translate, dateFormat: resultDateFormat, formatDate, lang: currentLang }}>
      <LocalizationProvider
        dateAdapter={AdapterMoment}
        dateFormats={{ fullDate: resultDateFormat }}
      >
        {children}
      </LocalizationProvider>
    </LocaleContext.Provider>
  );
}

export default LocaleContextProvider;
