import { useMachine } from "@xstate/react";
import { useMemo } from "react";
import SetCourseDataStep from "./steps/SetCourseDataStep";
import SetCourseStudentsStep from "./steps/SetCourseStudentsStep";
import LoadingBox from "components/dataDisplay/LoadingBox";
import useCreateCourseService from "services/courses/useCreateCourseService";
import SetCourseStudentAttendanceFormDataStep from "./steps/SetCourseStudentAttendanceFormDataStep";
import useEditCourseService from "services/courses/useEditCourseService";
import useLocalMachine from "./hooks/useLocalMachine";
import SetCourseStudentAdditionalInfoFormData from "./steps/SetCourseStudentAdditionalInfoFormData";


function CourseMachine({ onFinish, initialContext, edit }) {
    const { createCourse } = useCreateCourseService()
    const { editCourse } = useEditCourseService()
    const machine = useLocalMachine(edit)
    const [state, send] = useMachine(machine, {
        context: {
            name: initialContext?.name || '',
            accessPin: initialContext?.accessPin || '',
            students: initialContext?.students || [],
            studentAttendanceFormData: initialContext?.studentAttendanceFormData || [],
            studentAdditionalInfoFormData: initialContext?.studentAdditionalInfoFormData || [],
            id: initialContext?.id || null,
            pointsPerAttendance: initialContext?.pointsPerAttendance || null
        },
        actions: {
            finish: (context, event) => {
                if (onFinish) onFinish(context, event);
            },
        },
        services: {
            createCourse: async (context) => {
                const result = await createCourse({
                    name: context.name,
                    accessPin: context.accessPin,
                    students: context.students.map((student) => {
                        if (student.isNew) {
                            return {
                                studentData: {
                                    firstName: student.firstName,
                                    lastName: student.lastName,
                                    avatarFileId: student.avatarFileId || null,
                                }, isNew: true
                            }
                        }
                        return { id: student.id, isNew: false }
                    }),
                    studentAttendanceFormData: context.studentAttendanceFormData,
                    studentAdditionalInfoFormData: context.studentAdditionalInfoFormData,
                    metadata: {
                        pointsPerAttendance: context.pointsPerAttendance
                    }
                })
                if (!result) throw new Error('Error creating course')
            },
            editCourse: async (context) => {
                const result = await editCourse(context.id
                    , {
                        name: context.name,
                        accessPin: context.accessPin,
                        students: context.students.map((student) => {
                            if (student.isNew) {
                                return {
                                    studentData: {
                                        firstName: student.firstName,
                                        lastName: student.lastName,
                                        avatarFileId: student.avatarFileId || null,
                                    }, isNew: true
                                }
                            }
                            return { id: student.id, isNew: false }
                        }),
                        studentAttendanceFormData: context.studentAttendanceFormData,
                        studentAdditionalInfoFormData: context.studentAdditionalInfoFormData,
                        metadata: {
                            pointsPerAttendance: context.pointsPerAttendance
                        }
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
            case 'setCourseStudentAdditionalInfoFormData':
                return SetCourseStudentAdditionalInfoFormData
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