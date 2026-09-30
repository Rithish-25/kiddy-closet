import React from 'react';
import { useCart } from '../context/CartContext';
import { Sparkles } from 'lucide-react';

const Toast = () => {
  const { toast } = useCart();

  if (!toast.visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 3000,
        backgroundColor: toast.type === 'pink' ? '#FFF0F5' : '#E1F5FE',
        border: toast.type === 'pink' ? '2px solid #F8BBD0' : '2px solid #B3E5FC',
        color: 'var(--color-text-dark)',
        padding: '12px 20px',
        borderRadius: '9999px',
        boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontWeight: '600',
        fontSize: '0.9rem',
        animation: 'bounceIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
    >
      <Sparkles size={18} color={toast.type === 'pink' ? '#C2185B' : '#0288D1'} />
      <span>{toast.message}</span>

      <style>{`
        @keyframes bounceIn {
          from { transform: translateY(30px) scale(0.9); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Toast;
