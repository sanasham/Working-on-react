import React from 'react';
import '../../App.css';

function Simmer() {
  return (
    <div className="restarent-constainer">
      {Array(16)
        .fill('')
        .map((e, i) => (
          <div key={i} className="shimmer-card"></div>
        ))}
    </div>
  );
}

export default Simmer;
