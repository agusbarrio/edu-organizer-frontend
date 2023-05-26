import Form from "components/generic/Form"
import ControllerInput from "components/generic/ControllerInput"
import useValidator from "hooks/useValidator"
import useLocaleContext from "hooks/useLocaleContext"
import PasswordInput from "components/generic/PasswordInput"
import TEXTS from "constants/TEXTS"
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react"
import TextInput from "components/generic/TextInput"
import { Box, Button, Grid, InputAdornment, Stack } from "@mui/material"
import { v4 as uuidv4 } from 'uuid';
import InputsList from "components/dataDisplay/InputsList"
import { Add, RemoveCircleOutline } from "@mui/icons-material"
import InputForm from "components/forms/InputForm"
import InputsListCard from "./components/InputsListCard"
import FullSkeleton from "components/generic/FullSkeleton"
import NewInputCard from "./components/NewInputCard"


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

    return (
        <Grid container spacing={2} sx={{ overflowY: 'auto', height: '100%' }}>
            <Grid item xs={12} md={6} maxHeight={'100%'} >
                <NewInputCard onSubmit={handleSubmitInput}></NewInputCard>
            </Grid>
            <Grid item xs={12} md={6} height={'100%'}>
                <InputsListCard inputs={inputs} onClickDrop={handleRemoveInput} ></InputsListCard>
            </Grid>
        </Grid>
    )
})

InputsCreation.displayName = 'InputsCreation'

export default InputsCreation