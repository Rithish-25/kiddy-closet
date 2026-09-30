import React from 'react';
import { Phone, Mail, MapPin, Sparkles, Clock, ShieldCheck, Heart } from 'lucide-react';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const ContactPage = () => {
  return (
    <div style={{ paddingTop: '50px', paddingBottom: '90px' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <span className="badge-pill badge-pink" style={{ marginBottom: '14px' }}>
            <Sparkles size={16} /> We Love To Help
          </span>
          <h1 style={{ fontSize: '2.6rem', fontWeight: '700', fontFamily: "'Quicksand', sans-serif", color: 'var(--color-text-dark)', marginBottom: '10px' }}>
            Contact Us
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', maxWidth: '580px', margin: '0 auto', lineHeight: '1.6' }}>
            Have questions about sizes, your order, or fabrics? We're always here for you and your little one!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}
        >
          {/* Phone Card */}
          <div
            className="kiddy-card"
            style={{
              backgroundColor: 'var(--color-pink-light)',
              borderRadius: '24px',
              padding: '30px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: 'var(--shadow-subtle)',
              border: '1px solid #F8BBD0'
            }}
          >
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#FFFFFF', color: '#C2185B', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', boxShadow: '0 4px 12px rgba(248, 187, 208, 0.4)' }}>
              <Phone size={28} />
            </div>
            <div style={{ fontSize: '0.85rem', color: '#C2185B', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Phone & WhatsApp</div>
            <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-text-dark)', margin: '8px 0 4px 0' }}>+91 98765 43210</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Mon - Sat: 9:00 AM - 7:00 PM IST</div>
          </div>

          {/* Email Card */}
          <div
            className="kiddy-card"
            style={{
              backgroundColor: 'var(--color-blue-light)',
              borderRadius: '24px',
              padding: '30px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: 'var(--shadow-subtle)',
              border: '1px solid #B3E5FC'
            }}
          >
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#FFFFFF', color: '#0288D1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', boxShadow: '0 4px 12px rgba(179, 229, 252, 0.4)' }}>
              <Mail size={28} />
            </div>
            <div style={{ fontSize: '0.85rem', color: '#0288D1', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email Support</div>
            <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-text-dark)', margin: '8px 0 4px 0' }}>hello@kiddycloset.com</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>We reply within 2 hours</div>
          </div>

          {/* Location Card */}
          <div
            className="kiddy-card"
            style={{
              backgroundColor: 'var(--color-yellow-light)',
              borderRadius: '24px',
              padding: '30px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: 'var(--shadow-subtle)',
              border: '1px solid #FFF3B0'
            }}
          >
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#FFFFFF', color: '#F57F17', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', boxShadow: '0 4px 12px rgba(255, 243, 176, 0.4)' }}>
              <MapPin size={28} />
            </div>
            <div style={{ fontSize: '0.85rem', color: '#F57F17', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Store & HQ Location</div>
            <div style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--color-text-dark)', margin: '8px 0 4px 0' }}>Kiddy Closet, Coimbatore</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Tamil Nadu, India</div>
          </div>
        </div>

        {/* Social Media Connect Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '32px',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-subtle)',
            textAlign: 'center',
            marginBottom: '30px'
          }}
        >
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px', color: 'var(--color-text-dark)' }}>
            Join Our Kiddy Family on Social Media 🌟
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>
            Follow our daily baby fashion inspirations, parenting tips, and customer photo features!
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px'
            }}
          >
            <button
              onClick={() => window.open('https://instagram.com', '_blank')}
              style={{
                padding: '14px 28px',
                borderRadius: '16px',
                background: '#FFF0F5',
                color: '#E1306C',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontWeight: '700',
                fontSize: '0.95rem',
                border: '1px solid #F8BBD0',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              <InstagramIcon size={22} /> Instagram
            </button>
          </div>
        </div>

        {/* Operating Details Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #FFF8F0 0%, #FFF3E0 100%)',
            borderRadius: '20px',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.9rem',
            color: '#5D5D5D'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={18} color="#F57F17" />
            <span>Fast Customer Support</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={18} color="#2E7D32" />
            <span>100% Genuine Assistance</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Heart size={18} color="#D81B60" fill="#D81B60" />
            <span>Coimbatore, Tamil Nadu</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
