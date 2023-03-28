import React, { useContext } from 'react';
import PlanetsContext from '../context/planetsContext';
import useFilters from '../hooks/useFilters';
import generateId from '../utils/generateId';
import TableRow from './TableRow';
// import PropTypes from 'prop-types';

function Table() {
  const { data: { results }, loading } = useContext(PlanetsContext);

  const filtered = useFilters(results);

  if (loading) return <h1>Loading...</h1>;

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
            <TableRow planet={ planet } key={ generateId() } />
          ))
        }
      </tbody>
    </table>
  );
}

Table.propTypes = {

};

export default Table;
