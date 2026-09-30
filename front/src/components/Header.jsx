import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, ShoppingBag, Heart, Menu, X, Shirt } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, wishlist, setIsCartOpen } = useCart();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(255, 253, 248, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(240, 230, 223, 0.8)',
        boxShadow: '0 2px 16px rgba(0, 0, 0, 0.03)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        
        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            padding: '8px',
            color: 'var(--color-text-dark)',
            cursor: 'pointer'
          }}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0, flexShrink: 1 }}>
          <div
            className="brand-logo-icon"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-pink-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#C2185B',
              boxShadow: '0 4px 10px rgba(248, 187, 208, 0.4)',
              flexShrink: 0
            }}
          >
            <Shirt size={22} />
          </div>
          <div>
            <span
              className="brand-title"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: '1.4rem',
                fontWeight: '700',
                color: '#3D3D3D',
                letterSpacing: '-0.5px',
                whiteSpace: 'nowrap'
              }}
            >
              Kiddy<span style={{ color: '#F48FB1' }}>Closet</span>
            </span>
            <span
              className="brand-subtitle"
              style={{
                display: 'block',
                fontSize: '0.62rem',
                fontWeight: '600',
                color: 'var(--color-text-muted)',
                letterSpacing: '1px',
                marginTop: '-4px',
                whiteSpace: 'nowrap'
              }}
            >
              CUTE BABY FASHION
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          className="desktop-nav"
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Right Side Tools */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-cream)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text-dark)',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
            title="Search Products"
            aria-label="Search"
          >
            <Search size={18} />
          </button>

          {/* Wishlist Icon */}
          <Link
            to="/wishlist"
            style={{
              position: 'relative',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-cream)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text-dark)',
              flexShrink: 0
            }}
            title="Wishlist"
            aria-label="Wishlist"
          >
            <Heart size={18} />
            {wishlist.length > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  backgroundColor: '#F48FB1',
                  color: 'white',
                  fontSize: '0.68rem',
                  fontWeight: '700',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart Icon */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="header-cart-btn"
            style={{
              position: 'relative',
              backgroundColor: 'var(--color-pink-light)',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              color: '#C2185B',
              fontWeight: '700',
              transition: 'transform 0.2s ease',
              flexShrink: 0
            }}
            title="Shopping Cart"
            aria-label="Shopping Cart"
          >
            <ShoppingBag size={18} />
            <span className="cart-btn-label">Cart</span>
            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slideout Nav Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--color-white)',
            borderBottom: '1px solid var(--color-border)',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          <NavLink
            to="/"
            end
            onClick={() => setMobileMenuOpen(false)}
            style={{ padding: '10px', fontWeight: '600', borderRadius: '12px', background: 'var(--color-cream)' }}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{ padding: '10px', fontWeight: '600', borderRadius: '12px', background: 'var(--color-cream)' }}
          >
            Contact Us
          </NavLink>
        </div>
      )}

      {/* Embedded Navigation Styles */}
      <style>{`
        .nav-link {
          padding: 8px 16px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--color-text-dark);
          transition: all 0.2s ease;
        }
        .nav-link:hover {
          background-color: var(--color-cream);
        }
        .nav-link.active {
          background-color: var(--color-pink-light);
          color: #C2185B;
        }
        .mobile-toggle {
          display: none;
        }
        .header-cart-btn {
          padding: 7px 12px;
          gap: 6px;
          font-size: 0.85rem;
        }
        .cart-badge {
          background-color: #D81B60;
          color: white;
          border-radius: 9999px;
          padding: 1px 6px;
          font-size: 0.72rem;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (max-width: 640px) {
          .cart-btn-label {
            display: none !important;
          }
          .header-cart-btn {
            width: 38px !important;
            height: 38px !important;
            padding: 0 !important;
            border-radius: 50% !important;
            justify-content: center !important;
          }
          .cart-badge {
            position: absolute !important;
            top: -2px !important;
            right: -2px !important;
            width: 18px !important;
            height: 18px !important;
            padding: 0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-size: 0.68rem !important;
            font-weight: 700 !important;
          }
        }
        @media (max-width: 480px) {
          .brand-subtitle {
            display: none !important;
          }
          .brand-title {
            font-size: 1.22rem !important;
          }
          .brand-logo-icon {
            width: 34px !important;
            height: 34px !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
