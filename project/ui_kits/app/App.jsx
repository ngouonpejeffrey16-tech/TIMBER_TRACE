const React = window.React;
const { Button, Badge, Input, Select, Checkbox, Tag, Avatar, ListingCard, Card } = window.TimberTraceDesignSystem_61daa5;
const Icon = window.TTIcon;

const DATA = [
  { id:1, image:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=70', price:184000, acres:42, verified:true, title:'Cascade Ridge', location:'Whatcom County, WA', zoning:'Rural', access:'Road', water:'Creek', tags:['Wooded','Road access'] },
  { id:2, image:'https://images.unsplash.com/photo-1444044205806-38f3ed106c10?w=900&q=70', price:96500, acres:11, verified:true, title:'Birch Hollow', location:'Lincoln County, OR', zoning:'Forest', access:'Trail', water:'Spring', tags:['Wooded','Off-grid'] },
  { id:3, image:'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=900&q=70', price:312000, acres:78, verified:false, title:'Still Lake Frontage', location:'Itasca County, MN', zoning:'Recreational', access:'Road', water:'Lakefront', tags:['Waterfront','Road access'] },
  { id:4, image:'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=900&q=70', price:58000, acres:6, verified:true, title:'Sage Flats', location:'Fremont County, ID', zoning:'Agricultural', access:'Road', water:'Well', tags:['Pasture','Road access'] },
  { id:5, image:'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=900&q=70', price:240000, acres:55, verified:true, title:'Elk Meadow', location:'Gallatin County, MT', zoning:'Rural', access:'Road', water:'River', tags:['Waterfront','Wooded'] },
  { id:6, image:'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=900&q=70', price:74500, acres:9, verified:false, title:'Quartz Canyon', location:'Coconino County, AZ', zoning:'Recreational', access:'Trail', water:'None', tags:['Off-grid'] },
];

const FACETS = ['Wooded','Waterfront','Road access','Off-grid','Pasture'];

function AppNav({ view, setView, saved }) {
  const tab = (id, label) => (
    <span onClick={() => setView(id)} style={{
      fontSize:14, fontWeight:600, cursor:'pointer', padding:'6px 0',
      color: view===id ? 'var(--forest-800)' : 'var(--text-muted)',
      borderBottom: view===id ? '2px solid var(--clay-500)' : '2px solid transparent',
    }}>{label}</span>
  );
  return (
    <header style={{ position:'sticky', top:0, zIndex:30, background:'var(--paper)', borderBottom:'1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth:1240, margin:'0 auto', padding:'12px 28px', display:'flex', alignItems:'center', gap:28 }}>
        <img src="../../assets/logo-lockup.svg" height="26" alt="Timber Trace" style={{ cursor:'pointer' }} onClick={() => setView('browse')} />
        <nav style={{ display:'flex', gap:22, marginLeft:8 }}>
          {tab('browse','Browse')}
          {tab('dashboard','Seller dashboard')}
        </nav>
        <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:16 }}>
          <span style={{ display:'flex', alignItems:'center', gap:6, fontSize:13, color:'var(--text-muted)' }}>
            <Icon.heart size={18} stroke="var(--stone-500)" /> {saved.length}
          </span>
          <Icon.bell size={18} stroke="var(--stone-500)" />
          <Avatar name="Dana Reyes" size="sm" />
        </div>
      </div>
    </header>
  );
}

function Browse({ onOpen, saved, toggleSave }) {
  const [active, setActive] = React.useState([]);
  const [sort, setSort] = React.useState('Newest');
  const toggle = (f) => setActive(a => a.includes(f) ? a.filter(x=>x!==f) : [...a, f]);
  let list = DATA.filter(d => active.length===0 || active.every(f => d.tags.includes(f)));
  if (sort==='Price: low to high') list = [...list].sort((a,b)=>a.price-b.price);
  if (sort==='Acreage') list = [...list].sort((a,b)=>b.acres-a.acres);

  return (
    <div style={{ maxWidth:1240, margin:'0 auto', padding:'28px', display:'grid', gridTemplateColumns:'248px 1fr', gap:28, alignItems:'start' }}>
      <aside style={{ position:'sticky', top:80, display:'flex', flexDirection:'column', gap:20 }}>
        <Card padding="18px">
          <div style={{ fontWeight:600, fontSize:14, marginBottom:12, display:'flex', alignItems:'center', gap:8 }}><Icon.filter size={16} stroke="var(--forest-700)"/> Filters</div>
          <Input label="Location" prefix={<Icon.search size={16} stroke="var(--stone-500)"/>} placeholder="County or ZIP" style={{ marginBottom:14 }} />
          <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)', gap:8, marginBottom:14 }}>
            <Input label="Min $" prefix="$" placeholder="0" style={{ minWidth:0 }} />
            <Input label="Max $" prefix="$" placeholder="500k" style={{ minWidth:0 }} />
          </div>
          <div style={{ fontSize:13, fontWeight:600, marginBottom:10 }}>Features</div>
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {FACETS.map(f => <Checkbox key={f} label={f} checked={active.includes(f)} onChange={()=>toggle(f)} />)}
          </div>
        </Card>
      </aside>
      <main>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:18 }}>
          <div>
            <h1 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:28, color:'var(--forest-800)', margin:0 }}>Land for sale</h1>
            <div style={{ fontSize:13, color:'var(--text-muted)', marginTop:2 }}>{list.length} parcels</div>
          </div>
          <div style={{ width:200 }}>
            <Select value={sort} onChange={e=>setSort(e.target.value)} options={['Newest','Price: low to high','Acreage']} />
          </div>
        </div>
        {active.length>0 && (
          <div style={{ display:'flex', gap:8, marginBottom:16, flexWrap:'wrap' }}>
            {active.map(f => <Tag key={f} onRemove={()=>toggle(f)}>{f}</Tag>)}
          </div>
        )}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
          {list.map(d => (
            <ListingCard key={d.id} {...d} saved={saved.includes(d.id)} onSave={()=>toggleSave(d.id)} onClick={()=>onOpen(d)}
              facts={[{label:'Zoning',value:d.zoning},{label:'Access',value:d.access},{label:'Water',value:d.water}]} />
          ))}
        </div>
      </main>
    </div>
  );
}

