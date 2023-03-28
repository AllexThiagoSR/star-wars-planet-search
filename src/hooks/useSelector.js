import { useContext, useState } from 'react';
import PlanetsContext from '../context/planetsContext';

export default function useSelector() {
  const { filters: { selectors } } = useContext(PlanetsContext);
  const [values, setValues] = useState({
    column: 'population', comparison: 'maior que', value: '0',
  });
  const { onChange, values: activeSelectors } = selectors;

  const handleSelectorSearch = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const changeSelectorsState = (selectorsState) => {
    onChange([...activeSelectors, selectorsState]);
  };

  return [values, handleSelectorSearch, changeSelectorsState];
}
