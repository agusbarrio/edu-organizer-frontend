import DashboardTemplate from "components/templates/DashboardTemplate"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import useService from "hooks/useService"
import ClassSessionMachine from "machines/ClassSessionMachine"
import moment from "moment"
import { useCallback, useEffect, useMemo } from "react"
import useGetClassSessionService from "services/classSessions/useGetClassSessionService"
import { renderText } from "utils/text"


function EditClassSessionPage() {
    const { translate } = useLocaleContext()
    const { go, goBack } = useNavigate()

    const goClassSessions = useCallback(() => {
        go(renderText(PATHS.DASHBOARD_CLASS_SESSIONS))
    }, [go])

    const { getClassSession } = useGetClassSessionService()
    const { params } = useNavigate()
    const { value: classSession, loading, runService } = useService({ service: getClassSession })

    useEffect(() => {
        if (params?.classSessionId) runService(params.classSessionId)
    }, [params.classSessionId, runService])

    const initialContext = useMemo(() => ({
        course: classSession?.course,
        date: moment(classSession?.date),
        id: classSession?.id,
        presentStudentsIds: classSession?.classSessionStudents?.filter(classSessionStudent => classSessionStudent.isPresent).map(classSessionStudent => classSessionStudent.studentId),
        presentStudentsData: classSession?.classSessionStudents.filter(classSessionStudent => classSessionStudent.isPresent).map(classSessionStudent => ({ ...classSessionStudent, metadata: classSessionStudent.metadata, id: classSessionStudent.studentId })),
    }), [classSession])

    return (
        <DashboardTemplate
            title={translate(TEXTS.EDIT_CLASS_SESSION_PAGE_TITLE)}
            backButtonProps={{
                children: translate(CORE_TEXTS.GENERIC_BACK),
                onClick: goBack
            }}
            loading={loading}
        >
            <ClassSessionMachine onFinish={goClassSessions} edit={true} initialContext={initialContext}></ClassSessionMachine>
        </DashboardTemplate>

    )
}

export default EditClassSessionPage