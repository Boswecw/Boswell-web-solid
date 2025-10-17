import { splitProps } from 'solid-js'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children?: any
  class?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: (e: MouseEvent) => void
  [key: string]: any
}

/**
 * Button component - renders as a button element
 * For navigation links, use LinkButton component instead
 * This ensures valid HTML and proper semantics
 */
export default function Button(props: ButtonProps) {
  const [local, others] = splitProps(props, ['variant', 'size', 'children', 'class'])

  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline: "border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 focus:ring-blue-500",
    ghost: "text-gray-300 hover:text-white hover:bg-gray-700/50 focus:ring-gray-500"
  }

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-md",
    lg: "px-6 py-3 text-lg rounded-lg"
  }

  const variant = local.variant || 'primary'
  const size = local.size || 'md'

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${local.class || ''}`

  return (
    <button class={classes} {...others}>
      {local.children}
    </button>
  )
}
