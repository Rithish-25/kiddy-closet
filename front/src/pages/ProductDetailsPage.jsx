import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingBag, Truck, RefreshCw, ShieldCheck, Plus, Minus, ChevronRight, Check } from 'lucide-react';
import { productsData } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart, wishlist, toggleWishlist, setIsCartOpen } = useCart();

  const product = productsData.find(p => p.id === id) || productsData[0];
  const isGirls = product.category === 'girls';

  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('info');

  // Reset indices on route change
  useEffect(() => {
    setSelectedImgIndex(0);
    setSelectedSizeIndex(0);
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);

  const isWishlisted = wishlist.includes(product.id);
  const currentSize = product.sizes[selectedSizeIndex];
  const unitPrice = product.prices[selectedSizeIndex];
  const totalPrice = unitPrice * quantity;

  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleBuyNow = () => {
    addToCart(product, currentSize, unitPrice, quantity);
    setIsCartOpen(true);
  };

  return (
    <div style={{ paddingTop: '30px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Breadcrumb Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to={`/${product.category}`} style={{ textTransform: 'capitalize' }}>
            {product.category} Collection
          </Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--color-text-dark)', fontWeight: '600' }}>{product.title}</span>
        </div>

        {/* Main Product Info Grid */}
        <div
          className="product-details-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '24px',
            boxShadow: 'var(--shadow-subtle)',
            border: '1px solid var(--color-border)'
          }}
        >
          {/* Left Column: Image Gallery */}
          <div>
            {/* Main Image */}
            <div style={{ position: 'relative', width: '100%', paddingTop: '115%', borderRadius: '20px', overflow: 'hidden', backgroundColor: '#FFF8F0', marginBottom: '16px' }}>
              <img
                src={product.images[selectedImgIndex] || product.images[0]}
                alt={product.title}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', padding: '10px' }}
              />
              <button
                onClick={() => toggleWishlist(product.id)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                <Heart size={22} fill={isWishlisted ? '#FF4B4B' : 'none'} color={isWishlisted ? '#FF4B4B' : '#6E7C87'} />
              </button>
            </div>

            {/* Thumbnails list */}
            <div style={{ display: 'flex', gap: '12px', overflowX: 'auto' }}>
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImgIndex(idx)}
                  style={{
                    width: '70px',
                    height: '84px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: idx === selectedImgIndex ? (isGirls ? '3px solid #F48FB1' : '3px solid #81D4FA') : '1px solid var(--color-border)',
                    padding: '4px',
                    cursor: 'pointer',
                    background: '#FFF8F0'
                  }}
                >
                  <img src={img} alt={`Thumb ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Specifications & Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span className={isGirls ? 'badge-pill badge-pink' : 'badge-pill badge-blue'} style={{ marginBottom: '12px' }}>
                {product.tag || 'Popular Pick'}
              </span>

              <h1 style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--color-text-dark)', marginBottom: '8px', lineHeight: '1.3' }}>
                {product.title}
              </h1>

              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFC107" color="#FFC107" />
                  ))}
                </div>
                <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>{product.rating}</span>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>({product.reviewsCount} customer reviews)</span>
              </div>

              {/* DYNAMIC PRICE DISPLAY - MULTIPLIED BY QUANTITY */}
              <div
                style={{
                  backgroundColor: isGirls ? 'var(--color-pink-light)' : 'var(--color-blue-light)',
                  padding: '16px 20px',
                  borderRadius: '16px',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                  <span style={{ fontSize: '2.2rem', fontWeight: '700', color: isGirls ? '#D81B60' : '#0277BD' }}>
                    ₹{totalPrice}
                  </span>
                  {quantity > 1 && (
                    <span style={{ fontSize: '0.88rem', color: '#5D5D5D', fontWeight: '600' }}>
                      (₹{unitPrice} × {quantity})
                    </span>
                  )}
                </div>
                <span style={{ fontSize: '0.85rem', color: '#5D5D5D' }}>
                  Size: <strong>{currentSize}</strong>
                </span>
              </div>

              {/* SIZE SELECTION PILLS WITH DYNAMIC PRICES */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '0.95rem', fontWeight: '700' }}>Select Size:</label>
                  <span style={{ fontSize: '0.82rem', color: isGirls ? '#C2185B' : '#0288D1', cursor: 'pointer', fontWeight: '600' }}>
                    Size Guide
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: '10px' }}>
                  {product.sizes.map((size, idx) => {
                    const priceForSize = product.prices[idx];
                    const isSelected = idx === selectedSizeIndex;
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedSizeIndex(idx)}
                        style={{
                          padding: '10px 8px',
                          borderRadius: '14px',
                          border: isSelected ? (isGirls ? '2px solid #F48FB1' : '2px solid #81D4FA') : '1px solid var(--color-border)',
                          backgroundColor: isSelected ? (isGirls ? '#FFF0F5' : '#E1F5FE') : '#FFFFFF',
                          textAlign: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-text-dark)' }}>{size}</div>
                        <div style={{ fontSize: '0.78rem', color: isGirls ? '#D81B60' : '#0277BD', fontWeight: '600', marginTop: '2px' }}>₹{priceForSize}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* QUANTITY SELECTOR WITH LIVE TOTAL */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <label style={{ fontSize: '0.95rem', fontWeight: '700' }}>Quantity:</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--color-cream)', borderRadius: '9999px', padding: '6px 16px', border: '1px solid var(--color-border)' }}>
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--color-text-dark)' }}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    <span style={{ fontWeight: '700', fontSize: '1rem', minWidth: '20px', textAlign: 'center' }}>{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--color-text-dark)' }}
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>
                  Total Price: <strong style={{ color: isGirls ? '#D81B60' : '#0277BD', fontSize: '1.2rem' }}>₹{totalPrice}</strong>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
                <button
                  onClick={() => addToCart(product, currentSize, unitPrice, quantity)}
                  className="btn-outline"
                  style={{ padding: '14px', fontSize: '0.98rem', justifyContent: 'center' }}
                >
                  <ShoppingBag size={18} /> Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className={isGirls ? 'btn-primary' : 'btn-secondary'}
                  style={{ padding: '14px', fontSize: '0.98rem', justifyContent: 'center' }}
                >
                  Buy Now • ₹{totalPrice}
                </button>
              </div>

              {/* Delivery Perks */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', paddingTop: '20px', borderTop: '1px solid var(--color-border)', fontSize: '0.8rem', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                <div>
                  <Truck size={20} color="#0288D1" style={{ margin: '0 auto 4px auto' }} />
                  <div>Free Delivery ₹499+</div>
                </div>
                <div>
                  <ShieldCheck size={20} color="#2E7D32" style={{ margin: '0 auto 4px auto' }} />
                  <div>100% Organic</div>
                </div>
                <div>
                  <RefreshCw size={20} color="#F57F17" style={{ margin: '0 auto 4px auto' }} />
                  <div>7-Day Exchange</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Info Section: Product Info, Material & Care */}
        <div style={{ marginTop: '30px', backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '24px', boxShadow: 'var(--shadow-subtle)', border: '1px solid var(--color-border)' }}>
          <div style={{ display: 'flex', gap: '12px', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '20px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
            <button
              onClick={() => setActiveTab('info')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '700',
                padding: '6px 12px',
                color: activeTab === 'info' ? (isGirls ? '#C2185B' : '#0288D1') : 'var(--color-text-muted)',
                borderBottom: activeTab === 'info' ? (isGirls ? '3px solid #F48FB1' : '3px solid #81D4FA') : 'none',
                cursor: 'pointer'
              }}
            >
              Product Description
            </button>
            <button
              onClick={() => setActiveTab('material')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '700',
                padding: '6px 12px',
                color: activeTab === 'material' ? (isGirls ? '#C2185B' : '#0288D1') : 'var(--color-text-muted)',
                borderBottom: activeTab === 'material' ? (isGirls ? '3px solid #F48FB1' : '3px solid #81D4FA') : 'none',
                cursor: 'pointer'
              }}
            >
              Material & Fabric
            </button>
            <button
              onClick={() => setActiveTab('care')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '700',
                padding: '6px 12px',
                color: activeTab === 'care' ? (isGirls ? '#C2185B' : '#0288D1') : 'var(--color-text-muted)',
                borderBottom: activeTab === 'care' ? (isGirls ? '3px solid #F48FB1' : '3px solid #81D4FA') : 'none',
                cursor: 'pointer'
              }}
            >
              Care Instructions
            </button>
          </div>

          {activeTab === 'info' && (
            <div>
              <p style={{ lineHeight: '1.7', color: '#5D5D5D', fontSize: '0.98rem', marginBottom: '16px' }}>
                {product.description}
              </p>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '10px' }}>Key Highlights:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {product.features.map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#5D5D5D' }}>
                    <Check size={16} color="#2E7D32" /> {feat}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'material' && (
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>Fabric & Composition</h4>
              <p style={{ fontSize: '0.95rem', color: '#5D5D5D', marginBottom: '16px' }}>{product.material}</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                Certified GOTS (Global Organic Textile Standard). Naturally breathable, hypoallergenic and free from harsh chemicals or toxic dyes.
              </p>
            </div>
          )}

          {activeTab === 'care' && (
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>Washing & Care Instructions</h4>
              <p style={{ fontSize: '0.95rem', color: '#5D5D5D' }}>{product.care}</p>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div style={{ marginTop: '60px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '24px', fontFamily: "'Quicksand', sans-serif" }}>
            You May Also Like 💖
          </h2>
          <div className="product-grid">
            {relatedProducts.map(rel => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
