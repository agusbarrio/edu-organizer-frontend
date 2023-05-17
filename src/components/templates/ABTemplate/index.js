import { Add, Delete } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import CORE_TEXTS from "constants/CORE_TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import { useEffect, useMemo, useRef } from "react";


function ABMTemplate({
    children,
    onClickCreate,
    onClickDeleteAll,
}) {
    const { translate } = useLocaleContext();
    const controllsRef = useRef(null);

    const [controllsHeight, setControllsHeight] = useState(0);
    useEffect(() => {
        if (!!controllsRef?.current) {
            setControllsHeight(controllsRef.current.getBoundingClientRect().height);
        }
    }, [controllsRef]);

    return (
        <Stack height={1}>
            <Stack direction="row" spacing={2} padding={1} ref={controllsRef}>
                {onClickCreate && (
                    <Button
                        variant="contained"
                        startIcon={<Add></Add>}
                        onClick={onClickCreate}
                    >
                        {translate(CORE_TEXTS.GENERIC_CREATE)}
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
