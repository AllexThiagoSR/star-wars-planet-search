import { useContext } from 'react';
import PlanetsContext from '../context/planetsContext';

export default function useFilters(array) {
  const { filters } = useContext(PlanetsContext);
  const { name: filterName, selectors } = filters;

  return array
    .filter((planet) => {
      const { values } = selectors;
      const nameIncludes = planet.name.toLowerCase().includes(filterName.value);
      let comparisonResp = true;

      if (values.length !== 0) {
        comparisonResp = values.every(({ comparison, column, value }) => {
          if (comparison === 'maior que') {
            return parseInt(planet[column], 10) > parseInt(value, 10);
          }
          if (comparison === 'menor que') {
            return parseInt(planet[column], 10) < parseInt(value, 10);
          }
          return parseInt(planet[column], 10) === parseInt(value, 10);
        });
      }

      return nameIncludes && comparisonResp;
    });
}
