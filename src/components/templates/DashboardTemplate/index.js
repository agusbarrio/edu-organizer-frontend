import { Box, Stack } from "@mui/material";
import Header from "components/dataDisplay/Header";
import NavMenu from "components/dataDisplay/NavMenu";
import { useCallback, useState } from "react";


function DashboardTemplate({ children }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = useCallback(() => {
        setMobileOpen(!mobileOpen);
    }, [mobileOpen]);

    return (
        <Stack height={'100vh'} width={'100vw'} >
            <Header drawerOpen={mobileOpen} onClickDrawerButton={handleDrawerToggle}></Header>
            <Stack direction={'row'} height={'100%'} >
                <NavMenu open={mobileOpen}></NavMenu>
                <Box >
                    {children}
                </Box>
            </Stack>

        </Stack>
    )
}

export default DashboardTemplate;