function Detail({ item, onBack, saved, toggleSave, onOffer }) {
  const facts = [
    { icon:'ruler', label:'Acreage', value:`${item.acres} acres` },
    { icon:'grid', label:'Zoning', value:item.zoning },
    { icon:'road', label:'Access', value:item.access },
    { icon:'drop', label:'Water', value:item.water },
  ];
  return (
    <div style={{ maxWidth:1240, margin:'0 auto', padding:'20px 28px 56px' }}>
      <button onClick={onBack} style={{ background:'none', border:'none', cursor:'pointer', color:'var(--text-muted)', fontSize:13, fontWeight:600, fontFamily:'var(--font-sans)', display:'flex', alignItems:'center', gap:6, padding:'8px 0', transform:'scaleX(-1)' }}>
        <Icon.arrowRight size={16} /><span style={{ transform:'scaleX(-1)' }}>Back to results</span>
      </button>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 360px', gap:32, marginTop:8 }}>
        <div>
          <div style={{ borderRadius:'var(--radius-lg)', overflow:'hidden', height:380, background:`var(--stone-200) center/cover url(${item.image})`, position:'relative' }}>
            <span style={{ position:'absolute', top:14, left:14 }}><Badge tone="forest" solid>{item.acres} acres</Badge></span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:10, marginTop:10 }}>
            {[item.image, 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=60','https://images.unsplash.com/photo-1511497584788-876760111969?w=400&q=60','https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=400&q=60'].map((s,i)=>(
              <div key={i} style={{ height:74, borderRadius:'var(--radius-sm)', background:`center/cover url(${s})`, opacity:i===0?1:0.85, cursor:'pointer' }} />
            ))}
          </div>

          <div style={{ marginTop:28 }}>
            <h1 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:34, color:'var(--forest-800)', margin:0 }}>{item.title}</h1>
            <div style={{ display:'flex', alignItems:'center', gap:6, color:'var(--text-muted)', fontSize:15, marginTop:6 }}>
              <Icon.pin size={17} stroke="var(--stone-500)" /> {item.location}
            </div>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14, marginTop:24 }}>
            {facts.map(f => { const Ic = Icon[f.icon]; return (
              <Card key={f.label} padding="16px">
                <Ic size={20} stroke="var(--forest-600)" />
                <div style={{ fontFamily:'var(--font-mono)', fontWeight:600, fontSize:16, marginTop:8 }}>{f.value}</div>
                <div style={{ fontSize:11, textTransform:'uppercase', letterSpacing:'0.06em', color:'var(--text-muted)', marginTop:2 }}>{f.label}</div>
              </Card>
            ); })}
          </div>

          <div style={{ marginTop:28 }}>
            <h2 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:21, color:'var(--text-strong)' }}>About this parcel</h2>
            <p style={{ fontSize:16, lineHeight:1.7, color:'var(--text-body)' }}>
              {item.acres} acres of {item.zoning.toLowerCase()} land in {item.location}, with {item.access.toLowerCase()} access and {item.water.toLowerCase()} on site. Surveyed boundaries, clear title, and a recorded easement. Power runs to the property line. Ideal for a cabin, homestead, or long-term hold.
            </p>
            <div style={{ display:'flex', gap:8, marginTop:8, flexWrap:'wrap' }}>
              {item.tags.map(t => <Badge key={t} tone="neutral">{t}</Badge>)}
            </div>
          </div>

          <div style={{ marginTop:28 }}>
            <h2 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:21, color:'var(--text-strong)' }}>Parcel map</h2>
            <div style={{ height:240, borderRadius:'var(--radius-md)', border:'1px solid var(--border-subtle)', overflow:'hidden', position:'relative', background:'var(--forest-100)' }}>
              <div style={{ position:'absolute', inset:0, background:"center/cover url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1000&q=60')", opacity:0.5 }} />
              <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:8, color:'var(--forest-800)' }}>
                <Icon.layers size={28} stroke="var(--forest-700)" />
                <span style={{ fontSize:13, fontWeight:600 }}>Interactive boundary map</span>
              </div>
            </div>
          </div>
        </div>

        <aside style={{ position:'sticky', top:80, alignSelf:'start' }}>
          <Card padding="22px">
            <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between' }}>
              <span style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:32, color:'var(--forest-800)' }}>${item.price.toLocaleString()}</span>
              {item.verified && <Badge tone="success" dot>Title verified</Badge>}
            </div>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:13, color:'var(--text-muted)', marginTop:4 }}>${Math.round(item.price/item.acres).toLocaleString()} / acre</div>
            <div style={{ display:'flex', flexDirection:'column', gap:10, marginTop:20 }}>
              <Button variant="accent" size="lg" fullWidth onClick={onOffer}>Make an offer</Button>
              <Button variant="secondary" size="lg" fullWidth iconLeft={<Icon.heart size={17} fill={saved.includes(item.id)?'var(--clay-600)':'none'} stroke={saved.includes(item.id)?'var(--clay-600)':'currentColor'} />} onClick={()=>toggleSave(item.id)}>
                {saved.includes(item.id) ? 'Saved' : 'Save parcel'}
              </Button>
            </div>
            <div style={{ marginTop:20, paddingTop:18, borderTop:'1px solid var(--border-subtle)', display:'flex', alignItems:'center', gap:12 }}>
              <Avatar name="Dana Reyes" />
              <div style={{ flex:1 }}>
                <div style={{ fontSize:14, fontWeight:600 }}>Dana Reyes</div>
                <div style={{ fontSize:12, color:'var(--text-muted)' }}>Verified seller · 4.9 ★</div>
              </div>
            </div>
            <Button variant="ghost" size="sm" fullWidth style={{ marginTop:12 }}>Contact seller</Button>
          </Card>
          <div style={{ display:'flex', alignItems:'center', gap:8, justifyContent:'center', marginTop:14, fontSize:12, color:'var(--text-muted)' }}>
            <Icon.shield size={15} stroke="var(--forest-600)" /> Funds held in escrow until closing
          </div>
        </aside>
      </div>
    </div>
  );
}

