
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
