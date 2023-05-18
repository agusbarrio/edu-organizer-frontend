import Link from "components/generic/Link"
import PATHS from "constants/PATHS"
import { School } from "@mui/icons-material"
function HomeLinkIcon({ iconProps, ...props }) {
    return <Link href={PATHS.HOME} {...props}><School {...iconProps} /></Link>
}

export default HomeLinkIcon