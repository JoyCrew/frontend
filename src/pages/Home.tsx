import Header from "../components/common/Header";
import useHeaderData from "../hooks/useHeaderData";

const Home: React.FC = () => {
  const { name, point } = useHeaderData();
  return (
    <div className="Home">
      <Header name={name} point={point} />
    </div>
  );
};

export default Home;
