import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ origin, dimensions, gridLine, borderLine }) => {
  const [originX, originY] = origin;
  const [width, height] = dimensions;
  const createLines = (length, x, y, href) => {
    const { spacing } = gridLine;
    return Array.from({ length: length / spacing }).map((_, i) => {
      const step = spacing + spacing * i;
      return {
        id: `${x ? `x` : ``}${y ? `y` : ``}-${step}`,
        x: y ? step : 0,
        y: x ? step : 0,
        href,
      };
    });
  };
  const xLines = createLines(width, true, false, `#xAxis`);
  const yLines = createLines(height, false, true, `#yAxis`);

  console.log(xLines);

  return (
    <>
      <defs>
        <g id="grid">
          <path
            id="xAxis"
            d={`M${originX},${originY} h${width}`}
            stroke={gridLine.strokeColor}
            strokeWidth={gridLine.strokeWidth}
            fill="none"
          />
          <path
            id="yAxis"
            d={`M${originX},${originY} v${height}`}
            stroke={gridLine.strokeColor}
            strokeWidth={gridLine.strokeWidth}
            fill="none"
          />
          <path
            id="gridBorder"
            d={`M${originX},${originY} v${height} h${width} v${-height} h${-width}`}
            stroke={borderLine.strokeColor}
            strokeWidth={borderLine.strokeWidth}
            fill="none"
          />

          <g>
            {xLines.map(({ id, x, y, href }) => (
              <use key={id} x={x} y={y} xlinkHref={href} />
            ))}
            {yLines.map(({ id, x, y, href }) => (
              <use key={id} x={x} y={y} xlinkHref={href} />
            ))}
            <use x="0" y="0" xlinkHref="#gridBorder" />
          </g>
        </g>
      </defs>

      <use xlinkHref="#grid" />
    </>
  );
};

export default Grid;

Grid.propTypes = {
  origin: PropTypes.arrayOf(PropTypes.number).isRequired,
  dimensions: PropTypes.arrayOf(PropTypes.number).isRequired,
  gridLine: PropTypes.shape({
    spacing: PropTypes.number,
    strokeColor: PropTypes.string,
    strokeWidth: PropTypes.number,
  }),
  borderLine: PropTypes.shape({
    strokeColor: PropTypes.string,
    strokeWidth: PropTypes.number,
  }),
};

Grid.defaultProps = {
  gridLine: {
    spacing: 10,
    strokeColor: `#000`,
    strokeWidth: 0.25,
  },
  borderLine: {
    strokeColor: `#00000099`,
    strokeWidth: 1,
  },
};
