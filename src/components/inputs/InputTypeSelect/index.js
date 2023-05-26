import SelectInput from "components/generic/SelectInput";
import INPUT_TYPES from "constants/INPUT_TYPES";
import TEXTS from "constants/TEXTS";
import useLocaleContext from "hooks/useLocaleContext";
import { useMemo } from "react";

function InputTypeSelect({ ...props }) {
    const { translate } = useLocaleContext()
    const list = useMemo(() => _.map(_.values(INPUT_TYPES), (type) => ({ value: type, children: translate(TEXTS[`INPUT_TYPE_${type}`]) })), [translate])
    return (
        <SelectInput
            list={list}
            {...props}
        />
    );
}

export default InputTypeSelect;
