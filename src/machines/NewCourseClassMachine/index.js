import { useMachine } from "@xstate/react";
import { useMemo } from "react";

import useLocalMachine from "./hooks/useLocalMachine";
import useGetCourseStudentsService from "services/courseAccess/useGetCourseStudentsService";
import useCreateNewCourseClassService from "services/courseAccess/useCreateNewCourseClass";
import LoadingBox from "components/dataDisplay/LoadingBox";
import SelectPresentStudentsStep from "./steps/SelectPresentStudentsStep";
import SetPresentStudentsDataStep from "./steps/SetPresentStudentsDataStep";
import useDate from "hooks/useDate";


function NewCourseClassMachine({ onFinish, course }) {
    const { getCourseStudents } = useGetCourseStudentsService();
    const { createNewCourseClass } = useCreateNewCourseClassService();
    const { getNow } = useDate()
    const machine = useLocalMachine()
    const [state, send] = useMachine(machine, {
        context: {
            course: course,
            date: getNow(),
            students: [],
            presentStudentsIds: [],
            presentStudentsData: [],
        },
        actions: {
            finish: (context, event) => {
                if (onFinish) onFinish(context, event);
            },
        },
        services: {
            getStudents: async () => {
                const result = await getCourseStudents();
                if (!result) throw new Error('Error al obtener los estudiantes');
                return result;
            },
            createNewCourseClass: async (context) => {
                const presentStudentsData = context.presentStudentsData
                const date = context.date
                const result = await createNewCourseClass({ presentStudentsData, date });
                if (!result) throw new Error('Error al guardar la clase');
                return result;
            },
        }
    });

    const Step = useMemo(() => {
        switch (state.value) {
            case 'getStudents':
                return LoadingBox
            case 'selectPresentStudents':
                return SelectPresentStudentsStep
            case 'evaluateEmpty':
                return LoadingBox
            case 'setPresentStudentsData':
                return SetPresentStudentsDataStep
            case 'createNewCourseClass':
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

export default NewCourseClassMachine;