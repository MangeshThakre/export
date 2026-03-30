import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-body font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide',
  {
    variants: {
      variant: {
        default:   'bg-stone-900 text-stone-50 hover:bg-stone-800 shadow-sm',
        amber:     'bg-amber text-white hover:bg-amber-600 shadow-sm',
        outline:   'border border-stone-300 bg-transparent text-stone-800 hover:bg-stone-100 hover:border-stone-400',
        ghost:     'text-stone-700 hover:bg-stone-100 hover:text-stone-900',
        link:      'text-amber underline-offset-4 hover:underline p-0 h-auto',
        muted:     'bg-stone-100 text-stone-700 hover:bg-stone-200',
      },
      size: {
        default: 'h-11 px-7 py-2.5 text-[13.5px] rounded-sm',
        sm:      'h-9 px-5 text-[12.5px] rounded-sm',
        lg:      'h-13 px-10 text-[15px] rounded-sm',
        icon:    'h-10 w-10 rounded-sm',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
