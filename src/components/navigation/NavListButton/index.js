import ListItemButton from "core/components/ListItemButton"
import Link from "next/link"

function NavListButton({ linkProps, ...props }) {
    return <ListItemButton buttonProps={{ component: Link, ...linkProps }} {...props}></ListItemButton >
}

export default NavListButton