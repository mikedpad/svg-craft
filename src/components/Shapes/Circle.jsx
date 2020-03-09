import React from 'react';
import PropTypes from 'prop-types';

const Circle = ({ id, x, y, radius, fill }) => {
  return (
    <>
      <defs>
        <g id={id}>
          {fill.id ? (
            <>
              <radialGradient id={`${fill.id}-rg`} cx={fill.cx} cy={fill.cy}>
                {fill.stops.map(({ offset, stopColor }) => (
                  <stop key={`stop-${offset}`} offset={offset} stopColor={stopColor} />
                ))}
              </radialGradient>
              <circle r={radius} fill={`url(#${fill.id}-rg)`} />
            </>
          ) : (
            <circle r={radius} fill={fill} />
          )}
        </g>
      </defs>

      <use x={x} y={y} xlinkHref={`#${id}`} />
    </>
  );
};

export default Circle;

Circle.propTypes = {
  id: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
  fill: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cx: PropTypes.number.isRequired,
      cy: PropTypes.number.isRequired,
      stops: PropTypes.arrayOf(
        PropTypes.shape({
          offset: PropTypes.number.isRequired,
          stopColor: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ]).isRequired,
};

Circle.defaultProps = {
  x: 0,
  y: 0,
};
