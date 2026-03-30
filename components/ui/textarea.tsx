import * as React from 'react'
import { cn } from '@/lib/utils'

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        'flex min-h-[120px] w-full rounded-sm border border-stone-200 bg-white px-3.5 py-2.5 text-sm font-body text-stone-900 placeholder:text-stone-400 resize-none',
        'focus:outline-none focus:border-stone-400',
        'transition-colors duration-150',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
Textarea.displayName = 'Textarea'

export { Textarea }
