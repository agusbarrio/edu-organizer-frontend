import { Download } from "@mui/icons-material"
import Card from "components/generic/Card"
import FileChip from "components/generic/FileChip"
import LabelValue from "components/generic/LabelValue"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import { useCallback } from "react"


function StudentDataCard({ student }) {
    const { translate } = useLocaleContext()

    const handleDownloadFile = useCallback((file) => {
        const link = document.createElement('a');
        link.href = file.file;
        link.download = file.name;
        link.click();
    }, [])

    return (
        <Card title={translate(TEXTS.STUDENT_DATA_CARD_TITLE)}>
            <LabelValue label={translate(TEXTS.STUDENT_FIRST_NAME_LABEL)} value={student?.firstName}></LabelValue>
            <LabelValue label={translate(TEXTS.STUDENT_LAST_NAME_LABEL)} value={student?.lastName}></LabelValue>
            {student?.course?.name && <LabelValue label={translate(TEXTS.STUDENT_COURSE_NAME_LABEL)} value={student?.course?.name}></LabelValue>}
            {!_.isEmpty(student?.files) && <LabelValue label={translate(TEXTS.STUDENT_FILES_LABEL)} value={student?.files?.map((file) => <FileChip key={file.id} file={file} onDelete={() => handleDownloadFile(file)} deleteIcon={<Download />}></FileChip>)}></LabelValue>}
        </Card >
    )
}

export default StudentDataCard