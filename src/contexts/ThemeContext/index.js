import { ThemeProvider, createTheme } from '@mui/material';
import { esES as dataGridEsES } from '@mui/x-data-grid';
import { esES as pickersEsEs } from '@mui/x-date-pickers/locales';
import useLocaleContext from 'hooks/useLocaleContext';
import { useMemo } from 'react';
function ThemeContextProvider({
  children
}) {
  const { lang } = useLocaleContext()

  const theme = useMemo(() => {
    const result = createTheme({}, (lang === 'es' ? dataGridEsES : {}), (lang === 'es' ? pickersEsEs : {}))
    return result
  }, [lang])

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default ThemeContextProvider;
