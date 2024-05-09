import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      sm: { FontSize: '$xl' },
      md: { FontSize: '$2xl' },
      lg: { FontSize: '$4xl' },
      '2xl': { FontSize: '$5xl' },
      '3xl': { FontSize: '$6xl' },
      '4xl': { FontSize: '$7xl' },
      '5xl': { FontSize: '$8xl' },
      '6xl': { FontSize: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'
