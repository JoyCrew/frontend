import "../../styles/DetailLayout.css";

interface DetailLayoutProps {
  name: string;
  information: string | null | undefined;
}

const DetailLayout: React.FC<DetailLayoutProps> = ({ name, information }) => {
  return (
    <div className="DetailLayout">
      <h6>{name}</h6>
      <p>{information}</p>
    </div>
  );
};

export default DetailLayout;
