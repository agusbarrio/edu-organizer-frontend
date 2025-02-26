import { Box, Typography, useTheme } from "@mui/material";
import { CloudUpload } from "@mui/icons-material"
import useLocaleContext from "hooks/useLocaleContext";
import { useCallback, useMemo } from "react";
import useCreateSingleImageService from "services/files/useCreateSingleImageService";

import { useDropzone } from "react-dropzone";
import styled from "@emotion/styled";
import CORE_TEXTS from "constants/CORE_TEXTS";

import FileChip from "../FileChip";

// Componente para subir archivos. Los muestra en forma de lista y permite subir hasta maxFiles archivos. Cada uno tiene una etiqueta con el nombre del archivo y un botón para eliminarlo.
// Cuando se agrega un archivo se deberia de llamar al servicio createSingleImage para subir el archivo y obtener el id y el nombre del archivo.
function FilesInput({ value = [], onChange, maxFiles = 3, accept = {
    "image/png": [".png"],
    "image/jpeg": [".jpg", ".jpeg"],
} }) {

    const handleDelete = (file) => {
        onChange(value.filter((f) => f.id !== file.id))
    }

    const { createSingleImage } = useCreateSingleImageService()

    const handleDrop = useCallback(async (acceptedFiles) => {
        const newFiles = await Promise.allSettled(acceptedFiles.map(async (file) => {
            const newFile = await createSingleImage({ file })
            return newFile
        }))
        const newFilesResolved = newFiles.map((file) => file.status === 'fulfilled' ? file.value : null).filter(Boolean)
        onChange([...value, ...newFilesResolved])
    }, [value, onChange, createSingleImage])

    const { translate } = useLocaleContext()

    const maxFilesToDrop = useMemo(() => {
        return maxFiles - value.length
    }, [maxFiles, value])

    const disabled = useMemo(() => maxFilesToDrop === 0, [maxFilesToDrop])
    const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
        onDrop: handleDrop,
        multiple: true,
        accept,
        maxFiles: maxFilesToDrop,
        disabled
    })
    const { palette } = useTheme()

    const StyledDiv = useMemo(() => styled('div')({
        display: 'flex',
        width: '100%',
        boxSizing: 'border-box',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '1rem',
        borderWidth: '6px',
        borderRadius: '1rem',
        borderStyle: 'dashed',
        backgroundColor: isDragAccept ? palette.grey[100] : palette.grey[50],
        color: isDragAccept ? palette.primary.main : palette.grey[500],
        borderColor: isDragAccept ? palette.primary.main : palette.grey[300],
        outline: 'none',
        transition: 'all .24s ease-in-out',
        ' &:hover': disabled ? {} : {
            transition: 'all .24s ease-in-out',
            borderColor: palette.primary.main,
            color: palette.primary.main
        },
        cursor: disabled ? 'not-allowed' : 'pointer'
    }), [palette, isDragAccept, disabled])


    console.log(value)
    return (
        <StyledDiv  {...getRootProps({ isFocused, isDragAccept, isDragReject })} >
            {value.map((file) => (
                <FileChip key={file.id} file={file} onDelete={() => handleDelete(file)} />
            ))}
            <input {...getInputProps()} />
            {/* add if can only text */}
            {maxFilesToDrop > 0 && (
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" alignSelf="center">
                    <CloudUpload color={"primary"} />
                    <Typography variant="body1" color="text.secondary">{translate(CORE_TEXTS.FILES_INPUT_MAX_FILES_REACHED, { maxFiles: maxFilesToDrop })}</Typography>
                </Box>
            )}
        </StyledDiv>
    )
}

export default FilesInput;