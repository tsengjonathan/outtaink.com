import React, { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import '@fontsource/noto-sans-tc/300.css'
import '@fontsource/noto-sans-tc/400.css'
import '@fontsource/noto-sans-tc/500.css'
import '@fontsource/noto-sans-tc/700.css'

import 'prismjs/themes/prism.css'

import '../styles/tailwind.css'
import '../styles/global.css'
import '../styles/index.css'

import 'pure-react-carousel/dist/react-carousel.es.css'
import Layout from '../components/Layout'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const Application = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Application
