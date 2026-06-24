// ─────────────────────────────────────────────────────────────────────────────
// DEMO / SAMPLE LISTINGS
// These are realistic-looking sample properties so the marketplace looks full
// when you show it to sellers, buyers, or investors. They are NOT real listings
// for sale. Real listings should come from sellers who sign up through the
// "List your land" page and agree to your 5% commission.
//
// To add or edit a property, copy one block below and change the values.
// Photos use free Unsplash landscape images for now — swap in real photos later.
// ─────────────────────────────────────────────────────────────────────────────

export const LISTINGS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=70',
    price: 184000, acres: 42, verified: true,
    title: 'Cascade Ridge', location: 'Whatcom County, WA',
    zoning: 'Rural', access: 'Road', water: 'Creek',
    tags: ['Wooded', 'Road access'],
    facts: [{ label: 'Zoning', value: 'Rural' }, { label: 'Access', value: 'Road' }, { label: 'Water', value: 'Creek' }],
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1444044205806-38f3ed106c10?w=900&q=70',
    price: 96500, acres: 11, verified: true,
    title: 'Birch Hollow', location: 'Lincoln County, OR',
    zoning: 'Forest', access: 'Trail', water: 'Spring',
    tags: ['Wooded', 'Off-grid'],
    facts: [{ label: 'Zoning', value: 'Forest' }, { label: 'Access', value: 'Trail' }, { label: 'Water', value: 'Spring' }],
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=900&q=70',
    price: 312000, acres: 78, verified: true,
    title: 'Still Lake Frontage', location: 'Itasca County, MN',
    zoning: 'Recreational', access: 'Road', water: 'Lakefront',
    tags: ['Waterfront', 'Road access'],
    facts: [{ label: 'Zoning', value: 'Recreational' }, { label: 'Access', value: 'Road' }, { label: 'Water', value: 'Lakefront' }],
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=900&q=70',
    price: 58000, acres: 6, verified: true,
    title: 'Sage Flats', location: 'Fremont County, ID',
    zoning: 'Agricultural', access: 'Road', water: 'Well',
    tags: ['Pasture', 'Road access'],
    facts: [{ label: 'Zoning', value: 'Agricultural' }, { label: 'Access', value: 'Road' }, { label: 'Water', value: 'Well' }],
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=900&q=70',
    price: 240000, acres: 55, verified: true,
    title: 'Elk Meadow', location: 'Gallatin County, MT',
    zoning: 'Rural', access: 'Road', water: 'River',
    tags: ['Waterfront', 'Wooded'],
    facts: [{ label: 'Zoning', value: 'Rural' }, { label: 'Access', value: 'Road' }, { label: 'Water', value: 'River' }],
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=900&q=70',
    price: 74500, acres: 9, verified: false,
    title: 'Quartz Canyon', location: 'Coconino County, AZ',
    zoning: 'Recreational', access: 'Trail', water: 'None',
    tags: ['Off-grid'],
    facts: [{ label: 'Zoning', value: 'Recreational' }, { label: 'Access', value: 'Trail' }, { label: 'Water', value: 'None' }],
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&q=70',
    price: 425000, acres: 120, verified: true,
    title: 'Timberwolf Tract', location: 'Flathead County, MT',
    zoning: 'Forest', access: 'Road', water: 'River',
    tags: ['Wooded', 'Waterfront', 'Road access'],
    facts: [{ label: 'Zoning', value: 'Forest' }, { label: 'Access', value: 'Road' }, { label: 'Water', value: 'River' }],
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=900&q=70',
    price: 138000, acres: 24, verified: true,
    title: 'Cedar Bend', location: 'Sevier County, TN',
    zoning: 'Rural', access: 'Road', water: 'Creek',
    tags: ['Wooded', 'Road access'],
    facts: [{ label: 'Zoning', value: 'Rural' }, { label: 'Access', value: 'Road' }, { label: 'Water', value: 'Creek' }],
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=900&q=70',
    price: 690000, acres: 210, verified: true,
    title: 'Riverstone Ranch', location: 'Park County, CO',
    zoning: 'Agricultural', access: 'Road', water: 'River',
    tags: ['Waterfront', 'Pasture', 'Road access'],
    facts: [{ label: 'Zoning', value: 'Agricultural' }, { label: 'Access', value: 'Road' }, { label: 'Water', value: 'River' }],
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=70',
    price: 52000, acres: 5, verified: false,
    title: 'Maple Knoll', location: 'Vilas County, WI',
    zoning: 'Recreational', access: 'Trail', water: 'Pond',
    tags: ['Wooded', 'Off-grid'],
    facts: [{ label: 'Zoning', value: 'Recreational' }, { label: 'Access', value: 'Trail' }, { label: 'Water', value: 'Pond' }],
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=900&q=70',
    price: 168000, acres: 35, verified: true,
    title: 'Aspen Springs', location: 'Summit County, UT',
    zoning: 'Rural', access: 'Road', water: 'Spring',
    tags: ['Wooded', 'Road access'],
    facts: [{ label: 'Zoning', value: 'Rural' }, { label: 'Access', value: 'Road' }, { label: 'Water', value: 'Spring' }],
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1444044205806-38f3ed106c10?w=900&q=70',
    price: 305000, acres: 64, verified: true,
    title: 'Willow Creek Bottoms', location: 'Polk County, OR',
    zoning: 'Agricultural', access: 'Road', water: 'Creek',
    tags: ['Pasture', 'Waterfront', 'Road access'],
    facts: [{ label: 'Zoning', value: 'Agricultural' }, { label: 'Access', value: 'Road' }, { label: 'Water', value: 'Creek' }],
  },
];

export const FACETS = ['Wooded', 'Waterfront', 'Road access', 'Off-grid', 'Pasture'];
