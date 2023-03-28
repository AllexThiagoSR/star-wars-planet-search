import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './planetsContext';
import useFetch from '../hooks/useFetch';

function PlanetsProvider({ children }) {
  const [data, error, loading, fetchPlanets] = useFetch('https://swapi.dev/api/planets', { results: [] });
  useEffect(() => {
    fetchPlanets();
  }, []);
  return (
    <PlanetsContext.Provider value={ { data, error, loading } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
