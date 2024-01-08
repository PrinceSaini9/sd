// MyContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://backend-prod.sdcampus.com/api/v1/webContains/getAllBatchesDetails?stream=&limit=20');
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = { data, loading };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

const useMyContext = () => {
  return useContext(MyContext);
};

export { MyProvider, useMyContext };
