import { Add, Delete } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import CORE_TEXTS from "constants/CORE_TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import { useMemo, useRef } from "react";


function ABMTemplate({
    children,
    onClickCreate,
    onClickDeleteAll,
}) {
    const { translate } = useLocaleContext();

    const controllsRef = useRef(null);
    const controllsHeight = useMemo(() => {
        return !!controllsRef?.current
            ? controllsRef.current.getBoundingClientRect().height
            : 0;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [controllsRef?.current]);
    return (
        <Stack height={1}>
            <Stack direction="row" spacing={2} padding={1} ref={controllsRef}>
                {onClickCreate && (
                    <Button
                        variant="contained"
                        startIcon={<Add></Add>}
                        onClick={onClickCreate}
                    >
                        {translate(CORE_TEXTS.GENERIC_ADD)}
                    </Button>
                )}
                {onClickDeleteAll && (
                    <Button
                        variant="contained"
                        startIcon={<Delete></Delete>}
                        color="error"
                        onClick={onClickDeleteAll}
                    >
                        {translate(CORE_TEXTS.GENERIC_DELETE_ALL)}
                    </Button>
                )}
            </Stack>
            <Box
                width={'100%'}
                height={`calc(100% - ${controllsHeight}px)`}
                padding={2}
            >
                {children}
            </Box>
        </Stack>
    );
}

export default ABMTemplate;
