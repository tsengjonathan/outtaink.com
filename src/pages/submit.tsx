import React from 'react'
import { Widget } from '@typeform/embed-react'

const SubmitPage = () => {
  const formId = 'GOaFCYbc'

  return (
    <div className="mx-4 my-6 md:mt-0 md:mb-12">
      <Widget
        className="flex justify-center filter drop-shadow-lg"
        height={720} width={1080}
        id={formId}
      />
    </div>
  )
}

export default SubmitPage
