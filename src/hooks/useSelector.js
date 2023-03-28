import { useContext } from 'react';
import PlanetsContext from '../context/planetsContext';

export default function useSelector() {
  const { filters: { selectors } } = useContext(PlanetsContext);

  const { values, onChange } = selectors;

  const handleSelectorSearch = ({ target: { name, value } }) => {
    onChange({ ...values, [name]: value });
  };
  return handleSelectorSearch;
}
