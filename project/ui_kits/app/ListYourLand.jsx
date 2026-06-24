const React = window.React;
const { Button, Badge, Input, Select, Checkbox, Tag, Card } = window.TimberTraceDesignSystem_61daa5;
const Icon = window.TTIcon;

const TYPES = [
  { id:'land', label:'Raw land', icon:'layers', desc:'Undeveloped acreage' },
  { id:'forest', label:'Forest / timber', icon:'trees', desc:'Wooded parcels' },
  { id:'pasture', label:'Pasture / agricultural', icon:'ruler', desc:'Open & grazing land' },
  { id:'waterfront', label:'Waterfront', icon:'drop', desc:'Lake, river or creek' },
];
const STEPS = ['Type', 'Details', 'Photos & docs', 'Price', 'Review'];
const COMMISSION = 0.05;

function StepRail({ step }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:0, marginBottom:32 }}>
      {STEPS.map((s,i) => (
        <React.Fragment key={s}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{
              width:26, height:26, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:'var(--font-mono)', fontSize:13, fontWeight:600,
              background: i<step ? 'var(--forest-700)' : i===step ? 'var(--clay-500)' : 'var(--stone-100)',
              color: i<=step ? '#fff' : 'var(--text-muted)',
            }}>{i<step ? <Icon.check size={15} stroke="#fff" /> : i+1}</div>
            <span style={{ fontSize:13, fontWeight:600, color: i<=step ? 'var(--text-strong)' : 'var(--text-muted)' }}>{s}</span>
          </div>
          {i<STEPS.length-1 && <div style={{ flex:1, height:1, background:'var(--border-default)', margin:'0 14px' }} />}
        </React.Fragment>
      ))}
    </div>
  );
}

function Dropzone({ label, hint, icon='plus', tall }) {
  const [hover, setHover] = React.useState(false);
  const Ic = Icon[icon];
  return (
    <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{
      border:`1.5px dashed ${hover?'var(--clay-500)':'var(--border-strong)'}`, borderRadius:'var(--radius-md)',
      background: hover?'var(--clay-100)':'var(--stone-50)', cursor:'pointer',
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:6,
      padding: tall?'40px 16px':'22px 16px', textAlign:'center', transition:'all var(--dur-fast)',
    }}>
      <Ic size={22} stroke="var(--forest-600)" />
      <div style={{ fontSize:13, fontWeight:600, color:'var(--text-strong)' }}>{label}</div>
      {hint && <div style={{ fontSize:12, color:'var(--text-muted)' }}>{hint}</div>}
    </div>
  );
}

