import Form from "components/generic/Form"
import ControllerInput from "components/generic/ControllerInput"
import useValidator from "hooks/useValidator"
import useLocaleContext from "hooks/useLocaleContext"
import TEXTS from "constants/TEXTS"
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from "react"
import TextInput from "components/generic/TextInput"
import CoursesSelect from "components/inputs/CourseSelect"
import AvatarInput from "components/generic/AvatarInput"
import DateInput from "components/generic/DateInput"
import useSchema from "hooks/dynamicForms/useSchema"
import { Divider, Typography } from "@mui/material"
import AdditionalInformationFields from "./components/AdditionalInformationFields"
import useGetCourseService from "services/courses/useGetCourseService"
import _ from "lodash"
import useGetControllerInputProps from "hooks/dynamicForms/useGetControllerInputProps"
import FilesInput from "components/generic/FilesInput"

const StudentForm = forwardRef(function StudentForm({ onSubmit, defaultValues, withCourse = true, templateProps, size, showFilesInput = true }, refProp) {
    const { form, name, id, date, object } = useValidator()
    const { translate } = useLocaleContext()
    const { getCourse } = useGetCourseService()

    const [currentCourse, setCurrentCourse] = useState(defaultValues?.course)

    const { schemaObj: additionalDataSchemaObj } = useSchema({ studentAttendanceFormData: currentCourse?.studentAdditionalInfoFormData || [] })

    const schema = useMemo(() => {
        const baseSchema = {
            firstName: name({ required: { value: true } }),
            lastName: name({ required: { value: true } }),
            birthDate: date({ required: { value: false } }),
            additionalInfo: object({ required: { value: false } }, additionalDataSchemaObj)
            //TODO add avatar validation
        }
        if (withCourse) {
            baseSchema.courseId = id({ required: { value: false } })
        }

        return form(baseSchema)
    }, [form, id, withCourse, name, date, object, additionalDataSchemaObj])




    const getControllerInputProps = useGetControllerInputProps()



    const ref = useRef(null)

    const handleChangeCourse = useCallback(async (e) => {
        const courseId = e ? e.target.value : null
        if (!courseId) {
            setCurrentCourse(defaultValues?.course)
            ref.current.setValue('additionalInfo', {})
            return
        }
        const course = await getCourse(courseId)

        //set default values for additional info using current student data for fields that are present
        const newAdditionalInfo = {}
        const currentFormValues = ref.current.getValues()
        currentCourse?.studentAdditionalInfoFormData?.forEach((field) => {
            const controllerInputProps = getControllerInputProps(field);
            const { name, defaultValue } = controllerInputProps
            if (currentFormValues[name]) {
                newAdditionalInfo[name] = currentFormValues[name]
            } else {
                newAdditionalInfo[name] = defaultValue
            }
        })
        setCurrentCourse(course)
        ref.current.setValue('additionalInfo', newAdditionalInfo)


    }, [getCourse, ref, getControllerInputProps, currentCourse?.studentAdditionalInfoFormData, defaultValues?.course])

    useImperativeHandle(refProp, () => ({ ...ref.current, handleChangeCourse }), [ref, handleChangeCourse])

    return (
        <Form schema={schema} defaultValues={defaultValues} onSubmit={onSubmit} ref={ref} templateProps={templateProps}>
            <ControllerInput render={AvatarInput} name={"avatar"} size={size} />
            <ControllerInput render={TextInput} size={size} name={"firstName"} label={translate(TEXTS.STUDENT_FIRST_NAME_LABEL)} placeholder={translate(TEXTS.STUDENT_FIRST_NAME_PLACEHOLDER)} />
            <ControllerInput render={TextInput} size={size} name={"lastName"} label={translate(TEXTS.STUDENT_LAST_NAME_LABEL)} placeholder={translate(TEXTS.STUDENT_LAST_NAME_PLACEHOLDER)} />
            <ControllerInput render={DateInput} size={size} name={"birthDate"} label={translate(TEXTS.STUDENT_BIRTH_DATE_LABEL)}></ControllerInput>
            {withCourse && <ControllerInput
                onChange={handleChangeCourse}
                render={CoursesSelect}
                size={size}
                name="courseId"
                label={translate(TEXTS.COURSE_LABEL)}
            ></ControllerInput>}
            {showFilesInput && <ControllerInput render={FilesInput} size={size} name={"files"} label={translate(TEXTS.STUDENT_FILES_LABEL)}></ControllerInput>}
            {!_.isEmpty(currentCourse?.studentAdditionalInfoFormData) && (
                <>
                    <Divider></Divider>
                    <Typography variant="h6">{translate(TEXTS.STUDENT_ADDITIONAL_INFO_LABEL)}</Typography>
                    <AdditionalInformationFields fields={currentCourse?.studentAdditionalInfoFormData} prefix="additionalInfo"></AdditionalInformationFields>
                </>)}

        </Form>
    )
})

export default StudentForm