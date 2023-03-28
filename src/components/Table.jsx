import React, { useContext } from 'react';
import PlanetsContext from '../context/planetsContext';
import TableRow from './TableRow';
// import PropTypes from 'prop-types';

function Table() {
  const { data: { results }, loading, filters } = useContext(PlanetsContext);
  const { name: filterName, selectors } = filters;

  console.log(selectors);

  if (loading) return <h1>Loading...</h1>;

  const filtered = results
    .filter((planet) => {
      const { values: { comparison, value, column } } = selectors;
      const nameIncludes = planet.name.toLowerCase().includes(filterName.value);
      let comparisonResp;
      if (comparison === 'maior que') {
        comparisonResp = parseInt(planet[column], 10) > parseInt(value, 10);
      } else if (comparison === 'menor que') {
        comparisonResp = parseInt(planet[column], 10) < parseInt(value, 10);
      } else {
        comparisonResp = parseInt(planet[column], 10) === parseInt(value, 10);
      }
      return nameIncludes && comparisonResp;
    });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {
          filtered.map((planet) => (
            <TableRow planet={ planet } key={ planet.name } />
          ))
        }
      </tbody>
    </table>
  );
}

Table.propTypes = {

};

export default Table;
