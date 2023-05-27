import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react"
import { Grid } from "@mui/material"
import { v4 as uuidv4 } from 'uuid';
import InputsListCard from "./components/InputsListCard"
import NewInputCard from "./components/NewInputCard"
import CopyConfigCoursesListCard from "./components/CopyConfigCoursesListCard";
import _ from "lodash";

const InputsCreation = forwardRef(({ onChange, value = [] }, ref) => {
    const [inputs, setInputs] = useState(value)

    useEffect(() => {
        if (onChange) onChange(inputs)
    }, [inputs, onChange])

    useImperativeHandle(ref, () => ({
        getValue: () => inputs
    }), [inputs])

    const formRef = useRef(null)

    const handleSubmitInput = useCallback((inputData) => {
        setInputs((prevInputs) => [...prevInputs, { key: uuidv4(), ...inputData }])
        if (formRef?.current) formRef.current.reset()
    }, [])

    const handleRemoveInput = useCallback((input) => {
        setInputs((prevInputs) => [...prevInputs].filter(prevInput => prevInput.key !== input.key))
    }, [])

    const handleClickCourse = useCallback((course) => {
        setInputs(course.studentAttendanceFormData.map((input) => ({ key: uuidv4(), ...input })))
    }, [])

    return (
        <Grid container spacing={2} sx={{ overflowY: 'auto', height: '100%' }}>
            <Grid item xs={12} md={4} maxHeight={'100%'} >
                <NewInputCard onSubmit={handleSubmitInput}></NewInputCard>
            </Grid>
            <Grid item xs={12} md={4} height={'100%'} >
                <CopyConfigCoursesListCard onClickCourse={handleClickCourse} ></CopyConfigCoursesListCard>
            </Grid>
            <Grid item xs={12} md={4} height={'100%'}>
                <InputsListCard inputs={inputs} onClickDrop={handleRemoveInput} ></InputsListCard>
            </Grid>
        </Grid>
    )
})

InputsCreation.displayName = 'InputsCreation'

export default InputsCreation