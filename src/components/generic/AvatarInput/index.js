import { Avatar, Stack, } from "@mui/material";
import { Edit } from "@mui/icons-material"
import IconButton from "../IconButton";
import CORE_TEXTS from "constants/CORE_TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import useModalContext from "hooks/useModalContext";
import ConfirmModal from "../modals/ConfirmModal";
import AvatarEditor from "../AvatarEditor";
import { useMemo, useRef } from "react";
import useCreateSingleImageService from "services/files/useCreateSingleImageService";

function AvatarInput({ value, onChange, size }) {
    const { translate } = useLocaleContext()
    const { openModal } = useModalContext()
    const avatarInputRef = useRef()
    const { createSingleImage } = useCreateSingleImageService()

    const getFileFromBase64 = (base64) => {
        const parts = base64.split(';base64,');
        const type = parts[0].split(':')[1];
        const byteString = atob(parts[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type });
        return new File([blob], value?.name, { type });
    }

    const avatarSx = useMemo(() => {
        if (size === "small") return { width: '3rem', height: '3rem' }
        return { width: 150, height: 150 }
    }, [size])

    return (
        <Stack justifyContent="center" alignItems="center">
            {value
                ?
                <>
                    <Avatar
                        src={value?.file}
                        sx={avatarSx}
                    />
                </>

                : <Avatar
                    sx={avatarSx} />}
            <IconButton size={size} color="primary" tooltip={translate(CORE_TEXTS.GENERIC_EDIT)} onClick={() => {
                openModal(ConfirmModal, {
                    title: translate(CORE_TEXTS.GENERIC_AVATAR_EDITOR_TITLE),
                    children: <AvatarEditor ref={avatarInputRef} value={value?.file ? getFileFromBase64(value?.file) : null} />,
                    onConfirm: async () => {
                        const file = await avatarInputRef.current.getValue()
                        if (file) {
                            await createSingleImage({ file }, {
                                onSuccess: (result) => {
                                    onChange({ file: result?.file, id: result?.id, name: result?.name })
                                }
                            })
                        } else {
                            onChange(null)
                        }

                    }
                })
            }}><Edit /></IconButton>
        </Stack>)
}

export default AvatarInput;