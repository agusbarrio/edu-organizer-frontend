import { Box } from "@mui/material";


function CardsGrid({ children, columnWidth = '17.5rem' }) {
    return (
        <Box
            justifyContent={'center'}
            position="relative"
            height="100%"
            p={2}
            sx={{ overflowY: 'scroll' }}
            display="grid"
            gridTemplateColumns={`repeat(auto-fill, ${columnWidth})`}
            gridAutoRows="min-content"
            gap={2}
        >
            {children}
        </Box>
    );
}

export default CardsGrid;