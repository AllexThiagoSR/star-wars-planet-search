import React, { useContext } from 'react';
import PlanetsContext from '../context/planetsContext';
// import PropTypes from 'prop-types';

function FiltersForm() {
  const { filters: { name } } = useContext(PlanetsContext);
  return (
    <form>
      <input
        data-testid="name-filter"
        name="filterName"
        value={ name.value }
        onChange={ ({ target: { value } }) => name.onChange(value) }
      />
    </form>
  );
}

FiltersForm.propTypes = {

};

export default FiltersForm;
