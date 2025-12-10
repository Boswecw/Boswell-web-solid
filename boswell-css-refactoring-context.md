# Boswell Digital Solutions — CSS Refactoring Context

**Project:** Boswell Digital Solutions Website  
**Framework:** SolidStart (Solid.js) with TypeScript  
**Objective:** Modernize and expand CSS architecture for better maintainability, performance, and developer velocity  
**Owner:** Charles Boswell (SDVOSB Founder)

---

## 🎯 Refactoring Goals

Transform the current CSS from a basic, manually-managed system into a modern, utility-first architecture that:

- Accelerates styling of new components (less custom CSS)
- Improves maintainability through systematic design tokens
- Supports government credibility with refined visual polish
- Enables smooth, accessible animations and interactions
- Leverages modern CSS features (clamp, container queries, :has selector)
- Maintains WCAG 2.1 AA compliance and enhances accessibility

---

## 📊 Current State

### Existing Files
- `src/styles/variables.css` — Basic design tokens (colors, spacing, shadows, font)
- `src/styles/theme.css` — Global styles, base components (.btn, .card, .grid)
- `src/styles/components.css` — Existing component styles
- `src/styles/navigation.css` — Navigation and header styles
- `src/styles/global.css` — Additional global styles
- `src/styles/accessibility.css` — Basic a11y styles
- `src/styles/utilities.css` — Some utility classes exist

### Current Design Tokens
```css
:root {
  --color-primary: #0A2A43;        /* Deep Federal Blue */
  --color-secondary: #4A5568;      /* Steel Gray */
  --color-accent: #CBA86F;         /* Service Bronze */
  --color-support: #2E5A3F;        /* Forest Green */
  --color-bg: #F7F7F5;             /* Off-White */
  --color-text: #1A1A1A;           /* Charcoal */
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif;
  --radius-lg: 12px;
  --radius-xl: 18px;
  --shadow-soft: 0 10px 30px rgba(0, 0, 0, 0.08);
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
}
```

### Limitations
- Limited utility class coverage (no comprehensive margin/padding, sizing, text utilities)
- No fluid typography scaling (manual font-size per breakpoint)
- Basic shadows (only one level)
- No systematic transition/animation tokens
- No container query support
- Focus states are basic (a11y could be stronger)
- No "prefers-reduced-motion" support for animations

---

## 🚀 Refactoring Strategy

### Phase 1: Expand Design Tokens (variables.css)
Add comprehensive design tokens for:
- **Color scales** — Light/medium/dark variants of each brand color
- **Spacing system** — Full 8px grid extension (xxs through 4xl)
- **Typography scales** — Font-size, line-height, and letter-spacing tokens
- **Border radius** — Additional curve options (sm, md, lg, xl, full)
- **Shadows** — Multiple depth levels (xs, sm, md, lg, xl)
- **Transitions** — Duration and easing presets (fast, base, slow + ease-in/out/inout)
- **Opacity** — Standard levels (10%, 20%, 30%, etc.)
- **Z-index** — Systematic stacking levels (dropdown, modal, tooltip, etc.)

### Phase 2: Build Comprehensive Utility Classes (utilities.css)
Implement a utility-first system covering:
- **Layout** — flex, grid, container helpers
- **Spacing** — margin (m-*, mt-*, mb-*, ml-*, mr-*), padding (p-*, pt-*, pb-*, etc.)
- **Sizing** — width, height, max-width, aspect-ratio
- **Typography** — font-size, font-weight, line-height, text-alignment, letter-spacing
- **Colors** — text color, background color, border color variants
- **Borders** — border-width, border-style, border-color, border-radius
- **Display** — block, inline, inline-block, hidden, visibility
- **Position** — static, relative, absolute, fixed, sticky
- **Flexbox** — flex-direction, justify-content, align-items, gap, flex-wrap
- **Grid** — grid-template-columns, grid-template-rows, gap, auto-fit/auto-fill helpers
- **Responsive modifiers** — @media breakpoints (sm:, md:, lg:, xl:)

