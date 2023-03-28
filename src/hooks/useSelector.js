import { useContext, useState } from 'react';
import PlanetsContext from '../context/planetsContext';

export default function useSelector() {
  const { filters: { selectors } } = useContext(PlanetsContext);
  const [values, setValues] = useState({ ...selectors.values });
  const { onChange } = selectors;

  const handleSelectorSearch = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const changeSelectorsState = (selectorsState) => {
    onChange(selectorsState);
  };

  return [values, handleSelectorSearch, changeSelectorsState];
}
