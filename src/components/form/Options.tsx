import React from "react";

interface Props {
   optionId: string;
   onChange: any;
}

const options = ["return", "comma", "space"];

function Options({ optionId, onChange }: Props) {
   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(optionId, event.target.value)
   }
   return (
      <div>
         <select onChange={handleChange}>
            {options.map((option: string, index: number) => (
               <option key={index} value={option}>
                  {option}
               </option>
            ))}
         </select>
      </div>
   );
}

export default Options;