### Phase 3: Modernize Components (components.css + theme.css)
Refactor existing components using:
- **Modern CSS features** — clamp() for fluid spacing/typography, :has() for state
- **CSS Grid patterns** — reusable layout patterns (cluster, sidebar, auto-grid)
- **Transitions** — use token-based durations and easing
- **Focus states** — enhanced accessibility with `:focus-visible` and custom focus rings
- **Prefers-reduced-motion** — respect user accessibility preferences

### Phase 4: Animation & Interaction Layer (animations.css - NEW)
Create smooth, accessible micro-interactions:
- **Fade transitions** — opacity changes with timing tokens
- **Slide animations** — subtle movement for modals, dropdowns
- **Button feedback** — hover/active states with transform, shadow
- **Loading states** — spinner, skeleton loaders
- **Page transitions** — smooth fade/slide between routes

### Phase 5: Responsive & Accessibility Enhancements (responsive.css - ENHANCED)
- **Mobile-first breakpoints** — explicit breakpoint tokens
- **Touch-friendly targets** — 48px minimum
- **Color contrast** — WCAG AAA where possible
- **Skip links** — keyboard navigation support
- **Focus indicators** — visible, accessible focus rings

---

## 📝 Implementation Details

### Design Tokens (variables.css) — ENHANCED

```css
:root {
  /* === COLORS === */
  --color-primary: #0A2A43;
  --color-primary-light: #1A3A53;
  --color-primary-lighter: #2A4A63;
  --color-primary-dark: #051820;
  
  --color-secondary: #4A5568;
  --color-secondary-light: #5A6578;
  --color-secondary-lighter: #6A7588;
  --color-secondary-dark: #3A4558;
  
  --color-accent: #CBA86F;
  --color-accent-light: #DBBB8F;
  --color-accent-dark: #BBAA5F;
  
  --color-support: #2E5A3F;
  --color-support-light: #3E6A4F;
  --color-support-dark: #1E4A2F;
  
  --color-bg: #F7F7F5;
  --color-bg-alt: #EFEFED;
  --color-surface: #FFFFFF;
  --color-border: rgba(0, 0, 0, 0.08);
  
  --color-text: #1A1A1A;
  --color-text-secondary: #555555;
  --color-text-muted: #999999;
  
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;
  
  /* === TYPOGRAPHY === */
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif;
  --font-mono: "Monaco", "Courier New", monospace;
  
  --text-xs: clamp(0.75rem, 1vw, 0.875rem);
  --text-sm: clamp(0.875rem, 1.1vw, 1rem);
  --text-base: clamp(1rem, 1.2vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1.4vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.6vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 2vw, 1.875rem);
  --text-3xl: clamp(1.875rem, 2.4vw, 2.25rem);
  --text-4xl: clamp(2.25rem, 3vw, 2.8rem);
  
  --line-height-tight: 1.2;
  --line-height-base: 1.6;
  --line-height-loose: 1.8;
  
  --letter-spacing-tight: -0.01em;
  --letter-spacing-normal: 0em;
  --letter-spacing-wide: 0.02em;
  
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* === SPACING === */
  --space-0: 0;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-7: 1.75rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;
  
  /* === BORDER RADIUS === */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 18px;
  --radius-full: 999px;
  
  /* === SHADOWS === */
  --shadow-xs: 0 2px 4px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 4px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 10px 20px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 15px 35px rgba(0, 0, 0, 0.15);
  --shadow-xl: 0 20px 50px rgba(0, 0, 0, 0.2);
  
  /* === TRANSITIONS === */
  --duration-fast: 100ms;
  --duration-base: 200ms;
  --duration-slow: 300ms;
  
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* === Z-INDEX === */
  --z-dropdown: 100;
  --z-sticky: 101;
  --z-fixed: 500;
  --z-modal: 1000;
  --z-toast: 1100;
  
  /* === OPACITY === */
  --opacity-disabled: 0.5;
  --opacity-hover: 0.9;
  
  /* === BREAKPOINTS (Mobile-First) === */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0ms;
    --duration-base: 0ms;
    --duration-slow: 0ms;
  }
}
```

### Utility Classes (utilities.css) — COMPREHENSIVE

