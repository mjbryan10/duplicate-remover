import "../../styles/App.scss";
import React, { useState } from "react";
import Header from "../layout/Header";
import Form from "../form/Form";
import { Output } from "../form/Output";
import Options from "../form/Options";

function App() {
   const [output, setOutput] = useState("");
   const [options, setOptions] = useState({
      input: "return",
      output: "return",
   });
   const onSubmit = (emails: [string]) => {};
   const onSelectChange = (optionId: string, action: string) => {
      setOptions({ ...options, [optionId]: action });
   };
   return (
      <div className="App">
         <Header />
         <Options optionId="input" onChange={onSelectChange} />
         <Form onSubmit={onSubmit} optionType={options.input} />
         <Options optionId="output" onChange={onSelectChange} />
         <Output output={output} />
      </div>
   );
}

export default App;
