import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ planet: { name } }) {
  return (
    <tr>
      <td>{name}</td>
    </tr>
  );
}

TableRow.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default TableRow;