```css
/* === DISPLAY & VISIBILITY === */
.block { display: block; }
.inline { display: inline; }
.inline-block { display: inline-block; }
.flex { display: flex; }
.grid { display: grid; }
.hidden { display: none; }
.sr-only { 
  position: absolute; 
  width: 1px; 
  height: 1px; 
  padding: 0; 
  margin: -1px; 
  overflow: hidden; 
  clip: rect(0,0,0,0); 
  border: 0; 
}

/* === FLEXBOX === */
.flex-row { flex-direction: row; }
.flex-col { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.flex-nowrap { flex-wrap: nowrap; }
.flex-center { align-items: center; justify-content: center; }
.flex-between { justify-content: space-between; align-items: center; }
.flex-start { align-items: flex-start; }
.flex-end { align-items: flex-end; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-start { justify-content: flex-start; }
.justify-end { justify-content: flex-end; }
.gap-0 { gap: var(--space-0); }
.gap-1 { gap: var(--space-1); }
.gap-2 { gap: var(--space-2); }
.gap-3 { gap: var(--space-3); }
.gap-4 { gap: var(--space-4); }
.gap-6 { gap: var(--space-6); }
.gap-8 { gap: var(--space-8); }

/* === PADDING === */
.p-0 { padding: var(--space-0); }
.p-1 { padding: var(--space-1); }
.p-2 { padding: var(--space-2); }
.p-3 { padding: var(--space-3); }
.p-4 { padding: var(--space-4); }
.p-6 { padding: var(--space-6); }
.p-8 { padding: var(--space-8); }
.px-4 { padding-left: var(--space-4); padding-right: var(--space-4); }
.py-4 { padding-top: var(--space-4); padding-bottom: var(--space-4); }
.pt-4 { padding-top: var(--space-4); }
.pb-4 { padding-bottom: var(--space-4); }
.pl-4 { padding-left: var(--space-4); }
.pr-4 { padding-right: var(--space-4); }

/* === MARGIN === */
.m-0 { margin: var(--space-0); }
.m-1 { margin: var(--space-1); }
.m-2 { margin: var(--space-2); }
.m-3 { margin: var(--space-3); }
.m-4 { margin: var(--space-4); }
.m-6 { margin: var(--space-6); }
.m-8 { margin: var(--space-8); }
.mx-auto { margin-left: auto; margin-right: auto; }
.my-4 { margin-top: var(--space-4); margin-bottom: var(--space-4); }
.mt-4 { margin-top: var(--space-4); }
.mb-4 { margin-bottom: var(--space-4); }
.ml-4 { margin-left: var(--space-4); }
.mr-4 { margin-right: var(--space-4); }

/* === TEXT UTILITIES === */
.text-xs { font-size: var(--text-xs); }
.text-sm { font-size: var(--text-sm); }
.text-base { font-size: var(--text-base); }
.text-lg { font-size: var(--text-lg); }
.text-xl { font-size: var(--text-xl); }
.text-2xl { font-size: var(--text-2xl); }
.text-3xl { font-size: var(--text-3xl); }
.text-4xl { font-size: var(--text-4xl); }

.font-regular { font-weight: var(--font-weight-regular); }
.font-medium { font-weight: var(--font-weight-medium); }
.font-semibold { font-weight: var(--font-weight-semibold); }
.font-bold { font-weight: var(--font-weight-bold); }

.leading-tight { line-height: var(--line-height-tight); }
.leading-base { line-height: var(--line-height-base); }
.leading-loose { line-height: var(--line-height-loose); }

.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-accent { color: var(--color-accent); }
.text-muted { color: var(--color-text-muted); }

.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }

/* === SIZING === */
.w-full { width: 100%; }
.w-screen { width: 100vw; }
.h-full { height: 100%; }
.h-screen { height: 100vh; }
.max-w-sm { max-width: 24rem; }
.max-w-md { max-width: 28rem; }
.max-w-lg { max-width: 32rem; }
.max-w-xl { max-width: 36rem; }
.max-w-2xl { max-width: 42rem; }
.max-w-3xl { max-width: 48rem; }
.max-w-4xl { max-width: 56rem; }
.max-w-5xl { max-width: 64rem; }
.max-w-6xl { max-width: 72rem; }
.max-w-7xl { max-width: 80rem; }

/* === POSITIONING === */
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.sticky { position: sticky; }
.inset-0 { top: 0; right: 0; bottom: 0; left: 0; }

/* === BORDER & RADIUS === */
.rounded-sm { border-radius: var(--radius-sm); }
.rounded-md { border-radius: var(--radius-md); }
.rounded-lg { border-radius: var(--radius-lg); }
.rounded-xl { border-radius: var(--radius-xl); }
.rounded-full { border-radius: var(--radius-full); }

.border { border: 1px solid var(--color-border); }
.border-t { border-top: 1px solid var(--color-border); }
.border-b { border-bottom: 1px solid var(--color-border); }
.border-l { border-left: 1px solid var(--color-border); }
.border-r { border-right: 1px solid var(--color-border); }

/* === BACKGROUND & COLORS === */
.bg-primary { background-color: var(--color-primary); }
.bg-secondary { background-color: var(--color-secondary); }
.bg-accent { background-color: var(--color-accent); }
.bg-surface { background-color: var(--color-surface); }
.bg-alt { background-color: var(--color-bg-alt); }

/* === SHADOWS === */
.shadow-xs { box-shadow: var(--shadow-xs); }
.shadow-sm { box-shadow: var(--shadow-sm); }
.shadow-md { box-shadow: var(--shadow-md); }
.shadow-lg { box-shadow: var(--shadow-lg); }
.shadow-xl { box-shadow: var(--shadow-xl); }

/* === GRID HELPERS === */
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-6);
}

.grid-auto-fill {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-6);
}

/* === STACK (VERTICAL FLEX) === */
.stack { display: flex; flex-direction: column; }
.stack-sm { gap: var(--space-2); }
.stack-md { gap: var(--space-4); }
.stack-lg { gap: var(--space-6); }
.stack-xl { gap: var(--space-8); }

/* === TRANSITIONS & ANIMATIONS === */
.transition-fast { transition: all var(--duration-fast) var(--ease-in-out); }
.transition-base { transition: all var(--duration-base) var(--ease-in-out); }
.transition-slow { transition: all var(--duration-slow) var(--ease-in-out); }

/* === RESPONSIVE CLASSES (Mobile-First) === */
@media (min-width: 640px) {
  .sm\:flex { display: flex; }
  .sm\:grid { display: grid; }
  .sm\:text-lg { font-size: var(--text-lg); }
  /* Add more as needed */
}

@media (min-width: 768px) {
  .md\:flex { display: flex; }
  .md\:grid { display: grid; }
  .md\:text-xl { font-size: var(--text-xl); }
  .md\:w-1\/2 { width: 50%; }
  /* Add more as needed */
}

@media (min-width: 1024px) {
  .lg\:flex { display: flex; }
  .lg\:grid { display: grid; }
  .lg\:w-1\/3 { width: 33.333%; }
  /* Add more as needed */
}
```

