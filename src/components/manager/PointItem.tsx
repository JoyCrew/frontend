import "../../styles/PointItem.css";

interface PointItemProps {
  title: string;
  number: number;
}

const PointItem: React.FC<PointItemProps> = ({ title, number }) => {
  return (
    <div className="PointItem">
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default PointItem;
