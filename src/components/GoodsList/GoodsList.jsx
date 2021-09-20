import React from 'react';
import propTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      color: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    }),
  ),
};

GoodsList.defaultProps = {
  goods: [],
};
