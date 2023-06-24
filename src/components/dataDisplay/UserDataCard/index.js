import { Button } from "@mui/material"
import ChangePasswordForm from "components/forms/ChangePasswordForm"
import Card from "components/generic/Card"
import LabelValue from "components/generic/LabelValue"
import ConfirmModal from "components/generic/modals/ConfirmModal"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"
import useModalContext from "hooks/useModalContext"
import { useCallback, useRef } from "react"
import useChangePasswordService from "services/user/useChangePasswordService"



function UserDataCard({ user }) {
    const { translate } = useLocaleContext()
    const { openModal, closeModal } = useModalContext()
    const { changePassword } = useChangePasswordService()
    const changePasswordFormRef = useRef(null)

    const handleSubmit = useCallback(({ password }) => {
        changePassword({ newPassword: password })
        closeModal()
    }, [changePassword, closeModal])

    const handleClick = useCallback(() => {
        openModal(ConfirmModal, {
            title: translate(TEXTS.CHANGE_PASSWORD_MODAL_TITLE),
            preventCloseOnConfirm: true,
            children: <ChangePasswordForm ref={changePasswordFormRef} templateProps={{ showSubmitButton: false }} onSubmit={handleSubmit}></ChangePasswordForm>,
            onConfirm: async () => {
                if (changePasswordFormRef?.current?.submit) {
                    await changePasswordFormRef.current.submit()
                }
            }
        })
    }, [openModal, translate, handleSubmit])

    return (
        <Card
            actions={
                <Button onClick={handleClick}>{translate(TEXTS.CHANGE_PASSWORD_BUTTON)}</Button>
            }
            title={translate(TEXTS.USER_DATA_CARD_TITLE)}>
            <LabelValue label={translate(TEXTS.USER_FIRST_NAME_LABEL)} value={user?.firstName}></LabelValue>
            <LabelValue label={translate(TEXTS.USER_LAST_NAME_LABEL)} value={user?.lastName}></LabelValue>
            <LabelValue label={translate(TEXTS.USER_EMAIL_LABEL)} value={user?.email}></LabelValue>
        </Card >
    )
}

export default UserDataCard