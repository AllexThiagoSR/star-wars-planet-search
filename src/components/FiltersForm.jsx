import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/planetsContext';
import useSelector from '../hooks/useSelector';
import generateId from '../utils/generateId';

function FiltersForm() {
  const { filters: {
    name,
    selectors,
    sort,
  } } = useContext(PlanetsContext);
  const [
    actualValues,
    selectorsHandle,
    sendSelectorsFilter,
    allColumns,
    columns,
    setColumns,
    clearFilters,
  ] = useSelector();
  const [how, setHow] = useState({ column: 'population', sort: 'ASC' });

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
          sendSelectorsFilter({ ...actualValues, id: generateId() });
        } }
      >
        Filtrar
      </button>
      <select
        data-testid="column-sort"
        name="column"
        value={ how.column }
        onChange={ ({ target }) => setHow({ ...how, [target.name]: target.value }) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <label htmlFor="sortAsc">
        <input
          type="radio"
          name="sort"
          id="sortAsc"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ ({ target }) => setHow({ ...how, [target.name]: target.value }) }
        />
        Ascendente
      </label>
      <label htmlFor="sortDesc">
        <input
          type="radio"
          name="sort"
          id="sortDesc"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ ({ target }) => setHow({ ...how, [target.name]: target.value }) }
        />
        Descendente
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ () => sort.setHow(how) }
      >
        Ordenar
      </button>
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ () => clearFilters() }
      >
        Remover Filtros
      </button>
    </form>
  );
}

export default FiltersForm;
