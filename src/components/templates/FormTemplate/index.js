import { Box, Stack } from "@mui/material";
import SubmitButton from "components/generic/SubmitButton";
import CORE_TEXTS from "constants/CORE_TEXTS";
import useLocaleContext from "hooks/useLocaleContext";

function FormTemplate({ children, submitButtonProps, submitRowStart, showSubmitButton = true, spacing = 2, containerProps, childrenContainerProps, outerChildren }) {
    const { translate } = useLocaleContext()

    const submitLabel = submitButtonProps?.children ?? translate(CORE_TEXTS.GENERIC_SUBMIT)

    return (
        <Stack spacing={spacing} width={'100%'} {...containerProps}>
            <Stack spacing={spacing} {...childrenContainerProps}>
                {children}
            </Stack>
            {showSubmitButton && (submitRowStart ? (
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                    columnGap={2}
                    flexWrap="nowrap"
                >
                    <Box sx={{ minWidth: 0, flex: "1 1 auto", pr: 1 }}>{submitRowStart}</Box>
                    <SubmitButton {...submitButtonProps} sx={{ flexShrink: 0, ...submitButtonProps?.sx }}>
                        {submitLabel}
                    </SubmitButton>
                </Stack>
            ) : (
                <SubmitButton {...submitButtonProps} sx={{ alignSelf: 'flex-end', ...submitButtonProps?.sx }}>
                    {submitLabel}
                </SubmitButton>
            ))}
            {outerChildren}
        </Stack>
    );
}

export default FormTemplate