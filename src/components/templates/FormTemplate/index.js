import { Stack } from "@mui/material";
import SubmitButton from "components/generic/SubmitButton";
import CORE_TEXTS from "constants/CORE_TEXTS";
import useLocaleContext from "hooks/useLocaleContext";

function FormTemplate({ children, submitButtonProps }) {
    const { translate } = useLocaleContext()
    return (
        <Stack spacing={2} width={'100%'}>
            <Stack spacing={2}>
                {children}
            </Stack>
            {submitButtonProps && <SubmitButton {...submitButtonProps} sx={{ alignSelf: 'flex-end', ...submitButtonProps?.sx }}>{submitButtonProps?.children ?? translate(CORE_TEXTS.GENERIC_SUBMIT)}</SubmitButton>}
        </Stack>
    );
}

export default FormTemplate