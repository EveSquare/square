import { Layer, Rect, Stage } from "react-konva";

function App() {
  return (
    <>
      <Stage width={300} height={200}>
        <Layer>
          <Rect
            x={20}
            y={20}
            width={100}
            height={100}
            fill="red"
            shadowBlur={10}
          />
        </Layer>
      </Stage>
    </>
  );
}

export default App;
