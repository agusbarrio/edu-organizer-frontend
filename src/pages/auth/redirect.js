import Redirect from 'components/navigation/Redirect'
import PATHS from 'constants/PATHS'

export default function AuthRedirect() {
    return (
        <Redirect url={PATHS.LOGIN}></Redirect>
    )
}


