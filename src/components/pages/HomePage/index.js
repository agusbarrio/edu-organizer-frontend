import PageHead from 'components/dataDisplay/PageHead'
import Redirect from 'components/navigation/Redirect'
import PATHS from 'constants/PATHS'
import TEXTS from 'constants/TEXTS'
import useLocaleContext from 'hooks/useLocaleContext'

function HomePage() {
    const { translate } = useLocaleContext()
    return (
        <>
            <PageHead title={translate(TEXTS.HOME_HEAD_TITLE)} description={translate(TEXTS.HOME_HEAD_DESCRIPTION)} />
            <Redirect url={PATHS.LOGIN}></Redirect>
        </>
    )
}

export default HomePage