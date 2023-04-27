import PageHead from 'components/dataDisplay/PageHead'
import Redirect from 'components/navigation/Redirect'
import PATHS from 'constants/PATHS'
import TEXTS from 'constants/TEXTS'
import useLocaleContext from 'contexts/LocaleContext/useLocaleContext'

export default function Home() {
  const { translate } = useLocaleContext()
  return (
    <>
      <PageHead title={translate(TEXTS.HOME_HEAD_TITLE)} description={translate(TEXTS.HOME_HEAD_DESCRIPTION)} />
      <Redirect url={PATHS.LOGIN}></Redirect>
    </>
  )
}





