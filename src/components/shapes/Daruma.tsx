import { Shape } from "react-konva";

const Daruma = () => {
  return (
    <>
      <Shape
        sceneFunc={(context) => {
          context.beginPath();
          context.arc(100, 75, 50, 0, 2 * Math.PI); // 上の円
          context.fillStyle = "red";
          context.fill();

          context.beginPath();
          context.arc(100, 125, 50, 0, 2 * Math.PI); // 下の円
          context.fillStyle = "red";
          context.fill();
        }}
      />
    </>
  );
};

export default Daruma;
