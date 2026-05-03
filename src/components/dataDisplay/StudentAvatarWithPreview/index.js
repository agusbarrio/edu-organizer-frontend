import { Box } from "@mui/material"
import { useCallback } from "react"
import AlertModal from "components/generic/modals/AlertModal"
import useModalContext from "hooks/useModalContext"
import Avatar from "../Avatar"

function StudentAvatarWithPreview({ row, size = 40 }) {
    const { openModal } = useModalContext()
    const fullName = `${row?.firstName ?? ""} ${row?.lastName ?? ""}`.trim()
    const src = row?.avatar?.file

    const handleOpen = useCallback((e) => {
        e.stopPropagation()
        e.preventDefault()
        if (!src) return
        openModal(AlertModal, {
            title: fullName,
            maxWidth: "sm",
            children: (
                <Box sx={{ display: "flex", justifyContent: "center", pt: 1 }}>
                    <Box
                        component="img"
                        alt={fullName}
                        src={src}
                        sx={{ maxWidth: "100%", maxHeight: "70vh", borderRadius: 1, objectFit: "contain" }}
                    />
                </Box>
            ),
        })
    }, [openModal, src, fullName])

    return (
        <Box
            onClick={handleOpen}
            onMouseDown={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            sx={{ display: "inline-flex", cursor: src ? "zoom-in" : "default" }}
        >
            <Avatar src={src} alt={fullName || "?"} sx={{ width: size, height: size }} />
        </Box>
    )
}

export default StudentAvatarWithPreview
