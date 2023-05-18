import { Divider, Stack } from "@mui/material"
import HomeLinkIcon from "components/navigation/HomeLinkIcon"

function DrawerHeader() {
    return (
        <HomeLinkIcon sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingY: 2 }} iconProps={{ sx: { fontSize: '4rem' } }}></HomeLinkIcon>
    )
}

export default DrawerHeader