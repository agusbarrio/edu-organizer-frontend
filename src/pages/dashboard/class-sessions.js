import AccessManager from "components/managers/AccesssManager"
import ClassSessionsPage from "components/pages/ClassSessionsPage"

function ClassSessions() {
    return (
        <AccessManager needUserSession={true}>
            <ClassSessionsPage></ClassSessionsPage>
        </AccessManager>
    )
}

export default ClassSessions