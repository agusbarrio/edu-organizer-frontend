import { Link as MuiLink } from "@mui/material";
import NextLink from "next/link";

function Link({ href, children, ...props }) {
    return (
        <MuiLink component={NextLink} href={href}  {...props} >
            {children}
        </MuiLink>
    )
}

export default Link;