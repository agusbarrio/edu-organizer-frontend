import { Box } from '@mui/material';
import TEXTS from 'constants/TEXTS';
import useLocaleContext from 'hooks/useLocaleContext';
import { useMemo, } from 'react';
import useGetPoints from '../../hooks/useGetPoints';

function TotalPoints({ filteredRows = [] }) {
    const { translate, } = useLocaleContext();
    const { getPoints } = useGetPoints();

    const totalPoints = useMemo(
        () => {
            let total = 0;
            filteredRows.forEach((row) => {
                total += getPoints(row);
            })
            return total;
        },
        [filteredRows, getPoints]
    );


    return (
        <Box>
            {translate(TEXTS.CLASS_SESSION_STUDENT_TOTAL_POINTS_ACUMULATED_LABEL)}: {totalPoints}
        </Box>
    );
}

export default TotalPoints;
