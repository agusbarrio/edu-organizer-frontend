
import { GridFooterContainer, GridPagination } from '@mui/x-data-grid';

function Footer({ components = [], paginationEnabled = true, rows, filteredRows }) {
    return (
        <GridFooterContainer sx={{ justifyContent: 'space-evenly', }}>
            {paginationEnabled && <GridPagination />}
            {components?.map(({ render: Component, props }, index) => (
                <Component key={index} rows={rows} filteredRows={filteredRows} {...props} />
            ))}
        </GridFooterContainer>
    );
}

export default Footer;
