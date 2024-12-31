import { useState,useEffect } from "react";
import "./App.css";
import Editor from "./components/Editor";

function App() {

  const [html,setHtml] = useState('')
  const [css,setCss] = useState('')
  const [js,setJs] = useState('')
  const [srcDoc,setSrcDoc] = useState('');
  const [topHeight,setTopHeight] = useState('50vh');
  const [bottomHeight,setBottomHeight] = useState()
  useEffect(()=>{
   const timeout = setTimeout(()=>{
      setSrcDoc(`
    <html>
    <style>${css}</style>
    <body>${html}
    <script>${js}</script>
    </body>

    </html>
  `)
   },250) 


   return ()=> clearTimeout(timeout);
  })


  return (
    <>
      <div className="flex bg-[hsl(225,6%,25%)] h-[50vh]">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} />
        <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
        <Editor language="javascript" displayName="JS" value={js} onChange={setJs} />
      </div>
      <div className="h-[50vh] w-full ">
        <iframe src="" width={'100%'} sandbox="allow-scripts" srcDoc={srcDoc} height="100%"  frameBorder="0" title="output"></iframe>
      </div>
    </>
  );
}

export default App;
