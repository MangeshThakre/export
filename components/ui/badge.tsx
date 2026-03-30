import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-medium font-body tracking-wider uppercase transition-colors',
  {
    variants: {
      variant: {
        default:  'bg-stone-100 text-stone-600 border border-stone-200',
        amber:    'bg-amber-50 text-amber-700 border border-amber-200',
        outline:  'border border-stone-300 text-stone-600',
        dark:     'bg-stone-900 text-stone-50',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
