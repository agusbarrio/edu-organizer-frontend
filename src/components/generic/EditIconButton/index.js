import CORE_TEXTS from "constants/CORE_TEXTS"
import TableActionButton from "../TableActionButton"
import { Edit } from "@mui/icons-material"
import useLocaleContext from "hooks/useLocaleContext"


function EditIconButton({ onClick }) {
    const { translate } = useLocaleContext()

    return (<TableActionButton
        color="success"
        tooltip={translate(CORE_TEXTS.GENERIC_EDIT)}
        onClick={onClick}
        iconComponent={Edit}
    />)
}

export default EditIconButton