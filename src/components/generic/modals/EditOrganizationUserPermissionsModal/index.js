import { Button, Dialog as DialogMaterial, DialogActions, DialogContent, DialogTitle, Divider, Stack } from "@mui/material";
import ControllerInput from "components/generic/ControllerInput";
import Form from "components/generic/Form";
import SelectInput from "components/generic/SelectInput";
import CORE_TEXTS from "constants/CORE_TEXTS";
import TEXTS from "constants/TEXTS";
import useModalContext from "hooks/useModalContext";
import useLocaleContext from "hooks/useLocaleContext";
import useValidator from "hooks/useValidator";
import { useMemo, useRef, useState } from "react";

function EditOrganizationUserPermissionsModal({ open = false, defaultPermissions = [], onConfirm }) {
    const { closeModal } = useModalContext()
    const { translate } = useLocaleContext()
    const { form, array, oneOf } = useValidator()
    const [loading, setLoading] = useState(false)
    const formRef = useRef(null)

    const schema = useMemo(() => form({
        permissions: array().of(oneOf(['ADMIN', 'TEACHER'], { required: { value: true } }))
    }), [array, form, oneOf])

    const permissionsList = useMemo(() => ([
        { value: 'ADMIN', children: translate(TEXTS.USER_PERMISSION_ADMIN) },
        { value: 'TEACHER', children: translate(TEXTS.USER_PERMISSION_TEACHER) }
    ]), [translate])

    return (
        <DialogMaterial open={open} onClose={closeModal} maxWidth={'sm'} fullWidth={true}>
            <DialogTitle>{translate(TEXTS.EDIT_ORGANIZATION_USER_PERMISSIONS_MODAL_TITLE)}</DialogTitle>
            <Divider />
            <DialogContent>
                <Form
                    ref={formRef}
                    schema={schema}
                    defaultValues={{ permissions: defaultPermissions }}
                    onSubmit={async ({ permissions }) => {
                        setLoading(true)
                        if (onConfirm) {
                            await onConfirm({ permissions })
                        }
                        setLoading(false)
                        closeModal()
                    }}
                    templateProps={{ showSubmitButton: false }}
                >
                    <Stack sx={{ pt: 1 }}>
                        <ControllerInput render={SelectInput} name={"permissions"} label={translate(TEXTS.USER_PERMISSIONS_LABEL)} list={permissionsList} multiple />
                    </Stack>
                </Form>
            </DialogContent>
            <Divider />
            <DialogActions>
                <Button onClick={closeModal} disabled={loading}>{translate(CORE_TEXTS.GENERIC_CANCEL)}</Button>
                <Button
                    variant="contained"
                    disabled={loading}
                    onClick={async () => {
                        if (formRef?.current?.submit) {
                            await formRef.current.submit()
                        }
                    }}
                >
                    {translate(CORE_TEXTS.GENERIC_CONFIRM)}
                </Button>
            </DialogActions>
        </DialogMaterial>
    )
}

export default EditOrganizationUserPermissionsModal
