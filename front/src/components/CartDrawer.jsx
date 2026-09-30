import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponMsg, setCouponMsg] = useState('');
  
  // Checkout Modal state
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'Coimbatore',
    pincode: ''
  });

  if (!isCartOpen) return null;

  const freeShippingThreshold = 499;
  const isFreeShipping = cartTotal >= freeShippingThreshold;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);

  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'KIDDY10') {
      setAppliedDiscount(Math.round(cartTotal * 0.1));
      setCouponMsg('10% OFF Coupon Applied! 🎉');
    } else {
      setCouponMsg('Invalid code. Try KIDDY10');
      setTimeout(() => setCouponMsg(''), 2500);
    }
  };

  const finalShipping = cart.length > 0 ? (isFreeShipping ? 0 : 50) : 0;
  const finalTotal = Math.max(0, cartTotal - appliedDiscount + finalShipping);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
    }, 500);
  };

  const handleCloseModal = () => {
    setShowCheckoutModal(false);
    setOrderPlaced(false);
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Overlay backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(3px)',
          zIndex: 1000
        }}
      />

      {/* Cart Panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          maxWidth: '440px',
          height: '100%',
          backgroundColor: '#FFFDF8',
          zIndex: 1001,
          boxShadow: '-8px 0 30px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '20px',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--color-pink-light)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag color="#C2185B" size={24} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#3D3D3D' }}>Your Shopping Bag</h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Banner */}
        {cart.length > 0 && (
          <div style={{ background: '#FFF8F0', padding: '12px 20px', borderBottom: '1px solid #FFE0B2', fontSize: '0.85rem' }}>
            {isFreeShipping ? (
              <div style={{ color: '#2E7D32', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={16} /> Congratulations! You unlocked FREE Delivery! 🎉
              </div>
            ) : (
              <div>
                Add <strong style={{ color: '#D81B60' }}>₹{remainingForFreeShipping}</strong> more to qualify for <strong>FREE Delivery</strong>!
                <div style={{ height: '6px', background: '#FFE0B2', borderRadius: '10px', marginTop: '6px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', background: '#F8BBD0', width: `${(cartTotal / freeShippingThreshold) * 100}%` }} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Cart Items List */}
        <div style={{ flexGrow: 1, overflowY: 'auto', padding: '20px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-pink-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', color: '#C2185B' }}>
                <ShoppingBag size={40} />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px' }}>Your Bag is Empty</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                Looks like you haven't added any cute baby outfits yet!
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-primary"
              >
                Start Shopping Now
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {cart.map((item, index) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}-${index}`}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    padding: '12px',
                    borderRadius: '16px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                  }}
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.title}
                    style={{ width: '70px', height: '84px', objectFit: 'contain', backgroundColor: '#FFF8F0', padding: '2px', borderRadius: '12px' }}
                  />
                  <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-text-dark)', lineHeight: '1.3' }}>
                          {item.product.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(index)}
                          style={{ background: 'none', border: 'none', color: '#E53935', padding: '2px', cursor: 'pointer' }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                        Size: <span style={{ fontWeight: '600', color: 'var(--color-text-dark)', background: 'var(--color-cream)', padding: '2px 6px', borderRadius: '6px' }}>{item.selectedSize}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                      <span style={{ fontSize: '1rem', fontWeight: '700', color: '#D81B60' }}>
                        ₹{item.selectedPrice * item.quantity}
                      </span>
                      {/* Quantity Controls */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--color-cream)', borderRadius: '20px', padding: '2px 8px' }}>
                        <button
                          onClick={() => updateQuantity(index, -1)}
                          style={{ background: 'none', border: 'none', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <Minus size={14} />
                        </button>
                        <span style={{ fontSize: '0.85rem', fontWeight: '700', minWidth: '16px', textAlign: 'center' }}>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, 1)}
                          style={{ background: 'none', border: 'none', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer & Checkout Area */}
        {cart.length > 0 && (
          <div style={{ padding: '20px', borderTop: '1px solid var(--color-border)', backgroundColor: '#FFFFFF' }}>
            {/* Coupon input */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <input
                type="text"
                placeholder="Coupon code (e.g. KIDDY10)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                style={{
                  flexGrow: 1,
                  padding: '8px 14px',
                  borderRadius: '12px',
                  border: '1px solid var(--color-border)',
                  fontSize: '0.85rem'
                }}
              />
              <button
                onClick={handleApplyCoupon}
                style={{
                  padding: '8px 16px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--color-yellow)',
                  fontWeight: '700',
                  fontSize: '0.85rem'
                }}
              >
                Apply
              </button>
            </div>
            {couponMsg && (
              <div style={{ fontSize: '0.8rem', color: couponMsg.includes('Applied') ? '#2E7D32' : '#D32F2F', marginBottom: '12px', fontWeight: '600' }}>
                {couponMsg}
              </div>
            )}

            {/* Calculations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#6E7C87', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Subtotal</span>
                <span style={{ fontWeight: '600', color: 'var(--color-text-dark)' }}>₹{cartTotal}</span>
              </div>
              {appliedDiscount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#2E7D32' }}>
                  <span>Discount (10%)</span>
                  <span>-₹{appliedDiscount}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Shipping</span>
                <span>{finalShipping === 0 ? <strong style={{ color: '#2E7D32' }}>FREE</strong> : `₹${finalShipping}`}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-text-dark)', paddingTop: '8px', borderTop: '1px dashed var(--color-border)' }}>
                <span>Total Amount</span>
                <span style={{ color: '#C2185B' }}>₹{finalTotal}</span>
              </div>
            </div>

            <button
              onClick={() => setShowCheckoutModal(true)}
              className="btn-primary"
              style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
            >
              Proceed to Checkout <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(5px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFDF8',
              borderRadius: '24px',
              padding: '24px 18px',
              maxWidth: '500px',
              width: '100%',
              boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
          >
            <button
              onClick={() => setShowCheckoutModal(false)}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <X size={22} />
            </button>

            {orderPlaced ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#C8E6C9', color: '#2E7D32', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                  <CheckCircle2 size={50} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#2E7D32', marginBottom: '10px' }}>
                  Order Placed Successfully! 🎉
                </h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px', lineHeight: '1.5' }}>
                  Thank you for shopping at Kiddy Closet! Your baby outfits will be delivered within 2-3 business days.
                </p>
                <div style={{ background: '#FFF8F0', padding: '16px', borderRadius: '16px', marginBottom: '24px', fontSize: '0.9rem', textAlign: 'left' }}>
                  <div><strong>Order ID:</strong> #KC-{Math.floor(100000 + Math.random() * 900000)}</div>
                  <div><strong>Total Paid:</strong> ₹{finalTotal}</div>
                  <div><strong>Deliver To:</strong> {formData.address || 'Coimbatore, Tamil Nadu'}</div>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="btn-primary"
                  style={{ width: '100%' }}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '6px' }}>Delivery Details</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                  Complete your order of <strong>{cart.length} item(s)</strong> for <strong>₹{finalTotal}</strong>.
                </p>

                <form onSubmit={handlePlaceOrder} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block', marginBottom: '4px' }}>Parent's Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '12px', border: '1px solid var(--color-border)' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block', marginBottom: '4px' }}>Mobile Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '12px', border: '1px solid var(--color-border)' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block', marginBottom: '4px' }}>Delivery Address</label>
                    <textarea
                      required
                      rows={2}
                      placeholder="House No, Street, Landmark"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '12px', border: '1px solid var(--color-border)' }}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block', marginBottom: '4px' }}>City</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '12px', border: '1px solid var(--color-border)' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600', display: 'block', marginBottom: '4px' }}>Pincode</label>
                      <input
                        type="text"
                        required
                        placeholder="641001"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '12px', border: '1px solid var(--color-border)' }}
                      />
                    </div>
                  </div>

                  <div style={{ background: '#F8F9FA', padding: '12px', borderRadius: '12px', marginTop: '6px', fontSize: '0.85rem' }}>
                    <strong>Payment Method:</strong> Cash on Delivery / UPI Pay on Delivery
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', padding: '12px', marginTop: '10px' }}
                  >
                    Confirm & Place Order (₹{finalTotal})
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

export default CartDrawer;
