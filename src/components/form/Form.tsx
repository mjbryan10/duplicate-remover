import React, { SyntheticEvent, FunctionComponent, useState } from "react";

interface Props {
   onSubmit: any;
   joinCommand: string;
}

export const Form: FunctionComponent<Props> = ({ onSubmit, joinCommand }) => {
   const [input, setInput] = useState("");
   const [example, setExample] = useState("")
   const handleSubmit = (event: SyntheticEvent) => {
      event.preventDefault();
      // let strArray = Array.from(new Set(input.split(actionToSplitCommand(optionType)))); // Removes duplicates
      onSubmit(input);
   };
   const handleChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setInput(event.target.value);
      let exampleArr = ["A","list","like","this"];
      setExample(exampleArr.join(joinCommand));
   };
   return (
      <form className="Form" action="submit" onSubmit={handleSubmit}>
         <textarea
            name="email_input"
            id="email_input"
            cols={30}
            rows={5}
            onChange={handleChange}
            placeholder={"Place your list here. E.g." + example}
         ></textarea>
         <input type="submit" value="Filter" />
      </form>
   );
};

export default Form;
