import { ArrowBack, ArrowForward, Check, Close } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import CORE_TEXTS from "constants/CORE_TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import { useEffect, useRef, useState } from "react";

function StepTemplate({ children, onClickBack, onClickNext, onClickCancel, onClickFinish }) {
    const { translate } = useLocaleContext()
    const buttonsRef = useRef(null)

    const [buttonsHeight, setButtonsHeight] = useState(0)
    useEffect(() => {
        if (!!buttonsRef?.current) {
            setButtonsHeight(buttonsRef.current.getBoundingClientRect().height)
        }
    }, [buttonsRef])

    return (
        <Box width={'100%'} height={'100%'}>
            <Box height={`calc(100% - ${buttonsHeight}px)`}>
                {children}
            </Box>
            <Stack direction={'row'} spacing={1} ref={buttonsRef} width={'100%'} justifyContent={'space-between'}>
                <Stack direction={'row'} spacing={1}>
                    {onClickBack && <Button onClick={onClickBack} variant="contained" startIcon={<ArrowBack></ArrowBack>}>{translate(CORE_TEXTS.GENERIC_BACK)}</Button>}
                    {onClickCancel && <Button onClick={onClickCancel} variant="contained" color='error' startIcon={<Close></Close>}>{translate(CORE_TEXTS.GENERIC_CANCEL)}</Button>}
                </Stack>
                <Stack direction={'row'} spacing={1}>
                    {onClickNext && <Button onClick={onClickNext} variant="contained" endIcon={<ArrowForward></ArrowForward>}>{translate(CORE_TEXTS.GENERIC_NEXT)}</Button>}
                    {onClickFinish && <Button onClick={onClickFinish} variant="contained" color='success' endIcon={<Check></Check>}>{translate(CORE_TEXTS.GENERIC_FINISH)}</Button>}
                </Stack>
            </Stack>
        </Box>
    );
}

export default StepTemplate;
