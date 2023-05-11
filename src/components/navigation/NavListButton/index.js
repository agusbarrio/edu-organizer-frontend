import ListItemButton from "components/generic/ListItemButton"
import Link from "next/link"

function NavListButton({ linkProps, ...props }) {
    return <ListItemButton buttonProps={{ component: Link, ...linkProps }} {...props}></ListItemButton >
}

export default NavListButton