import { useMachine } from "@xstate/react";
import { useMemo } from "react";

import useLocalMachine from "./hooks/useLocalMachine";
import useGetCourseStudentsService from "services/courseAccess/useGetCourseStudentsService";
import useCreateNewCourseClassService from "services/courseAccess/useCreateNewCourseClass";
import LoadingBox from "components/dataDisplay/LoadingBox";
import SelectPresentStudentsStep from "./steps/SelectPresentStudentsStep";
import SetPresentStudentsDataStep from "./steps/SetPresentStudentsDataStep";
import useDate from "hooks/useDate";
import useEditClassSessionService from "services/classSessions/useEditClassSession";
import useGetAllStudentsService from "services/students/useGetAllStudentsService";


function ClassSessionMachine({ onFinish, initialContext, course, edit }) {
    const { getCourseStudents } = useGetCourseStudentsService();
    const { getAllStudents } = useGetAllStudentsService();
    const { editClassSession } = useEditClassSessionService();
    const { createNewCourseClass } = useCreateNewCourseClassService()
    const { getNow } = useDate()
    const machine = useLocalMachine(edit)
    const [state, send] = useMachine(machine, {
        context: {
            course: initialContext?.course || course,
            date: initialContext?.date || getNow(),
            students: initialContext?.students || [],
            presentStudentsIds: initialContext?.presentStudentsIds || [],
            presentStudentsData: initialContext?.presentStudentsData || [],
            id: initialContext?.id || null,
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
            getStudentsForAdmin: async (context) => {
                const result = await getAllStudents({ params: { courseId: context?.course?.id } });
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
            editClassSession: async (context) => {
                const presentStudentsData = context.presentStudentsData
                const date = context.date
                const result = await editClassSession(context.id, { presentStudentsData, date });
                if (!result) throw new Error('Error al guardar la clase');
                return result;
            }
        }
    });

    const Step = useMemo(() => {
        switch (state.value) {
            case 'evaluateService':
                return LoadingBox
            case 'getStudents':
                return LoadingBox
            case 'getStudentsForAdmin':
                return LoadingBox
            case 'selectPresentStudents':
                return SelectPresentStudentsStep
            case 'evaluateEmpty':
                return LoadingBox
            case 'setPresentStudentsData':
                return SetPresentStudentsDataStep
            case 'createNewCourseClass':
                return LoadingBox
            case 'editClassSession':
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

export default ClassSessionMachine;