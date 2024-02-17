import { FC } from 'react';

interface BoxSeatLegendProps {
  color: 'red' | 'green' | 'white';
  legendName?: string;
  num?: number;
}

const BoxSeatLegend: FC<BoxSeatLegendProps> = ({ color, legendName, num }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px',
      }}
    >
      <div
        style={{
          background: color,
          cursor: color === 'white' ? 'not-allowed' : 'pointer',
        }}
        className="empty-box"
      >
        {num}
      </div>
      <div>{legendName}</div>
    </div>
  );
};

export default BoxSeatLegend;
