import { List } from "@mui/material"
import Card from "components/generic/Card"
import InputListItem from "../InputListItem"

function InputsList({ onClickItem, inputs, listItemIconProps, cardTitle, help, ...sx }) {
    return (
        <Card title={cardTitle} sx={{ width: '100%', height: '100%', ...sx }} help={help}>
            <List sx={{ width: '100%', height: '100%', overflowY: 'auto', border: 'thin solid black', borderRadius: '.25rem' }} dense={true}>
                {inputs.map((input) => <InputListItem
                    onClick={() => onClickItem(input)}
                    key={input.id || input.key}
                    input={input}
                    listItemIconProps={listItemIconProps}
                />
                )}
            </List>
        </Card>
    )
}

export default InputsList