function ListYourLand({ onExit }) {
  const [step, setStep] = React.useState(0);
  const [type, setType] = React.useState('forest');
  const [price, setPrice] = React.useState('184000');
  const [done, setDone] = React.useState(false);

  const priceNum = parseInt((price||'').replace(/[^0-9]/g,''),10) || 0;
  const fee = Math.round(priceNum * COMMISSION);
  const payout = priceNum - fee;
  const fmt = (n) => '$' + n.toLocaleString();

  const next = () => setStep(s => Math.min(s+1, STEPS.length-1));
  const back = () => step===0 ? onExit() : setStep(s => s-1);

  if (done) {
    return (
      <div style={{ maxWidth:560, margin:'0 auto', padding:'80px 28px', textAlign:'center' }}>
        <div style={{ width:64, height:64, borderRadius:'50%', background:'var(--success-bg)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px' }}>
          <Icon.check size={32} stroke="var(--success-fg)" />
        </div>
        <h1 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:32, color:'var(--forest-800)', margin:'0 0 10px' }}>Your parcel is live</h1>
        <p style={{ fontSize:16, lineHeight:1.6, color:'var(--text-body)', margin:'0 auto 28px', maxWidth:420 }}>
          We're verifying your title now — usually within 48 hours. When it sells, Timber Trace takes a flat 5% and you receive <b>{fmt(payout)}</b>.
        </p>
        <Button variant="primary" size="lg" onClick={onExit}>Go to dashboard</Button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth:880, margin:'0 auto', padding:'28px' }}>
      <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:8 }}>
        <h1 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:30, color:'var(--forest-800)', margin:0 }}>List your land</h1>
        <span style={{ fontSize:13, color:'var(--text-muted)' }}>Step {step+1} of {STEPS.length}</span>
      </div>
      <p style={{ fontSize:14, color:'var(--text-muted)', margin:'0 0 24px' }}>Free to list. We charge a flat <b style={{color:'var(--clay-600)'}}>5% commission</b> only when your land sells.</p>
      <StepRail step={step} />

      <Card padding="28px">
        {step===0 && (
          <div>
            <h2 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:21, margin:'0 0 4px' }}>What are you selling?</h2>
            <p style={{ fontSize:14, color:'var(--text-muted)', margin:'0 0 20px' }}>Pick the category that fits best.</p>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
              {TYPES.map(t => { const Ic = Icon[t.icon]; const on = type===t.id; return (
                <div key={t.id} onClick={()=>setType(t.id)} style={{
                  border:`1.5px solid ${on?'var(--forest-700)':'var(--border-default)'}`, background:on?'var(--forest-100)':'var(--paper)',
                  borderRadius:'var(--radius-md)', padding:'18px', cursor:'pointer', display:'flex', gap:14, alignItems:'center', transition:'all var(--dur-fast)',
                }}>
                  <div style={{ width:44, height:44, borderRadius:'var(--radius-sm)', background:on?'var(--forest-200)':'var(--stone-100)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <Ic size={22} stroke="var(--forest-700)" />
                  </div>
                  <div>
                    <div style={{ fontSize:15, fontWeight:600 }}>{t.label}</div>
                    <div style={{ fontSize:13, color:'var(--text-muted)' }}>{t.desc}</div>
                  </div>
                </div>
              ); })}
            </div>
          </div>
        )}

        {step===1 && (
          <div>
            <h2 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:21, margin:'0 0 20px' }}>Parcel details</h2>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
              <Input label="Listing title" placeholder="e.g. Cascade Ridge" />
              <Input label="Location" prefix={<Icon.pin size={15} stroke="var(--stone-500)"/>} placeholder="County, State" />
              <Input label="Acreage" suffix="acres" placeholder="42" />
              <Select label="Zoning" options={['Rural','Forest','Recreational','Agricultural','Residential']} />
              <Input label="Road frontage" suffix="ft" placeholder="320" />
              <Select label="Water" options={['None','Well','Creek','River','Lakefront','Spring']} />
            </div>
            <div style={{ marginTop:18 }}>
              <div style={{ fontSize:13, fontWeight:600, marginBottom:8 }}>Draw your boundary</div>
              <div style={{ height:200, borderRadius:'var(--radius-md)', border:'1px solid var(--border-subtle)', position:'relative', overflow:'hidden', background:'var(--forest-100)' }}>
                <div style={{ position:'absolute', inset:0, background:"center/cover url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1000&q=60')", opacity:0.5 }} />
                <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:8 }}>
                  <Button variant="secondary" iconLeft={<Icon.pin size={16}/>}>Draw boundary on map</Button>
                  <span style={{ fontSize:12, color:'var(--forest-800)', fontWeight:500 }}>Tap to drop corner points</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {step===2 && (
          <div>
            <h2 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:21, margin:'0 0 4px' }}>Photos &amp; documents</h2>
            <p style={{ fontSize:14, color:'var(--text-muted)', margin:'0 0 18px' }}>Listings with 5+ photos sell faster. Title docs speed up verification.</p>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:12, marginBottom:16 }}>
              <Dropzone label="Add cover photo" hint="JPG or PNG" icon="plus" tall />
              <Dropzone label="Add photo" icon="plus" tall />
              <Dropzone label="Add photo" icon="plus" tall />
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
              <Dropzone label="Title / deed" hint="PDF — kept private" icon="shield" />
              <Dropzone label="Survey / plat map" hint="PDF or image" icon="layers" />
            </div>
          </div>
        )}

        {step===3 && (
          <div>
            <h2 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:21, margin:'0 0 20px' }}>Price &amp; terms</h2>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, alignItems:'start' }}>
              <div>
                <Input label="Asking price" prefix="$" value={price} onChange={e=>setPrice(e.target.value)} />
                <div style={{ marginTop:16, display:'flex', flexDirection:'column', gap:10 }}>
                  <Checkbox label="Owner financing available" />
                  <Checkbox label="Open to offers" />
                  <Checkbox label="Include escrow & title service" checked readOnly />
                </div>
              </div>
              <div style={{ background:'var(--forest-800)', color:'var(--cream)', borderRadius:'var(--radius-md)', padding:'20px' }}>
                <div style={{ fontSize:12, textTransform:'uppercase', letterSpacing:'0.08em', color:'var(--clay-400)', fontWeight:600 }}>Your payout</div>
                <div style={{ display:'flex', justifyContent:'space-between', fontSize:14, marginTop:14, color:'var(--forest-200)' }}>
                  <span>Sale price</span><span style={{ fontFamily:'var(--font-mono)' }}>{fmt(priceNum)}</span>
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', fontSize:14, marginTop:8, color:'var(--forest-200)' }}>
                  <span>Timber Trace fee (5%)</span><span style={{ fontFamily:'var(--font-mono)' }}>−{fmt(fee)}</span>
                </div>
                <div style={{ height:1, background:'var(--forest-600)', margin:'14px 0' }} />
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                  <span style={{ fontSize:14, fontWeight:600 }}>You receive</span>
                  <span style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:26, color:'#fff' }}>{fmt(payout)}</span>
                </div>
                <div style={{ fontSize:12, color:'var(--forest-300)', marginTop:12, display:'flex', gap:6 }}>
                  <Icon.shield size={14} stroke="var(--clay-400)" /> No fee until your land sells.
                </div>
              </div>
            </div>
          </div>
        )}

        {step===4 && (
          <div>
            <h2 style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:21, margin:'0 0 18px' }}>Review &amp; publish</h2>
            <div style={{ display:'flex', gap:16, padding:'16px', background:'var(--stone-50)', borderRadius:'var(--radius-md)', marginBottom:16 }}>
              <div style={{ width:96, height:72, borderRadius:'var(--radius-sm)', background:"center/cover url('https://images.unsplash.com/photo-1444044205806-38f3ed106c10?w=400&q=60')" }} />
              <div style={{ flex:1 }}>
                <div style={{ display:'flex', gap:8, alignItems:'center' }}>
                  <span style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:20, color:'var(--forest-800)' }}>{fmt(priceNum)}</span>
                  <Badge tone="forest">{TYPES.find(t=>t.id===type).label}</Badge>
                </div>
                <div style={{ fontSize:13, color:'var(--text-muted)', marginTop:2 }}>Cascade Ridge · Whatcom County, WA · 42 acres</div>
                <div style={{ fontSize:13, color:'var(--text-body)', marginTop:6 }}>You'll receive <b>{fmt(payout)}</b> after the 5% fee.</div>
              </div>
            </div>
            <Checkbox label="I confirm I own this land and have the right to sell it." checked readOnly />
          </div>
        )}

        <div style={{ display:'flex', justifyContent:'space-between', marginTop:28, paddingTop:20, borderTop:'1px solid var(--border-subtle)' }}>
          <Button variant="ghost" onClick={back}>{step===0 ? 'Cancel' : 'Back'}</Button>
          {step<STEPS.length-1
            ? <Button variant="primary" iconRight={<Icon.arrowRight size={17}/>} onClick={next}>Continue</Button>
            : <Button variant="accent" onClick={()=>setDone(true)}>Publish listing</Button>}
        </div>
      </Card>
    </div>
  );
}
window.ListYourLand = ListYourLand;
