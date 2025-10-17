# Component & Utility Guide

## New Components & Utilities

### 1. LinkButton Component
**Location**: `src/components/LinkButton.tsx`

**Purpose**: Navigation button that renders as an anchor tag with button styling

**Props**:
- `href` (required): Navigation URL
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `class`: Additional CSS classes
- `children`: Button text/content

**Usage**:
```typescript
import LinkButton from '../components/LinkButton'

// Basic usage
<LinkButton href="/contact">Get Started</LinkButton>

// With variants and sizes
<LinkButton href="/portfolio" variant="outline" size="lg">
  View Portfolio
</LinkButton>

// With custom classes
<LinkButton href="/services" class="transform hover:scale-105">
  View Services
</LinkButton>
```

**When to Use**:
- ✅ Navigation between pages
- ✅ Links that should look like buttons
- ❌ NOT for form submissions (use Button instead)
- ❌ NOT for external links (use `<a>` tag)

---

### 2. Button Component (Updated)
**Location**: `src/components/Button.tsx`

**Purpose**: Action button for form submissions and interactions

**Props**:
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `class`: Additional CSS classes
- `children`: Button text/content
- All standard HTML button attributes

**Usage**:
```typescript
import Button from '../components/Button'

// Form submission
<Button type="submit">Submit Form</Button>

// With click handler
<Button onClick={() => handleAction()}>
  Click Me
</Button>

// Disabled state
<Button disabled={isLoading()}>
  {isLoading() ? 'Loading...' : 'Submit'}
</Button>
```

**When to Use**:
- ✅ Form submissions
- ✅ Click handlers and actions
- ✅ Modal actions
- ❌ NOT for navigation (use LinkButton instead)

---

### 3. Form Utilities
**Location**: `src/utils/formUtils.ts`

**Exports**:

#### `ContactFormData` Interface
```typescript
interface ContactFormData {
  name: string
  email: string
  company?: string
  projectType: string
  budget: string
  timeline: string
  message: string
  selectedPackageId?: string
  selectedPackageName?: string
  selectedPackagePrice?: string
}
```

#### `formDataToObject(formData: FormData)`
Converts FormData to a typed object
```typescript
const form = e.target as HTMLFormElement
const formData = new FormData(form)
const data = formDataToObject(formData) // Type-safe object
```

#### `validateContactForm(data: Partial<ContactFormData>)`
Validates form data and returns errors
```typescript
const { valid, errors } = validateContactForm(formData)
if (!valid) {
  console.log(errors) // { name: "Name is required", ... }
}
```

#### `submitNetlifyForm(formData: Record<string, string>, formName?: string)`
Submits form to Netlify
```typescript
try {
  const response = await submitNetlifyForm(data, "contact")
  if (response.ok) {
    console.log("Form submitted successfully")
  }
} catch (err) {
  console.error("Submission failed:", err)
}
```

**Usage Example**:
```typescript
import { 
  submitNetlifyForm, 
  formDataToObject,
  validateContactForm 
} from '../utils/formUtils'

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  
  const form = e.target as HTMLFormElement
  const formData = new FormData(form)
  const data = formDataToObject(formData)
  
  // Validate
  const { valid, errors } = validateContactForm(data)
  if (!valid) {
    setErrors(errors)
    return
  }
  
  // Submit
  try {
    const response = await submitNetlifyForm(data)
    if (response.ok) {
      setToast({ type: "success", msg: "Submitted!" })
    }
  } catch (err) {
    setToast({ type: "error", msg: "Failed to submit" })
  }
}
```

---

### 4. Configuration
**Location**: `src/config.ts`

**Purpose**: Centralized configuration for the application

**Usage**:
```typescript
import { config } from '../config'

// Access business info
console.log(config.business.email)
console.log(config.business.phone)

// Access social links
const githubUrl = config.social.github

// Access assets
const logoUrl = config.assets.logo

// Access SEO defaults
const defaultTitle = config.seo.defaultTitle

// Access packages
const starterPackage = config.packages.starter
```

**Available Properties**:
- `config.business` - Company information
- `config.social` - Social media links
- `config.assets` - Image URLs and assets
- `config.seo` - SEO default values
- `config.packages` - Service package definitions

---

### 5. NotFoundPage
**Location**: `src/pages/NotFoundPage.tsx`

**Purpose**: 404 error page for undefined routes

**Features**:
- Helpful navigation links
- Contact information
- Professional design
- SEO optimized

**Automatically Loaded**:
- Route: `*` (catch-all)
- Triggered when user visits undefined URL

**No manual usage needed** - automatically handled by router

---

## Migration Guide

### Converting Old Button/Link Pattern

**Before**:
```typescript
import { A } from '@solidjs/router'
import Button from '../components/Button'

<Button>
  <A href="/contact">Start Project</A>
</Button>
```

**After**:
```typescript
import LinkButton from '../components/LinkButton'

<LinkButton href="/contact">
  Start Project
</LinkButton>
```

### Converting .map() to <For>

**Before**:
```typescript
{["React", "TypeScript", "Tailwind"].map(skill => (
  <span>{skill}</span>
))}
```

**After**:
```typescript
import { For } from 'solid-js'

<For each={["React", "TypeScript", "Tailwind"]}>
  {(skill) => <span>{skill}</span>}
</For>
```

### Using Form Utilities

**Before**:
```typescript
const response = await fetch("/", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams(data as any).toString(),
})
```

**After**:
```typescript
import { submitNetlifyForm, formDataToObject } from '../utils/formUtils'

const data = formDataToObject(new FormData(form))
const response = await submitNetlifyForm(data)
```

---

## Best Practices

1. **Always use LinkButton for navigation** - Maintains HTML validity
2. **Use Button for actions** - Form submissions, clicks, etc.
3. **Leverage form utilities** - Type-safe form handling
4. **Use <For> component** - Better SolidJS reactivity
5. **Reference config.ts** - Don't hardcode values
6. **Test all routes** - Including 404 page

---

## Troubleshooting

**Q: LinkButton not working?**
A: Make sure you're importing from `../components/LinkButton` and passing `href` prop

**Q: Form not submitting?**
A: Verify form name matches Netlify form name, use `submitNetlifyForm()` utility

**Q: 404 page not showing?**
A: Ensure `<Route path="*" component={NotFoundPage} />` is last route in App.tsx

**Q: Type errors in form?**
A: Use `formDataToObject()` to convert FormData to typed object

---

## Performance Tips

- LinkButton and Button components are lightweight
- Form utilities are tree-shakeable
- Config is loaded once at startup
- All components use proper code splitting

---

## Support

For questions or issues, refer to:
- `CODE_REVIEW_UPDATES.md` - Detailed change log
- Component source files - Well documented
- Utility files - Inline documentation

