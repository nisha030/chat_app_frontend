import React from 'react';

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="d-none d-lg-flex align-items-center justify-content-center bg-light " style={{marginTop: '7rem'}}>
      <div className="text-center" style={{ maxWidth: '400px' }}>
    
        <div className="d-grid mb-4" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`rounded-3 bg-primary bg-opacity-25 ratio ratio-1x1 ${i % 2 === 0 ? 'pulse' : ''}`}
            />
          ))}
        </div>

        <h2 className="h4 fw-bold mb-3">{title}</h2>
        <p className="text-muted">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
