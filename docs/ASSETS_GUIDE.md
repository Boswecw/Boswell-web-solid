# Assets Guide: Boswell Digital Solutions

**Purpose**: Specifications for creating brand assets (logo, favicon, Open Graph images)
**Last Updated**: December 10, 2024

---

## 📋 Required Assets

| Asset | Size | Format | Priority | Status |
|-------|------|--------|----------|--------|
| Logo | 512x512px min | PNG (transparent) | High | ⚠️ Missing |
| Favicon | 32x32px | ICO/PNG | High | ⚠️ Missing |
| OG Image | 1200x630px | JPG/PNG | High | ⚠️ Missing |
| Apple Touch Icon | 180x180px | PNG | Medium | ⚠️ Missing |
| Large Favicon | 192x192px | PNG | Medium | ⚠️ Missing |

---

## 🎨 Brand Identity

### Color Palette

**Primary Colors:**
- Deep Federal Blue: `#0A2A43` (RGB: 10, 42, 67)
- Service Bronze: `#CBA86F` (RGB: 203, 168, 111)
- Forest Green: `#2E5A3F` (RGB: 46, 90, 63)

**Neutrals:**
- Charcoal Text: `#1A1A1A` (RGB: 26, 26, 26)
- Off-White: `#F7F7F5` (RGB: 247, 247, 245)
- White: `#FFFFFF`

### Typography

**Primary Font:** System Sans-Serif Stack
- macOS/iOS: -apple-system, BlinkMacSystemFont
- Windows: Segoe UI
- Android: Roboto
- Fallback: Helvetica Neue, Arial, sans-serif

**Font Weights:**
- Headings: 700 (Bold)
- Body: 400 (Regular)
- Emphasis: 600 (Semi-Bold)

---

## 🖼️ Asset #1: Logo (logo.png)

### Specifications

**Dimensions:** 512x512px (minimum), 1024x1024px (recommended)
**Format:** PNG with transparency
**Color Mode:** RGB
**Location:** `/public/logo.png`

### Design Requirements

**Content:**
- Company name: "Boswell Digital Solutions"
- Optional: Abbreviated "BDS" for icon version
- Include SDVOSB indicator (subtle, professional)
- Military/veteran theme (optional: subtle service ribbon, star)

**Style Guide:**
- Clean, modern, professional
- Government-credible aesthetic
- Works at small sizes (32px) and large (512px)
- Minimal detail (scales well)
- Strong silhouette

