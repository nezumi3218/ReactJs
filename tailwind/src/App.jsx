import { useState } from "react"


function App() {
  const [color, setColor]  = useState()

  return (
    <div className="w-full h-screen duration 200"
    style = {{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap jistify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
        <button
        onClick={() => setColor("red")}
        className="outline-none px-4 py1 rounded-full text-gray shadow-lg" 
        style={{backgroundColor: "red"}}
        >Red</button>

        <button
        onClick={() => setColor("lavender")}
        className="outline-none px-4 py1 rounded-full text-gray shadow-lg" 
        style={{backgroundColor: "lavender"}}
        >Lavender</button>

        <button
        onClick={() => setColor("pink")}
        className="outline-none px-4 py1 rounded-full text-gray shadow-lg" 
        style={{backgroundColor: "pink"}}
        >Pink</button>

        <button
        onClick={() => setColor("olive")}
        className="outline-none px-4 py1 rounded-full text-gray shadow-lg" 
        style={{backgroundColor: "olive"}}
        >Olive</button>

        <button
        onClick={() => setColor("blue")}
        className="outline-none px-4 py1 rounded-full text-gray shadow-lg" 
        style={{backgroundColor: "blue"}}
        >Blue</button>

        <button
        onClick={() => setColor("black")}
        className="outline-none px-4 py1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "black"}}
        >Black</button>

        <button
        onClick={() => setColor("green")}
        className="outline-none px-4 py1 rounded-full text-gray shadow-lg" 
        style={{backgroundColor: "green"}}
        >Green</button>

        <button
        onClick={() => setColor("yellow")}
        className="outline-none px-4 py1 rounded-full text-gray shadow-lg" 
        style={{backgroundColor: "yellow"}}
        >Yellow</button>

        <button
        onClick={() => setColor("maroon")}
        className="outline-none px-4 py1 rounded-full text-gray shadow-lg" 
        style={{backgroundColor: "maroon"}}
        >Maroon</button>

        <button
        onClick={() => setColor("violet")}
        className="outline-none px-4 py1 rounded-full text-gray shadow-lg" 
        style={{backgroundColor: "violet"}}
        >Violet</button>
        
        
        </div>
      </div>
    </div>
  )
}

export default App
