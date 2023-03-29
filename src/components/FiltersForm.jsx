import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/planetsContext';
import useSelector from '../hooks/useSelector';
import generateId from '../utils/generateId';
// import PropTypes from 'prop-types';

function FiltersForm() {
  const { filters: { name, selectors } } = useContext(PlanetsContext);
  const [
    actualValues,
    selectorsHandle,
    sendSelectorsFilter,
    allColumns,
    columns,
    setColumns,
  ] = useSelector();

  useEffect(() => {
    const columnsOptions = allColumns
      .filter((opt) => !selectors.values.some(({ column }) => column === opt));
    setColumns(columnsOptions);
    selectorsHandle({ target: { name: 'column', value: columnsOptions[0] } });
  }, [selectors]);

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
        {
          columns.map((opt) => (
            <option
              value={ opt }
              key={ generateId() }
            >
              {opt}

            </option>
          ))
        }
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
