import '@fontsource/noto-sans-tc/300.css'
import '@fontsource/noto-sans-tc/400.css'
import '@fontsource/noto-sans-tc/500.css'
import '@fontsource/noto-sans-tc/700.css'

import 'prismjs/themes/prism.css'

import '../src/styles/tailwind.css'
import '../src/styles/global.css'
import '../src/styles/index.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
