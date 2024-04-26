import { Line } from "react-konva";

const Star = () => {
  const centerX = 100;
  const centerY = 100;
  const outerRadius = 50;
  const innerRadius = 25;
  const numPoints = 5;

  const points = [];
  const angleDelta = (2 * Math.PI) / numPoints;

  for (let i = 0; i < numPoints; i++) {
    const angle = i * angleDelta;
    const x = centerX + outerRadius * Math.cos(angle);
    const y = centerY + outerRadius * Math.sin(angle);
    points.push(x, y);

    const innerAngle = angle + angleDelta / 2;
    const innerX = centerX + innerRadius * Math.cos(innerAngle);
    const innerY = centerY + innerRadius * Math.sin(innerAngle);
    points.push(innerX, innerY);
  }
  return (
    <>
      <Line
        points={points}
        closed
        stroke="white"
        strokeWidth={3}
        fill="purple"
      />
    </>
  );
};

export default Star;