function OfferModal({ item, onClose }) {
  const [amount, setAmount] = React.useState(item ? item.price.toLocaleString() : '');
  const [sent, setSent] = React.useState(false);
  if (!item) return null;
  return (
    <div onClick={onClose} style={{ position:'fixed', inset:0, background:'rgba(22,36,28,0.5)', backdropFilter:'blur(2px)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:50 }}>
      <div onClick={e=>e.stopPropagation()} style={{ width:440, background:'var(--paper)', borderRadius:'var(--radius-lg)', boxShadow:'var(--shadow-lg)', padding:28 }}>
        {!sent ? (
          <>
            <h2 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:24, color:'var(--forest-800)', margin:'0 0 4px' }}>Make an offer</h2>
            <div style={{ fontSize:14, color:'var(--text-muted)', marginBottom:20 }}>{item.title} · {item.location}</div>
            <Input label="Your offer" prefix="$" value={amount} onChange={e=>setAmount(e.target.value)} hint={`List price $${item.price.toLocaleString()}`} />
            <div style={{ marginTop:14 }}><Input label="Message to seller" placeholder="Optional note…" /></div>
            <div style={{ marginTop:16, padding:'12px 14px', background:'var(--stone-50)', borderRadius:'var(--radius-sm)', fontSize:13, color:'var(--text-body)' }}>
              <div style={{ display:'flex', justifyContent:'space-between' }}><span>Your offer</span><span style={{ fontFamily:'var(--font-mono)' }}>${(parseInt((amount||'').replace(/[^0-9]/g,''),10)||0).toLocaleString()}</span></div>
              <div style={{ display:'flex', justifyContent:'space-between', marginTop:6, color:'var(--text-muted)' }}><span>Seller pays Timber Trace fee (5%)</span><span style={{ fontFamily:'var(--font-mono)' }}>included</span></div>
              <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:8, color:'var(--text-muted)', fontSize:12 }}><span style={{display:'inline-flex'}}><Icon.shield size={13} stroke="var(--forest-600)"/></span> Funds held in escrow until the deed transfers.</div>
            </div>
            <div style={{ display:'flex', gap:10, marginTop:22 }}>
              <Button variant="ghost" fullWidth onClick={onClose}>Cancel</Button>
              <Button variant="accent" fullWidth onClick={()=>setSent(true)}>Submit offer</Button>
            </div>
          </>
        ) : (
          <div style={{ textAlign:'center', padding:'12px 0' }}>
            <div style={{ width:56, height:56, borderRadius:'50%', background:'var(--success-bg)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px' }}>
              <Icon.check size={28} stroke="var(--success-fg)" />
            </div>
            <h2 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:24, color:'var(--forest-800)', margin:'0 0 6px' }}>Offer submitted</h2>
            <p style={{ fontSize:15, color:'var(--text-body)', margin:'0 0 20px' }}>We've sent your offer of ${amount} to Dana. You'll hear back within 48 hours.</p>
            <Button variant="primary" fullWidth onClick={onClose}>Done</Button>
          </div>
        )}
      </div>
    </div>
  );
}

