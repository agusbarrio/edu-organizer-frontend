import CORE_TEXTS from "constants/CORE_TEXTS"
import TableActionButton from "../TableActionButton"
import { Delete } from "@mui/icons-material"
import useLocaleContext from "hooks/useLocaleContext"


function DeleteIconButton({ onClick }) {
    const { translate } = useLocaleContext()

    return (<TableActionButton
        color="error"
        tooltip={translate(CORE_TEXTS.GENERIC_DELETE)}
        onClick={onClick}
        iconComponent={Delete}
    />)
}

export default DeleteIconButton