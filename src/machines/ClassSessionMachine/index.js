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
import useEditClassSessionCourse from "services/courseAccess/useEditClassSessionCourse";
import useGetTeacherCourseStudentsService from "services/teacherCourse/useGetTeacherCourseStudentsService";
import useTeacherNewClassService from "services/teacherCourse/useTeacherNewClassService";
import useEditTeacherClassSessionService from "services/teacherCourse/useEditTeacherClassSessionService";
import { serializeDateOnlyForApi } from "utils/calendarDate";


function ClassSessionMachine({ onFinish, initialContext, course, edit, forTeacher = false, dashboardTeacher = false }) {
    const { getCourseStudents } = useGetCourseStudentsService();
    const { getTeacherCourseStudents } = useGetTeacherCourseStudentsService();
    const { getAllStudents } = useGetAllStudentsService();
    const { editClassSession } = useEditClassSessionService();
    const { editClassSessionCourse } = useEditClassSessionCourse();
    const { editTeacherClassSession } = useEditTeacherClassSessionService();
    const { createNewCourseClass } = useCreateNewCourseClassService()
    const { createTeacherNewClass } = useTeacherNewClassService()
    const { getNow } = useDate()
    const resolvedCourse = initialContext?.course || course
    const machine = useLocalMachine(edit, forTeacher)
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
                let result;
                if (dashboardTeacher) {
                    result = await getTeacherCourseStudents(resolvedCourse?.id);
                } else {
                    result = await getCourseStudents();
                }
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
                const date = serializeDateOnlyForApi(context.date)
                let result
                if (dashboardTeacher) {
                    result = await createTeacherNewClass(context.course.id, { presentStudentsData, date });
                } else {
                    result = await createNewCourseClass({ presentStudentsData, date });
                }
                if (!result) throw new Error('Error al guardar la clase');
                return result;
            },
            editClassSession: async (context) => {
                const presentStudentsData = context.presentStudentsData
                const date = serializeDateOnlyForApi(context.date)
                let result
                if (dashboardTeacher) {
                    result = await editTeacherClassSession(context.course.id, context.id, { presentStudentsData, date });
                } else if (forTeacher) {
                    result = await editClassSessionCourse(context.id, { presentStudentsData, date });
                } else {
                    result = await editClassSession(context.id, { presentStudentsData, date });
                }
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