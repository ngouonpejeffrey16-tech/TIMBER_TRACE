const React = window.React;
const { Button, Badge, Input, ListingCard, Avatar } = window.TimberTraceDesignSystem_61daa5;
const Icon = window.TTIcon;

const LISTINGS = [
  { image:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=70', price:184000, acres:42, verified:true, title:'Cascade Ridge', location:'Whatcom County, WA', facts:[{label:'Zoning',value:'Rural'},{label:'Access',value:'Road'},{label:'Water',value:'Creek'}] },
  { image:'https://images.unsplash.com/photo-1444044205806-38f3ed106c10?w=800&q=70', price:96500, acres:11, verified:true, title:'Birch Hollow', location:'Lincoln County, OR', facts:[{label:'Zoning',value:'Forest'},{label:'Access',value:'Trail'}] },
  { image:'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=800&q=70', price:312000, acres:78, verified:false, title:'Still Lake Frontage', location:'Itasca County, MN', facts:[{label:'Zoning',value:'Recreational'},{label:'Water',value:'Lakefront'}] },
];

function TopNav() {
  const link = { fontSize:14, fontWeight:500, color:'var(--text-body)', textDecoration:'none', cursor:'pointer' };
  return (
    <header style={{ position:'sticky', top:0, zIndex:20, background:'rgba(250,248,243,0.85)', backdropFilter:'blur(10px)', borderBottom:'1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth:'var(--container-max)', margin:'0 auto', padding:'14px 32px', display:'flex', alignItems:'center', gap:32 }}>
        <img src="../../assets/logo-lockup.svg" height="28" alt="Timber Trace" />
        <nav style={{ display:'flex', gap:24, marginLeft:8 }}>
          <a style={link}>Browse land</a>
          <a style={link}>Sell</a>
          <a style={link}>How it works</a>
          <a style={link}>Financing</a>
        </nav>
        <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:12 }}>
          <Button variant="ghost" size="sm">Log in</Button>
          <Button variant="primary" size="sm">List your land</Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={{ position:'relative', background:'var(--forest-800)', color:'var(--cream)', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, background:"center/cover url('https://images.unsplash.com/photo-1511497584788-876760111969?w=1600&q=70')", opacity:0.28 }} />
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(31,48,38,0.65), rgba(22,36,28,0.92))' }} />
      <div style={{ position:'relative', maxWidth:'var(--container-max)', margin:'0 auto', padding:'88px 32px 96px' }}>
        <div style={{ fontSize:11, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--clay-400)' }}>Land you can trust</div>
        <h1 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:60, lineHeight:1.02, letterSpacing:'-0.01em', margin:'16px 0 0', maxWidth:760 }}>
          Own a piece of the wild.
        </h1>
        <p style={{ fontSize:18, lineHeight:1.6, color:'var(--forest-200)', maxWidth:560, marginTop:18 }}>
          Vetted acreage with transparent title history, surveyor-grade maps, and escrow built in. Find the land that fits your plans.
        </p>
        <div style={{ marginTop:32, background:'var(--paper)', borderRadius:'var(--radius-lg)', boxShadow:'var(--shadow-lg)', padding:10, display:'flex', gap:10, maxWidth:680, alignItems:'center' }}>
          <div style={{ flex:1, display:'flex', alignItems:'center', gap:10, padding:'0 12px', color:'var(--text-muted)' }}>
            <Icon.search size={20} stroke="var(--stone-500)" />
            <input placeholder="County, state, or ZIP" style={{ flex:1, border:'none', outline:'none', fontFamily:'var(--font-sans)', fontSize:15, padding:'12px 0', color:'var(--text-strong)' }} />
          </div>
          <div style={{ width:1, alignSelf:'stretch', background:'var(--border-subtle)' }} />
          <div style={{ display:'flex', alignItems:'center', gap:8, padding:'0 6px 0 12px', color:'var(--text-muted)', fontSize:14 }}>
            <Icon.ruler size={18} stroke="var(--stone-500)" /> Any acreage
          </div>
          <Button variant="accent" size="lg">Search</Button>
        </div>
        <div style={{ display:'flex', gap:28, marginTop:28, fontSize:13, color:'var(--forest-200)' }}>
          <span style={{ display:'flex', alignItems:'center', gap:8 }}><Icon.shield size={16} stroke="var(--clay-400)" /> Title-verified listings</span>
          <span style={{ display:'flex', alignItems:'center', gap:8 }}><Icon.layers size={16} stroke="var(--clay-400)" /> 12,400+ parcels</span>
          <span style={{ display:'flex', alignItems:'center', gap:8 }}><Icon.check size={16} stroke="var(--clay-400)" /> Escrow included</span>
        </div>
      </div>
    </section>
  );
}

