Button — the primary action control; use `accent` (clay) for the single most important CTA on a view, `primary` (forest) for standard confirms, `secondary`/`ghost` for everything else.

```jsx
<Button variant="accent" size="lg">View parcel</Button>
<Button variant="secondary" iconLeft={<icon/>}>Save</Button>
```

Variants: primary (forest), accent (clay CTA), secondary (outline), ghost. Sizes: sm / md / lg. Props: disabled, fullWidth, iconLeft, iconRight.
