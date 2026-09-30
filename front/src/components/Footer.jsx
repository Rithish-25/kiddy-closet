import React from 'react';
import { Link } from 'react-router-dom';
import { Shirt, Heart, Phone, Mail, MapPin } from 'lucide-react';

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#FFF3E0',
        paddingTop: '60px',
        paddingBottom: '30px',
        borderTop: '1px solid #FFE0B2',
        color: '#3D3D3D',
        marginTop: '80px'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '50px'
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#F8BBD0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C2185B'
                }}
              >
                <Shirt size={22} />
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: '700', fontFamily: "'Quicksand', sans-serif" }}>
                Kiddy<span style={{ color: '#F48FB1' }}>Closet</span>
              </span>
            </div>
            <p style={{ fontSize: '0.92rem', color: '#6E7C87', lineHeight: '1.6', marginBottom: '20px' }}>
              Adorable, comfortable and stylish clothing crafted with love and 100% organic cotton for your little ones.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="#"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E1306C',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="#"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1877F2',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="#"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF0000',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}
                aria-label="YouTube"
              >
                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '20px', color: '#3D3D3D' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link to="/" style={{ fontSize: '0.92rem', color: '#5D5D5D', transition: 'color 0.2s' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/girls" style={{ fontSize: '0.92rem', color: '#5D5D5D', transition: 'color 0.2s' }}>
                  Girls Collection 🌸
                </Link>
              </li>
              <li>
                <Link to="/boys" style={{ fontSize: '0.92rem', color: '#5D5D5D', transition: 'color 0.2s' }}>
                  Boys Collection 🎈
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ fontSize: '0.92rem', color: '#5D5D5D', transition: 'color 0.2s' }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '20px', color: '#3D3D3D' }}>
              Customer Support
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link to="/contact" style={{ fontSize: '0.92rem', color: '#5D5D5D' }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <span style={{ fontSize: '0.92rem', color: '#5D5D5D', cursor: 'pointer' }}>
                  Shipping Information
                </span>
              </li>
              <li>
                <span style={{ fontSize: '0.92rem', color: '#5D5D5D', cursor: 'pointer' }}>
                  Returns & Exchanges
                </span>
              </li>
              <li>
                <span style={{ fontSize: '0.92rem', color: '#5D5D5D', cursor: 'pointer' }}>
                  Baby Size Guide
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '20px', color: '#3D3D3D' }}>
              Get in Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: '#5D5D5D' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="#D81B60" />
                <span>+91 98765 43210</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="#0288D1" />
                <span>hello@kiddycloset.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} color="#F57F17" style={{ marginTop: '3px' }} />
                <span>Kiddy Closet, Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            borderTop: '1px solid #FFE0B2',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.88rem',
            color: '#6E7C87'
          }}
        >
          <div>© 2026 Kiddy Closet. All Rights Reserved. Made with <Heart size={14} color="#E91E63" fill="#E91E63" /> for little ones.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
