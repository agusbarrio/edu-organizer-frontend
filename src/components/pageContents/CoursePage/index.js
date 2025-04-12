import useLocaleContext from "hooks/useLocaleContext"
import useSessionContext from "hooks/useSessionContext"
import { useEffect, useMemo } from "react"
import useService from "hooks/useService"
import useGetCourseService from "services/courseAccess/useGetCourseService"
import { Button, Stack } from "@mui/material"
import { Add, Face, HistoryEdu } from "@mui/icons-material"
import TEXTS from "constants/TEXTS"
import useNavigate from "hooks/useNavigate"

import PATHS from "constants/PATHS"
import CourseTemplate from "components/templates/CourseTemplate"

function CoursePage() {
    const { translate } = useLocaleContext()
    const { courseSession: { course: courseDataSession } } = useSessionContext()
    const { getCourse } = useGetCourseService()
    const { value: course, runService, loading } = useService({ service: getCourse, defaultValue: {} })
    const { go } = useNavigate()

    useEffect(() => {
        runService(courseDataSession.id)
    }, [runService, courseDataSession.id])

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

    const handleClickLastClassSessions = () => {
        go(PATHS.COURSE_CLASS_SESSIONS)
    }
    return (
        <CourseTemplate title={course?.name} loading={loading}>
            <Stack spacing={2} width={'100%'}>
                <Button {...buttonProps} startIcon={<Add></Add>} onClick={handleClickNewClass}>{translate(TEXTS.NEW_CLASS_BUTTON)}</Button>
                <Button {...buttonProps} size="large" startIcon={<Face></Face>} onClick={handleClickNewStudent}>{translate(TEXTS.NEW_STUDENT_BUTTON)}</Button>
                <Button {...buttonProps} size="large" startIcon={<HistoryEdu></HistoryEdu>} onClick={handleClickLastClassSessions}>{translate(TEXTS.COURSE_CLASS_SESSIONS_BUTTON)}</Button>
            </Stack>

        </CourseTemplate>
    )
}

export default CoursePage