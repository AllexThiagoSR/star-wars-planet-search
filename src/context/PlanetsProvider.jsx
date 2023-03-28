import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './planetsContext';
import useFetch from '../hooks/useFetch';

function PlanetsProvider({ children }) {
  const [filterName, setFilterName] = useState('');
  const [selectors, setSelectors] = useState([]);
  const [data, error, loading, fetchPlanets] = useFetch('https://swapi.dev/api/planets', { results: [] });

  useEffect(() => {
    fetchPlanets();
  }, []);

  const filters = {
    name: { value: filterName, onChange: setFilterName },
    selectors: { values: selectors, onChange: setSelectors },
  };

  return (
    <PlanetsContext.Provider value={ { data, error, loading, filters } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
