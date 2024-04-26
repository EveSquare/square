import { RegularPolygon } from "react-konva";

type Props = {
  sides: number;
};

const Polygon: React.FC<Props> = ({ sides }) => {
  return (
    <>
      <RegularPolygon
        x={100}
        y={100}
        sides={sides}
        radius={50}
        outerRadius={90}
        fill="orange"
      />
    </>
  );
};

export default Polygon;
