import { useMachine } from "@xstate/react";
import machine from "./machine";
import { Fragment, useMemo } from "react";
import SetCourseDataStep from "./steps/SetCourseDataStep";
import SetCourseStudentsStep from "./steps/SetCourseStudentsStep";
import SetCourseConfigStep from "./steps/SetCourseConfigStep";

function CreateCourseMachine({ onCancel, onFinish }) {
    const [state, send] = useMachine(machine, {
        context: {
            name: '',
            studentsToCreate: [],
            studentsToSet: [],
        },
        actions: {
            onCancel: (context, event) => {
                console.log('onCancel', context, event);
                if (onCancel) onCancel(context, event);
            },
            onFinish: (context, event) => {
                console.log('onFinish', context, event);
                if (onFinish) onFinish(context, event);
            },
        },
    });

    const Step = useMemo(() => {
        switch (state.value) {
            case 'setCourseData':
                return SetCourseDataStep
            case 'setCourseStudents':
                return SetCourseStudentsStep
            case 'setCourseConfig':
                return SetCourseConfigStep
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