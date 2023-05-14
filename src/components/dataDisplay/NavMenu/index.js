import { Divider, Drawer } from "@mui/material"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"
import useSessionContext from "hooks/useSessionContext"
import AdminMenu from "./components/AdminMenu"
import OwnerMenu from "./components/OwnerMenu"
import SuperAdminMenu from "./components/SuperAdminMenu"
import TeacherMenu from "./components/TeacherMenu"
import { useMemo } from "react"

function NavMenu({ innerRef }) {
    const { user: { permissions } } = useSessionContext();
    const isTeacher = useMemo(() => permissions.includes(USER_PERMISSIONS.TEACHER), [permissions])
    const isOwner = useMemo(() => permissions.includes(USER_PERMISSIONS.OWNER), [permissions])
    const isAdmin = useMemo(() => permissions.includes(USER_PERMISSIONS.ADMIN), [permissions])
    const isSuperAdmin = useMemo(() => permissions.includes(USER_PERMISSIONS.SUPERADMIN), [permissions])
    return (
        <Drawer variant="permanent" PaperProps={{ sx: { position: 'static' } }} ref={innerRef}>
            {isSuperAdmin && (
                <>
                    <SuperAdminMenu></SuperAdminMenu>
                    <Divider></Divider>
                </>
            )}
            {isOwner && (
                <>
                    <OwnerMenu></OwnerMenu>
                    <Divider></Divider>
                </>
            )}
            {isAdmin && (
                <>
                    <AdminMenu></AdminMenu>
                    <Divider></Divider>
                </>
            )}
            {isTeacher && (
                <>
                    <TeacherMenu></TeacherMenu>
                    <Divider></Divider>
                </>
            )}
        </Drawer>
    )
}

export default NavMenu