### Component Refactoring (components.css)

```css
/* === BUTTONS === */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.4rem;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  font-weight: var(--font-weight-semibold);
  font-size: var(--text-sm);
  transition: all var(--duration-base) var(--ease-in-out);
  text-decoration: none;
}

.btn:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.btn-primary {
  background: var(--color-primary);
  color: #ffffff;
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background: var(--color-primary-light);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.btn-outline {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-outline:hover {
  background: rgba(10, 42, 67, 0.08);
}

/* === CARDS === */
.card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: var(--space-6);
  transition: all var(--duration-base) var(--ease-in-out);
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

/* === SECTIONS === */
.section {
  padding: var(--space-12) var(--space-6);
}

.section-header {
  margin-bottom: var(--space-6);
}

.section-header h2 {
  font-size: var(--text-3xl);
  margin-bottom: var(--space-2);
}

.section-header p {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
}

/* === FOCUS STATES (WCAG) === */
*:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### New Animations Layer (animations.css)

```css
/* === FADE ANIMATIONS === */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

.fade-in {
  animation: fadeIn var(--duration-base) var(--ease-in-out);
}

/* === SLIDE ANIMATIONS === */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-in-up {
  animation: slideInUp var(--duration-base) var(--ease-out);
}

.slide-in-down {
  animation: slideInDown var(--duration-base) var(--ease-out);
}

