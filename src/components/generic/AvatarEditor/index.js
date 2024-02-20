import { Slider, Stack, Typography, useTheme } from "@mui/material";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from "react";
import ReactAvatarEditor from "react-avatar-editor";
import { useDropzone } from "react-dropzone";
import { Check, CloudUpload, Delete, ZoomIn, ZoomOut } from "@mui/icons-material"
import useLocaleContext from "hooks/useLocaleContext";
import styled from "@emotion/styled";
import IconButton from "../IconButton";
import CORE_TEXTS from "constants/CORE_TEXTS";

const AvatarEditor = forwardRef(({ label, value, onChange }, ref) => {
    const [editor, setEditor] = useState(null);
    const [file, setFile] = useState(value);
    const [scale, setScale] = useState(1);
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
                        const newFile = new File([blob], file.name, { type: file.type })
                        resolve(newFile)
                    })
                }
                )
            }
        }
    }), [editor, file])

    return (
        <Stack direction={'row'} justifyContent={'center'}>
            {!file ? (
                <StyledDiv  {...getRootProps({ isFocused, isDragAccept, isDragReject })} >
                    <input {...getInputProps()} />
                    <CloudUpload sx={{ fontSize: 100 }} color={"primary"} />
                    <Typography variant={"h6"}>{label}</Typography>
                </StyledDiv>

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