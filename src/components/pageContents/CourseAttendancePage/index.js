import PublicTemplate from "components/templates/PublicTemplate"
import TEMPLATE_TYPES from "constants/TEMPLATE_TYPES"
import useLocaleContext from "hooks/useLocaleContext"
import useSessionContext from "hooks/useSessionContext"
import { useEffect, useMemo } from "react"
import useService from "hooks/useService"

import useGetCourseService from "services/courseAccess/useGetCourseService"
import { Button } from "@mui/material"
import { Add, Face } from "@mui/icons-material"
import TEXTS from "constants/TEXTS"
import useNavigate from "hooks/useNavigate"
import useModalContext from "hooks/useModalContext"
import AlertModal from "components/generic/modals/AlertModal"

function CourseAttendancePage() {
    const { translate } = useLocaleContext()
    const { course: courseSession } = useSessionContext()
    const { getCourse } = useGetCourseService()
    const { value: course, runService, loading } = useService({ service: getCourse, defaultValue: {} })
    const { go } = useNavigate()
    const { openModal } = useModalContext()
    useEffect(() => {
        runService(courseSession.id)
    }, [runService, courseSession.id])

    const buttonProps = useMemo(() => ({
        variant: 'outlined',
        fullWidth: true,
        size: 'large',
        sx: {
            height: '4rem',
        }
    }), [])

    const handleClickNewClass = () => {
        openModal(AlertModal, {
            textContent: 'Te amo mucho cielito <3'
        })
    }

    const handleClickNewStudent = () => {
        openModal(AlertModal, {
            textContent: 'De Agus para Abi <3'
        })
    }
    return (
        <PublicTemplate title={course?.name} type={TEMPLATE_TYPES.COURSE} loading={loading}>
            <Button {...buttonProps} startIcon={<Add></Add>} onClick={handleClickNewClass}>{translate(TEXTS.NEW_CLASS_BUTTON)}</Button>
            <Button {...buttonProps} size="large" startIcon={<Face></Face>} onClick={handleClickNewStudent}>{translate(TEXTS.NEW_STUDENT_BUTTON)}</Button>
        </PublicTemplate>
    )
}

export default CourseAttendancePage