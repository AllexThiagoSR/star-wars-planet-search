import { useContext, useState } from 'react';
import PlanetsContext from '../context/planetsContext';

export default function useSelector() {
  const { filters: { selectors } } = useContext(PlanetsContext);
  const [columns, setColumns] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const [allColumns] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const { onChange, values: activeSelectors } = selectors;

  const changeSelectorsState = (selectorsState) => {
    onChange([...activeSelectors, selectorsState]);
  };

  const clearFilters = () => onChange([]);

  return [
    changeSelectorsState,
    allColumns,
    columns,
    setColumns,
    clearFilters,
  ];
}
