import PageHead from 'components/dataDisplay/PageHead'
import Redirect from 'components/navigation/Redirect'
import PATHS from 'constants/PATHS'
import TEXTS from 'constants/TEXTS'
import useLocaleContext from 'hooks/useLocaleContext'

function HomePage() {
    const { translate } = useLocaleContext()
    return (
        <>
            <Redirect url={PATHS.LOGIN}></Redirect>
        </>
    )
}

export default HomePage
