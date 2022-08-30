import { PrismicRichText, useSinglePrismicDocument } from '@prismicio/react'
import React from 'react'


const Test = () => {

    const [document] = useSinglePrismicDocument('test')
console.log([document])
  return (
    <div>
        wtf
      {document && (
        <PrismicRichText field={document.data.body1} />
      )}
    </div>
  )
}
export default Test