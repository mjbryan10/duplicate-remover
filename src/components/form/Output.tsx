import React from 'react'

interface Props {
   output: string
}

export const Output = ({ output }: Props) => {
   return (
      <div>
         <textarea name="output_field" id="output_field" cols={30} rows={5} >{output}</textarea>
      </div>
   )
}
