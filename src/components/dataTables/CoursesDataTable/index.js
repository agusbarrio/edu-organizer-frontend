import { ArrowForward, Delete, Edit, } from "@mui/icons-material"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import { useCallback, useMemo, useRef } from "react"
import useSessionContext from "hooks/useSessionContext"
import { renderText } from "utils/text"
import CustomDataGrid from "components/generic/CustomDataGrid"
import IconButton from "components/generic/IconButton"
import useModalContext from "hooks/useModalContext"
import ConfirmModal from "components/generic/modals/ConfirmModal"
import useDeleteCourseService from "services/courses/useDeleteCourseService"
import _ from "lodash"
import InputsCreation from "components/inputs/InputsCreation"

function CoursesDataTable({ courses = [], onDelete }) {
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    const { openModal } = useModalContext()
    const { deleteCourse } = useDeleteCourseService()
    const navigateToCourse = useCallback((courseId) => {
        go(renderText(PATHS.DASHBOARD_COURSE, { courseId }))
    }, [go])

    const navigateToEditCourse = useCallback((courseId) => {
        //TODO crear pagina de editar curso
    }, [])

    const handleClickDeleteCourse = useCallback((courseId) => {
        openModal(ConfirmModal, {
            title: translate(TEXTS.DELETE_COURSE_MODAL_TITLE),
            textContent: translate(TEXTS.DELETE_COURSE_MODAL_CONTENT),
            onConfirm: async () => {
                const result = await deleteCourse(courseId)
                if (result && _.isFunction(onDelete)) {
                    onDelete()
                }
            }

        })
    }, [openModal, translate, deleteCourse, onDelete])


    const handleEditSelection = useCallback((rowsSelected) => {
        //TODO implementar edit multiple
    }, [])

    const handleDeleteSelection = useCallback((rowsSelected) => {
        openModal(ConfirmModal, {
            title: translate(TEXTS.DELETE_COURSES_SELECTION_MODAL_TITLE),
            textContent: translate(TEXTS.DELETE_COURSES_SELECTION_MODAL_CONTENT),
            onConfirm: async () => {
                //TODO implementar delete multiple
            }

        })
    }, [openModal, translate])

    const columns = useMemo(() => {
        return [
            { field: 'name', flex: 1, headerName: translate(TEXTS.COURSE_NAME_LABEL) },
            {
                field: 'actions',
                type: 'actions',
                headerName: translate(CORE_TEXTS.GENERIC_ACTIONS),
                getActions: (data) => {
                    return [
                        <IconButton color="error" size={'small'} tooltip={translate(TEXTS.DELETE_COURSE_TOOLTIP)} key={`delete-course-${data.id}`} onClick={() => {
                            handleClickDeleteCourse(data.id)
                        }}><Delete fontSize="inherit"></Delete>
                        </IconButton>,
                        <IconButton size={'small'} tooltip={translate(TEXTS.GO_EDIT_COURSE)} key={`go-edit-${data.id}`} onClick={() => {
                            navigateToEditCourse(data.id)
                        }}><Edit fontSize="inherit"></Edit>
                        </IconButton>,
                        <IconButton color="primary" size={'small'} tooltip={translate(TEXTS.GO_COURSE)} key={`go-course-${data.id}`} onClick={() => {
                            navigateToCourse(data.id)
                        }}><ArrowForward fontSize="inherit"></ArrowForward>
                        </IconButton>,
                    ]
                }
            }
        ]
    }, [translate, navigateToCourse, handleClickDeleteCourse, navigateToEditCourse])

    return <CustomDataGrid rows={courses} columns={columns} onClickEditSelection={handleEditSelection} onClickDeleteSelection={handleDeleteSelection} checkboxSelection rowSelection></CustomDataGrid>
}

export default CoursesDataTable