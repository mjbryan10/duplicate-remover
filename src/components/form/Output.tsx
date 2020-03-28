import React, { useState, useRef } from "react";

interface Props {
   output: string;
}

export const Output = ({ output }: Props) => {
   const [isCopied, setIsCopied] = useState(false);
   const outputRef = useRef<HTMLTextAreaElement>(null);
   const copyToClipboard = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (outputRef && outputRef.current) {
         outputRef.current.select();
         document.execCommand('copy');
         event.currentTarget.focus();
         setIsCopied(true);
         setTimeout(() => {
            setIsCopied(false);
         }, 1500);
      }
         
   };
   return (
      <div className="output-container">
         <textarea
            name="output_field"
            id="output_field"
            ref={outputRef}
            cols={30}
            rows={5}
            value={output}
         ></textarea>
         {output.length ? <button
            // disabled={output.length ? false : true}
            className={isCopied ? "copied" : ""}
            // style={isCopied ? { backgroundColor: "green", color: "white" } : {}}
            onClick={copyToClipboard}
         >
            {isCopied ? "Copied!" : "Copy to clipboard"}
         </button> : null}
      </div>
   );
};
