import React from 'react';
import { TransportLine } from '../app/data/transportLines';

type TransportLineCardProps = {
  line: TransportLine;
};

const TransportLineCard: React.FC<TransportLineCardProps> = ({ line }) => {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl font-bold">{line.name}</h2>
      <p>Type: {line.type}</p>
      <p>Schedule: {line.startTime} - {line.endTime}</p>
      <p>Route: {line.route.join(' -> ')}</p>
    </div>
  );
};

export default TransportLineCard;
