/* @ds-bundle: {"format":3,"namespace":"TimberTraceDesignSystem_61daa5","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"ListingCard","sourcePath":"components/marketplace/ListingCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"c99651b92d3a","components/core/Button.jsx":"2061b1d210e0","components/core/Card.jsx":"8404e9ba323f","components/feedback/Badge.jsx":"48d51c29da02","components/feedback/Tag.jsx":"43cbd38835d4","components/forms/Checkbox.jsx":"0b544ab2e604","components/forms/Input.jsx":"bf9a99145aeb","components/forms/Select.jsx":"d0e6e29c5971","components/marketplace/ListingCard.jsx":"f6030f019be4","ui_kits/_shared/icons.jsx":"79def99fd77a","ui_kits/app/App.jsx":"27baf276c3a4","ui_kits/app/ListYourLand.jsx":"ede24449d110","ui_kits/marketing/Marketing.jsx":"01d0ea1c0d23"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TimberTraceDesignSystem_61daa5 = window.TimberTraceDesignSystem_61daa5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
const palette = ['#3a5a44', '#c98a5e', '#2c5a82', '#9c5f37', '#4a7155'];
function hashIdx(s) {
  let h = 0;
  for (let i = 0; i < (s || '').length; i++) h = h * 31 + s.charCodeAt(i) >>> 0;
  return h % palette.length;
}
const sizeMap = {
  sm: 28,
  md: 36,
  lg: 48
};

/** Circular user/seller avatar. Shows image, else initials on a deterministic brand color. */
function Avatar({
  name = '',
  src = null,
  size = 'md',
  style = {}
}) {
  const px = sizeMap[size] || sizeMap.md;
  const initials = (name || '').split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: px,
      height: px,
      borderRadius: 'var(--radius-pill)',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: src ? `center/cover url(${src})` : palette[hashIdx(name)],
      color: 'var(--cream)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: px * 0.38,
      border: '2px solid var(--paper)',
      boxShadow: 'var(--shadow-xs)',
      ...style
    }
  }, !src && initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '7px 12px',
    fontSize: 13
  },
  md: {
    padding: '10px 18px',
    fontSize: 14
  },
  lg: {
    padding: '13px 24px',
    fontSize: 15
  }
};
const variants = {
  primary: {
    background: 'var(--primary)',
    color: 'var(--text-inverse)',
    border: '1px solid var(--primary)',
    '--hover-bg': 'var(--primary-hover)',
    '--press-bg': 'var(--primary-press)'
  },
  accent: {
    background: 'var(--accent)',
    color: 'var(--text-on-accent)',
    border: '1px solid var(--accent)',
    '--hover-bg': 'var(--accent-hover)',
    '--press-bg': 'var(--accent-press)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-strong)',
    border: '1px solid var(--border-default)',
    '--hover-bg': 'var(--stone-50)',
    '--press-bg': 'var(--stone-100)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--stone-100)',
    '--press-bg': 'var(--stone-200)'
  }
};

/**
 * Timber Trace primary action control.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;
  const bg = disabled ? undefined : press ? v['--press-bg'] : hover ? v['--hover-bg'] : v.background;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      lineHeight: 1,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
      transform: press && !disabled ? 'translateY(0.5px)' : 'none',
      opacity: disabled ? 0.5 : 1,
      width: fullWidth ? '100%' : 'auto',
      ...v,
      ...s,
      background: bg,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container with optional hover lift. Composes the brand card treatment:
 * paper surface, subtle warm border, soft shadow, 6px radius.
 */
function Card({
  children,
  interactive = false,
  padding = 'var(--space-5)',
  style = {},
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : 'default',
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    bg: 'var(--stone-100)',
    fg: 'var(--stone-700)'
  },
  forest: {
    bg: 'var(--forest-100)',
    fg: 'var(--forest-700)'
  },
  clay: {
    bg: 'var(--clay-100)',
    fg: 'var(--clay-700)'
  },
  success: {
    bg: 'var(--success-bg)',
    fg: 'var(--success-fg)'
  },
  warning: {
    bg: 'var(--warning-bg)',
    fg: 'var(--warning-fg)'
  },
  danger: {
    bg: 'var(--danger-bg)',
    fg: 'var(--danger-fg)'
  },
  info: {
    bg: 'var(--info-bg)',
    fg: 'var(--info-fg)'
  }
};

