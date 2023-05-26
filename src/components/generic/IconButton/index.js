import { IconButton as IconButtonMUI } from '@mui/material';
import { Box, Tooltip } from '@mui/material';

function IconButton({ tooltip, tooltipProps, ...props }) {
    return (
        <>
            {tooltip
                ? <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}><Tooltip title={tooltip} {...tooltipProps}><IconButtonMUI {...props}></IconButtonMUI></Tooltip></Box>
                : <IconButtonMUI {...props}></IconButtonMUI>
            }

        </>

    )
}

export default IconButton;