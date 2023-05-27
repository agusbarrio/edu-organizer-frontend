
import Card from "components/generic/Card"
import InputListItem from "../InputListItem"
import List from "components/generic/List"
import { Divider } from "@mui/material"

function InputsList({ onClickItem, inputs, itemIconProps, cardTitle, help }) {
    return (
        <Card title={cardTitle} help={help}>
            <List >
                {inputs.map((input) => <>
                    <InputListItem
                        onClick={() => onClickItem(input)}
                        key={input.id || input.key}
                        input={input}
                        itemIconProps={itemIconProps}
                    />
                    <Divider></Divider>
                </>

                )}
            </List>
        </Card>
    )
}

export default InputsList