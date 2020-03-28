import React, { SyntheticEvent, FunctionComponent, useState } from "react";

interface Props {
   onSubmit: any;
   joinCommand: string;
}

export const Form: FunctionComponent<Props> = ({ onSubmit, joinCommand }) => {
   const [input, setInput] = useState("");
   const exampleArr = ["A","list","like","this"];
   const handleSubmit = (event: SyntheticEvent) => {
      event.preventDefault();
      // let strArray = Array.from(new Set(input.split(actionToSplitCommand(optionType)))); // Removes duplicates
      onSubmit(input);
   };
   const handleChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setInput(event.target.value);
   };
   return (
      <form className="Form" action="submit" onSubmit={handleSubmit}>
         <textarea
            name="email_input"
            id="email_input"
            cols={30}
            rows={5}
            onChange={handleChange}
            placeholder={"Place your list here. E.g. \n" + exampleArr.join(joinCommand)}
         ></textarea>
         <input type="submit" value="Filter" />
      </form>
   );
};

export default Form;
