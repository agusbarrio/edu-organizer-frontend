import AccessManager from "components/managers/AccesssManager"
import StudentsPage from "components/pages/StudentsPage"

function Students() {
    return (
        <AccessManager needUserSession={true}>
            <StudentsPage></StudentsPage>
        </AccessManager>
    )
}

export default Students