import CORE_TEXTS from "constants/CORE_TEXTS"
import TableActionButton from "../TableActionButton"
import { ForwardToInbox } from "@mui/icons-material"
import useLocaleContext from "hooks/useLocaleContext"

function ResendInvitationIconButton({ onClick }) {
    const { translate } = useLocaleContext()

    return (<TableActionButton
        color="primary"
        tooltip={translate(CORE_TEXTS.GENERIC_RESEND_INVITATION)}
        onClick={onClick}
        iconComponent={ForwardToInbox}
    />)
}

export default ResendInvitationIconButton
