import React, { useState } from "react";

interface Props {
   output: string;
}

export const Output = ({ output }: Props) => {
   const [isCopied, setIsCopied] = useState(false);
   return (
      <div className="output-container">
         <textarea
            name="output_field"
            id="output_field"
            cols={30}
            rows={5}
            value={output}
         ></textarea>
         {/* <button className={isCopied ? "copied" : ""}>{isCopied ? "Copied" : "Copy to clipboard"}</button> */}
      </div>
   );
};
