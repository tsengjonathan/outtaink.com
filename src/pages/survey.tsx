import React, { FC } from 'react'
import { Widget } from '@typeform/embed-react'
import SEO from '../components/SEO'

const SubmitPage: FC = () => {
  const formId = 'GOaFCYbc'

  return (
    <>
      <SEO title="Survey" />
      <div className="mx-4 my-6 md:mt-0 md:mb-12">
        <Widget
          className="flex justify-center filter drop-shadow-lg"
          height={720} width={1080}
          id={formId}
          inlineOnMobile={true}
        />
      </div>
    </>
  )
}

export default SubmitPage
