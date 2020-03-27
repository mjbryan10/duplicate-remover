import React from "react";

interface Props {
   options: string[];
   optionId: string;
   onChange: any;
}


function Options({ options, optionId, onChange }: Props) {
   // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
   //    onChange(optionId, event.target.value);
   // };
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(optionId, event.currentTarget.value);
   };
   const capitalizeFirstLetter = (string: string): string => {
      return string.charAt(0).toUpperCase() + string.slice(1);
   } 
   // const typeToSymbol = (type:string):string => {
   //    switch (type) {
   //       case "return":
   //          return "	&#9166;"
   //       case   
      
   //       default:
   //          break;
   //    }
   // }
   return (
      <div className="option-list">
         {/* <select onChange={handleChange}>
            {options.map((option: string, index: number) => (
               <option key={index} value={option}>
                  {option}
               </option>
            ))}
         </select> */}
         {options.map((option: string, index: number) => (
            <span>
               <label htmlFor={`${optionId}_${option}`}>{capitalizeFirstLetter(option)}</label>
               <input
                  key={index}
                  type="radio"
                  id={`${optionId}_${option}`}
                  value={option}
                  name={optionId}
                  onChange={handleChange}
               />
            </span>
         ))}
      </div>
   );
}

export default Options;
