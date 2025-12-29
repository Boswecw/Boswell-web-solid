# Boswell Digital Solutions — CSS Refactoring Guide
**Converting Components & Pages to Utility-First System**

---

## 🎯 OBJECTIVE

Convert all pages and components from:
- ❌ **Old:** Inline styles + hardcoded values
- ❌ **Old:** Limited utility classes
- ❌ **Old:** Mixed styling approaches

To:
- ✅ **New:** Utility-first classes
- ✅ **New:** CSS variables everywhere
- ✅ **New:** Clean, maintainable markup

---

## 📊 WHAT'S HAPPENING

**CSS System Status:** ✅ COMPLETE & WORKING
- variables.css — All design tokens ready
- utilities.css — 200+ utility classes ready
- components.css — Component styles ready
- animations.css — Animations ready

**Component Status:** ⚠️ NOT YET REFACTORED
- Pages still have inline styles
- Components not using utilities
- Old class names still present
- Mixed approaches throughout

---

## 🔄 REFACTORING STRATEGY

### 1. Understand the New System

**Utility Classes Available:**

```css
/* Spacing */
.mt-1 .mt-2 .mt-3 .mt-4 .mt-6 .mt-8 .mt-12 .mt-16 .mt-20 .mt-24 .mt-32
.mb-1 .mb-2 .mb-3 .mb-4 .mb-6 .mb-8 .mb-12 .mb-16 .mb-20 .mb-24 .mb-32
.p-1 .p-2 .p-3 .p-4 .p-6 .p-8 .p-12 .p-16 .p-20 .p-24 .p-32
.px-4 .py-6 .pt-4 .pb-6 .pl-4 .pr-4

/* Typography */
.text-xs .text-sm .text-base .text-lg .text-xl .text-2xl .text-3xl .text-4xl
.font-normal .font-medium .font-semibold .font-bold .font-extrabold
.text-primary .text-secondary .text-accent .text-support .text-text .text-muted
.text-center .text-left .text-right

/* Layout */
.flex .flex-col .flex-wrap .items-center .justify-center .justify-between .gap-4 .gap-6 .gap-8
.grid .grid-2 .grid-3 .grid-4
.w-full .h-full .max-w-sm .max-w-md .max-w-lg .max-w-xl .max-w-2xl .max-w-3xl .max-w-4xl

/* Colors */
.bg-primary .bg-secondary .bg-accent .bg-background .bg-alt
.border-primary .border-secondary .border-accent

/* Display */
.block .inline .inline-block .hidden
.rounded-sm .rounded-md .rounded-lg .rounded-xl .rounded-full
.shadow-xs .shadow-sm .shadow-md .shadow-lg .shadow-xl

/* Responsive */
.md:flex .md:grid .md:text-lg .lg:w-1/2 .lg:gap-8
```

---

## 📝 BEFORE & AFTER EXAMPLES

### Example 1: Hero Section

**❌ BEFORE (with inline styles):**
```typescript
<section class="section">
  <div class="h1" style={{ marginBottom: "0.75rem" }}>
    Boswell Digital Solutions
  </div>
  <p style={{ margin: "0 0 1rem", color: "#4A5568" }}>
    Veteran-Owned · Government-Grade · AI-Powered
  </p>
  <p style={{ maxWidth: "620px", marginBottom: "1.5rem" }}>
    Software for developers, authors, and public-sector partners
  </p>
</section>
```

**✅ AFTER (utility-first):**
```typescript
<section class="hero">
  <h1 class="mb-4">Boswell Digital Solutions</h1>
  <p class="text-secondary mb-4">
    Veteran-Owned · Government-Grade · AI-Powered
  </p>
  <p class="max-w-2xl mx-auto mb-6">
    Software for developers, authors, and public-sector partners
  </p>
</section>
```

**Key Changes:**
- `style={{ marginBottom: "0.75rem" }}` → `mb-4` (or `class="mb-3"` for 12px)
- `style={{ color: "#4A5568" }}` → `text-secondary`
- `style={{ maxWidth: "620px" }}` → `max-w-2xl`
- Use semantic `<h1>` instead of `<div class="h1">`
- Remove inline style objects entirely

---

### Example 2: Product Card

