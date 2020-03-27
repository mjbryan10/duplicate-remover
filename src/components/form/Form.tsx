import React, { SyntheticEvent, FunctionComponent, useState } from "react";

interface State {
   onSubmit: any;
   optionType: string;
}

export const Form: FunctionComponent<State> = ({ onSubmit, optionType }) => {
   const [input, setInput] = useState("");
   const actionToSplitCommand = (action: string): string => {
      if (action === "return") return "\n";
      if (action === "comma") return ",";
      if (action === "space") return " ";
      return "\n";
   };
   const handleSubmit = (event: SyntheticEvent) => {
      event.preventDefault();
      let strArray = Array.from(new Set(input.split(actionToSplitCommand(optionType)))); // Removes duplicates
      onSubmit(strArray);
   };
   const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInput(event.target.value);

   }
   return (
      <form className="Form" action="submit" onSubmit={handleSubmit}>
         <textarea name="email_input" id="email_input" cols={30} rows={5} onChange={handleChange} placeholder={"Place your list here, in your chosen format"} ></textarea>
         <input type="submit" value="Filter" />
      </form>
   );
};

export default Form;
