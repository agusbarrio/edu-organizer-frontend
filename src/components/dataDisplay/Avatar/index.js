import { Avatar as AvatarMUI } from "@mui/material"
import { useMemo } from "react"
function Avatar({ src, alt, children, sx }) {
    const resultChildren = useMemo(() => {
        if (children) return children
        //Return initials
        if (!src && alt) {
            const initials = alt.split(' ').map((word) => word[0]).join('')
            return initials
        }
        return null
    }, [alt, children, src])
    return <AvatarMUI src={src} alt={alt} sx={sx}>{resultChildren}</AvatarMUI>
}

export default Avatar