**❌ BEFORE:**
```typescript
<div class="card">
  <div class="card-header">
    <h3 class="h3">{props.name}</h3>
    {props.tagline && <p class="card-tagline">{props.tagline}</p>}
  </div>
  <p class="card-description">{props.description}</p>
  {props.audience && (
    <p class="card-audience text-muted text-sm">
      For: {props.audience}
    </p>
  )}
  <div class="card-actions mt-md flex gap-sm flex-wrap">
    {/* buttons */}
  </div>
</div>
```

**✅ AFTER:**
```typescript
<div class="card p-6 shadow-md rounded-lg">
  <div class="mb-4">
    <h3 class="text-2xl font-semibold mb-2">{props.name}</h3>
    {props.tagline && (
      <p class="text-sm italic text-accent">{props.tagline}</p>
    )}
  </div>
  <p class="text-base mb-4">{props.description}</p>
  {props.audience && (
    <p class="text-sm text-muted mb-6">
      For: {props.audience}
    </p>
  )}
  <div class="flex gap-4 flex-wrap">
    {/* buttons */}
  </div>
</div>
```

**Key Changes:**
- Add spacing/shadow/radius utilities directly to card: `p-6 shadow-md rounded-lg`
- Use `text-2xl font-semibold mb-2` instead of separate `.h3` class
- Use `text-sm` for small text instead of `.text-muted`
- Use `flex gap-4` instead of `.card-actions mt-md flex gap-sm`

---

### Example 3: Button Group

**❌ BEFORE:**
```typescript
<div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
  <button class="btn btn-primary">Learn more</button>
  <button class="btn btn-outline">Contact for teams</button>
</div>
```

**✅ AFTER:**
```typescript
<div class="flex gap-6 mt-8">
  <button class="btn btn-primary">Learn more</button>
  <button class="btn btn-outline">Contact for teams</button>
</div>
```

---

### Example 4: Form

**❌ BEFORE:**
```typescript
<form style={{ maxWidth: "500px", margin: "2rem auto" }}>
  <input 
    type="text" 
    placeholder="Name" 
    style={{ 
      width: "100%", 
      padding: "0.75rem", 
      marginBottom: "1rem",
      border: "1px solid #ccc"
    }} 
  />
</form>
```

**✅ AFTER:**
```typescript
<form class="max-w-lg mx-auto my-8">
  <input 
    type="text" 
    placeholder="Name" 
    class="w-full p-3 mb-4 border border-border rounded-md"
  />
</form>
```

---

### Example 5: Grid Layout

**❌ BEFORE:**
```typescript
<div style={{ 
  display: "grid", 
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem",
  marginTop: "2rem"
}}>
  {products.map(p => <ProductCard key={p.id} {...p} />)}
</div>
```

**✅ AFTER:**
```typescript
<div class="grid-auto-fit mt-8">
  <For each={products}>
    {(p) => <ProductCard {...p} />}
  </For>
</div>
```

---

### Example 6: Responsive Layout

**❌ BEFORE:**
```typescript
<div style={{ 
  display: "flex", 
  flexDirection: "column",
  gap: "1.5rem",
  padding: "1rem"
}}>
  {/* Mobile layout */}
</div>
```

**✅ AFTER:**
```typescript
<div class="flex flex-col gap-6 p-4 md:flex-row md:gap-8">
  {/* Auto responsive - stack on mobile, row on tablet+ */}
</div>
```

---

## 🔑 MAPPING GUIDE

### Spacing (Old → New)

```
style={{ marginBottom: "0.25rem" }}     → mb-1
style={{ marginBottom: "0.5rem" }}      → mb-2
style={{ marginBottom: "0.75rem" }}     → mb-3
style={{ marginBottom: "1rem" }}        → mb-4
style={{ marginBottom: "1.25rem" }}     → mb-5
style={{ marginBottom: "1.5rem" }}      → mb-6
style={{ marginBottom: "1.75rem" }}     → mb-7
style={{ marginBottom: "2rem" }}        → mb-8
style={{ marginBottom: "2.5rem" }}      → mb-10
style={{ marginBottom: "3rem" }}        → mb-12
style={{ marginBottom: "4rem" }}        → mb-16
style={{ marginBottom: "5rem" }}        → mb-20
style={{ marginBottom: "6rem" }}        → mb-24
style={{ marginBottom: "8rem" }}        → mb-32

Same for: mt-, ml-, mr-, p-, px-, py-, etc
```