/** Compact status / metadata label. Pill by default; `dot` adds a leading indicator. */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  solid = false,
  style = {}
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: '0.01em',
      padding: '5px 10px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? t.fg : t.bg,
      color: solid ? 'var(--paper)' : t.fg,
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: solid ? 'var(--paper)' : t.fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
/** Filterable chip / tag. `active` for selected state, `onRemove` renders a × control. */
function Tag({
  children,
  active = false,
  onClick,
  onRemove,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1,
      padding: '7px 12px',
      borderRadius: 'var(--radius-pill)',
      cursor: onClick ? 'pointer' : 'default',
      background: active ? 'var(--forest-800)' : hover && onClick ? 'var(--stone-100)' : 'var(--surface-card)',
      color: active ? 'var(--text-inverse)' : 'var(--text-body)',
      border: `1px solid ${active ? 'var(--forest-800)' : 'var(--border-default)'}`,
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      marginLeft: 2,
      opacity: 0.6,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox with label. Controlled via `checked` / `onChange`. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style = {}
}) {
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flexShrink: 0,
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${checked ? 'var(--forest-800)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--forest-800)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2l2.2 2.3L9.5 3.5",
    stroke: "#faf8f3",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", {
    id: fid,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled text field with optional prefix/suffix adornment and error state. */
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  value,
  onChange,
  placeholder,
  type = 'text',
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  const borderColor = error ? 'var(--danger-fg)' : focus ? 'var(--accent)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: disabled ? 'var(--stone-50)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      padding: '0 12px',
      boxShadow: focus ? 'var(--focus-shadow)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14,
      fontFamily: 'var(--font-sans)'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-strong)',
      padding: '10px 0',
      minWidth: 0
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 14,
      fontFamily: 'var(--font-sans)'
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontFamily: 'var(--font-sans)',
      color: error ? 'var(--danger-fg)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Styled native select with brand chrome. Options: [{value,label}] or strings. */
function Select({
  label,
  value,
  onChange,
  options = [],
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      border: `1px solid ${focus ? 'var(--accent)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      background: disabled ? 'var(--stone-50)' : 'var(--surface-card)',
      boxShadow: focus ? 'var(--focus-shadow)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-strong)',
      padding: '10px 36px 10px 12px',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 11
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/marketplace/ListingCard.jsx
try { (() => {
/**
 * The signature Timber Trace listing card. Image with overlaid acreage badge +
 * save control, then price, location, and parcel facts.
 */
function ListingCard({
  image,
  price,
  acres,
  location,
  title,
  status = 'For sale',
  verified = false,
  facts = [],
  saved = false,
  onSave,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 180,
      background: `var(--stone-200) center/cover url(${image})`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(22,36,28,0.35) 0%, rgba(22,36,28,0) 40%)'
    }
  }), acres != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "forest",
    solid: true
  }, acres, " acres")), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onSave && onSave(e);
    },
    "aria-label": "Save listing",
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: 'rgba(250,248,243,0.92)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: saved ? 'var(--clay-600)' : 'none',
    stroke: saved ? 'var(--clay-600)' : 'var(--stone-700)',
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7.5-4.6-10-9.2C.5 8.5 2 4.5 6 4.5c2.3 0 3.6 1.4 6 4 2.4-2.6 3.7-4 6-4 4 0 5.5 4 4 7.3C19.5 16.4 12 21 12 21z",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--forest-800)'
    }
  }, typeof price === 'number' ? `$${price.toLocaleString()}` : price), verified && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "success",
    dot: true
  }, "Title verified")), title && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.5"
  })), location), facts.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      paddingTop: 12,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      gap: 18
    }
  }, facts.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, f.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      marginTop: 2
    }
  }, f.label))))));
}
Object.assign(__ds_scope, { ListingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketplace/ListingCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/_shared/icons.jsx
try { (() => {
// Lightweight Lucide-style stroke icons (1.75px, round caps) for Timber Trace UI kits.
// Substitution note: these mirror the Lucide icon set (https://lucide.dev) — the brand's
// chosen icon style — drawn inline so kits render offline without a CDN dependency.
const React = window.React;
function I({
  children,
  size = 20,
  stroke = 'currentColor',
  sw = 1.75,
  fill = 'none',
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: stroke,
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, children);
}
const Icon = {
  search: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  pin: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  heart: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 5 4.5 4.5 0 0 0 2 8.5c0 2.2 1.5 4 3 5.5l7 7Z"
  })),
  menu: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16M4 12h16M4 18h16"
  })),
  chevronDown: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })),
  chevronRight: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "m9 6 6 6-6 6"
  })),
  check: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  shield: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  filter: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 5h18l-7 8v6l-4-2v-4Z"
  })),
  grid: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7",
    rx: "1"
  })),
  ruler: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 9 9 3l12 12-6 6Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m7 7 2 2M11 5l2 2M9 13l2 2M13 11l2 2"
  })),
  trees: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 16v6M13 19v3M16 8h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 13a3 3 0 0 0 1-5.8V7a3 3 0 0 0-6 0v.2A3 3 0 0 0 15 13Z"
  })),
  drop: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5S12.5 4 12 2C11.5 4 9 7 7 9.5S5 13 5 15a7 7 0 0 0 7 7Z"
  })),
  road: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M4 19 8 5M20 19 16 5M12 6v2M12 11v2M12 16v2"
  })),
  user: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21a8 8 0 0 1 16 0"
  })),
  bell: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7 21a2 2 0 0 1-3.4 0"
  })),
  plus: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })),
  arrowRight: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  star: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.1l1-5.8L3.5 9.2l5.9-.9Z"
  })),
  eye: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })),
  layers: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "m12 2 9 5-9 5-9-5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 12 9 5 9-5M3 17l9 5 9-5"
  }))
};
window.TTIcon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/_shared/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/App.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = window.React;
const {
  Button,
  Badge,
  Input,
  Select,
  Checkbox,
  Tag,
  Avatar,
  ListingCard,
  Card
} = window.TimberTraceDesignSystem_61daa5;
const Icon = window.TTIcon;
const DATA = [{
  id: 1,
  image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=70',
  price: 184000,
  acres: 42,
  verified: true,
  title: 'Cascade Ridge',
  location: 'Whatcom County, WA',
  zoning: 'Rural',
  access: 'Road',
  water: 'Creek',
  tags: ['Wooded', 'Road access']
}, {
  id: 2,
  image: 'https://images.unsplash.com/photo-1444044205806-38f3ed106c10?w=900&q=70',
  price: 96500,
  acres: 11,
  verified: true,
  title: 'Birch Hollow',
  location: 'Lincoln County, OR',
  zoning: 'Forest',
  access: 'Trail',
  water: 'Spring',
  tags: ['Wooded', 'Off-grid']
}, {
  id: 3,
  image: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=900&q=70',
  price: 312000,
  acres: 78,
  verified: false,
  title: 'Still Lake Frontage',
  location: 'Itasca County, MN',
  zoning: 'Recreational',
  access: 'Road',
  water: 'Lakefront',
  tags: ['Waterfront', 'Road access']
}, {
  id: 4,
  image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=900&q=70',
  price: 58000,
  acres: 6,
  verified: true,
  title: 'Sage Flats',
  location: 'Fremont County, ID',
  zoning: 'Agricultural',
  access: 'Road',
  water: 'Well',
  tags: ['Pasture', 'Road access']
}, {
  id: 5,
  image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=900&q=70',
  price: 240000,
  acres: 55,
  verified: true,
  title: 'Elk Meadow',
  location: 'Gallatin County, MT',
  zoning: 'Rural',
  access: 'Road',
  water: 'River',
  tags: ['Waterfront', 'Wooded']
}, {
  id: 6,
  image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=900&q=70',
  price: 74500,
  acres: 9,
  verified: false,
  title: 'Quartz Canyon',
  location: 'Coconino County, AZ',
  zoning: 'Recreational',
  access: 'Trail',
  water: 'None',
  tags: ['Off-grid']
}];
const FACETS = ['Wooded', 'Waterfront', 'Road access', 'Off-grid', 'Pasture'];
function AppNav({
  view,
  setView,
  saved
}) {
  const tab = (id, label) => /*#__PURE__*/React.createElement("span", {
    onClick: () => setView(id),
    style: {
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      padding: '6px 0',
      color: view === id ? 'var(--forest-800)' : 'var(--text-muted)',
      borderBottom: view === id ? '2px solid var(--clay-500)' : '2px solid transparent'
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'var(--paper)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '12px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup.svg",
    height: "26",
    alt: "Timber Trace",
    style: {
      cursor: 'pointer'
    },
    onClick: () => setView('browse')
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 22,
      marginLeft: 8
    }
  }, tab('browse', 'Browse'), tab('dashboard', 'Seller dashboard')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon.heart, {
    size: 18,
    stroke: "var(--stone-500)"
  }), " ", saved.length), /*#__PURE__*/React.createElement(Icon.bell, {
    size: 18,
    stroke: "var(--stone-500)"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Dana Reyes",
    size: "sm"
  }))));
}
function Browse({
  onOpen,
  saved,
  toggleSave
}) {
  const [active, setActive] = React.useState([]);
  const [sort, setSort] = React.useState('Newest');
  const toggle = f => setActive(a => a.includes(f) ? a.filter(x => x !== f) : [...a, f]);
  let list = DATA.filter(d => active.length === 0 || active.every(f => d.tags.includes(f)));
  if (sort === 'Price: low to high') list = [...list].sort((a, b) => a.price - b.price);
  if (sort === 'Acreage') list = [...list].sort((a, b) => b.acres - a.acres);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '28px',
      display: 'grid',
      gridTemplateColumns: '248px 1fr',
      gap: 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 80,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "18px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      marginBottom: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon.filter, {
    size: 16,
    stroke: "var(--forest-700)"
  }), " Filters"), /*#__PURE__*/React.createElement(Input, {
    label: "Location",
    prefix: /*#__PURE__*/React.createElement(Icon.search, {
      size: 16,
      stroke: "var(--stone-500)"
    }),
    placeholder: "County or ZIP",
    style: {
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Min $",
    prefix: "$",
    placeholder: "0",
    style: {
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Max $",
    prefix: "$",
    placeholder: "500k",
    style: {
      minWidth: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 10
    }
  }, "Features"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, FACETS.map(f => /*#__PURE__*/React.createElement(Checkbox, {
    key: f,
    label: f,
    checked: active.includes(f),
    onChange: () => toggle(f)
  }))))), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 28,
      color: 'var(--forest-800)',
      margin: 0
    }
  }, "Land for sale"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, list.length, " parcels")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: sort,
    onChange: e => setSort(e.target.value),
    options: ['Newest', 'Price: low to high', 'Acreage']
  }))), active.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 16,
      flexWrap: 'wrap'
    }
  }, active.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    onRemove: () => toggle(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, list.map(d => /*#__PURE__*/React.createElement(ListingCard, _extends({
    key: d.id
  }, d, {
    saved: saved.includes(d.id),
    onSave: () => toggleSave(d.id),
    onClick: () => onOpen(d),
    facts: [{
      label: 'Zoning',
      value: d.zoning
    }, {
      label: 'Access',
      value: d.access
    }, {
      label: 'Water',
      value: d.water
    }]
  }))))));
}
function Detail({
  item,
  onBack,
  saved,
  toggleSave,
  onOffer
}) {
  const facts = [{
    icon: 'ruler',
    label: 'Acreage',
    value: `${item.acres} acres`
  }, {
    icon: 'grid',
    label: 'Zoning',
    value: item.zoning
  }, {
    icon: 'road',
    label: 'Access',
    value: item.access
  }, {
    icon: 'drop',
    label: 'Water',
    value: item.water
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '20px 28px 56px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '8px 0',
      transform: 'scaleX(-1)'
    }
  }, /*#__PURE__*/React.createElement(Icon.arrowRight, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      transform: 'scaleX(-1)'
    }
  }, "Back to results")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 32,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      height: 380,
      background: `var(--stone-200) center/cover url(${item.image})`,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "forest",
    solid: true
  }, item.acres, " acres"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 10,
      marginTop: 10
    }
  }, [item.image, 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=60', 'https://images.unsplash.com/photo-1511497584788-876760111969?w=400&q=60', 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=400&q=60'].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 74,
      borderRadius: 'var(--radius-sm)',
      background: `center/cover url(${s})`,
      opacity: i === 0 ? 1 : 0.85,
      cursor: 'pointer'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 34,
      color: 'var(--forest-800)',
      margin: 0
    }
  }, item.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--text-muted)',
      fontSize: 15,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Icon.pin, {
    size: 17,
    stroke: "var(--stone-500)"
  }), " ", item.location)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14,
      marginTop: 24
    }
  }, facts.map(f => {
    const Ic = Icon[f.icon];
    return /*#__PURE__*/React.createElement(Card, {
      key: f.label,
      padding: "16px"
    }, /*#__PURE__*/React.createElement(Ic, {
      size: 20,
      stroke: "var(--forest-600)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 600,
        fontSize: 16,
        marginTop: 8
      }
    }, f.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, f.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 21,
      color: 'var(--text-strong)'
    }
  }, "About this parcel"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, item.acres, " acres of ", item.zoning.toLowerCase(), " land in ", item.location, ", with ", item.access.toLowerCase(), " access and ", item.water.toLowerCase(), " on site. Surveyed boundaries, clear title, and a recorded easement. Power runs to the property line. Ideal for a cabin, homestead, or long-term hold."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 8,
      flexWrap: 'wrap'
    }
  }, item.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "neutral"
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 21,
      color: 'var(--text-strong)'
    }
  }, "Parcel map"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 240,
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      overflow: 'hidden',
      position: 'relative',
      background: 'var(--forest-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: "center/cover url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1000&q=60')",
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 8,
      color: 'var(--forest-800)'
    }
  }, /*#__PURE__*/React.createElement(Icon.layers, {
    size: 28,
    stroke: "var(--forest-700)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Interactive boundary map"))))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 80,
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "22px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 32,
      color: 'var(--forest-800)'
    }
  }, "$", item.price.toLocaleString()), item.verified && /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Title verified")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "$", Math.round(item.price / item.acres).toLocaleString(), " / acre"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    onClick: onOffer
  }, "Make an offer"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon.heart, {
      size: 17,
      fill: saved.includes(item.id) ? 'var(--clay-600)' : 'none',
      stroke: saved.includes(item.id) ? 'var(--clay-600)' : 'currentColor'
    }),
    onClick: () => toggleSave(item.id)
  }, saved.includes(item.id) ? 'Saved' : 'Save parcel')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      paddingTop: 18,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Dana Reyes"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "Dana Reyes"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Verified seller \xB7 4.9 \u2605"))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    fullWidth: true,
    style: {
      marginTop: 12
    }
  }, "Contact seller")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      justifyContent: 'center',
      marginTop: 14,
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon.shield, {
    size: 15,
    stroke: "var(--forest-600)"
  }), " Funds held in escrow until closing"))));
}
function OfferModal({
  item,
  onClose
}) {
  const [amount, setAmount] = React.useState(item ? item.price.toLocaleString() : '');
  const [sent, setSent] = React.useState(false);
  if (!item) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(22,36,28,0.5)',
      backdropFilter: 'blur(2px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 440,
      background: 'var(--paper)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 28
    }
  }, !sent ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--forest-800)',
      margin: '0 0 4px'
    }
  }, "Make an offer"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginBottom: 20
    }
  }, item.title, " \xB7 ", item.location), /*#__PURE__*/React.createElement(Input, {
    label: "Your offer",
    prefix: "$",
    value: amount,
    onChange: e => setAmount(e.target.value),
    hint: `List price $${item.price.toLocaleString()}`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Message to seller",
    placeholder: "Optional note\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: '12px 14px',
      background: 'var(--stone-50)',
      borderRadius: 'var(--radius-sm)',
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Your offer"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "$", (parseInt((amount || '').replace(/[^0-9]/g, ''), 10) || 0).toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 6,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Seller pays Timber Trace fee (5%)"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "included")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 8,
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon.shield, {
    size: 13,
    stroke: "var(--forest-600)"
  })), " Funds held in escrow until the deed transfers.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    fullWidth: true,
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Submit offer"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '12px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--success-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px'
    }
  }, /*#__PURE__*/React.createElement(Icon.check, {
    size: 28,
    stroke: "var(--success-fg)"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24,
      color: 'var(--forest-800)',
      margin: '0 0 6px'
    }
  }, "Offer submitted"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-body)',
      margin: '0 0 20px'
    }
  }, "We've sent your offer of $", amount, " to Dana. You'll hear back within 48 hours."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: onClose
  }, "Done"))));
}
function Dashboard({
  onList
}) {
  const stats = [{
    label: 'Active listings',
    value: '3'
  }, {
    label: 'Total views',
    value: '1,284'
  }, {
    label: 'Saved by buyers',
    value: '47'
  }, {
    label: 'Open offers',
    value: '2'
  }];
  const rows = DATA.slice(0, 3).map((d, i) => ({
    ...d,
    views: [412, 338, 534][i],
    offers: [1, 0, 1][i],
    status: ['Active', 'Active', 'Under offer'][i]
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 30,
      color: 'var(--forest-800)',
      margin: 0
    }
  }, "Seller dashboard"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, "Welcome back, Dana")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconLeft: /*#__PURE__*/React.createElement(Icon.plus, {
      size: 18
    }),
    onClick: onList
  }, "List new parcel")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16,
      marginBottom: 28
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.label,
    padding: "18px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 28,
      color: 'var(--forest-800)'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, s.label)))), /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-subtle)',
      fontWeight: 600,
      fontSize: 15
    }
  }, "Your listings"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2.4fr 1fr 1fr 1fr 0.6fr',
      padding: '10px 20px',
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--text-muted)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Parcel"), /*#__PURE__*/React.createElement("span", null, "Price"), /*#__PURE__*/React.createElement("span", null, "Views"), /*#__PURE__*/React.createElement("span", null, "Status"), /*#__PURE__*/React.createElement("span", null)), rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '2.4fr 1fr 1fr 1fr 0.6fr',
      padding: '14px 20px',
      alignItems: 'center',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 40,
      borderRadius: 'var(--radius-sm)',
      background: `center/cover url(${r.image})`
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, r.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, r.location))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 14
    }
  }, "$", r.price.toLocaleString()), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon.eye, {
    size: 15,
    stroke: "var(--stone-500)"
  }), r.views), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
    tone: r.status === 'Active' ? 'success' : 'warning',
    dot: true
  }, r.status)), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      color: 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon.chevronRight, {
    size: 18
  }))))));
}
function App() {
  const [view, setView] = React.useState('browse'); // browse | detail | dashboard | sell
  const [current, setCurrent] = React.useState(null);
  const [saved, setSaved] = React.useState([2]);
  const [offerItem, setOfferItem] = React.useState(null);
  const toggleSave = id => setSaved(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  const open = d => {
    setCurrent(d);
    setView('detail');
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-page)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(AppNav, {
    view: view === 'detail' ? 'browse' : view,
    setView: setView,
    saved: saved
  }), view === 'browse' && /*#__PURE__*/React.createElement(Browse, {
    onOpen: open,
    saved: saved,
    toggleSave: toggleSave
  }), view === 'detail' && current && /*#__PURE__*/React.createElement(Detail, {
    item: current,
    onBack: () => setView('browse'),
    saved: saved,
    toggleSave: toggleSave,
    onOffer: () => setOfferItem(current)
  }), view === 'dashboard' && /*#__PURE__*/React.createElement(Dashboard, {
    onList: () => {
      setView('sell');
      window.scrollTo(0, 0);
    }
  }), view === 'sell' && /*#__PURE__*/React.createElement(ListYourLand, {
    onExit: () => {
      setView('dashboard');
      window.scrollTo(0, 0);
    }
  }), /*#__PURE__*/React.createElement(OfferModal, {
    item: offerItem,
    onClose: () => setOfferItem(null)
  }));
}
window.TimberApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ListYourLand.jsx
try { (() => {
const React = window.React;
const {
  Button,
  Badge,
  Input,
  Select,
  Checkbox,
  Tag,
  Card
} = window.TimberTraceDesignSystem_61daa5;
const Icon = window.TTIcon;
const TYPES = [{
  id: 'land',
  label: 'Raw land',
  icon: 'layers',
  desc: 'Undeveloped acreage'
}, {
  id: 'forest',
  label: 'Forest / timber',
  icon: 'trees',
  desc: 'Wooded parcels'
}, {
  id: 'pasture',
  label: 'Pasture / agricultural',
  icon: 'ruler',
  desc: 'Open & grazing land'
}, {
  id: 'waterfront',
  label: 'Waterfront',
  icon: 'drop',
  desc: 'Lake, river or creek'
}];
const STEPS = ['Type', 'Details', 'Photos & docs', 'Price', 'Review'];
const COMMISSION = 0.05;
function StepRail({
  step
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      marginBottom: 32
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 600,
      background: i < step ? 'var(--forest-700)' : i === step ? 'var(--clay-500)' : 'var(--stone-100)',
      color: i <= step ? '#fff' : 'var(--text-muted)'
    }
  }, i < step ? /*#__PURE__*/React.createElement(Icon.check, {
    size: 15,
    stroke: "#fff"
  }) : i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: i <= step ? 'var(--text-strong)' : 'var(--text-muted)'
    }
  }, s)), i < STEPS.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-default)',
      margin: '0 14px'
    }
  }))));
}
function Dropzone({
  label,
  hint,
  icon = 'plus',
  tall
}) {
  const [hover, setHover] = React.useState(false);
  const Ic = Icon[icon];
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      border: `1.5px dashed ${hover ? 'var(--clay-500)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      background: hover ? 'var(--clay-100)' : 'var(--stone-50)',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      padding: tall ? '40px 16px' : '22px 16px',
      textAlign: 'center',
      transition: 'all var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    size: 22,
    stroke: "var(--forest-600)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, hint));
}
function ListYourLand({
  onExit
}) {
  const [step, setStep] = React.useState(0);
  const [type, setType] = React.useState('forest');
  const [price, setPrice] = React.useState('184000');
  const [done, setDone] = React.useState(false);
  const priceNum = parseInt((price || '').replace(/[^0-9]/g, ''), 10) || 0;
  const fee = Math.round(priceNum * COMMISSION);
  const payout = priceNum - fee;
  const fmt = n => '$' + n.toLocaleString();
  const next = () => setStep(s => Math.min(s + 1, STEPS.length - 1));
  const back = () => step === 0 ? onExit() : setStep(s => s - 1);
  if (done) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        margin: '0 auto',
        padding: '80px 28px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: 'var(--success-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px'
      }
    }, /*#__PURE__*/React.createElement(Icon.check, {
      size: 32,
      stroke: "var(--success-fg)"
    })), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 32,
        color: 'var(--forest-800)',
        margin: '0 0 10px'
      }
    }, "Your parcel is live"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 1.6,
        color: 'var(--text-body)',
        margin: '0 auto 28px',
        maxWidth: 420
      }
    }, "We're verifying your title now \u2014 usually within 48 hours. When it sells, Timber Trace takes a flat 5% and you receive ", /*#__PURE__*/React.createElement("b", null, fmt(payout)), "."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: onExit
    }, "Go to dashboard"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: '0 auto',
      padding: '28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 30,
      color: 'var(--forest-800)',
      margin: 0
    }
  }, "List your land"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Step ", step + 1, " of ", STEPS.length)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '0 0 24px'
    }
  }, "Free to list. We charge a flat ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--clay-600)'
    }
  }, "5% commission"), " only when your land sells."), /*#__PURE__*/React.createElement(StepRail, {
    step: step
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "28px"
  }, step === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 21,
      margin: '0 0 4px'
    }
  }, "What are you selling?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '0 0 20px'
    }
  }, "Pick the category that fits best."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, TYPES.map(t => {
    const Ic = Icon[t.icon];
    const on = type === t.id;
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      onClick: () => setType(t.id),
      style: {
        border: `1.5px solid ${on ? 'var(--forest-700)' : 'var(--border-default)'}`,
        background: on ? 'var(--forest-100)' : 'var(--paper)',
        borderRadius: 'var(--radius-md)',
        padding: '18px',
        cursor: 'pointer',
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        transition: 'all var(--dur-fast)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 'var(--radius-sm)',
        background: on ? 'var(--forest-200)' : 'var(--stone-100)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      size: 22,
      stroke: "var(--forest-700)"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600
      }
    }, t.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, t.desc)));
  }))), step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 21,
      margin: '0 0 20px'
    }
  }, "Parcel details"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Listing title",
    placeholder: "e.g. Cascade Ridge"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Location",
    prefix: /*#__PURE__*/React.createElement(Icon.pin, {
      size: 15,
      stroke: "var(--stone-500)"
    }),
    placeholder: "County, State"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Acreage",
    suffix: "acres",
    placeholder: "42"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Zoning",
    options: ['Rural', 'Forest', 'Recreational', 'Agricultural', 'Residential']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Road frontage",
    suffix: "ft",
    placeholder: "320"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Water",
    options: ['None', 'Well', 'Creek', 'River', 'Lakefront', 'Spring']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 8
    }
  }, "Draw your boundary"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--forest-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: "center/cover url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1000&q=60')",
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon.pin, {
      size: 16
    })
  }, "Draw boundary on map"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--forest-800)',
      fontWeight: 500
    }
  }, "Tap to drop corner points"))))), step === 2 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 21,
      margin: '0 0 4px'
    }
  }, "Photos & documents"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '0 0 18px'
    }
  }, "Listings with 5+ photos sell faster. Title docs speed up verification."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Dropzone, {
    label: "Add cover photo",
    hint: "JPG or PNG",
    icon: "plus",
    tall: true
  }), /*#__PURE__*/React.createElement(Dropzone, {
    label: "Add photo",
    icon: "plus",
    tall: true
  }), /*#__PURE__*/React.createElement(Dropzone, {
    label: "Add photo",
    icon: "plus",
    tall: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Dropzone, {
    label: "Title / deed",
    hint: "PDF \u2014 kept private",
    icon: "shield"
  }), /*#__PURE__*/React.createElement(Dropzone, {
    label: "Survey / plat map",
    hint: "PDF or image",
    icon: "layers"
  }))), step === 3 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 21,
      margin: '0 0 20px'
    }
  }, "Price & terms"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Input, {
    label: "Asking price",
    prefix: "$",
    value: price,
    onChange: e => setPrice(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Owner financing available"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Open to offers"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Include escrow & title service",
    checked: true,
    readOnly: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--forest-800)',
      color: 'var(--cream)',
      borderRadius: 'var(--radius-md)',
      padding: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--clay-400)',
      fontWeight: 600
    }
  }, "Your payout"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14,
      marginTop: 14,
      color: 'var(--forest-200)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Sale price"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, fmt(priceNum))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14,
      marginTop: 8,
      color: 'var(--forest-200)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Timber Trace fee (5%)"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "\u2212", fmt(fee))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--forest-600)',
      margin: '14px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, "You receive"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      color: '#fff'
    }
  }, fmt(payout))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--forest-300)',
      marginTop: 12,
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon.shield, {
    size: 14,
    stroke: "var(--clay-400)"
  }), " No fee until your land sells.")))), step === 4 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 21,
      margin: '0 0 18px'
    }
  }, "Review & publish"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      padding: '16px',
      background: 'var(--stone-50)',
      borderRadius: 'var(--radius-md)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 72,
      borderRadius: 'var(--radius-sm)',
      background: "center/cover url('https://images.unsplash.com/photo-1444044205806-38f3ed106c10?w=400&q=60')"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--forest-800)'
    }
  }, fmt(priceNum)), /*#__PURE__*/React.createElement(Badge, {
    tone: "forest"
  }, TYPES.find(t => t.id === type).label)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, "Cascade Ridge \xB7 Whatcom County, WA \xB7 42 acres"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-body)',
      marginTop: 6
    }
  }, "You'll receive ", /*#__PURE__*/React.createElement("b", null, fmt(payout)), " after the 5% fee."))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I confirm I own this land and have the right to sell it.",
    checked: true,
    readOnly: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 28,
      paddingTop: 20,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: back
  }, step === 0 ? 'Cancel' : 'Back'), step < STEPS.length - 1 ? /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(Icon.arrowRight, {
      size: 17
    }),
    onClick: next
  }, "Continue") : /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => setDone(true)
  }, "Publish listing"))));
}
window.ListYourLand = ListYourLand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ListYourLand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Marketing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const React = window.React;
const {
  Button,
  Badge,
  Input,
  ListingCard,
  Avatar
} = window.TimberTraceDesignSystem_61daa5;
const Icon = window.TTIcon;
const LISTINGS = [{
  image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=70',
  price: 184000,
  acres: 42,
  verified: true,
  title: 'Cascade Ridge',
  location: 'Whatcom County, WA',
  facts: [{
    label: 'Zoning',
    value: 'Rural'
  }, {
    label: 'Access',
    value: 'Road'
  }, {
    label: 'Water',
    value: 'Creek'
  }]
}, {
  image: 'https://images.unsplash.com/photo-1444044205806-38f3ed106c10?w=800&q=70',
  price: 96500,
  acres: 11,
  verified: true,
  title: 'Birch Hollow',
  location: 'Lincoln County, OR',
  facts: [{
    label: 'Zoning',
    value: 'Forest'
  }, {
    label: 'Access',
    value: 'Trail'
  }]
}, {
  image: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=800&q=70',
  price: 312000,
  acres: 78,
  verified: false,
  title: 'Still Lake Frontage',
  location: 'Itasca County, MN',
  facts: [{
    label: 'Zoning',
    value: 'Recreational'
  }, {
    label: 'Water',
    value: 'Lakefront'
  }]
}];
function TopNav() {
  const link = {
    fontSize: 14,
    fontWeight: 500,
    color: 'var(--text-body)',
    textDecoration: 'none',
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(250,248,243,0.85)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup.svg",
    height: "28",
    alt: "Timber Trace"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 24,
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Browse land"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Sell"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    style: link
  }, "Financing")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Log in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "List your land"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--forest-800)',
      color: 'var(--cream)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: "center/cover url('https://images.unsplash.com/photo-1511497584788-876760111969?w=1600&q=70')",
      opacity: 0.28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(31,48,38,0.65), rgba(22,36,28,0.92))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '88px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--clay-400)'
    }
  }, "Land you can trust"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 60,
      lineHeight: 1.02,
      letterSpacing: '-0.01em',
      margin: '16px 0 0',
      maxWidth: 760
    }
  }, "Own a piece of the wild."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--forest-200)',
      maxWidth: 560,
      marginTop: 18
    }
  }, "Vetted acreage with transparent title history, surveyor-grade maps, and escrow built in. Find the land that fits your plans."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      background: 'var(--paper)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 10,
      display: 'flex',
      gap: 10,
      maxWidth: 680,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 12px',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon.search, {
    size: 20,
    stroke: "var(--stone-500)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "County, state, or ZIP",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      padding: '12px 0',
      color: 'var(--text-strong)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      alignSelf: 'stretch',
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 6px 0 12px',
      color: 'var(--text-muted)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon.ruler, {
    size: 18,
    stroke: "var(--stone-500)"
  }), " Any acreage"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg"
  }, "Search")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 28,
      fontSize: 13,
      color: 'var(--forest-200)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon.shield, {
    size: 16,
    stroke: "var(--clay-400)"
  }), " Title-verified listings"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon.layers, {
    size: 16,
    stroke: "var(--clay-400)"
  }), " 12,400+ parcels"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon.check, {
    size: 16,
    stroke: "var(--clay-400)"
  }), " Escrow included"))));
}
function Featured({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--clay-600)'
    }
  }, "Just listed"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 34,
      color: 'var(--forest-800)',
      margin: '8px 0 0'
    }
  }, "Featured parcels")), /*#__PURE__*/React.createElement("a", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--forest-700)',
      cursor: 'pointer',
      textDecoration: 'none'
    },
    onClick: onOpen
  }, "Browse all land ", /*#__PURE__*/React.createElement(Icon.arrowRight, {
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, LISTINGS.map((l, i) => /*#__PURE__*/React.createElement(ListingCard, _extends({
    key: i
  }, l, {
    onClick: onOpen
  })))));
}
function HowItWorks() {
  const steps = [{
    icon: 'search',
    t: 'Find land',
    d: 'Filter by acreage, price, zoning, water and road access across thousands of vetted parcels.'
  }, {
    icon: 'shield',
    t: 'Verify title',
    d: 'Every listing carries a transparent title history and a surveyor-grade boundary map.'
  }, {
    icon: 'check',
    t: 'Close with escrow',
    d: 'Make an offer and close securely — funds held in escrow until the deed transfers.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--stone-50)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 32px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 34,
      color: 'var(--forest-800)',
      margin: 0,
      textAlign: 'center'
    }
  }, "Land buying, without the guesswork"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 28,
      marginTop: 40
    }
  }, steps.map((s, i) => {
    const Ic = Icon[s.icon];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-md)',
        background: 'var(--forest-100)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      size: 24,
      stroke: "var(--forest-700)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: 'var(--clay-600)',
        fontFamily: 'var(--font-mono)'
      }
    }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 21,
        color: 'var(--text-strong)',
        margin: '4px 0 8px'
      }
    }, s.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        lineHeight: 1.6,
        color: 'var(--text-body)',
        margin: 0
      }
    }, s.d));
  }))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      position: 'relative',
      background: 'var(--forest-800)',
      color: 'var(--cream)',
      padding: '56px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: "right/cover url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=70')",
      opacity: 0.25
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 36,
      lineHeight: 1.05,
      margin: 0
    }
  }, "Have land to sell?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--forest-200)',
      marginTop: 14
    }
  }, "List in minutes. We handle title verification, mapping, and escrow so buyers trust your parcel from the first click."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg"
  }, "List your land"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      background: 'transparent',
      color: 'var(--cream)',
      borderColor: 'var(--forest-400)'
    }
  }, "Talk to us")))));
}
function Footer() {
  const col = (h, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--cream)',
      marginBottom: 12
    }
  }, h), items.map(x => /*#__PURE__*/React.createElement("div", {
    key: x,
    style: {
      fontSize: 13,
      color: 'var(--forest-300)',
      marginBottom: 8,
      cursor: 'pointer'
    }
  }, x)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--forest-900)',
      color: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 32px 40px',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    width: "40",
    alt: ""
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--forest-300)',
      maxWidth: 280,
      marginTop: 14
    }
  }, "The trustworthy marketplace for buying and selling land.")), col('Buy', ['Browse land', 'Saved parcels', 'Financing', 'Buyer guide']), col('Sell', ['List your land', 'Seller dashboard', 'Pricing', 'Seller guide']), col('Company', ['About', 'Title & escrow', 'Contact', 'Careers'])), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--forest-700)',
      padding: '18px 32px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      fontSize: 12,
      color: 'var(--forest-400)'
    }
  }, "\xA9 2026 Timber Trace \xB7 Title-verified land marketplace"));
}
function MarketingSite({
  onOpenApp
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-page)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(TopNav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Featured, {
    onOpen: onOpenApp
  }), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.MarketingSite = MarketingSite;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Marketing.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.ListingCard = __ds_scope.ListingCard;

})();
