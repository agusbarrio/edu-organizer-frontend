import Redirect from 'components/navigation/Redirect'
import PATHS from 'constants/PATHS'

export default function Home() {
  return (
    <Redirect url={PATHS.LOGIN}></Redirect>
  )
}