### Colors (Old → New)

```
style={{ color: "#1A1A1A" }}     → class="text-text"
style={{ color: "#4A5568" }}     → class="text-secondary" or class="text-text-light"
style={{ color: "#6B7280" }}     → class="text-muted"
style={{ color: "#0A2A43" }}     → class="text-primary"
style={{ color: "#CBA86F" }}     → class="text-accent"

style={{ backgroundColor: "#F7F7F5" }}  → class="bg-alt"
style={{ backgroundColor: "#FFFFFF" }}  → class="bg-background"
style={{ backgroundColor: "#0A2A43" }}  → class="bg-primary"
```

### Typography (Old → New)

```
style={{ fontSize: "0.875rem" }}  → class="text-sm"
style={{ fontSize: "1rem" }}      → class="text-base"
style={{ fontSize: "1.125rem" }}  → class="text-lg"
style={{ fontSize: "1.25rem" }}   → class="text-xl"
style={{ fontSize: "1.5rem" }}    → class="text-2xl"
style={{ fontSize: "1.875rem" }}  → class="text-3xl"
style={{ fontSize: "2.25rem" }}   → class="text-4xl"

style={{ fontWeight: 500 }}       → class="font-medium"
style={{ fontWeight: 600 }}       → class="font-semibold"
style={{ fontWeight: 700 }}       → class="font-bold"
```

### Layout (Old → New)

```
style={{ display: "flex" }}                              → class="flex"
style={{ display: "flex", flexDirection: "column" }}    → class="flex flex-col"
style={{ display: "flex", justifyContent: "center" }}   → class="flex justify-center"
style={{ display: "flex", alignItems: "center" }}       → class="flex items-center"
style={{ display: "flex", gap: "1rem" }}                → class="flex gap-4"
style={{ display: "flex", gap: "1.5rem" }}              → class="flex gap-6"
style={{ display: "flex", gap: "2rem" }}                → class="flex gap-8"
style={{ display: "grid" }}                             → class="grid"
style={{ maxWidth: "500px" }}                           → class="max-w-lg"
style={{ maxWidth: "620px" }}                           → class="max-w-2xl"
style={{ margin: "0 auto" }}                            → class="mx-auto"
```

---

## 🎯 PAGE-BY-PAGE REFACTORING

### Pages to Refactor (in order):

1. **Home.tsx** — Hero + sections
2. **Apps.tsx** — Product grid
3. **Government.tsx** — Hero + sections
4. **About.tsx** — Text + layout
5. **Services.tsx** — Cards + layout
6. **Contact.tsx** — Form
7. **Portfolio.tsx** — Grid
8. **Privacy.tsx** — Prose

### Components to Refactor (in order):

1. **Header.tsx** — Already good, minor tweaks
2. **Footer.tsx** — Add utilities
3. **Section.tsx** — Add utilities
4. **ProductCard.tsx** — Refactor
5. **ProductGrid.tsx** — Add utilities
6. **Layout.tsx** — Minor tweaks

---

## ✅ REFACTORING CHECKLIST

For each component/page, verify:

