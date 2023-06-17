
import { GridFooterContainer, GridPagination } from '@mui/x-data-grid';

function Footer({ components = [], paginationEnabled = true, rows, filteredRows }) {
    return (
        <GridFooterContainer sx={{ justifyContent: 'space-evenly', }}>
            {paginationEnabled && <GridPagination />}
            {components?.map((Component, index) => (
                <Component key={index} rows={rows} filteredRows={filteredRows} />
            ))}
        </GridFooterContainer>
    );
}

export default Footer;
