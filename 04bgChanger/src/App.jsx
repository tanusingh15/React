import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center absolute bottom-12 bg-white inset-x-4 rounded-xl gap-3 shadow-lg px-3 py-2">
          <botton
            onClick={() => setColor("blue")}
            className="px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </botton>
          <botton 
            onClick={() => setColor("red")}
            className="px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </botton>
          <botton
            onClick={() => setColor("black")}
            className="px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </botton>
          <botton
            onClick={() => setColor("yellow")}
            className="px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </botton>
          <botton
            onClick={() => setColor("green")}
            className="px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </botton>
        </div>
      </div>
    </>
  );
}

export default App;
