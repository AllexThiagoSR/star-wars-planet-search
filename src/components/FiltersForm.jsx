import React, { useContext } from 'react';
import PlanetsContext from '../context/planetsContext';
import useSelector from '../hooks/useSelector';
// import PropTypes from 'prop-types';

function FiltersForm() {
  const { filters: { name } } = useContext(PlanetsContext);
  const [actualValues, selectorsHandle, sendSelectorsFilter] = useSelector();

  return (
    <form>
      <input
        data-testid="name-filter"
        name="filterName"
        value={ name.value }
        onChange={ ({ target: { value } }) => name.onChange(value) }
      />
      <select
        data-testid="column-filter"
        name="column"
        value={ actualValues.column }
        onChange={ selectorsHandle }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ actualValues.comparison }
        onChange={ selectorsHandle }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        value={ actualValues.value }
        onChange={ selectorsHandle }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          sendSelectorsFilter({ ...actualValues });
        } }
      >
        Filtrar

      </button>

    </form>
  );
}

FiltersForm.propTypes = {

};

export default FiltersForm;
