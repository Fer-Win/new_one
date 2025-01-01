import { useState,useEffect } from "react";
import "./App.css";
import Editor from "./components/Editor";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {

  const [html,setHtml] = useLocalStorage('html','')
  const [css,setCss] = useLocalStorage('css','')
  const [js,setJs] = useLocalStorage('js','')
  const [srcDoc,setSrcDoc] = useState('');
  const [topHeight,setTopHeight] = useState('50vh');
  const [bottomHeight,setBottomHeight] = useState('50vh')
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

  const handleDrag=(e)=>{
    console.log('Drag : ',e)
  }


  return (
    <>
      <div className={`flex bg-[hsl(225,6%,25%)] h-[${topHeight}]`}>
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} />
        <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
        <Editor language="javascript" displayName="JS" value={js} onChange={setJs} />
      </div>
      <div className={`relative w-full resize-y  h-[${bottomHeight}]`}>
        {/* <div  onDrag={(e)=>{
          console.log('bro')
          handleDrag(e)}} className="flex absolute left-1/2 -top-2 items-center cursor-n-resize justify-center">
          <GripHorizontal cursor={'drag'} />
        </div> */}
        <iframe src="" width={'100%'} sandbox="allow-scripts" srcDoc={srcDoc} height="100%"  frameBorder="0" title="output"></iframe>
      </div>
    </>
  );
}

export default App;
