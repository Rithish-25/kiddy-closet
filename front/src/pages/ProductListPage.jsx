import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, RotateCcw, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import DualRangeSlider from '../components/DualRangeSlider';
import { productsData, allSizesList } from '../data/products';

const ProductListPage = ({ category = 'girls' }) => {
  // Filters state
  const [priceRange, setPriceRange] = useState([100, 5000]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sortBy, setSortBy] = useState('popular');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter products by category, price range, size
  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      // Category match
      if (product.category !== category) return false;

      // Price filter: product lowest price must fall within selected range
      const lowestPrice = Math.min(...product.prices);
      if (lowestPrice < priceRange[0] || lowestPrice > priceRange[1]) return false;

      // Size filter: if any size is selected, product must offer at least one selected size
      if (selectedSizes.length > 0) {
        const hasSize = product.sizes.some(size => selectedSizes.includes(size));
        if (!hasSize) return false;
      }

      return true;
    }).sort((a, b) => {
      const priceA = Math.min(...a.prices);
      const priceB = Math.min(...b.prices);
      if (sortBy === 'price-low') return priceA - priceB;
      if (sortBy === 'price-high') return priceB - priceA;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviewsCount - a.reviewsCount; // popular
    });
  }, [category, priceRange, selectedSizes, sortBy]);

  const handlePriceChange = (min, max) => {
    setPriceRange([min, max]);
  };

  const toggleSizeFilter = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const resetFilters = () => {
    setPriceRange([100, 5000]);
    setSelectedSizes([]);
    setSortBy('popular');
  };

  const isGirls = category === 'girls';

  return (
    <div style={{ paddingTop: '30px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Category Header Banner */}
        <div
          style={{
            background: isGirls
              ? 'linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 100%)'
              : 'linear-gradient(135deg, #E1F5FE 0%, #B3E5FC 100%)',
            borderRadius: '24px',
            padding: '28px 20px',
            marginBottom: '28px',
            boxShadow: 'var(--shadow-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div>
            <span className={isGirls ? 'badge-pill badge-pink' : 'badge-pill badge-blue'} style={{ background: '#FFFFFF', marginBottom: '10px' }}>
              {isGirls ? 'Pretty & Precious 🌸' : 'Cool & Handsome 🎈'}
            </span>
            <h1 style={{ fontSize: 'clamp(1.6rem, 4.5vw, 2.2rem)', fontWeight: '700', color: 'var(--color-text-dark)', fontFamily: "'Quicksand', sans-serif" }}>
              {isGirls ? 'Girls Collection' : 'Boys Collection'}
            </h1>
            <p style={{ color: '#5D5D5D', fontSize: '1.02rem', marginTop: '6px', maxWidth: '550px' }}>
              {isGirls
                ? 'Explore charming dresses, rompers, tops and party outfits designed for maximum comfort and style.'
                : 'Browse cool t-shirts, dungarees, pajamas and tuxedo sets crafted from extra-soft cotton.'}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#3D3D3D' }}>
              Showing {filteredProducts.length} outfits
            </span>
          </div>
        </div>

        {/* Layout Grid: Sidebar Filter + Product Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            gap: '30px'
          }}
          className="product-page-layout"
        >
          {/* DESKTOP SIDEBAR FILTER */}
          <aside className="filter-sidebar" style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', padding: '24px', border: '1px solid var(--color-border)', height: 'fit-content', boxShadow: 'var(--shadow-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--color-border)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SlidersHorizontal size={18} color={isGirls ? '#C2185B' : '#0288D1'} /> Filters
              </h3>
              {(selectedSizes.length > 0 || priceRange[0] > 100 || priceRange[1] < 5000) && (
                <button
                  onClick={resetFilters}
                  style={{ background: 'none', border: 'none', color: '#D81B60', fontSize: '0.8rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
                >
                  <RotateCcw size={13} /> Reset
                </button>
              )}
            </div>

            {/* DUAL RANGE PRICE SLIDER FILTER */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ fontSize: '0.95rem', fontWeight: '700', display: 'block', marginBottom: '8px' }}>
                Price Range
              </label>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '8px' }}>
                Drag handles to select price range:
              </p>
              <DualRangeSlider
                min={100}
                max={5000}
                minVal={priceRange[0]}
                maxVal={priceRange[1]}
                onChange={handlePriceChange}
              />
            </div>

            {/* SIZE FILTER */}
            <div>
              <label style={{ fontSize: '0.95rem', fontWeight: '700', display: 'block', marginBottom: '12px' }}>
                Select Age / Size
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {allSizesList.map(size => {
                  const isChecked = selectedSizes.includes(size);
                  return (
                    <label
                      key={size}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '0.88rem',
                        color: 'var(--color-text-dark)',
                        cursor: 'pointer',
                        padding: '6px 8px',
                        borderRadius: '8px',
                        backgroundColor: isChecked ? (isGirls ? 'var(--color-pink-light)' : 'var(--color-blue-light)') : 'transparent',
                        transition: 'background 0.2s'
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleSizeFilter(size)}
                        style={{ accentColor: isGirls ? '#F48FB1' : '#81D4FA', width: '16px', height: '16px' }}
                      />
                      <span>{size}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* MAIN PRODUCT LIST AREA */}
          <div>
            {/* Top Toolbar (Sort + Mobile filter toggle) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '20px',
                backgroundColor: '#FFFFFF',
                padding: '12px 18px',
                borderRadius: '16px',
                border: '1px solid var(--color-border)'
              }}
            >
              {/* Left Side: Filter button on mobile + count */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  onClick={() => setMobileFilterOpen(true)}
                  className="mobile-filter-btn btn-outline"
                  style={{ fontSize: '0.85rem', padding: '7px 14px' }}
                >
                  <Filter size={16} /> Filters
                </button>

                <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>
                  Showing <strong>{filteredProducts.length}</strong> items
                </span>
              </div>

              {/* Right Side: Sort By Dropdown */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: '600', whiteSpace: 'nowrap' }}>
                  Sort By:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '12px',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    outline: 'none',
                    backgroundColor: 'var(--color-bg)',
                    cursor: 'pointer'
                  }}
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid var(--color-border)'
                }}
              >
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px' }}>No outfits match your filters</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                  Try broadening your price range or clearing selected size filters.
                </p>
                <button onClick={resetFilters} className="btn-primary">
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="product-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE FILTER MODAL */}
      {mobileFilterOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            zIndex: 2000,
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <div
            style={{
              width: '85%',
              maxWidth: '320px',
              backgroundColor: '#FFFDF8',
              height: '100%',
              padding: '20px',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)} style={{ background: 'none', border: 'none' }}>
                <X size={22} />
              </button>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: '700' }}>Price Range</label>
              <DualRangeSlider
                min={100}
                max={5000}
                minVal={priceRange[0]}
                maxVal={priceRange[1]}
                onChange={handlePriceChange}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: '700', display: 'block', marginBottom: '10px' }}>
                Select Age / Size
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {allSizesList.map(size => (
                  <label key={size} style={{ display: 'flex', gap: '8px', fontSize: '0.85rem' }}>
                    <input
                      type="checkbox"
                      checked={selectedSizes.includes(size)}
                      onChange={() => toggleSizeFilter(size)}
                    />
                    <span>{size}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={() => setMobileFilterOpen(false)}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* Embedded Responsive Styles */}
      <style>{`
        @media (max-width: 840px) {
          .product-page-layout {
            grid-template-columns: 1fr !important;
          }
          .filter-sidebar {
            display: none !important;
          }
          .mobile-filter-btn {
            display: inline-flex !important;
          }
        }
        @media (min-width: 841px) {
          .mobile-filter-btn {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductListPage;
