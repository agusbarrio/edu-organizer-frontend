import { createContext, useCallback, useMemo } from 'react';
import _ from 'lodash';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { renderText } from 'utils/text';
export const LocaleContext = createContext();

function LocaleContextProvider({
  children,
  lang,
  defaultLang = 'es',
  dateFormat,
  defaultDateFormat = 'DD/MM/YYYY',
}) {
  const currentLang = useMemo(() => lang || defaultLang, [defaultLang, lang])
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

  return (
    <LocaleContext.Provider value={{ translate, dateFormat: resultDateFormat, lang: currentLang }}>
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
