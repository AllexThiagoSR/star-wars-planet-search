import { useContext } from 'react';
import PlanetsContext from '../context/planetsContext';

function useSort(array) {
  const { filters: { sort: { how: { column, sort } } } } = useContext(PlanetsContext);
  const below = -1;
  if (sort === 'ASC') {
    return [...array].sort((a, b) => (
      b[column] === 'unknown' ? below : parseInt(a[column], 10) - parseInt(b[column], 10)
    ));
  }
  if (sort === 'DESC') {
    return [...array].sort((a, b) => (
      b[column] === 'unknown' ? below : parseInt(b[column], 10) - parseInt(a[column], 10)
    ));
  }
  return array;
}

export default useSort;
