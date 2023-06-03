import { Box } from "@mui/material"

function CardsContainer({ children, columnWidth = '18rem' }) {
    return (
        <Box
            justifyContent={'center'}
            position="relative"
            height={'100%'}
            p={1}
            sx={{ overflowY: 'auto' }}
            display="grid"
            gridTemplateColumns={`repeat(auto-fill, ${columnWidth})`}
            gridAutoRows="min-content"
            gap={1}
        >
            {children}
        </Box>
    )
}

export default CardsContainer