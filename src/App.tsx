import { Layer, Rect, Shape, Stage } from "react-konva";

function App() {
  return (
    <>
      <Stage width={300} height={200}>
        <Layer>
          <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(100, 150);
              context.lineTo(150, 200);
              context.lineTo(200, 150);
              context.lineTo(150, 100);
              context.closePath();
              // 不規則な星形のポイントを追加するためのコードをここに記述
              context.fillStrokeShape(shape);
            }}
            fill="#000"
            stroke="white"
            strokeWidth={4}
          />
        </Layer>
      </Stage>
    </>
  );
}

export default App;
