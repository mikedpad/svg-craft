import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from './Grid';

const SVG = styled.svg`
  background-color: orange;
  height: auto;
  width: 100%;
`;

const SVGCanvas = ({ dimensions }) => {
  const [width, height] = dimensions;
  const origin = [-width / 2, -height / 2];

  return (
    <SVG
      viewBox={`${origin[0]} ${origin[1]} ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlns-xlink="http://www.w3.org/1999/xlink"
    >
      {/* definitions */}
      <Grid origin={origin} dimensions={dimensions} subdivisionSize={20} />
      <defs>
        {/* Shapes */}

        <g id="sphere">
          <radialGradient id="rg" cx="33%" cy="33%">
            <stop offset="0%" stopColor="#f01" />
            <stop offset="40%" stopColor="#d01" />
            <stop offset="100%" stopColor="#600" />
          </radialGradient>
          <circle r="5" fill="url(#rg)" />
        </g>

        <g id="rod">
          <linearGradient id="lg" x1="50%" y1="20%" x2="90%" y2="80%">
            <stop offset="0%" stopColor="#901" />
            <stop offset="100%" stopColor="#300" />
          </linearGradient>
          <rect x="-2.5" width="5" height="20" rx="2.3" ry="2.3" fill="url(#lg)" />
        </g>

        {/* <circle id='c' r='5' stroke='#000' stroke-width='1' fill='#f0f' /> */}
        <path
          id="arc"
          d="M-5 0 c 0 -6.75 10 -6.75 10 0"
          fill="none"
          vectorEffect="non-scaling-stroke"
          strokeWidth="25"
        />
      </defs>

      {/* objects */}

      <path className="blackLine" d="M 150 250 c 0 -135 200 -135 200 0" />

      <use xlinkHref="#rod" />
      <use xlinkHref="#sphere" />
      <use xlinkHref="#arc" className="arc1" />
      <use xlinkHref="#arc" className="arc2" transform="scale(0.5)" />

      {/* debug bezier circle points */}
      {/*
    <use xlink:href='#c' x='150' y='115' />
    <use xlink:href='#c' x='350' y='115' />
    */}
    </SVG>
  );
};

export default SVGCanvas;

SVGCanvas.propTypes = {
  dimensions: PropTypes.arrayOf(PropTypes.number),
};

SVGCanvas.defaultProps = {
  dimensions: [100, 100],
};
