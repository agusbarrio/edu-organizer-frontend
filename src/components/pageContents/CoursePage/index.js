import useLocaleContext from "hooks/useLocaleContext"
import useSessionContext from "hooks/useSessionContext"
import { useEffect, useMemo } from "react"
import useService from "hooks/useService"

import useGetCourseService from "services/courseAccess/useGetCourseService"
import { Button, Stack } from "@mui/material"
import { Add, Face } from "@mui/icons-material"
import TEXTS from "constants/TEXTS"
import useNavigate from "hooks/useNavigate"
import useModalContext from "hooks/useModalContext"
import PATHS from "constants/PATHS"
import CourseTemplate from "components/templates/CourseTemplate"

function CoursePage() {
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
        go(PATHS.COURSE_NEW_CLASS)
    }

    const handleClickNewStudent = () => {
        go(PATHS.COURSE_NEW_STUDENT)
    }
    return (
        <CourseTemplate title={course?.name} loading={loading}>
            <Stack spacing={2} width={'100%'}>
                <Button {...buttonProps} startIcon={<Add></Add>} onClick={handleClickNewClass}>{translate(TEXTS.NEW_CLASS_BUTTON)}</Button>
                <Button {...buttonProps} size="large" startIcon={<Face></Face>} onClick={handleClickNewStudent}>{translate(TEXTS.NEW_STUDENT_BUTTON)}</Button>
            </Stack>

        </CourseTemplate>
    )
}

export default CoursePage