import { ArrowBack, ArrowForward, Check, Close } from "@mui/icons-material";
import { Box, Button, Divider, Stack } from "@mui/material";
import Truncate from "components/generic/Truncate";
import CORE_TEXTS from "constants/CORE_TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import { useEffect, useRef, useState } from "react";

function StepTemplate({ children, onClickBack, onClickNext, onClickCancel, onClickFinish, title, subtitle }) {
    const { translate } = useLocaleContext()
    const buttonsRef = useRef(null)

    const [buttonsHeight, setButtonsHeight] = useState(0)
    useEffect(() => {
        if (!!buttonsRef?.current) {
            setButtonsHeight(buttonsRef.current.getBoundingClientRect().height)
        }
    }, [buttonsRef])

    const titleRef = useRef(null)
    const [titleHeight, setTitleHeight] = useState(0)
    useEffect(() => {
        if (!!titleRef?.current) {
            setTitleHeight(titleRef.current.getBoundingClientRect().height)
        }
    }, [titleRef])


    return (
        <Stack width={'100%'} height={'100%'} id="lero">
            {(!!title || !!subtitle) &&
                <Stack width={'100%'} pb={1} ref={titleRef}>
                    {!!title && <Truncate line={1} element={'h3'} variant={'h6'} sx={{ fontWeight: 'bold' }}>{title}</Truncate>}
                    {!!subtitle && <Truncate line={2} element={'h4'} variant={'subtitle2'} sx={{ pl: 2, fontWeight: 'bold' }}>{subtitle}</Truncate>}
                    <Divider></Divider>
                </Stack>}
            <Box height={`calc(100% - ${buttonsHeight + titleHeight}px)`}>
                {children}
            </Box>
            <Stack direction={'row'} spacing={1} ref={buttonsRef} width={'100%'} justifyContent={'space-between'} pt={2}>
                <Stack direction={'row'} spacing={1}>
                    {onClickBack && <Button onClick={onClickBack} variant="contained" startIcon={<ArrowBack></ArrowBack>}>{translate(CORE_TEXTS.GENERIC_BACK)}</Button>}
                    {onClickCancel && <Button onClick={onClickCancel} variant="contained" color='error' startIcon={<Close></Close>}>{translate(CORE_TEXTS.GENERIC_CANCEL)}</Button>}
                </Stack>
                <Stack direction={'row'} spacing={1}>
                    {onClickNext && <Button onClick={onClickNext} variant="contained" endIcon={<ArrowForward></ArrowForward>}>{translate(CORE_TEXTS.GENERIC_NEXT)}</Button>}
                    {onClickFinish && <Button onClick={onClickFinish} variant="contained" color='success' endIcon={<Check></Check>}>{translate(CORE_TEXTS.GENERIC_FINISH)}</Button>}
                </Stack>
            </Stack>
        </Stack>
    );
}

export default StepTemplate;
