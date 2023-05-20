import ProtectedPage from "components/managers/ProtectedPage"
import CoursesPage from "components/pageContents/CoursesPage"
import USER_PERMISSIONS from "constants/USER_PERMISSIONS"

function Courses() {
    return (
        <ProtectedPage needUserSession={true} userPermissionsAllowed={[USER_PERMISSIONS.ADMIN]}>
            <CoursesPage></CoursesPage>
        </ProtectedPage>
    )
}



export default Courses