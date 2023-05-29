import { useMachine } from "@xstate/react";
import { Fragment, useMemo } from "react";
import SetCourseDataStep from "./steps/SetCourseDataStep";
import SetCourseStudentsStep from "./steps/SetCourseStudentsStep";
import LoadingBox from "components/dataDisplay/LoadingBox";
import useCreateCourseService from "services/courses/useCreateCourseService";
import SetCourseStudentAttendanceFormDataStep from "./steps/SetCourseStudentAttendanceFormDataStep";
import useEditCourseService from "services/courses/useEditCourseService";
import useLocalMachine from "./hooks/useLocalMachine";


function CourseMachine({ onFinish, initialContext, edit }) {
    console.log(initialContext)
    const { createCourse } = useCreateCourseService()
    const { editCourse } = useEditCourseService()
    const machine = useLocalMachine(edit)
    const [state, send] = useMachine(machine, {
        context: {
            name: initialContext?.name || '',
            accessPin: initialContext?.accessPin || '',
            students: initialContext?.students || [],
            studentAttendanceFormData: initialContext?.studentAttendanceFormData || [],
            id: initialContext?.id || null,
        },
        actions: {
            finish: (context, event) => {
                if (onFinish) onFinish(context, event);
            },
        },
        services: {
            createCourse: async (context, event) => {
                const result = await createCourse({
                    name: context.name,
                    accessPin: context.accessPin,
                    students: context.students.map((student) => {
                        if (student.isNew) {
                            return { studentData: student, isNew: true }
                        }
                        return { id: student.id, isNew: false }
                    }),
                    studentAttendanceFormData: context.studentAttendanceFormData
                })
                if (!result) throw new Error('Error creating course')
            },
            editCourse: async (context, event) => {
                const result = await editCourse(context.id
                    , {
                        name: context.name,
                        accessPin: context.accessPin,
                        students: context.students.map((student) => {
                            if (student.isNew) {
                                return { studentData: student, isNew: true }
                            }
                            return { id: student.id, isNew: false }
                        }),
                        studentAttendanceFormData: context.studentAttendanceFormData
                    })
                if (!result) throw new Error('Error editing course')
            }
        }
    });

    const Step = useMemo(() => {
        switch (state.value) {
            case 'setCourseData':
                return SetCourseDataStep
            case 'setCourseStudents':
                return SetCourseStudentsStep
            case 'setCourseStudentAttendanceFormData':
                return SetCourseStudentAttendanceFormDataStep
            case 'createCourse':
                return LoadingBox
            case 'editCourse':
                return LoadingBox
            case 'finish':
                return LoadingBox
            default:
                return null
        }
    }, [state.value])

    return (
        <>
            {Step && <Step state={state} send={send}></Step>}
        </>
    )


}

export default CourseMachine;