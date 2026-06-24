import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Avatar } from '../components/Avatar';
import { Input } from '../components/Input';
import { Icon } from '../icons';
import { LISTINGS } from '../data/listings';

function AppNav({ saved }) {
  const navigate = useNavigate();
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 30, background: 'var(--paper)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '12px 28px', display: 'flex', alignItems: 'center', gap: 28 }}>
        <img src="/logo-lockup.svg" height="26" alt="Timber Trace" style={{ cursor: 'pointer' }} onClick={() => navigate('/')} />
        <nav style={{ display: 'flex', gap: 22, marginLeft: 8 }}>
          <span onClick={() => navigate('/browse')} style={{ fontSize: 14, fontWeight: 600, cursor: 'pointer', padding: '6px 0', color: 'var(--text-muted)', borderBottom: '2px solid transparent' }}>Browse</span>
          <span onClick={() => navigate('/dashboard')} style={{ fontSize: 14, fontWeight: 600, cursor: 'pointer', padding: '6px 0', color: 'var(--text-muted)', borderBottom: '2px solid transparent' }}>Seller dashboard</span>
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-muted)' }}>
            <Icon.heart size={18} stroke="var(--stone-500)" /> {saved.length}
          </span>
          <Icon.bell size={18} stroke="var(--stone-500)" />
          <Avatar name="Dana Reyes" size="sm" />
        </div>
      </div>
    </header>
  );
}

