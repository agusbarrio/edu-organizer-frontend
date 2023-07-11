import Link from "components/generic/Link"
import PATHS from "constants/PATHS"
import { School } from "@mui/icons-material"
import { useMemo } from "react"
import TEMPLATE_TYPES from "constants/TEMPLATE_TYPES"
import useSessionContext from "hooks/useSessionContext"
import useNavigate from "hooks/useNavigate"
import { renderText } from "utils/text"
function HomeLinkIcon({ iconProps, type = TEMPLATE_TYPES.USER, ...props }) {
    const { course: { logged: courseLogged } } = useSessionContext()
    const { params } = useNavigate()
    const href = useMemo(() => {
        if (type === TEMPLATE_TYPES.USER) {
            return PATHS.HOME
        }
        if (type === TEMPLATE_TYPES.COURSE) {
            if (courseLogged) return PATHS.COURSE
            return renderText(PATHS.COURSE_LOGIN, { _id: params?._id })
        }
        return PATHS.HOME
    }, [type, courseLogged, params?._id])
    return <Link href={href} {...props}><School {...iconProps} /></Link>
}

export default HomeLinkIcon