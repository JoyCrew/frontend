interface PointMiniProps {
  point: number;
  ment: string;
  className: string;
}

const PointMini: React.FC<PointMiniProps> = ({ point, ment, className }) => {
  return (
    <div className={`PointMini PointMini_${className}`}>
      <h3>{point}</h3>
      <p>{ment}</p>
    </div>
  );
};

export default PointMini;
