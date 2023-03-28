import React, { useContext } from 'react';
import PlanetsContext from '../context/planetsContext';
import TableRow from './TableRow';
// import PropTypes from 'prop-types';

function Table() {
  const { data: { results }, loading } = useContext(PlanetsContext);
  if (loading) return <h1>Loading...</h1>;
  console.log(results);
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
          results.map((planet) => (
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
