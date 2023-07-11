import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react"
import { Grid } from "@mui/material"
import { v4 as uuidv4 } from 'uuid';
import NewInputCard from "./components/NewInputCard"
import CopyConfigCoursesListCard from "./components/CopyConfigCoursesListCard";
import InputsList from "components/dataDisplay/InputsList";
import { RemoveCircleOutline } from "@mui/icons-material";
import useLocaleContext from "hooks/useLocaleContext";
import TEXTS from "constants/TEXTS";

const InputsCreation = forwardRef(({ onChange, initialInputs = [] }, ref) => {
    const [inputs, setInputs] = useState(initialInputs)
    const { translate } = useLocaleContext()
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
                <InputsList
                    onClickItem={handleRemoveInput}
                    cardTitle={translate(TEXTS.INPUTS_LIST_CARD_TITLE)}
                    help={translate(TEXTS.INPUTS_LIST_CARD_HELP)}
                    inputs={inputs}
                    itemIconProps={{ children: <RemoveCircleOutline color="error" /> }}
                ></InputsList>
            </Grid>
        </Grid>
    )
})

InputsCreation.displayName = 'InputsCreation'

export default InputsCreation