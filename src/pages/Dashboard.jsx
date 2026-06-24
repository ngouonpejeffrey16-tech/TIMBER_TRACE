import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Avatar } from '../components/Avatar';
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
          <span style={{ fontSize: 14, fontWeight: 600, cursor: 'pointer', padding: '6px 0', color: 'var(--forest-800)', borderBottom: '2px solid var(--clay-500)' }}>Seller dashboard</span>
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

export function Dashboard({ saved }) {
  const navigate = useNavigate();

  const stats = [
    { label: 'Active listings', value: '3' },
    { label: 'Total views', value: '1,284' },
    { label: 'Saved by buyers', value: '47' },
    { label: 'Open offers', value: '2' },
  ];

  const rows = LISTINGS.slice(0, 3).map((d, i) => ({
    ...d,
    views: [412, 338, 534][i],
    offers: [1, 0, 1][i],
    status: ['Active', 'Active', 'Under offer'][i],
  }));

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <AppNav saved={saved} />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 30, color: 'var(--forest-800)', margin: 0 }}>Seller dashboard</h1>
            <div style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 2 }}>Welcome back, Dana</div>
          </div>
          <Button variant="accent" iconLeft={<Icon.plus size={18} />} onClick={() => navigate('/list')}>List new parcel</Button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 28 }}>
          {stats.map(s => (
            <Card key={s.label} padding="18px">
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 28, color: 'var(--forest-800)' }}>{s.value}</div>
              <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
            </Card>
          ))}
        </div>

        <Card padding="0">
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border-subtle)', fontWeight: 600, fontSize: 15 }}>Your listings</div>
          <div style={{ display: 'grid', gridTemplateColumns: '2.4fr 1fr 1fr 1fr 0.6fr', padding: '10px 20px', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', borderBottom: '1px solid var(--border-subtle)' }}>
            <span>Parcel</span><span>Price</span><span>Views</span><span>Status</span><span></span>
          </div>
          {rows.map(r => (
            <div
              key={r.id}
              onClick={() => navigate(`/listing/${r.id}`)}
              style={{ display: 'grid', gridTemplateColumns: '2.4fr 1fr 1fr 1fr 0.6fr', padding: '14px 20px', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 48, height: 40, borderRadius: 'var(--radius-sm)', background: `center/cover url(${r.image})` }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{r.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{r.location}</div>
                </div>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 14 }}>${r.price.toLocaleString()}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, color: 'var(--text-body)' }}>
                <Icon.eye size={15} stroke="var(--stone-500)" />{r.views}
              </span>
              <span><Badge tone={r.status === 'Active' ? 'success' : 'warning'} dot>{r.status}</Badge></span>
              <span style={{ textAlign: 'right', color: 'var(--text-muted)' }}><Icon.chevronRight size={18} /></span>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
