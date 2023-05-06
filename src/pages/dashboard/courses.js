import AccessManager from "components/managers/AccesssManager"
import CoursesPage from "components/pages/CoursesPage"

function Courses() {
    return (
        <AccessManager needUserSession={true}>
            <CoursesPage></CoursesPage>
        </AccessManager>
    )
}

export default Courses