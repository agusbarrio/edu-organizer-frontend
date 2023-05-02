import { Stack } from "@mui/material";
import CORE_TEXTS from "constants/CORE_TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import SubmitButton from "core/components/SubmitButton";

function FormTemplate({ children, submitButtonProps }) {
    const { translate } = useLocaleContext()
    return (
        <Stack spacing={2} width={'100%'}>
            {children}
            <SubmitButton {...submitButtonProps} sx={{ alignSelf: 'flex-end', ...submitButtonProps?.sx }}>{submitButtonProps?.children ?? translate(CORE_TEXTS.GENERIC_SUBMIT)}</SubmitButton>
        </Stack>
    );
}

export default FormTemplate