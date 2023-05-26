import { useMachine } from "@xstate/react";
import machine from "./machine";
import { Fragment, useMemo } from "react";
import SetCourseDataStep from "./steps/SetCourseDataStep";
import SetCourseStudentsStep from "./steps/SetCourseStudentsStep";
import LoadingBox from "components/dataDisplay/LoadingBox";
import useCreateCourseService from "services/courses/useCreateCourseService";
import SetCourseClassSessionsConfigStep from "./steps/SetCourseClassSessionsConfigStep";

function CreateCourseMachine({ onFinish }) {
    const { createCourse } = useCreateCourseService()
    const [state, send] = useMachine(machine, {
        context: {
            name: '',
            accessPin: '',
            students: [],
            inputs: [],
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
                    studentAttendanceFormData: context.inputs
                })
                if (!result) throw new Error('Error creating course')
            }
        }
    });

    const Step = useMemo(() => {
        switch (state.value) {
            case 'setCourseData':
                return SetCourseDataStep
            case 'setCourseStudents':
                return SetCourseStudentsStep
            case 'setCourseClassSessionsConfig':
                return SetCourseClassSessionsConfigStep
            case 'createCourse':
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

export default CreateCourseMachine;