function Featured({ onOpen }) {
  return (
    <section style={{ maxWidth:'var(--container-max)', margin:'0 auto', padding:'72px 32px' }}>
      <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:28 }}>
        <div>
          <div style={{ fontSize:11, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--clay-600)' }}>Just listed</div>
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:34, color:'var(--forest-800)', margin:'8px 0 0' }}>Featured parcels</h2>
        </div>
        <a style={{ display:'flex', alignItems:'center', gap:6, fontSize:14, fontWeight:600, color:'var(--forest-700)', cursor:'pointer', textDecoration:'none' }} onClick={onOpen}>
          Browse all land <Icon.arrowRight size={16} />
        </a>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24 }}>
        {LISTINGS.map((l,i) => <ListingCard key={i} {...l} onClick={onOpen} />)}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon:'search', t:'Find land', d:'Filter by acreage, price, zoning, water and road access across thousands of vetted parcels.' },
    { icon:'shield', t:'Verify title', d:'Every listing carries a transparent title history and a surveyor-grade boundary map.' },
    { icon:'check', t:'Close with escrow', d:'Make an offer and close securely — funds held in escrow until the deed transfers.' },
  ];
  return (
    <section style={{ background:'var(--stone-50)', borderTop:'1px solid var(--border-subtle)', borderBottom:'1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth:'var(--container-max)', margin:'0 auto', padding:'72px 32px' }}>
        <h2 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:34, color:'var(--forest-800)', margin:0, textAlign:'center' }}>Land buying, without the guesswork</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:28, marginTop:40 }}>
          {steps.map((s,i) => {
            const Ic = Icon[s.icon];
            return (
              <div key={i} style={{ textAlign:'left' }}>
                <div style={{ width:48, height:48, borderRadius:'var(--radius-md)', background:'var(--forest-100)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:16 }}>
                  <Ic size={24} stroke="var(--forest-700)" />
                </div>
                <div style={{ fontSize:11, fontWeight:600, color:'var(--clay-600)', fontFamily:'var(--font-mono)' }}>0{i+1}</div>
                <h3 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:21, color:'var(--text-strong)', margin:'4px 0 8px' }}>{s.t}</h3>
                <p style={{ fontSize:15, lineHeight:1.6, color:'var(--text-body)', margin:0 }}>{s.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section style={{ maxWidth:'var(--container-max)', margin:'0 auto', padding:'80px 32px' }}>
      <div style={{ borderRadius:'var(--radius-xl)', overflow:'hidden', position:'relative', background:'var(--forest-800)', color:'var(--cream)', padding:'56px 48px' }}>
        <div style={{ position:'absolute', inset:0, background:"right/cover url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=70')", opacity:0.25 }} />
        <div style={{ position:'relative', maxWidth:560 }}>
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:36, lineHeight:1.05, margin:0 }}>Have land to sell?</h2>
          <p style={{ fontSize:17, lineHeight:1.6, color:'var(--forest-200)', marginTop:14 }}>List in minutes. We handle title verification, mapping, and escrow so buyers trust your parcel from the first click.</p>
          <div style={{ display:'flex', gap:12, marginTop:24 }}>
            <Button variant="accent" size="lg">List your land</Button>
            <Button variant="secondary" size="lg" style={{ background:'transparent', color:'var(--cream)', borderColor:'var(--forest-400)' }}>Talk to us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const col = (h, items) => (
    <div>
      <div style={{ fontSize:13, fontWeight:600, color:'var(--cream)', marginBottom:12 }}>{h}</div>
      {items.map(x => <div key={x} style={{ fontSize:13, color:'var(--forest-300)', marginBottom:8, cursor:'pointer' }}>{x}</div>)}
    </div>
  );
  return (
    <footer style={{ background:'var(--forest-900)', color:'var(--cream)' }}>
      <div style={{ maxWidth:'var(--container-max)', margin:'0 auto', padding:'56px 32px 40px', display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:32 }}>
        <div>
          <img src="../../assets/logo-mark.svg" width="40" alt="" />
          <p style={{ fontSize:14, lineHeight:1.6, color:'var(--forest-300)', maxWidth:280, marginTop:14 }}>The trustworthy marketplace for buying and selling land.</p>
        </div>
        {col('Buy', ['Browse land','Saved parcels','Financing','Buyer guide'])}
        {col('Sell', ['List your land','Seller dashboard','Pricing','Seller guide'])}
        {col('Company', ['About','Title & escrow','Contact','Careers'])}
      </div>
      <div style={{ borderTop:'1px solid var(--forest-700)', padding:'18px 32px', maxWidth:'var(--container-max)', margin:'0 auto', fontSize:12, color:'var(--forest-400)' }}>
        © 2026 Timber Trace · Title-verified land marketplace
      </div>
    </footer>
  );
}

function MarketingSite({ onOpenApp }) {
  return (
    <div style={{ background:'var(--bg-page)', minHeight:'100vh' }}>
      <TopNav />
      <Hero />
      <Featured onOpen={onOpenApp} />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}
window.MarketingSite = MarketingSite;
