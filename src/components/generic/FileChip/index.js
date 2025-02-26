import { Chip } from "@mui/material"

import { useMemo } from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ImageIcon from "@mui/icons-material/Image";
import MovieIcon from "@mui/icons-material/Movie";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ArchiveIcon from "@mui/icons-material/Archive";
import CodeIcon from "@mui/icons-material/Code";
import TableChartIcon from "@mui/icons-material/TableChart";

const mimeTypeIcons = {
    "application/pdf": PictureAsPdfIcon,
    "text/plain": InsertDriveFileIcon,
    "application/msword": InsertDriveFileIcon,
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": InsertDriveFileIcon,
    "image/jpeg": ImageIcon,
    "image/png": ImageIcon,
    "image/gif": ImageIcon,
    "video/mp4": MovieIcon,
    "video/quicktime": MovieIcon,
    "audio/mpeg": AudiotrackIcon,
    "audio/wav": AudiotrackIcon,
    "application/zip": ArchiveIcon,
    "application/x-rar-compressed": ArchiveIcon,
    "application/x-tar": ArchiveIcon,
    "application/gzip": ArchiveIcon,
    "text/javascript": CodeIcon,
    "application/json": CodeIcon,
    "text/csv": TableChartIcon,
    "application/vnd.ms-excel": TableChartIcon,
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": TableChartIcon,
};

const FileTypeIcon = ({ mimeType, ...props }) => {
    const Icon = useMemo(() => mimeTypeIcons[mimeType] || InsertDriveFileIcon, [mimeType]);
    return <Icon color="primary" {...props} />;
};


function FileChip({ file, onDelete, ...props }) {
    return (
        <Chip label={file.name} onDelete={onDelete} icon={<FileTypeIcon mimeType={file.mimeType} />} {...props} />
    )
}

export default FileChip