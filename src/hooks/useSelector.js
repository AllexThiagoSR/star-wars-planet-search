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
  const [values, setValues] = useState({
    column: 'population', comparison: 'maior que', value: '0',
  });
  const { onChange, values: activeSelectors } = selectors;

  const handleSelectorSearch = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const changeSelectorsState = async (selectorsState) => {
    await onChange([...activeSelectors, selectorsState]);
  };

  const clearFilters = () => onChange([]);

  return [
    values,
    handleSelectorSearch,
    changeSelectorsState,
    allColumns,
    columns,
    setColumns,
    clearFilters,
  ];
}
