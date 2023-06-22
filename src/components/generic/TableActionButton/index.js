import { Fragment } from "react";
import IconButton from "../IconButton";

function TableActionButton({ tooltip, onClick, iconComponent: IconComponent = Fragment, color }) {
    return (
        <IconButton
            size={'small'}
            color={color}
            tooltip={tooltip}
            onClick={onClick}
        >
            <IconComponent fontSize="inherit"></IconComponent>
        </IconButton>)
}

export default TableActionButton;