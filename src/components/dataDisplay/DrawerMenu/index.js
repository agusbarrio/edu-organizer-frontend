import { Divider, Drawer } from "@mui/material"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"
import useSessionContext from "hooks/useSessionContext"
import AdminMenu from "./components/AdminMenu"
import OwnerMenu from "./components/OwnerMenu"
import SuperAdminMenu from "./components/SuperAdminMenu"
//import TeacherMenu from "./components/TeacherMenu"
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from "react"
import useDevice from "hooks/useDevice"
import DrawerHeader from "./components/DrawerHeader"

const DrawerMenu = forwardRef(function DrawerMenu({ drawerWidth = 240 }, ref) {
    const { userSession: { user: { permissions } } } = useSessionContext();
    //const isTeacher = useMemo(() => permissions.includes(USER_PERMISSIONS.TEACHER), [permissions])
    const isOwner = useMemo(() => permissions.includes(USER_PERMISSIONS.OWNER), [permissions])
    const isAdmin = useMemo(() => permissions.includes(USER_PERMISSIONS.ADMIN), [permissions])
    const isSuperAdmin = useMemo(() => permissions.includes(USER_PERMISSIONS.SUPERADMIN), [permissions])
    const { lessThanSm } = useDevice()

    const [mobileOpen, setMobileOpen] = useState(false)

    const openMobile = useCallback(() => {
        setMobileOpen(true)
    }, [])

    const closeMobile = useCallback(() => {
        setMobileOpen(false)
    }, [])

    useImperativeHandle(ref, () => ({
        openMobile,
        closeMobile
    }), [openMobile, closeMobile])

    useEffect(() => {
        if (!lessThanSm) {
            closeMobile()
        }
    }, [lessThanSm, closeMobile])

    const drawerProps = useMemo(() => {
        const resultProps = { sx: { width: drawerWidth }, PaperProps: { sx: { width: drawerWidth } } }
        if (lessThanSm) {
            resultProps.variant = 'temporary'
            resultProps.open = mobileOpen
            resultProps.onClose = () => {
                closeMobile()
            }
        } else {
            resultProps.variant = 'permanent'
            resultProps.open = true
            resultProps.PaperProps.sx.position = 'static'
        }
        return resultProps
    }, [lessThanSm, mobileOpen, drawerWidth, closeMobile])

    return (
        <Drawer {...drawerProps} >
            {lessThanSm && (
                <>
                    <DrawerHeader></DrawerHeader>
                    <Divider></Divider>
                </>
            )}
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
            {/*
            TODO implement teacher page
            {isTeacher && (
                <>
                    <TeacherMenu></TeacherMenu>
                    <Divider></Divider>
                </>
            )} */}
        </Drawer>
    )
})

export default DrawerMenu