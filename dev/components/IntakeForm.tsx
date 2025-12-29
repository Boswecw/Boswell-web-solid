import type { Component, JSX } from 'solid-js'
import { createSignal } from 'solid-js'

interface IntakeFormData {
  name: string
  email: string
  organization: string
  projectType: string
  problem: string
  success: string
  links: string
  deadline: string
  budget: string
  maintenance: string
  decisionMaker: boolean
  scopeFirst: boolean
  aiToolNotAuthority: boolean
}

const emptyForm: IntakeFormData = {
  name: '',
  email: '',
  organization: '',
  projectType: '',
  problem: '',
  success: '',
  links: '',
  deadline: '',
  budget: '',
  maintenance: '',
  decisionMaker: false,
  scopeFirst: false,
  aiToolNotAuthority: false,
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const IntakeForm: Component = () => {
  const [formData, setFormData] = createSignal({ ...emptyForm })
  const [errors, setErrors] = createSignal<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = createSignal(false)
  const [submitStatus, setSubmitStatus] = createSignal<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = createSignal('')

  const updateField = (field: keyof IntakeFormData, value: string | boolean) => {
    setFormData({ ...formData(), [field]: value })
  }

  const validate = () => {
    const data = formData()
    const nextErrors: Record<string, string> = {}

    if (!data.name.trim()) {
      nextErrors.name = 'Full name is required.'
    }

    if (!emailPattern.test(data.email.trim())) {
      nextErrors.email = 'A valid email is required.'
    }

    if (!data.projectType) {
      nextErrors.projectType = 'Select a project type.'
    }

    if (!data.problem.trim()) {
      nextErrors.problem = 'Provide a short problem statement.'
    }

    if (!data.success.trim()) {
      nextErrors.success = 'Define what done looks like.'
    }

    if (!data.maintenance) {
      nextErrors.maintenance = 'Select a maintenance expectation.'
    }

    if (!data.decisionMaker || !data.scopeFirst || !data.aiToolNotAuthority) {
      nextErrors.constraints = 'All constraints must be acknowledged.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent> = async (event) => {
    event.preventDefault()
    console.log('INTAKE SUBMIT CLICKED')
    setSubmitStatus('idle')
    setSubmitMessage('')

    if (!validate()) {
      console.log('INTAKE VALIDATION FAILED', errors())
      return
    }

    setIsSubmitting(true)

    try {
      const payload = {
        name: formData().name,
        email: formData().email,
        org: formData().organization,
        project_type: formData().projectType,
        problem: formData().problem,
        success: formData().success,
        links: formData().links,
        deadline: formData().deadline,
        constraints: {
          decision_maker: formData().decisionMaker,
          scope_first: formData().scopeFirst,
          ai_tool_not_authority: formData().aiToolNotAuthority,
        },
        budget: formData().budget,
        maintenance: formData().maintenance,
      }

      console.log('INTAKE SUBMIT PAYLOAD', payload)
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json().catch(() => null)
      console.log('INTAKE RESPONSE', response.status, result)

      if (!response.ok || result?.error) {
        const message = result?.error?.message || 'Unable to submit intake request.'
        throw new Error(message)
      }

      setSubmitStatus('success')
      setSubmitMessage('Request received. If this is a fit, we will respond.')
      setFormData({ ...emptyForm })
      setErrors({})
    } catch (error) {
      console.log('INTAKE SUBMIT ERROR', error)
      setSubmitStatus('error')
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : 'Unable to submit intake request. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} class="intake-form" noValidate>
      {submitStatus() === 'success' && (
        <div class="alert alert-success" role="status">
          {submitMessage()}
        </div>
      )}

      {submitStatus() === 'error' && (
        <div class="alert alert-error" role="alert">
          {submitMessage()}
        </div>
      )}

      <div class="form-group">
        <label for="name">Full name *</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData().name}
          onInput={(event) => updateField('name', event.currentTarget.value)}
          aria-describedby={errors().name ? 'name-error' : undefined}
        />
        {errors().name && (
          <p id="name-error" class="form-error" role="alert">
            {errors().name}
          </p>
        )}
      </div>

      <div class="form-group">
        <label for="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData().email}
          onInput={(event) => updateField('email', event.currentTarget.value)}
          aria-describedby={errors().email ? 'email-error' : undefined}
        />
        {errors().email && (
          <p id="email-error" class="form-error" role="alert">
            {errors().email}
          </p>
        )}
      </div>

      <div class="form-group">
        <label for="organization">Organization (optional)</label>
        <input
          id="organization"
          name="organization"
          type="text"
          value={formData().organization}
          onInput={(event) => updateField('organization', event.currentTarget.value)}
        />
      </div>

      <div class="form-group">
        <label for="projectType">Project type *</label>
        <select
          id="projectType"
          name="projectType"
          required
          value={formData().projectType}
          onChange={(event) => updateField('projectType', event.currentTarget.value)}
          aria-describedby={errors().projectType ? 'projectType-error' : undefined}
        >
          <option value="">Select one</option>
          <option value="Website">Website</option>
          <option value="Custom Application">Custom Application</option>
          <option value="Both">Both</option>
          <option value="Not sure">Not sure</option>
        </select>
        {errors().projectType && (
          <p id="projectType-error" class="form-error" role="alert">
            {errors().projectType}
          </p>
        )}
      </div>

      <div class="form-group">
        <label for="problem">One-paragraph problem statement *</label>
        <textarea
          id="problem"
          name="problem"
          required
          rows={6}
          value={formData().problem}
          onInput={(event) => updateField('problem', event.currentTarget.value)}
          aria-describedby={errors().problem ? 'problem-error' : undefined}
        />
        {errors().problem && (
          <p id="problem-error" class="form-error" role="alert">
            {errors().problem}
          </p>
        )}
      </div>

      <div class="form-group">
        <label for="success">Success definition: what does done look like? *</label>
        <textarea
          id="success"
          name="success"
          required
          rows={6}
          value={formData().success}
          onInput={(event) => updateField('success', event.currentTarget.value)}
          aria-describedby={errors().success ? 'success-error' : undefined}
        />
        {errors().success && (
          <p id="success-error" class="form-error" role="alert">
            {errors().success}
          </p>
        )}
      </div>

      <div class="form-group">
        <label for="links">Existing system URL or repo link (optional)</label>
        <input
          id="links"
          name="links"
          type="text"
          value={formData().links}
          onInput={(event) => updateField('links', event.currentTarget.value)}
        />
      </div>

      <div class="form-group">
        <label for="deadline">Deadline (optional)</label>
        <input
          id="deadline"
          name="deadline"
          type="text"
          value={formData().deadline}
          onInput={(event) => updateField('deadline', event.currentTarget.value)}
        />
      </div>

      <div class="form-group">
        <label for="budget">Budget range (optional)</label>
        <select
          id="budget"
          name="budget"
          value={formData().budget}
          onChange={(event) => updateField('budget', event.currentTarget.value)}
        >
          <option value="">Select one</option>
          <option value="<2k">&lt;2k</option>
          <option value="2-5k">2-5k</option>
          <option value="5-10k">5-10k</option>
          <option value="10k+">10k+</option>
          <option value="Not sure">Not sure</option>
        </select>
      </div>

      <div class="form-group">
        <label for="maintenance">Maintenance expectation *</label>
        <select
          id="maintenance"
          name="maintenance"
          required
          value={formData().maintenance}
          onChange={(event) => updateField('maintenance', event.currentTarget.value)}
          aria-describedby={errors().maintenance ? 'maintenance-error' : undefined}
        >
          <option value="">Select one</option>
          <option value="One-time">One-time</option>
          <option value="Monthly support">Monthly support</option>
          <option value="Not sure">Not sure</option>
        </select>
        {errors().maintenance && (
          <p id="maintenance-error" class="form-error" role="alert">
            {errors().maintenance}
          </p>
        )}
      </div>

      <fieldset class="form-group" aria-describedby={errors().constraints ? 'constraints-error' : undefined}>
        <legend class="form-legend">Constraints *</legend>
        <label class="checkbox-row">
          <input
            type="checkbox"
            checked={formData().decisionMaker}
            onChange={(event) => updateField('decisionMaker', event.currentTarget.checked)}
          />
          I can provide a single decision-maker for approvals
        </label>
        <label class="checkbox-row">
          <input
            type="checkbox"
            checked={formData().scopeFirst}
            onChange={(event) => updateField('scopeFirst', event.currentTarget.checked)}
          />
          I understand scope must be defined before implementation
        </label>
        <label class="checkbox-row">
          <input
            type="checkbox"
            checked={formData().aiToolNotAuthority}
            onChange={(event) => updateField('aiToolNotAuthority', event.currentTarget.checked)}
          />
          I understand AI is used as a tool, not an authority
        </label>
        {errors().constraints && (
          <p id="constraints-error" class="form-error" role="alert">
            {errors().constraints}
          </p>
        )}
      </fieldset>

      <button type="submit" class="btn btn-primary btn-lg" disabled={isSubmitting()}>
        {isSubmitting() ? 'Submitting...' : 'Submit Request'}
      </button>
    </form>
  )
}
