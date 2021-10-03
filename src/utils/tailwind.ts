
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const getFontSize = (type: Size) => {
  const mapping = {
    'xs': 'text-xs',
    'sm': 'text-sm',
    'md': 'text-md',
    'lg': 'text-lg',
    'xl': 'text-xl',
  }
  return mapping[type]
}

export type Color = 'black' | 'white'

export const getTextColor = (type: Color) => {
  const mapping = {
    'black': 'text-black',
    'white': 'text-white',
  }
  return mapping[type]
}
