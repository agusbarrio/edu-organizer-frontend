import Card from "components/generic/Card"
import LabelValue from "components/generic/LabelValue"
import TEXTS from "constants/TEXTS"
import useLocaleContext from "hooks/useLocaleContext"



function OrganizationDataCard({ organization }) {
    const { translate } = useLocaleContext()

    return (
        <Card
            title={translate(TEXTS.ORGANIZATION_DATA_CARD_TITLE)}>
            <LabelValue label={translate(TEXTS.ORGANIZATION_NAME_LABEL)} value={organization?.name}></LabelValue>
        </Card >
    )
}

export default OrganizationDataCard