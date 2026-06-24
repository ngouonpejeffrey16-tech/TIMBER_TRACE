ListingCard — the core marketplace unit. Compose in grids on browse pages. Use `verified` for title-verified trust signal and `facts` for parcel stats.

```jsx
<ListingCard
  image="/parcel.jpg" price={184000} acres={42} verified
  location="Whatcom County, WA" title="Cascade Ridge"
  facts={[{label:'Zoning',value:'Rural'},{label:'Access',value:'Road'}]}
/>
```
