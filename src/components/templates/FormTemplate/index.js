import { Stack } from "@mui/material";
import SubmitButton from "components/generic/SubmitButton";
import CORE_TEXTS from "constants/CORE_TEXTS";
import useLocaleContext from "hooks/useLocaleContext";

function FormTemplate({ children, submitButtonProps, showSubmitButton = true, spacing = 2, containerProps, childrenContainerProps }) {
    const { translate } = useLocaleContext()

    return (
        <Stack spacing={spacing} width={'100%'} {...containerProps}>
            <Stack spacing={spacing} {...childrenContainerProps}>
                {children}
            </Stack>
            {showSubmitButton && <SubmitButton {...submitButtonProps} sx={{ alignSelf: 'flex-end', ...submitButtonProps?.sx }}>{submitButtonProps?.children ?? translate(CORE_TEXTS.GENERIC_SUBMIT)}</SubmitButton>}
        </Stack>
    );
}

export default FormTemplate