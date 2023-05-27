
import Card from "components/generic/Card"
import InputListItem from "../InputListItem"
import List from "components/generic/List"
import { Divider } from "@mui/material"
import { Fragment } from "react"

function InputsList({ onClickItem, inputs, itemIconProps, cardTitle, help }) {
    return (
        <Card title={cardTitle} help={help}>
            <List >
                {inputs.map((input) => <Fragment key={input.key}>
                    <InputListItem
                        onClick={() => onClickItem(input)}

                        input={input}
                        itemIconProps={itemIconProps}
                    />
                    <Divider></Divider>
                </Fragment>

                )}
            </List>
        </Card>
    )
}

export default InputsList