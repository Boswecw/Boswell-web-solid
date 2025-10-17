/**
 * Type-safe form utilities for handling form submissions
 */

export interface ContactFormData {
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

/**
 * Convert FormData to a typed object
 * Provides type safety and validation
 */
export function formDataToObject(formData: FormData): Record<string, string> {
  const obj: Record<string, string> = {}
  formData.forEach((value, key) => {
    obj[key] = String(value)
  })
  return obj
}

/**
 * Convert object to URLSearchParams for form submission
 */
export function objectToURLSearchParams(obj: Record<string, string>): URLSearchParams {
  return new URLSearchParams(obj)
}

/**
 * Validate contact form data
 */
export function validateContactForm(data: Partial<ContactFormData>): {
  valid: boolean
  errors: Record<string, string>
} {
  const errors: Record<string, string> = {}

  if (!data.name?.trim()) {
    errors.name = "Name is required"
  }

  if (!data.email?.trim()) {
    errors.email = "Email is required"
  } else if (!isValidEmail(data.email)) {
    errors.email = "Please enter a valid email address"
  }

  if (!data.message?.trim()) {
    errors.message = "Project details are required"
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Simple email validation
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Submit form to Netlify
 */
export async function submitNetlifyForm(
  formData: Record<string, string>,
  formName: string = "contact"
): Promise<Response> {
  const data = new URLSearchParams({
    "form-name": formName,
    ...formData,
  })

  return fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: data.toString(),
  })
}

