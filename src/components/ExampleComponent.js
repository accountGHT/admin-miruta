import React, { useEffect, useState } from 'react';
import { getDataFromApi } from '../services/dataService';
import environment from '../config/environment';

const ExampleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDataFromApi();
        setData(result);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Environment: {environment.environment}</h1>
      <h2>API URL: {environment.apiUrl}</h2>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default ExampleComponent;
