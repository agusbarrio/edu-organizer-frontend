import { Typography } from "@mui/material";
import AttendanceCourseForm from "components/forms/AttendanceCourseForm";
import Card from "components/generic/Card";
import CardsContainer from "components/generic/CardsContainer";
import StepTemplate from "components/templates/StepTemplate";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import _ from "lodash";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

function SetPresentStudentsDataStep({ state, send }) {
    const { translate } = useLocaleContext()

    const formRefs = useRef({})

    const presentStudents = useMemo(() => state.context.students.filter(student => state.context.presentStudentsIds.includes(student.id)), [state.context.students, state.context.presentStudentsIds])

    const [presentStudentsData, setPresentStudentsData] = useState(() => presentStudents.map(student => {
        return {
            id: student.id,
            metadata: state.context.presentStudentsData.find((studentData) => studentData.id === student.id)?.metadata || {}
        }
    }))
    const [formStates, setFormStates] = useState(() => {
        return presentStudents.reduce((acc, student) => {
            acc[student.id] = {
                submitted: false,
            }
            return acc
        }, {})
    })

    useEffect(() => {
        const allSubmitted = _.every(formStates, (formState) => formState.submitted)
        if (allSubmitted) {
            send('NEXT', { presentStudentsData })
        }
    }, [formStates, send, presentStudentsData])

    const submitAll = useCallback(async () => {
        await Promise.all(_.map(formRefs.current, async (formRef) => {
            if (formRef) {
                return formRef.submit()
            }
        }))
    }, [])

    const handleClickNext = useCallback(async () => {
        await submitAll()
    }, [submitAll])

    const handleClickBack = useCallback(() => {
        const values = _.mapValues(formRefs.current, (formRef) => {
            if (formRef) {
                return formRef.getValues()
            }
        })
        // get object like that is seted in onSubmit
        const newPresentStudentsData = _.map(presentStudentsData, (studentData) => {
            return {
                ...studentData,
                metadata: values[studentData.id]
            }
        })

        send('PREV', { presentStudentsData: newPresentStudentsData })
    }, [send, presentStudentsData])


    return (
        <StepTemplate onClickFinish={handleClickNext} onClickBack={handleClickBack} title={translate(TEXTS.SELECT_PRESENT_STUDENTS_TITLE)}>
            <Typography variant="h6">{translate(TEXTS.PRESENT_STUDENTS_NUMBER_LABEL)}: {presentStudents?.length}</Typography>
            <CardsContainer columnWidth="minmax(15rem, 1fr)">
                {presentStudents.map(student => (
                    <Card
                        key={student.id}
                        title={`${student.firstName} ${student.lastName}`}
                        sx={{ height: 'auto' }}>
                        <AttendanceCourseForm
                            studentAttendanceFormData={state?.context?.course?.studentAttendanceFormData}
                            defaultValues={presentStudentsData.find((studentData) => {
                                return studentData.id === student.id
                            }).metadata}
                            templateProps={{ showSubmitButton: false }}
                            onSubmit={async (values) => {
                                setPresentStudentsData((prevPresentStudentsData) => {
                                    const result = [...prevPresentStudentsData]
                                    const index = result.findIndex((studentData) => studentData.id === student.id)
                                    result[index] = {
                                        id: student.id,
                                        metadata: values
                                    }
                                    return result
                                })
                                setFormStates((prevFormStates) => {
                                    return {
                                        ...prevFormStates,
                                        [student.id]: {
                                            submitted: true
                                        }
                                    }
                                }
                                )
                            }}
                            ref={(ref) => {
                                if (formRefs?.current) formRefs.current[student.id] = ref
                                return null
                            }}
                        ></AttendanceCourseForm>
                    </Card>
                ))}
            </CardsContainer>
        </StepTemplate >)
}

export default SetPresentStudentsDataStep;