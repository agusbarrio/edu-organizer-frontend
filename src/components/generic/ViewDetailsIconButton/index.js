import CORE_TEXTS from "constants/CORE_TEXTS"
import TableActionButton from "../TableActionButton"
import { ArrowForward } from "@mui/icons-material"
import useLocaleContext from "hooks/useLocaleContext"

function ViewDetailsIconButton({ onClick }) {
    const { translate } = useLocaleContext()
    return (<TableActionButton
        color="primary"
        tooltip={translate(CORE_TEXTS.GENERIC_VIEW_DETAILS)}
        onClick={onClick}
        iconComponent={ArrowForward}
    />)
}

export default ViewDetailsIconButton