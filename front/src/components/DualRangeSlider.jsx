import React, { useCallback } from 'react';

const DualRangeSlider = ({ min = 100, max = 5000, minVal, maxVal, onChange }) => {
  // Convert to percentage for track background
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  const minPercent = getPercent(minVal);
  const maxPercent = getPercent(maxVal);

  return (
    <div style={{ width: '100%', padding: '6px 0' }}>
      {/* Price Badges with clear separation above slider */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
          fontSize: '0.88rem',
          fontWeight: '700'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>Min:</span>
          <span style={{ background: 'var(--color-pink-light)', color: '#C2185B', padding: '4px 10px', borderRadius: '10px', border: '1px solid #F8BBD0' }}>
            ₹{minVal}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>Max:</span>
          <span style={{ background: 'var(--color-blue-light)', color: '#0288D1', padding: '4px 10px', borderRadius: '10px', border: '1px solid #B3E5FC' }}>
            ₹{maxVal}
          </span>
        </div>
      </div>

      {/* Slider Track Container */}
      <div style={{ position: 'relative', height: '24px', display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '6px',
            backgroundColor: '#EAE3DA',
            borderRadius: '4px'
          }}
        />
        <div
          style={{
            position: 'absolute',
            height: '6px',
            background: 'linear-gradient(90deg, #F8BBD0 0%, #B3E5FC 100%)',
            borderRadius: '4px',
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`
          }}
        />

        {/* Min Range Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={50}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 100);
            onChange(value, maxVal);
          }}
          className="range-input"
          style={{ zIndex: minVal > max - 100 ? 5 : 3 }}
        />

        {/* Max Range Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={50}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 100);
            onChange(minVal, value);
          }}
          className="range-input"
          style={{ zIndex: 4 }}
        />
      </div>
    </div>
  );
};

export default DualRangeSlider;
