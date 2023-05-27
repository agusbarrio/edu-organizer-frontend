import { RemoveCircleOutline } from "@mui/icons-material";
import InputsList from "components/dataDisplay/InputsList";

import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";



function InputsListCard({ inputs, onClickDrop }) {
    const { translate } = useLocaleContext()
    return <InputsList
        cardTitle={translate(TEXTS.INPUTS_LIST_CARD_TITLE)}
        help={translate(TEXTS.INPUTS_LIST_CARD_HELP)}
        onClickItem={onClickDrop}
        inputs={inputs}
        itemIconProps={{ children: <RemoveCircleOutline color="error" /> }}
    ></InputsList>
}

export default InputsListCard