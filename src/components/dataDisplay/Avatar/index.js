import { Avatar as AvatarMUI } from "@mui/material"
import { useMemo } from "react"
function Avatar({ src, alt, children, ...props }) {
    const resultChildren = useMemo(() => {
        if (children) return children
        //Return initials
        if (!src && alt) {
            const initials = alt.split(' ').map((word) => word[0]).join('')
            return initials
        }
        return null
    })
    return <AvatarMUI src={src} alr={alt}>{resultChildren}</AvatarMUI>
}

export default Avatar