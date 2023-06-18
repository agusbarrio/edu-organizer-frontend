import { createContext, useState } from 'react';

export const DataContext = createContext();

function DataContextProvider({ children, initialData }) {
  const [data, setData] = useState(initialData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