**Color Options:**
1. **Full Color** (Recommended)
   - Deep Federal Blue (#0A2A43) for primary elements
   - Service Bronze (#CBA86F) for accents
   - White background or transparent

2. **Monochrome** (Alternative)
   - Single color: Deep Federal Blue (#0A2A43)
   - Transparent background

**Safe Zone:**
- Maintain 10% padding on all sides
- No critical elements within 20px of edges

### Usage Contexts

- Website header (navigation bar)
- Favicon (scaled down to 32x32px)
- Open Graph image (combined with text)
- Business cards and marketing materials
- Email signatures

### File Deliverables

```
public/
├── logo.png          (1024x1024px - high resolution)
├── logo-512.png      (512x512px - standard)
├── logo-192.png      (192x192px - Android icons)
└── logo-32.png       (32x32px - favicon fallback)
```

### Design Tools Recommendations

**Option 1: Professional Designer** (Recommended for best results)
- Hire on Fiverr, Upwork, or 99designs
- Budget: $50-$200 for logo package
- Request vector source files (AI, SVG)

**Option 2: AI Generation** (Quick prototype)
- Tools: Midjourney, DALL-E 3, Adobe Firefly
- Prompt example:
  ```
  "Professional logo for 'Boswell Digital Solutions',
  Service-Disabled Veteran-Owned software company,
  minimalist design, Deep Federal Blue (#0A2A43),
  Service Bronze (#CBA86F) accents, government credible,
  clean geometric shapes, works at small sizes"
  ```

**Option 3: DIY Tools** (Budget option)
- Canva Pro (templates available)
- Adobe Express
- Figma (free tier)
- Inkscape (free, open-source)

---

## 🌐 Asset #2: Open Graph Image (og-cover.jpg)

### Specifications

**Dimensions:** 1200x630px (exact)
**Format:** JPG (optimized) or PNG
**File Size:** < 1MB (< 300KB recommended)
**Aspect Ratio:** 1.91:1 (Facebook/LinkedIn standard)
**Color Mode:** RGB
**Location:** `/public/og-cover.jpg`

### Design Requirements

**Layout Structure:**

```
┌─────────────────────────────────────┐
│                                     │
│         Logo (centered top)         │
│                                     │
│    BOSWELL DIGITAL SOLUTIONS        │
│                                     │
│  Government-Grade SaaS Solutions    │
│   from a Veteran-Owned Business     │
│                                     │
│        [6 App Icons Row]            │
│                                     │
└─────────────────────────────────────┘
```

**Content Requirements:**
1. **Top Section (Logo)**
   - Centered logo (200x200px max)
   - 60px top margin

2. **Middle Section (Text)**
   - Company name: "Boswell Digital Solutions"
   - Font size: 64px, bold
   - Color: Deep Federal Blue (#0A2A43)
   - Tagline: "Government-Grade SaaS Solutions"
   - Font size: 32px, regular
   - Color: Charcoal (#1A1A1A)
   - Sub-tagline: "Service-Disabled Veteran-Owned Small Business"
   - Font size: 24px, semi-bold
   - Color: Service Bronze (#CBA86F)

3. **Bottom Section (Apps - Optional)**
   - Icons or names of 6 Forge Ecosystem apps
   - Small, subtle, 40px height max

**Background:**
- Option 1: Clean gradient (white to off-white)
- Option 2: Solid off-white (#F7F7F5)
- Option 3: Subtle pattern (minimal, professional)

**Safe Zone:**
- Text/logo must be 60px from all edges
- Critical content within 1200x600px center area
- Account for mobile/desktop cropping

### Usage Contexts

- Facebook shares
- LinkedIn shares
- Twitter cards (1200x600px crop)
- Slack/Discord unfurls
- Email previews

### Creation Tools

**Recommended:** Canva Pro
1. Use "Facebook Post" template (1200x630px)
2. Set brand colors in palette
3. Add logo, text, background
4. Export as JPG (high quality, < 1MB)

**Alternative:** Figma
1. Create 1200x630px frame
2. Design layout with brand assets
3. Export as PNG or JPG (2x for retina)

**Batch Tool:** [RealFaviconGenerator](https://realfavicongenerator.net/)
- Generates OG images from single source
- Handles multiple platforms automatically

### File Deliverables

```
public/
├── og-cover.jpg           (1200x630px - main OG image)
├── og-cover-twitter.jpg   (1200x600px - Twitter card)
└── og-cover-square.jpg    (1200x1200px - optional)
```

---

## 🔖 Asset #3: Favicon (favicon.ico)

### Specifications

**Dimensions:** 32x32px (standard), 16x16px (legacy)
**Format:** ICO (multi-size) or PNG
**Color Mode:** RGB with transparency
**Location:** `/public/favicon.ico`

### Design Requirements

**Simplified Logo Version:**
- Use logo as base, simplify for 32x32px
- High contrast (works on light and dark backgrounds)
- Clear at 16x16px (browser tab size)
- Recognizable silhouette

**Color Options:**
1. **Full Color** (if logo is simple enough)
2. **Monochrome** (Deep Federal Blue on transparent)
3. **Inverted** (White on Deep Federal Blue background)

**Technical:**
- ICO file should contain multiple sizes:
  - 16x16px (legacy browsers)
  - 32x32px (standard)
  - 48x48px (Windows desktop)
  - 64x64px (high DPI)

### Additional Favicon Formats

**Apple Touch Icon:**
```html
<!-- Add to public/apple-touch-icon.png -->
<!-- Size: 180x180px -->
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

**Modern Favicons:**
```html
<!-- Add to public/favicon-16x16.png and favicon-32x32.png -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
```

**Android Chrome:**
```html
<!-- Add to public/android-chrome-192x192.png and android-chrome-512x512.png -->
<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png">
```

### Creation Tools

**Recommended:** [RealFaviconGenerator](https://realfavicongenerator.net/)
1. Upload master logo (1024x1024px PNG)
2. Customize for each platform
3. Download complete package
4. Extract to `/public` folder

**Alternative:** Favicon.io
- Generate from text (BDS initials)
- Generate from image (upload logo)
- Generate from emoji (optional)

**Manual:** Photoshop/GIMP
1. Create 32x32px canvas
2. Simplify logo design
3. Save as PNG (32-bit with transparency)
4. Convert to ICO using online tool

### File Deliverables

```
public/
├── favicon.ico              (32x32px, 16x16px multi-size)
├── favicon-16x16.png        (16x16px)
├── favicon-32x32.png        (32x32px)
├── apple-touch-icon.png     (180x180px)
├── android-chrome-192x192.png (192x192px)
├── android-chrome-512x512.png (512x512px)
└── site.webmanifest         (PWA manifest)
```

---

## 📝 Implementation Checklist

### Step 1: Create Assets

- [ ] Design logo (1024x1024px PNG with transparency)
- [ ] Create OG image (1200x630px JPG)
- [ ] Generate favicon package (multiple sizes)
- [ ] Create Apple touch icon (180x180px)
- [ ] Create Android icons (192x192px, 512x512px)

### Step 2: Optimize Assets

- [ ] Compress logo PNG (use TinyPNG or ImageOptim)
- [ ] Compress OG image JPG (< 300KB ideal)
- [ ] Generate multi-size ICO file
- [ ] Verify all images display correctly
- [ ] Test transparency on dark backgrounds

### Step 3: Add to Project

```bash
# Copy assets to public folder
cp logo-1024.png public/logo.png
cp og-cover.jpg public/og-cover.jpg
cp favicon.ico public/favicon.ico
cp apple-touch-icon.png public/apple-touch-icon.png
cp android-chrome-*.png public/

# Verify placement
ls -lh public/
```

### Step 4: Update HTML Meta Tags

The meta tags are already configured in `dev/config/meta.ts` and `dev/components/Seo.tsx`. Once assets are added, they'll be automatically referenced.

**Current meta.ts references:**
```typescript
ogImage: 'https://boswelldigitalsolutions.com/og-cover.jpg'
```

**Current Seo.tsx includes:**
```tsx
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

### Step 5: Add Additional Meta Tags

Add to `dev/components/Seo.tsx` after favicon line:

```tsx
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
```

### Step 6: Create Web Manifest

Create `public/site.webmanifest`:

```json
{
  "name": "Boswell Digital Solutions",
  "short_name": "BDS",
  "description": "Government-Grade SaaS Solutions - Service-Disabled Veteran-Owned Small Business",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#0A2A43",
  "background_color": "#FFFFFF",
  "display": "standalone",
  "start_url": "/"
}
```

### Step 7: Verify Assets

- [ ] Visit site, check favicon in browser tab
- [ ] Share URL on Facebook, verify OG image
- [ ] Share URL on LinkedIn, verify OG image
- [ ] Share URL on Twitter, verify Twitter card
- [ ] Test on mobile (iOS Safari, Android Chrome)
- [ ] Validate with [Open Graph Debugger](https://www.opengraph.xyz/)
- [ ] Test with [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

## 🛠️ Quick Start: Generate Assets Now

### Option 1: RealFaviconGenerator (Recommended)

1. **Create master logo** (1024x1024px PNG)
2. Visit: https://realfavicongenerator.net/
3. Upload your logo
4. Customize settings:
   - iOS: Use original logo, add margin
   - Android: Use original logo, add margin
   - Windows: Solid background (Deep Federal Blue)
   - macOS Safari: Monochrome version
5. Generate package
6. Download and extract to `/public`
7. Copy HTML code to `Seo.tsx`

### Option 2: Canva Pro (For OG Image)

1. Sign up for Canva Pro (14-day free trial)
2. Use "Facebook Post" template (1200x630px)
3. Brand Kit:
   - Add colors: #0A2A43, #CBA86F, #2E5A3F
   - Upload logo (if available)
4. Design layout (see structure above)
5. Download as JPG (high quality)
6. Save as `public/og-cover.jpg`

### Option 3: Hire Designer (Best Quality)

**Platforms:**
- Fiverr: Search "logo design + favicon + social media kit"
- 99designs: Logo design contest
- Upwork: Hire branding designer

**Budget:** $100-$300 for complete package

**Deliverables to request:**
- Logo (PNG, SVG, EPS source files)
- Favicon (multi-size ICO package)
- OG image (1200x630px JPG)
- All sizes listed in this guide
- Brand style guide (optional)

**Turnaround:** 3-7 days

---

## 📊 Asset Quality Standards

### Logo
- ✅ Scales to 32x32px without losing clarity
- ✅ Works on light and dark backgrounds
- ✅ Professional, government-credible aesthetic
- ✅ Represents veteran-owned business values
- ✅ Vector source files available (SVG, AI)

### OG Image
- ✅ Text is readable at small sizes (mobile preview)
- ✅ Brand colors used consistently
- ✅ File size < 300KB (fast loading)
- ✅ Safe zone respected (60px margin)
- ✅ Displays correctly on all platforms

### Favicon
- ✅ Recognizable at 16x16px
- ✅ High contrast (visible in browser tabs)
- ✅ Multi-size ICO generated
- ✅ Transparency works correctly
- ✅ Apple and Android icons included

---

## 🔍 Testing Assets

### Browser Tab Test
```
1. Open site in browser
2. Check favicon appears in tab
3. Test on Chrome, Firefox, Safari, Edge
4. Verify clarity at normal and high DPI
```

### Social Media Test
```
1. Share site URL on Facebook
   - Preview should show OG image
   - Title and description correct
2. Share on LinkedIn
   - Verify professional appearance
3. Share on Twitter
   - Test Twitter card rendering
4. Test in Slack/Discord
   - Unfurl should show OG image
```

### Mobile Test
```
1. Add site to iOS home screen
   - Apple touch icon should appear
2. Add to Android home screen
   - Android icon should appear
3. View in mobile browsers
   - Favicon visible in address bar
```

### Validation Tools
- [Open Graph Debugger](https://www.opengraph.xyz/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

## 📚 Additional Resources

### Design Inspiration
- [LogoLounge](https://www.logolounge.com/) - Logo trends
- [Dribbble](https://dribbble.com/tags/logo) - Logo designs
- [Behance](https://www.behance.net/search/projects?search=logo) - Case studies

### Color Tools
- [Coolors](https://coolors.co/) - Palette generator
- [Adobe Color](https://color.adobe.com/) - Color schemes
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) - WCAG compliance

### Optimization Tools
- [TinyPNG](https://tinypng.com/) - PNG compression
- [ImageOptim](https://imageoptim.com/) - Batch optimization
- [Squoosh](https://squoosh.app/) - Advanced image optimization

### Favicon Generators
- [RealFaviconGenerator](https://realfavicongenerator.net/) ⭐ Recommended
- [Favicon.io](https://favicon.io/) - Simple generator
- [Favicon Generator](https://www.favicon-generator.org/) - Basic tool

---

## 🎯 Priority Implementation

**Immediate (This Week):**
1. Create logo (hire designer or use AI tool)
2. Generate favicon package from logo
3. Create OG image in Canva

**Soon (Next Week):**
4. Add Apple touch icon
5. Add Android icons
6. Create web manifest
7. Test on all platforms

**Later (Optional):**
8. Create alternate logo versions (light/dark)
9. Design app-specific icons
10. Create social media cover images

---

**Status:** ⚠️ Assets pending creation
**Next Action:** Choose creation method (designer, AI, or DIY)
**Timeline:** 1-3 days for complete asset package
**Budget:** $0 (DIY) to $300 (professional designer)

---

**Maintained by**: Boswell Digital Solutions LLC
**Last Updated**: December 10, 2024
**Document Version**: 1.0.0
