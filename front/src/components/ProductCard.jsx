import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  // Initial state: default size is unselected or first size, default price is lowest available price
  const lowestPrice = Math.min(...product.prices);
  const lowestPriceIndex = product.prices.indexOf(lowestPrice);
  
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(lowestPriceIndex !== -1 ? lowestPriceIndex : 0);
  const [isHovered, setIsHovered] = useState(false);

  const { addToCart, wishlist, toggleWishlist } = useCart();
  const isWishlisted = wishlist.includes(product.id);

  const currentSize = product.sizes[selectedSizeIndex];
  const currentPrice = product.prices[selectedSizeIndex];

  return (
    <div
      className="kiddy-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        position: 'relative'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Tag & Wishlist Button */}
      <div style={{ position: 'absolute', top: '10px', left: '10px', right: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
        {product.tag ? (
          <span
            className={product.category === 'girls' ? 'badge-pink' : 'badge-blue'}
            style={{
              fontSize: '0.72rem',
              fontWeight: '700',
              padding: '4px 9px',
              borderRadius: '8px',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
              letterSpacing: '0.2px',
              lineHeight: '1.2',
              display: 'inline-flex',
              alignItems: 'center'
            }}
          >
            {product.tag}
          </span>
        ) : <div />}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          style={{
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(4px)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s ease, background 0.2s ease',
            marginLeft: 'auto',
            flexShrink: 0
          }}
          aria-label="Add to Wishlist"
        >
          <Heart
            size={16}
            fill={isWishlisted ? '#FF4B4B' : 'none'}
            color={isWishlisted ? '#FF4B4B' : '#6E7C87'}
          />
        </button>
      </div>

      {/* Product Image Link (1:1 Square aspect ratio) */}
      <Link to={`/product/${product.id}`} style={{ position: 'relative', width: '100%', paddingTop: '100%', overflow: 'hidden', background: '#FFF8F0', display: 'block' }}>
        <img
          src={product.images[0]}
          alt={product.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            transition: 'transform 0.4s ease',
            transform: isHovered ? 'scale(1.06)' : 'scale(1)'
          }}
          loading="lazy"
        />
      </Link>

      {/* Product Body */}
      <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <div>
          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
            <Star size={13} fill="#FFC107" color="#FFC107" />
            <span style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--color-text-dark)' }}>{product.rating}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>({product.reviewsCount})</span>
          </div>

          {/* Title - normalized to 2 lines height for uniform alignment */}
          <Link to={`/product/${product.id}`}>
            <h3
              style={{
                fontSize: '0.96rem',
                fontWeight: '700',
                color: 'var(--color-text-dark)',
                marginBottom: '8px',
                lineHeight: '1.25',
                height: '2.5em',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
              title={product.title}
            >
              {product.title}
            </h3>
          </Link>

          {/* Size Pills Selection - with consistent min-height */}
          <div style={{ marginBottom: '10px', minHeight: '60px' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '5px', fontWeight: '600' }}>
              Size: <span style={{ color: 'var(--color-text-dark)' }}>{currentSize}</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {product.sizes.map((size, idx) => {
                const isSelected = idx === selectedSizeIndex;
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSizeIndex(idx)}
                    style={{
                      padding: '3px 6px',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      borderRadius: '6px',
                      border: isSelected
                        ? (product.category === 'girls' ? '2px solid #F48FB1' : '2px solid #81D4FA')
                        : '1px solid var(--color-border)',
                      backgroundColor: isSelected
                        ? (product.category === 'girls' ? 'var(--color-pink-light)' : 'var(--color-blue-light)')
                        : 'var(--color-white)',
                      color: 'var(--color-text-dark)',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Price & Actions */}
        <div style={{ paddingTop: '8px', borderTop: '1px dashed #F0E6DF' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Price: </span>
              <span style={{ fontSize: '1.15rem', fontWeight: '700', color: product.category === 'girls' ? '#D81B60' : '#0277BD' }}>
                ₹{currentPrice}
              </span>
            </div>
            <span style={{ fontSize: '0.72rem', background: '#E8F5E9', color: '#2E7D32', padding: '2px 7px', borderRadius: '8px', fontWeight: '600' }}>
              In Stock
            </span>
          </div>

          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', width: '100%' }}>
            <Link
              to={`/product/${product.id}`}
              className="btn-outline"
              style={{
                flex: '1 1 0',
                minWidth: 0,
                padding: '8px 6px',
                fontSize: '0.8rem',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                whiteSpace: 'nowrap',
                lineHeight: 1
              }}
            >
              <Eye size={14} style={{ flexShrink: 0 }} />
              <span>Details</span>
            </Link>
            <button
              onClick={() => addToCart(product, currentSize, currentPrice, 1)}
              className={product.category === 'girls' ? 'btn-primary' : 'btn-secondary'}
              style={{
                width: '36px',
                height: '36px',
                padding: 0,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
              title="Add to Cart"
            >
              <ShoppingBag size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
