import { Divider, Drawer } from "@mui/material"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"
import useSessionContext from "hooks/useSessionContext"
import AdminMenu from "./components/AdminMenu"
import OwnerMenu from "./components/OwnerMenu"
import SuperAdminMenu from "./components/SuperAdminMenu"
import TeacherMenu from "./components/TeacherMenu"
import { useMemo } from "react"

function NavMenu() {
    const { userPermissions } = useSessionContext();
    const isTeacher = useMemo(() => userPermissions.includes(USER_PERMISSIONS.TEACHER), [userPermissions])
    const isOwner = useMemo(() => userPermissions.includes(USER_PERMISSIONS.OWNER), [userPermissions])
    const isAdmin = useMemo(() => userPermissions.includes(USER_PERMISSIONS.ADMIN), [userPermissions])
    const isSuperAdmin = useMemo(() => userPermissions.includes(USER_PERMISSIONS.SUPERADMIN), [userPermissions])
    return (
        <Drawer variant="permanent" PaperProps={{ sx: { position: 'static' } }} >
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