import "../../styles/App.scss";
import React, { useState } from "react";
import Header from "../layout/Header";
import Form from "../form/Form";
import { Output } from "../form/Output";
import Options from "../form/Options";

function App() {
   const options = ["return", "comma", "comma + space", "space"]; //Added for usability
   const [outputString, setOutputString] = useState("");
   const [selectedOptions, setSelectedOptions] = useState({
      input: "space",
      output: "space",
   });
   const [error, setError] = useState({
      input: "",
      output: "",
   });
   const actionToSplitCommand = (action: string): string => {
      if (action === "return") return "\n";
      if (action === "comma") return ",";
      if (action === "space") return " ";
      if(action === "comma + space") return ", "
      else return "\n";
   };
   const onSubmit = (inputString: string) => {
      let errorReport = {
         input: "",
         output: ""
      };
      if (!selectedOptions.input) errorReport.input = "Please choose one..";
      if (!selectedOptions.output) errorReport.output = "Please choose one.."
      if (selectedOptions.input.length && selectedOptions.output.length) {
         
         let inputCommand = actionToSplitCommand(selectedOptions.input);
         let outputCommand = actionToSplitCommand(selectedOptions.output);
         let strArray = Array.from(new Set(inputString.split(inputCommand)));
         // Removes duplicates
         let output = strArray.join(outputCommand);
         setOutputString(output);
      } else {
         setError(errorReport);
      }
   };
   const onRadioChange = (optionId: string, action: string) => {
      setSelectedOptions({ ...selectedOptions, [optionId]: action });
      setError({ ...error, [optionId]: "" });
   };
   return (
      <div className="App">
         <Header />
         <Options options={options} optionId="input" onChange={onRadioChange} selectedOption={selectedOptions.input} />
         {error.input.length ? <p>{error.input}</p> : null}
         <Form onSubmit={onSubmit} joinCommand={actionToSplitCommand(selectedOptions.input)} />
         <Options options={options} optionId="output" onChange={onRadioChange} selectedOption={selectedOptions.output} />
         {error.output.length ? <p>{error.output}</p> : null}
         <Output output={outputString} />
      </div>
   );
}

export default App;
