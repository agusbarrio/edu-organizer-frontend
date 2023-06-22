import { ArrowForward, Delete, Edit, } from "@mui/icons-material"
import CORE_TEXTS from "constants/CORE_TEXTS"
import PATHS from "constants/PATHS"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useNavigate from "hooks/useNavigate"
import { useCallback, useMemo, useRef } from "react"
import { renderText } from "utils/text"
import CustomDataGrid from "components/generic/CustomDataGrid"
import TableActionButton from "components/generic/TableActionButton"
import useModalContext from "hooks/useModalContext"
import ConfirmModal from "components/generic/modals/ConfirmModal"
import useDeleteCourseService from "services/courses/useDeleteCourseService"
import _ from "lodash"
import InputsCreation from "components/inputs/InputsCreation"
import useDeleteCoursesService from "services/courses/useDeleteCoursesService"
import useEditCoursesService from "services/courses/useEditCoursesService"


function CoursesDataTable({ courses = [], onDelete, onEdit }) {
    const { translate } = useLocaleContext()
    const { go } = useNavigate()
    const { openModal } = useModalContext()
    const { deleteCourse } = useDeleteCourseService()
    const { deleteCourses } = useDeleteCoursesService()
    const { editCourses } = useEditCoursesService()
    const navigateToCourse = useCallback((courseId) => {
        go(renderText(PATHS.DASHBOARD_COURSE, { courseId }))
    }, [go])

    const navigateToEditCourse = useCallback((courseId) => {
        go(renderText(PATHS.DASHBOARD_EDIT_COURSE, { courseId }))
    }, [go])

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

    const inputsCreationRef = useRef()

    const handleEditSelection = useCallback((rowsSelected) => {
        openModal(ConfirmModal, {
            PaperProps: { sx: { height: '100%' } },
            maxWidth: false,
            title: translate(TEXTS.EDIT_COURSES_SELECTION_MODAL_TITLE),
            children: <InputsCreation ref={inputsCreationRef}></InputsCreation>,
            onConfirm: async () => {
                if (inputsCreationRef.current) {
                    const ids = rowsSelected.map((row) => row.id)
                    const studentAttendanceFormData = inputsCreationRef.current.getValue()
                    const result = await editCourses({ ids, studentAttendanceFormData })
                    if (result && _.isFunction(onEdit)) {
                        onEdit()
                    }
                }
            }
        })
    }, [openModal, translate, editCourses, onEdit, inputsCreationRef])

    const handleDeleteSelection = useCallback((rowsSelected) => {
        openModal(ConfirmModal, {
            title: translate(TEXTS.DELETE_COURSES_SELECTION_MODAL_TITLE),
            textContent: translate(TEXTS.DELETE_COURSES_SELECTION_MODAL_CONTENT),
            onConfirm: async () => {
                const ids = rowsSelected.map((row) => row.id)
                const result = await deleteCourses(ids)
                if (result && _.isFunction(onDelete)) {
                    onDelete()
                }
            }
        })
    }, [openModal, translate, deleteCourses, onDelete])

    const columns = useMemo(() => {
        return [
            { field: 'name', flex: 1, headerName: translate(TEXTS.COURSE_NAME_LABEL) },
            {
                field: 'actions',
                type: 'actions',
                headerName: translate(CORE_TEXTS.GENERIC_ACTIONS),
                getActions: (data) => {
                    return [
                        <TableActionButton
                            color="error"
                            tooltip={translate(TEXTS.DELETE_COURSE_TOOLTIP)}
                            key={`delete-course-${data.id}`}
                            iconComponent={Delete}
                            onClick={() => {
                                handleClickDeleteCourse(data.id)
                            }} />,
                        <TableActionButton
                            tooltip={translate(TEXTS.GO_EDIT_COURSE)}
                            key={`go-edit-${data.id}`}
                            onClick={() => {
                                navigateToEditCourse(data.id)
                            }}
                            iconComponent={Edit}
                        />,
                        <TableActionButton
                            color="primary"
                            tooltip={translate(TEXTS.GO_COURSE)}
                            key={`go-course-${data.id}`}
                            onClick={() => {
                                navigateToCourse(data.id)
                            }}
                            iconComponent={ArrowForward}
                        />,
                    ]
                },
                filterable: false,
            }
        ]
    }, [translate, navigateToCourse, handleClickDeleteCourse, navigateToEditCourse])

    return <CustomDataGrid rows={courses} columns={columns} onClickEditSelection={handleEditSelection} onClickDeleteSelection={handleDeleteSelection} checkboxSelection rowSelection></CustomDataGrid>
}

export default CoursesDataTable