import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";

import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";
import { Maximize2, Minimize2, Minimize2Icon } from "lucide-react";

const Editor = (props) => {
  const { displayName, language, value, onChange } = props;
  const [isOpen, setIsOpen] = useState(true);

 

  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <div
      className={`${
        isOpen ? 'flex-grow basis-0': "flex-grow-0"
      }  flex flex-col p-[.5rem] bg-[hsl(225,6%,25%)] `}
    >
      <div className="flex justify-between gap-4 bg-[hsl(225,6%,13%)] rounded-t-md text-white p-[.5rem] pl-[1rem]">
        {displayName}
        <button
          className=""
          onClick={() => {
            setIsOpen((prevOpen:any ) => !prevOpen);
          }}
        >
     {isOpen ? <Minimize2  />:  <Maximize2 size={20}/>}   
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper flex-grow rounded-b-md"
        options={{
          lineWrapping: true,
          mode: language,
          lint: true,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
};

export default Editor;
