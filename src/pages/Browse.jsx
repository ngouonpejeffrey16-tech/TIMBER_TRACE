import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Checkbox } from '../components/Checkbox';
import { Tag } from '../components/Tag';
import { Avatar } from '../components/Avatar';
import { ListingCard } from '../components/ListingCard';
import { Icon } from '../icons';
import { LISTINGS, FACETS } from '../data/listings';

function AppNav({ saved }) {
  const navigate = useNavigate();
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 30, background: 'var(--paper)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '12px 28px', display: 'flex', alignItems: 'center', gap: 28 }}>
        <img src="/logo-lockup.svg" height="26" alt="Timber Trace" style={{ cursor: 'pointer' }} onClick={() => navigate('/')} />
        <nav style={{ display: 'flex', gap: 22, marginLeft: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 600, cursor: 'pointer', padding: '6px 0', color: 'var(--forest-800)', borderBottom: '2px solid var(--clay-500)' }}>Browse</span>
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

export function Browse({ saved, setSaved }) {
  const navigate = useNavigate();
  const [active, setActive] = React.useState([]);
  const [sort, setSort] = React.useState('Newest');
  const toggle = (f) => setActive(a => a.includes(f) ? a.filter(x => x !== f) : [...a, f]);
  const toggleSave = (id) => setSaved(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);

  let list = LISTINGS.filter(d => active.length === 0 || active.every(f => d.tags.includes(f)));
  if (sort === 'Price: low to high') list = [...list].sort((a, b) => a.price - b.price);
  if (sort === 'Acreage') list = [...list].sort((a, b) => b.acres - a.acres);

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      <AppNav saved={saved} />
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '28px', display: 'grid', gridTemplateColumns: '248px 1fr', gap: 28, alignItems: 'start' }}>
        <aside style={{ position: 'sticky', top: 80, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Card padding="18px">
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon.filter size={16} stroke="var(--forest-700)" /> Filters
            </div>
            <Input label="Location" prefix={<Icon.search size={16} stroke="var(--stone-500)" />} placeholder="County or ZIP" style={{ marginBottom: 14 }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 8, marginBottom: 14 }}>
              <Input label="Min $" prefix="$" placeholder="0" style={{ minWidth: 0 }} />
              <Input label="Max $" prefix="$" placeholder="500k" style={{ minWidth: 0 }} />
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 10 }}>Features</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {FACETS.map(f => (
                <Checkbox key={f} label={f} checked={active.includes(f)} onChange={() => toggle(f)} />
              ))}
            </div>
          </Card>
        </aside>
        <main>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', marginBottom: 18, background: 'var(--warning-bg)', color: 'var(--warning-fg)', borderRadius: 'var(--radius-sm)', fontSize: 13, fontWeight: 500 }}>
            <Icon.shield size={16} stroke="var(--warning-fg)" />
            Sample listings shown for demonstration. Real parcels come from sellers who list their own land.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 28, color: 'var(--forest-800)', margin: 0 }}>Land for sale</h1>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{list.length} parcels</div>
            </div>
            <div style={{ width: 200 }}>
              <Select value={sort} onChange={e => setSort(e.target.value)} options={['Newest', 'Price: low to high', 'Acreage']} />
            </div>
          </div>
          {active.length > 0 && (
            <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
              {active.map(f => <Tag key={f} onRemove={() => toggle(f)}>{f}</Tag>)}
            </div>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {list.map(d => (
              <ListingCard
                key={d.id} {...d}
                saved={saved.includes(d.id)}
                onSave={() => toggleSave(d.id)}
                onClick={() => navigate(`/listing/${d.id}`)}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
