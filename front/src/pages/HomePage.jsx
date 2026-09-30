import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Heart, ShieldCheck, RefreshCw, Feather } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/products';

const HomePage = () => {
  const featuredGirls = productsData.filter(p => p.category === 'girls').slice(0, 3);
  const featuredBoys = productsData.filter(p => p.category === 'boys').slice(0, 3);
  const featuredProducts = [...featuredGirls, ...featuredBoys];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(180deg, #FFF8F0 0%, #FFFDF8 100%)',
          padding: '50px 0 70px 0',
          position: 'relative',
          overflow: 'hidden',
          width: '100%'
        }}
      >
        {/* Background decorative circles */}
        <div style={{ position: 'absolute', top: '-40px', left: '-40px', width: '220px', height: '220px', borderRadius: '50%', background: '#FCE4EC', opacity: 0.6, zIndex: 0, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10px', right: '-30px', width: '260px', height: '260px', borderRadius: '50%', background: '#E1F5FE', opacity: 0.6, zIndex: 0, pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '36px',
              alignItems: 'center'
            }}
          >
            {/* Left Content */}
            <div>
              <span className="badge-pill badge-pink" style={{ marginBottom: '16px' }}>
                <Sparkles size={16} /> 100% Pure Organic Cotton
              </span>
              <h1
                style={{
                  fontSize: 'clamp(2rem, 4.8vw, 3.2rem)',
                  fontWeight: '700',
                  lineHeight: '1.18',
                  color: 'var(--color-text-dark)',
                  marginBottom: '18px',
                  fontFamily: "'Quicksand', sans-serif"
                }}
              >
                Cute Clothes for <span style={{ color: '#F48FB1' }}>Little Ones</span> 👶🏼
              </h1>
              <p
                style={{
                  fontSize: '1.08rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: '1.6',
                  marginBottom: '28px',
                  maxWidth: '520px'
                }}
              >
                Comfortable, stylish and adorable outfits for every little moment. Designed with non-irritating fabrics for sensitive baby skin.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <Link to="/girls" className="btn-primary" style={{ padding: '12px 26px', fontSize: '0.95rem' }}>
                  Explore Girls 🌸 <ArrowRight size={18} />
                </Link>
                <Link to="/boys" className="btn-secondary" style={{ padding: '12px 26px', fontSize: '0.95rem' }}>
                  Explore Boys 🎈 <ArrowRight size={18} />
                </Link>
              </div>

              {/* Trust highlights */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginTop: '36px', paddingTop: '20px', borderTop: '1px solid var(--color-border)' }}>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#D81B60' }}>5,000+</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Happy Moms</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0288D1' }}>4.9 ★</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Average Rating</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#2E7D32' }}>₹100</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Starts from</div>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card Stack */}
            <div style={{ position: 'relative', width: '100%' }}>
              <div
                style={{
                  borderRadius: '28px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                  position: 'relative',
                  background: 'var(--color-white)',
                  padding: '10px'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=80"
                  alt="Cute Baby Fashion Banner"
                  style={{
                    width: '100%',
                    height: '380px',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    borderRadius: '20px',
                    display: 'block'
                  }}
                />

                {/* Floating pill overlays */}
                <div
                  className="animate-float"
                  style={{
                    position: 'absolute',
                    bottom: '22px',
                    left: '22px',
                    maxWidth: 'calc(100% - 44px)',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    padding: '10px 16px',
                    borderRadius: '16px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <div style={{ background: 'var(--color-pink-light)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C2185B', flexShrink: 0 }}>
                    <Heart size={18} fill="#C2185B" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '700' }}>Soft & Skin-Safe</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>Tested for sensitive skin</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section (Shop by Category) */}
      <section style={{ padding: '60px 0', width: '100%', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="badge-pill badge-yellow" style={{ marginBottom: '10px' }}>
              Choose Your Category
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.3rem)', fontWeight: '700', fontFamily: "'Quicksand', sans-serif" }}>
              Shop by Category
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', marginTop: '6px' }}>
              Select a category to discover curated dresses, dungarees, tees, and rompers.
            </p>
          </div>

          {/* Two large category cards side-by-side on desktop, stacked on mobile */}
          <div className="category-cards-container">
            {/* GIRLS CATEGORY CARD */}
            <Link to="/girls" className="category-banner-card girls-banner">
              <div className="category-card-content">
                <span className="badge-pill" style={{ background: '#FFFFFF', color: '#C2185B', width: 'fit-content', marginBottom: '10px' }}>
                  Little Princess 🌸
                </span>
                <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', fontWeight: '700', color: '#3D3D3D', margin: '6px 0' }}>
                  Girls Collection
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#4A4A4A', lineHeight: '1.45', marginBottom: '18px' }}>
                  Floral frocks, cute rompers, party gowns & adorable accessories.
                </p>
                <div className="btn-primary" style={{ background: '#FFFFFF', color: '#C2185B', border: 'none', width: 'fit-content', padding: '10px 20px', fontSize: '0.9rem' }}>
                  Shop Girls <ArrowRight size={16} />
                </div>
              </div>

              <div className="category-card-image-wrap">
                <img
                  src="/images/girls_category.jpg"
                  alt="Girls Baby Fashion"
                  className="category-card-image"
                />
              </div>
            </Link>

            {/* BOYS CATEGORY CARD */}
            <Link to="/boys" className="category-banner-card boys-banner">
              <div className="category-card-content">
                <span className="badge-pill" style={{ background: '#FFFFFF', color: '#0288D1', width: 'fit-content', marginBottom: '10px' }}>
                  Little Champ 🎈
                </span>
                <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', fontWeight: '700', color: '#3D3D3D', margin: '6px 0' }}>
                  Boys Collection
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#4A4A4A', lineHeight: '1.45', marginBottom: '18px' }}>
                  Cool safari tees, soft denim dungarees, tuxedos & onesies.
                </p>
                <div className="btn-secondary" style={{ background: '#FFFFFF', color: '#0288D1', border: 'none', width: 'fit-content', padding: '10px 20px', fontSize: '0.9rem' }}>
                  Shop Boys <ArrowRight size={16} />
                </div>
              </div>

              <div className="category-card-image-wrap">
                <img
                  src="/images/boys_category.jpg"
                  alt="Boys Baby Fashion"
                  className="category-card-image"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: '50px 0 80px 0', background: '#FFFDF8' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            <div>
              <span className="badge-pill badge-mint" style={{ marginBottom: '8px' }}>
                Handpicked Favorites
              </span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2rem)', fontWeight: '700', fontFamily: "'Quicksand', sans-serif" }}>
                Featured Collections
              </h2>
            </div>
            <Link to="/girls" className="btn-outline" style={{ fontSize: '0.9rem', whiteSpace: 'nowrap', padding: '10px 20px', flexShrink: 0 }}>
              <span>View All Outfits</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Perks / Why Parents Love Us */}
      <section style={{ padding: '60px 0', background: 'var(--color-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700' }}>Why Parents Love Kiddy Closet</h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px'
            }}
          >
            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '20px', textAlign: 'center', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-pink-light)', color: '#C2185B', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                <Feather size={26} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px' }}>Ultra-Soft Fabrics</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>100% GOTS certified organic combed cotton gentle on delicate skin.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '20px', textAlign: 'center', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-blue-light)', color: '#0288D1', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                <ShieldCheck size={26} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px' }}>Non-Toxic Dyes</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>Zero harsh chemicals or formaldehyde, ensuring zero skin redness.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '20px', textAlign: 'center', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-yellow-light)', color: '#F57F17', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                <Sparkles size={26} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px' }}>Diaper Change Snaps</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>Nickel-free bottom snap closures for hassle-free diaper changes.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '20px', textAlign: 'center', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-mint-light)', color: '#2E7D32', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                <RefreshCw size={26} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px' }}>Easy 7-Day Exchange</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>Wrong size? Enjoy hassle-free doorstep size exchanges anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Category Hover Styles */}
      <style>{`
        .category-card-girls:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(248, 187, 208, 0.6) !important;
        }
        .category-card-boys:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(179, 229, 252, 0.6) !important;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
