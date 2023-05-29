import CoomingSoon from "components/dataDisplay/CoomingSoon"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"

function OwnerMenu() {
    const { translate } = useLocaleContext()
    return <CoomingSoon>{translate(TEXTS.OWNER_MENU)}</CoomingSoon>
}

export default OwnerMenu