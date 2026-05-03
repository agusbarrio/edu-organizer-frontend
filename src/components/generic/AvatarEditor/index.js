import { Button, Divider, Slider, Stack, Typography, useTheme } from "@mui/material";
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from "react";
import ReactAvatarEditor from "react-avatar-editor";
import { useDropzone } from "react-dropzone";
import { CloudUpload, Delete, PhotoCamera, ZoomIn, ZoomOut } from "@mui/icons-material"
import useLocaleContext from "hooks/useLocaleContext";
import styled from "@emotion/styled";
import IconButton from "../IconButton";
import CORE_TEXTS from "constants/CORE_TEXTS";

const AvatarEditor = forwardRef(({ label, value }, ref) => {
    const [editor, setEditor] = useState(null);
    const [file, setFile] = useState(value);
    const [scale, setScale] = useState(1);
    const cameraInputRef = useRef(null);
    const { translate } = useLocaleContext();
    const handleScale = (e) => {
        setScale(parseFloat(e.target.value));
    };

    const { palette } = useTheme()

    const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
        onDrop: (acceptedFiles) => {
            setFile(acceptedFiles[0])
        },
        multiple: false,
        accept: {
            "image/png": [".png"],
            "image/jpeg": [".jpg", ".jpeg"],
        },
    })

    const StyledDiv = useMemo(() => styled('div')({
        display: 'flex',
        width: '250px',
        height: '250px',
        boxSizing: 'border-box',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        borderWidth: '6px',
        borderRadius: '2rem',
        borderStyle: 'dashed',
        backgroundColor: isDragAccept ? palette.grey[100] : palette.grey[50],
        color: isDragAccept ? palette.primary.main : palette.grey[500],
        borderColor: isDragAccept ? palette.primary.main : palette.grey[300],
        outline: 'none',
        transition: 'all .24s ease-in-out',
        ' &:hover': {
            transition: 'all .24s ease-in-out',
            borderColor: palette.primary.main,
            color: palette.primary.main
        },

        cursor: 'pointer'

    }), [palette, isDragAccept])

    useImperativeHandle(ref, () => ({
        getValue: () => {
            if (editor) {
                const canvas = editor.getImageScaledToCanvas()
                return new Promise((resolve) => {
                    canvas.toBlob((blob) => {
                        const name = file?.name || "photo.jpg"
                        const type = file?.type || blob?.type || "image/jpeg"
                        const newFile = new File([blob], name, { type })
                        resolve(newFile)
                    })
                }
                )
            }
        }
    }), [editor, file])

    const handleCameraChange = useCallback((e) => {
        const picked = e.target.files?.[0]
        if (picked) setFile(picked)
        e.target.value = ""
    }, [])

    return (
        <Stack direction={'row'} justifyContent={'center'}>
            {!file ? (
                <Stack spacing={2} alignItems="center" sx={{ maxWidth: 280 }}>
                    <StyledDiv {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
                        <input {...getInputProps()} />
                        <CloudUpload sx={{ fontSize: 100 }} color={"primary"} />
                        <Typography variant={"h6"} textAlign="center">{label}</Typography>
                        <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mt: 1 }}>
                            {translate(CORE_TEXTS.AVATAR_UPLOAD_FILES_HINT)}
                        </Typography>
                    </StyledDiv>
                    <Divider sx={{ width: "100%" }} />
                    <input
                        ref={cameraInputRef}
                        type="file"
                        accept="image/png,image/jpeg"
                        capture="environment"
                        style={{ display: "none" }}
                        onChange={handleCameraChange}
                    />
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<PhotoCamera />}
                        onClick={() => cameraInputRef.current?.click()}
                    >
                        {translate(CORE_TEXTS.AVATAR_TAKE_PHOTO)}
                    </Button>
                </Stack>

            ) : (
                <Stack>
                    <ReactAvatarEditor
                        ref={(editorRef) => setEditor(editorRef)}
                        image={file}
                        width={250}
                        height={250}
                        border={0}
                        borderRadius={125}
                        color={[200, 200, 200, 0.6]}
                        scale={scale}
                        rotate={0}
                    />
                    <Stack direction="row" sx={{ mb: 1 }} alignItems="center">

                        <IconButton color="error" tooltip={translate(CORE_TEXTS.GENERIC_DELETE)} onClick={() => {
                            setFile(null)
                            setScale(1)
                        }}><Delete></Delete></IconButton>
                        <IconButton color="primary" tooltip={translate(CORE_TEXTS.GENERIC_ZOOM_OUT)} disabled={scale === 1} onClick={() => {
                            setScale((scale - 0.1) < 1 ? 1 : scale - 0.1)
                        }}><ZoomOut /></IconButton>
                        <Slider value={scale} onChange={handleScale} min={1} max={3} step={0.01} />
                        <IconButton color="primary" tooltip={translate(CORE_TEXTS.GENERIC_ZOOM_IN)} disabled={scale === 3} onClick={() => {
                            setScale((scale + 0.1) > 3 ? 3 : scale + 0.1)
                        }}><ZoomIn /></IconButton>
                    </Stack>
                </Stack>
            )}
        </Stack >
    );
})

AvatarEditor.displayName = 'AvatarEditor'

export default AvatarEditor;