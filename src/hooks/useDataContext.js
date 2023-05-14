import { DataContext } from 'contexts/DataContext';
import { useContext } from 'react';

function useDataContext() {
    const { data, setData } = useContext(DataContext);
    return { data, setData };
}

export default useDataContext;
