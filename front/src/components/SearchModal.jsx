import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { productsData } from '../data/products';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filtered = searchTerm.trim() === ''
    ? []
    : productsData.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(6px)',
        zIndex: 1500,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '80px',
        paddingLeft: '20px',
        paddingRight: '20px'
      }}
    >
      <div
        style={{
          backgroundColor: '#FFFDF8',
          borderRadius: '24px',
          padding: '24px',
          maxWidth: '600px',
          width: '100%',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '2px solid var(--color-border)', paddingBottom: '12px' }}>
          <Search size={22} color="var(--color-text-muted)" />
          <input
            type="text"
            autoFocus
            placeholder="Search baby frocks, rompers, dungarees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flexGrow: 1,
              border: 'none',
              outline: 'none',
              background: 'none',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}
          />
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={22} />
          </button>
        </div>

        {/* Results */}
        <div style={{ marginTop: '20px', maxHeight: '400px', overflowY: 'auto' }}>
          {searchTerm.trim() !== '' && filtered.length === 0 && (
            <div style={{ textAlign: 'center', color: 'var(--color-text-muted)', padding: '20px' }}>
              No cute outfits found for "{searchTerm}"
            </div>
          )}

          {filtered.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              onClick={onClose}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '10px',
                borderRadius: '12px',
                transition: 'background 0.2s',
                marginBottom: '8px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-pink-light)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <img src={product.images[0]} alt={product.title} style={{ width: '50px', height: '60px', objectFit: 'contain', backgroundColor: '#FFF8F0', padding: '2px', borderRadius: '8px' }} />
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-text-dark)' }}>{product.title}</h4>
                <div style={{ display: 'flex', gap: '10px', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                  <span style={{ textTransform: 'capitalize' }}>{product.category}</span>
                  <span>•</span>
                  <span style={{ fontWeight: '700', color: '#D81B60' }}>Starting ₹{Math.min(...product.prices)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
