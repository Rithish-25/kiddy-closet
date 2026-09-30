import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Trash2, Sparkles, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { productsData } from '../data/products';
import ProductCard from '../components/ProductCard';

const WishlistPage = () => {
  const { wishlist, toggleWishlist } = useCart();

  const wishlistedProducts = productsData.filter(product =>
    wishlist.includes(product.id)
  );

  return (
    <div style={{ paddingTop: '36px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Wishlist Header Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #FCE4EC 0%, #FFF8F0 100%)',
            borderRadius: '24px',
            padding: '30px 24px',
            marginBottom: '32px',
            boxShadow: 'var(--shadow-subtle)',
            border: '1px solid #F8BBD0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div>
            <span className="badge-pill badge-pink" style={{ background: '#FFFFFF', marginBottom: '10px' }}>
              <Sparkles size={16} /> Your Saved Favorites
            </span>
            <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: '700', color: 'var(--color-text-dark)', fontFamily: "'Quicksand', sans-serif" }}>
              My Wishlist 💖
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginTop: '6px' }}>
              {wishlistedProducts.length === 0
                ? 'Save your favorite cute outfits here while browsing.'
                : `You have saved ${wishlistedProducts.length} adorable item${wishlistedProducts.length > 1 ? 's' : ''}.`}
            </p>
          </div>

          {wishlistedProducts.length > 0 && (
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link to="/girls" className="btn-outline" style={{ fontSize: '0.85rem', padding: '8px 16px' }}>
                Continue Shopping
              </Link>
            </div>
          )}
        </div>

        {/* Empty Wishlist State */}
        {wishlistedProducts.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '70px 20px',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-subtle)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-pink-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
                color: '#C2185B'
              }}
            >
              <Heart size={40} />
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '8px' }}>Your Wishlist is Empty</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '28px', lineHeight: '1.5' }}>
              Explore our lovely baby collection and tap the heart icon on any outfit to save it here!
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
              <Link to="/girls" className="btn-primary" style={{ padding: '12px 24px' }}>
                Explore Girls 🌸 <ArrowRight size={16} />
              </Link>
              <Link to="/boys" className="btn-secondary" style={{ padding: '12px 24px' }}>
                Explore Boys 🎈 <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ) : (
          /* Products Grid */
          <div className="product-grid">
            {wishlistedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default WishlistPage;