- [ ] No inline `style={{ ... }}` objects
- [ ] No hardcoded color values (#hex)
- [ ] No hardcoded spacing (rem values)
- [ ] All spacing uses utility classes (mt-, mb-, p-, gap-, etc)
- [ ] All colors use CSS variables/utility classes (text-primary, bg-alt, etc)
- [ ] All typography uses text-* and font-* classes
- [ ] All layout uses flex/grid utilities
- [ ] Semantic HTML (h1, h2, etc instead of divs)
- [ ] All interactive elements have focus states
- [ ] Mobile responsive (flex-col on mobile, row on desktop)

---

## 🚀 QUICK WINS (Do First)

These are the easiest to refactor:

### 1. Remove All Inline Styles

**Search for:**
```
style={{
```

**Replace with appropriate utility classes**

### 2. Convert Hardcoded Colors

**Search for:**
```
color: "#
backgroundColor: "
border.*#
```

**Replace with CSS variables or utility classes**

### 3. Add Spacing Utilities

**Search for:**
```
margin.*rem
padding.*rem
gap:.*rem
```

**Replace with utility classes**

---

## 📋 SPECIFIC FILE EXAMPLES

### Home.tsx Refactoring

**❌ Current issues:**
- Inline styles on hero
- Hardcoded margins
- Old utility class usage

**✅ Refactored version:**
```typescript
import type { Component } from 'solid-js'
import { Section } from '~/components/Section'
import { ProductGrid } from '~/components/ProductGrid'
import { APPS } from '~/config/apps'
import Seo from '~/components/Seo'
import { META_CONFIG } from '~/config/meta'

const Home: Component = () => {
  const developerApps = APPS.filter(a => a.category === 'developer-tools')

  return (
    <>
      <Seo {...META_CONFIG.home} />
      <main id="main">
        {/* Hero Section */}
        <section class="hero bg-gradient-to-br from-primary to-primary-light text-white py-32 px-4 text-center">
          <h1 class="text-4xl font-bold mb-4">Boswell Digital Solutions</h1>
          <p class="text-lg text-white/90 mb-4">
            Building human-centered AI and web software for developers, authors, and public agencies.
          </p>
          <p class="text-base text-white/80 max-w-2xl mx-auto">
            Veteran-owned, government-grade, AI-powered tools — designed from real field and federal experience.
          </p>
          <div class="flex gap-4 mt-8 justify-center">
            <a href="/apps" class="btn btn-primary">Explore Apps</a>
            <a href="/government" class="btn btn-outline">Government Solutions</a>
          </div>
        </section>

        {/* Applications Section */}
        <Section title="Applications" subtitle="Tools for developers, authors, and public agencies." id="apps">
          <ProductGrid products={developerApps} columns={3} />
          <div class="text-center mt-12">
            <a href="/apps" class="btn btn-primary">View All Applications</a>
          </div>
        </Section>

        {/* Why Choose Us Section */}
        <Section title="Why Choose Boswell Digital" class="bg-alt">
          <div class="grid grid-auto-fit gap-8">
            <div class="card p-6">
              <h3 class="text-xl font-semibold mb-3 text-primary">Government Credibility</h3>
              <p class="text-text-light">
                Veterans with federal experience understand compliance, security, and procurement.
              </p>
            </div>
            <div class="card p-6">
              <h3 class="text-xl font-semibold mb-3 text-primary">Modern Engineering</h3>
              <p class="text-text-light">
                Built with current technologies: AI, cloud-native, accessibility, security-first.
              </p>
            </div>
            <div class="card p-6">
              <h3 class="text-xl font-semibold mb-3 text-primary">Human-Centered Design</h3>
              <p class="text-text-light">
                We design for real users and solve actual problems, not just add features.
              </p>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <section class="bg-primary text-white py-20 px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Transform Your Digital Tools?</h2>
          <p class="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how Boswell Digital can help your organization.
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="/contact" class="btn bg-accent hover:bg-accent-dark text-white">Get in Touch</a>
            <a href="/about" class="btn bg-primary-light hover:bg-primary-lighter text-white">Learn More</a>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
```

---

## 🎓 UTILITY CLASSES CHEAT SHEET

### Most Common Classes You'll Use:

```
/* Spacing - MOST IMPORTANT */
mt-4 mb-6 p-4 px-6 py-8 gap-4 gap-6 gap-8

/* Typography */
text-sm text-lg text-2xl text-3xl
font-medium font-semibold font-bold
text-center text-primary text-muted

/* Layout */
flex flex-col items-center justify-center
gap-4 gap-6 gap-8
grid grid-auto-fit
w-full max-w-2xl mx-auto

/* Display */
block hidden rounded-lg shadow-md
bg-primary bg-alt border border-border

/* Responsive */
md:flex md:gap-8 lg:w-1/2 lg:grid
```

---

## 🚀 IMPLEMENTATION STEPS

1. **Open Home.tsx**
2. **Remove all `style={{ ... }}` objects**
3. **Replace with utility classes**
4. **Save and test in browser**
5. **Check mobile responsive**
6. **Move to next page/component**

**Repeat for all pages and components**

---

## ✨ FINAL RESULT

After refactoring:

✅ All pages use utility-first CSS  
✅ No inline styles  
✅ No hardcoded values  
✅ Clean, readable markup  
✅ Easy to maintain  
✅ Fast to modify  
✅ Professional appearance  

---

**Ready to start refactoring? Pick a page and go! 🚀**
