
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const getFontSize = (type: Size): string => {
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

export const getTextColor = (type: Color): string => {
  const mapping = {
    'black': 'text-black',
    'white': 'text-white',
  }
  return mapping[type]
}

export const getNavItemSize = (length: number, size: Size): string => {
  const mapping = {
    'lg': {
      2: 'w-18',
      5: 'w-24',
    },
    'xl': {
      2: 'w-20',
      5: 'w-28',
    }
  }
  return (mapping[size] && mapping[size][length]) || ''
}
