import { IconButton as IconButtonMUI } from '@mui/material';
import { Box, Tooltip } from '@mui/material';

function IconButton({ tooltip, ...props }) {
    return (
        <>
            {tooltip
                ? <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}><Tooltip title={tooltip}><IconButtonMUI {...props}></IconButtonMUI></Tooltip></Box>
                : <IconButtonMUI {...props}></IconButtonMUI>
            }

        </>

    )
}

export default IconButton;