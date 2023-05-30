import Link from "components/generic/Link"
import PATHS from "constants/PATHS"
import { School } from "@mui/icons-material"
import { useMemo } from "react"
import TEMPLATE_TYPES from "constants/TEMPLATE_TYPES"
function HomeLinkIcon({ iconProps, type = TEMPLATE_TYPES.USER, ...props }) {
    const href = useMemo(() => {
        if (type === TEMPLATE_TYPES.USER) {
            return PATHS.HOME
        }
        if (type === TEMPLATE_TYPES.COURSE) {
            return PATHS.COURSE
        }
        return PATHS.HOME
    }, [type])
    return <Link href={href} {...props}><School {...iconProps} /></Link>
}

export default HomeLinkIcon