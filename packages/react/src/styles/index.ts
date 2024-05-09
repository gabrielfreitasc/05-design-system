import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  getCssText,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    // Uma forma de mapear propriedades do css para algum tipo de token
    ...defaultThemeMap,
    height: 'space',
    with: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
