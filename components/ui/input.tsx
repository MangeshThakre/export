import * as React from 'react'
import { cn } from '@/lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-sm border border-stone-200 bg-white px-3.5 py-2 text-sm font-body text-stone-900 placeholder:text-stone-400',
        'focus:outline-none focus:border-stone-400 focus:ring-0',
        'transition-colors duration-150',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = 'Input'

export { Input }
