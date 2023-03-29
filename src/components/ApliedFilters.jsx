import React, { useContext } from 'react';
import PlanetsContext from '../context/planetsContext';

function ApliedFilters() {
  const { filters: { selectors: { values, onChange } } } = useContext(PlanetsContext);
  console.log(useContext(PlanetsContext));
  console.log(values);
  return (
    <div>
      <ul>
        {
          values.map(({ id, comparison, column, value }) => (
            <li key={ id } data-testid="filter">
              <p>{`${column} ${comparison} ${value}`}</p>
              <button
                value={ id }
                onClick={ ({ target: { value: idToRemove } }) => {
                  const filteredSelectors = values
                    .filter(({ id: actualId }) => idToRemove !== actualId);
                  onChange([...filteredSelectors]);
                } }
              >
                Remover
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ApliedFilters;
