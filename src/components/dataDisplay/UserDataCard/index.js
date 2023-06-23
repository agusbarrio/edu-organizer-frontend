import Card from "components/generic/Card"
import LabelValue from "components/generic/LabelValue"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"



function UserDataCard({ user }) {
    const { translate } = useLocaleContext()

    return (
        <Card
            title={translate(TEXTS.USER_DATA_CARD_TITLE)}>
            <LabelValue label={translate(TEXTS.USER_FIRST_NAME_LABEL)} value={user?.firstName}></LabelValue>
            <LabelValue label={translate(TEXTS.USER_LAST_NAME_LABEL)} value={user?.lastName}></LabelValue>
            <LabelValue label={translate(TEXTS.USER_EMAIL_LABEL)} value={user?.email}></LabelValue>
        </Card >
    )
}

export default UserDataCard