import { Shape } from "react-konva";

const Sclera = () => {
  return (
    <>
      <Shape
        sceneFunc={(context) => {
          context.beginPath();
          context.moveTo(100, 50);
          context.quadraticCurveTo(150, 20, 200, 50);
          context.quadraticCurveTo(250, 80, 200, 110);
          context.quadraticCurveTo(150, 140, 100, 110);
          context.quadraticCurveTo(50, 80, 100, 50);
          context.closePath();
          context.fillStyle = "red";
          context.fill();
        }}
        stroke="red"
        strokeWidth={3}
      />
    </>
  );
};

export default Sclera;
