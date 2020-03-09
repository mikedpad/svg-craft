import React from 'react';
import PropTypes from 'prop-types';
import Grid from './Grid';
import Circle from './Shapes/Circle';

const SVGCanvas = ({ dimensions }) => {
  const [width, height] = dimensions;
  const origin = [-width / 2, -height / 2];

  return (
    <svg
      viewBox={`${origin[0]} ${origin[1]} ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlns-xlink="http://www.w3.org/1999/xlink"
      style={{ height: `auto`, width: `100%` }}
    >
      <Grid id="grid" origin={origin} dimensions={dimensions} />
      {/* <Circle id="circle1" radius={10} x={-100} y={-60} fill="#f00" /> */}
      <Circle
        id="circle1"
        radius={40}
        x={10}
        y={10}
        fill={{
          id: `rgb`,
          cx: 10,
          cy: 10,
          stops: [
            {
              offset: 0,
              stopColor: `#f01`,
            },
            {
              offset: 30,
              stopColor: `#c00`,
            },
            {
              offset: 45,
              stopColor: `#0c0`,
            },
            {
              offset: 100,
              stopColor: `#050`,
            },
          ],
        }}
      />
    </svg>
  );
};

export default SVGCanvas;

SVGCanvas.propTypes = {
  dimensions: PropTypes.arrayOf(PropTypes.number),
};

SVGCanvas.defaultProps = {
  dimensions: [100, 100],
};
