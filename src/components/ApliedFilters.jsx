import React, { useContext } from 'react';
import PlanetsContext from '../context/planetsContext';

function ApliedFilters() {
  const { filters: { selectors: { values } } } = useContext(PlanetsContext);
  console.log(values);
  return (
    <div>
      <ul>
        {
          values.map(({ id, comparison, column, value }) => (
            <li key={ id }>
              {`${column} ${comparison} ${value}`}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ApliedFilters;
