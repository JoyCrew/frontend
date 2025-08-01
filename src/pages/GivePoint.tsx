import Header from "../components/common/Header";
import useHeaderData from "../hooks/useHeaderData";

const GivePoint: React.FC = () => {
  const { name, point } = useHeaderData();
  return (
    <div className="main">
      <div className="GivePoint">
        <Header name={name} point={point} />
      </div>
    </div>
  );
};

export default GivePoint;