function OfferModal({ item, onClose }) {
  const [amount, setAmount] = React.useState(item ? item.price.toLocaleString() : '');
  const [sent, setSent] = React.useState(false);
  if (!item) return null;
  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'rgba(22,36,28,0.5)', backdropFilter: 'blur(2px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ width: 440, background: 'var(--paper)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: 28 }}
      >
        {!sent ? (
          <>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, color: 'var(--forest-800)', margin: '0 0 4px' }}>Make an offer</h2>
            <div style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 20 }}>{item.title} · {item.location}</div>
            <Input label="Your offer" prefix="$" value={amount} onChange={e => setAmount(e.target.value)} hint={`List price $${item.price.toLocaleString()}`} />
            <div style={{ marginTop: 14 }}><Input label="Message to seller" placeholder="Optional note…" /></div>
            <div style={{ marginTop: 16, padding: '12px 14px', background: 'var(--stone-50)', borderRadius: 'var(--radius-sm)', fontSize: 13, color: 'var(--text-body)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Your offer</span>
                <span style={{ fontFamily: 'var(--font-mono)' }}>${(parseInt((amount || '').replace(/[^0-9]/g, ''), 10) || 0).toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, color: 'var(--text-muted)' }}>
                <span>Seller pays Timber Trace fee (5%)</span><span style={{ fontFamily: 'var(--font-mono)' }}>included</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8, color: 'var(--text-muted)', fontSize: 12 }}>
                <span style={{ display: 'inline-flex' }}><Icon.shield size={13} stroke="var(--forest-600)" /></span>
                Funds held in escrow until the deed transfers.
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
              <Button variant="ghost" fullWidth onClick={onClose}>Cancel</Button>
              <Button variant="accent" fullWidth onClick={() => setSent(true)}>Submit offer</Button>
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '12px 0' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--success-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Icon.check size={28} stroke="var(--success-fg)" />
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, color: 'var(--forest-800)', margin: '0 0 6px' }}>Offer submitted</h2>
            <p style={{ fontSize: 15, color: 'var(--text-body)', margin: '0 0 20px' }}>We've sent your offer of ${amount} to Dana. You'll hear back within 48 hours.</p>
            <Button variant="primary" fullWidth onClick={onClose}>Done</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export function Detail({ saved, setSaved }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = LISTINGS.find(l => l.id === parseInt(id));
  const [offerOpen, setOfferOpen] = React.useState(false);
  const toggleSave = (itemId) => setSaved(s => s.includes(itemId) ? s.filter(x => x !== itemId) : [...s, itemId]);

  if (!item) return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <p>Listing not found.</p>
      <Button onClick={() => navigate('/browse')}>Back to browse</Button>
    </div>
  );

  const facts = [
    { icon: 'ruler', label: 'Acreage', value: `${item.acres} acres` },
    { icon: 'grid', label: 'Zoning', value: item.zoning },
    { icon: 'road', label: 'Access', value: item.access },
    { icon: 'drop', label: 'Water', value: item.water },
  ];

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <AppNav saved={saved} />
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '20px 28px 56px' }}>
        <button
          onClick={() => navigate('/browse')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-sans)', display: 'flex', alignItems: 'center', gap: 6, padding: '8px 0' }}
        >
          <Icon.arrowRight size={16} style={{ transform: 'scaleX(-1)' }} />
          Back to results
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 32, marginTop: 8 }}>
          <div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: 380, background: `var(--stone-200) center/cover url(${item.image})`, position: 'relative' }}>
              <span style={{ position: 'absolute', top: 14, left: 14 }}><Badge tone="forest" solid>{item.acres} acres</Badge></span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginTop: 10 }}>
              {[item.image,
                'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=60',
                'https://images.unsplash.com/photo-1511497584788-876760111969?w=400&q=60',
                'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=400&q=60'
              ].map((s, i) => (
                <div key={i} style={{ height: 74, borderRadius: 'var(--radius-sm)', background: `center/cover url(${s})`, opacity: i === 0 ? 1 : 0.85, cursor: 'pointer' }} />
              ))}
            </div>

            <div style={{ marginTop: 28 }}>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 34, color: 'var(--forest-800)', margin: 0 }}>{item.title}</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: 15, marginTop: 6 }}>
                <Icon.pin size={17} stroke="var(--stone-500)" /> {item.location}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginTop: 24 }}>
              {facts.map(f => {
                const Ic = Icon[f.icon];
                return (
                  <Card key={f.label} padding="16px">
                    <Ic size={20} stroke="var(--forest-600)" />
                    <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 16, marginTop: 8 }}>{f.value}</div>
                    <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginTop: 2 }}>{f.label}</div>
                  </Card>
                );
              })}
            </div>

            <div style={{ marginTop: 28 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 21, color: 'var(--text-strong)' }}>About this parcel</h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)' }}>
                {item.acres} acres of {item.zoning.toLowerCase()} land in {item.location}, with {item.access.toLowerCase()} access and {item.water.toLowerCase()} on site. Surveyed boundaries, clear title, and a recorded easement. Power runs to the property line. Ideal for a cabin, homestead, or long-term hold.
              </p>
              <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
                {item.tags.map(t => <Badge key={t} tone="neutral">{t}</Badge>)}
              </div>
            </div>

            <div style={{ marginTop: 28 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 21, color: 'var(--text-strong)' }}>Parcel map</h2>
              <div style={{ height: 240, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', overflow: 'hidden', position: 'relative', background: 'var(--forest-100)' }}>
                <div style={{ position: 'absolute', inset: 0, background: "center/cover url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1000&q=60')", opacity: 0.5 }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8, color: 'var(--forest-800)' }}>
                  <Icon.layers size={28} stroke="var(--forest-700)" />
                  <span style={{ fontSize: 13, fontWeight: 600 }}>Interactive boundary map</span>
                </div>
              </div>
            </div>
          </div>

          <aside style={{ position: 'sticky', top: 80, alignSelf: 'start' }}>
            <Card padding="22px">
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, color: 'var(--forest-800)' }}>${item.price.toLocaleString()}</span>
                {item.verified && <Badge tone="success" dot>Title verified</Badge>}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>
                ${Math.round(item.price / item.acres).toLocaleString()} / acre
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
                <Button variant="accent" size="lg" fullWidth onClick={() => setOfferOpen(true)}>Make an offer</Button>
                <Button
                  variant="secondary" size="lg" fullWidth
                  iconLeft={
                    <Icon.heart
                      size={17}
                      fill={saved.includes(item.id) ? 'var(--clay-600)' : 'none'}
                      stroke={saved.includes(item.id) ? 'var(--clay-600)' : 'currentColor'}
                    />
                  }
                  onClick={() => toggleSave(item.id)}
                >
                  {saved.includes(item.id) ? 'Saved' : 'Save parcel'}
                </Button>
              </div>
              <div style={{ marginTop: 20, paddingTop: 18, borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: 12 }}>
                <Avatar name="Dana Reyes" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>Dana Reyes</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Verified seller · 4.9 ★</div>
                </div>
              </div>
              <Button variant="ghost" size="sm" fullWidth style={{ marginTop: 12 }}>Contact seller</Button>
            </Card>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginTop: 14, fontSize: 12, color: 'var(--text-muted)' }}>
              <Icon.shield size={15} stroke="var(--forest-600)" /> Funds held in escrow until closing
            </div>
          </aside>
        </div>
      </div>

      {offerOpen && <OfferModal item={item} onClose={() => setOfferOpen(false)} />}
    </div>
  );
}