function Dashboard({ onList }) {
  const stats = [
    { label:'Active listings', value:'3' },
    { label:'Total views', value:'1,284' },
    { label:'Saved by buyers', value:'47' },
    { label:'Open offers', value:'2' },
  ];
  const rows = DATA.slice(0,3).map((d,i)=>({ ...d, views:[412,338,534][i], offers:[1,0,1][i], status:['Active','Active','Under offer'][i] }));
  return (
    <div style={{ maxWidth:1100, margin:'0 auto', padding:'28px' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:24 }}>
        <div>
          <h1 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:30, color:'var(--forest-800)', margin:0 }}>Seller dashboard</h1>
          <div style={{ fontSize:14, color:'var(--text-muted)', marginTop:2 }}>Welcome back, Dana</div>
        </div>
        <Button variant="accent" iconLeft={<Icon.plus size={18} />} onClick={onList}>List new parcel</Button>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16, marginBottom:28 }}>
        {stats.map(s => (
          <Card key={s.label} padding="18px">
            <div style={{ fontFamily:'var(--font-mono)', fontWeight:600, fontSize:28, color:'var(--forest-800)' }}>{s.value}</div>
            <div style={{ fontSize:12, textTransform:'uppercase', letterSpacing:'0.06em', color:'var(--text-muted)', marginTop:4 }}>{s.label}</div>
          </Card>
        ))}
      </div>
      <Card padding="0">
        <div style={{ padding:'16px 20px', borderBottom:'1px solid var(--border-subtle)', fontWeight:600, fontSize:15 }}>Your listings</div>
        <div style={{ display:'grid', gridTemplateColumns:'2.4fr 1fr 1fr 1fr 0.6fr', padding:'10px 20px', fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.06em', color:'var(--text-muted)', borderBottom:'1px solid var(--border-subtle)' }}>
          <span>Parcel</span><span>Price</span><span>Views</span><span>Status</span><span></span>
        </div>
        {rows.map(r => (
          <div key={r.id} style={{ display:'grid', gridTemplateColumns:'2.4fr 1fr 1fr 1fr 0.6fr', padding:'14px 20px', alignItems:'center', borderBottom:'1px solid var(--border-subtle)' }}>
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
              <div style={{ width:48, height:40, borderRadius:'var(--radius-sm)', background:`center/cover url(${r.image})` }} />
              <div>
                <div style={{ fontSize:14, fontWeight:600 }}>{r.title}</div>
                <div style={{ fontSize:12, color:'var(--text-muted)' }}>{r.location}</div>
              </div>
            </div>
            <span style={{ fontFamily:'var(--font-mono)', fontWeight:600, fontSize:14 }}>${r.price.toLocaleString()}</span>
            <span style={{ display:'flex', alignItems:'center', gap:6, fontSize:14, color:'var(--text-body)' }}><Icon.eye size={15} stroke="var(--stone-500)" />{r.views}</span>
            <span><Badge tone={r.status==='Active'?'success':'warning'} dot>{r.status}</Badge></span>
            <span style={{ textAlign:'right', color:'var(--text-muted)', cursor:'pointer' }}><Icon.chevronRight size={18} /></span>
          </div>
        ))}
      </Card>
    </div>
  );
}

