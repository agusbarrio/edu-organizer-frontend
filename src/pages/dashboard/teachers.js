import AccessManager from "components/managers/AccesssManager"
import TeachersPage from "components/pages/TeachersPage"

function Teachers() {
    return (
        <AccessManager needUserSession={true}>
            <TeachersPage></TeachersPage>
        </AccessManager>
    )
}

export default Teachers