/* === PULSE ANIMATION === */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s var(--ease-in-out) infinite;
}

/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🔧 Implementation Instructions

### Step 1: Expand variables.css
1. Open `src/styles/variables.css`
2. Replace current `:root` with the enhanced design tokens above
3. Keep existing imports and structure
4. Test in browser — no visual changes, just token expansion

### Step 2: Enhance utilities.css
1. Open or create `src/styles/utilities.css`
2. Add all utility classes from the comprehensive list above
3. Organize by category (display, flexbox, spacing, typography, etc.)
4. Add responsive modifiers for each breakpoint

### Step 3: Refactor components.css
1. Update button, card, section styles using new tokens
2. Implement `:focus-visible` for accessibility
3. Use transition tokens instead of hardcoded values
4. Test all interactive elements

### Step 4: Create animations.css
1. Create new file `src/styles/animations.css`
2. Add keyframes and animation utilities
3. Include `prefers-reduced-motion` support
4. Import in main stylesheet

### Step 5: Update Main Stylesheet (styles.css)
Ensure import order:
```css
@import url('./variables.css');
@import url('./animations.css');
@import url('./global.css');
@import url('./components.css');
@import url('./utilities.css');
@import url('./accessibility.css');
@import url('./navigation.css');
```

### Step 6: Test & Validate
- [ ] Visual regression (screenshots of key pages)
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Keyboard navigation (Tab through all elements)
- [ ] Screen reader testing (NVDA, VoiceOver)
- [ ] Color contrast (WCAG AA minimum)
- [ ] Animation performance (60fps)
- [ ] Reduced motion preferences respected

---

## 📦 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Android)

CSS features used:
- CSS Custom Properties (variables)
- clamp() for fluid typography
- Grid and Flexbox
- Focus-visible pseudo-class
- @media prefers-reduced-motion

---

## 🎓 Key Improvements Over Current System

| Area | Current | Enhanced | Benefit |
|------|---------|----------|---------|
| Design Tokens | Basic | Comprehensive | Systematic, scalable design |
| Utilities | Limited | 100+ classes | Faster component development |
| Typography | Fixed sizes | Fluid (clamp) | Responsive text without breakpoints |
| Shadows | 1 level | 5 levels | Better visual hierarchy |
| Transitions | Hardcoded | Token-based | Consistent animations |
| Animations | None | Full layer | Polished micro-interactions |
| Accessibility | Basic | Enhanced | WCAG AAA ready |
| Motion Preferences | Not respected | Respected | Inclusive design |

---

## 📚 Reference Files

All current files should be updated:
- `src/styles/variables.css` — Enhanced tokens
- `src/styles/utilities.css` — Comprehensive utility classes
- `src/styles/components.css` — Modernized components
- `src/styles/animations.css` — NEW: Animation layer
- `src/styles/accessibility.css` — Enhanced a11y
- `src/styles/global.css` — Global base styles
- `src/styles/theme.css` — Can be consolidated with variables.css

---

## ✅ Definition of Done

- [ ] All design tokens documented and in place
- [ ] Utility classes tested and functional
- [ ] Components refactored and visually identical or improved
- [ ] Animations work smoothly on all browsers
- [ ] Accessibility testing passed (WCAG 2.1 AA)
- [ ] Responsive design validated on all breakpoints
- [ ] Code documented with comments
- [ ] Performance metrics acceptable (Lighthouse 90+)

---

## 💡 Usage Examples (Post-Refactoring)

### Before (Custom CSS)
```tsx
// Component with custom styles
<div class="card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Title</h3>
  <p style={{ color: '#555', marginBottom: '1rem' }}>Description</p>
  <button class="btn btn-primary">Action</button>
</div>
```

### After (Utility-First)
```tsx
// Same component with utilities
<div class="card p-6 mb-8">
  <h3 class="text-lg font-semibold mb-2">Title</h3>
  <p class="text-secondary mb-4">Description</p>
  <button class="btn btn-primary">Action</button>
</div>
```

---

**Questions or blockers?** Use this context for iterative refinement with Claude. Copy specific sections as needed for targeted work.