function App() {
  const [view, setView] = React.useState('browse'); // browse | detail | dashboard | sell
  const [current, setCurrent] = React.useState(null);
  const [saved, setSaved] = React.useState([2]);
  const [offerItem, setOfferItem] = React.useState(null);
  const toggleSave = (id) => setSaved(s => s.includes(id) ? s.filter(x=>x!==id) : [...s, id]);
  const open = (d) => { setCurrent(d); setView('detail'); window.scrollTo(0,0); };

  return (
    <div style={{ background:'var(--bg-page)', minHeight:'100vh' }}>
      <AppNav view={view==='detail'?'browse':view} setView={setView} saved={saved} />
      {view==='browse' && <Browse onOpen={open} saved={saved} toggleSave={toggleSave} />}
      {view==='detail' && current && <Detail item={current} onBack={()=>setView('browse')} saved={saved} toggleSave={toggleSave} onOffer={()=>setOfferItem(current)} />}
      {view==='dashboard' && <Dashboard onList={()=>{ setView('sell'); window.scrollTo(0,0); }} />}
      {view==='sell' && <ListYourLand onExit={()=>{ setView('dashboard'); window.scrollTo(0,0); }} />}
      <OfferModal item={offerItem} onClose={()=>setOfferItem(null)} />
    </div>
  );
}
window.TimberApp = App;
