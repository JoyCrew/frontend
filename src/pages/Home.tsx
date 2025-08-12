import "../styles/Home.css";
import Header from "../components/common/Header";
import useHeaderData from "../hooks/useHeaderData";
import MainMent from "../components/home/MainMent";
import MainContent from "../components/home/MainContent";
import { useState } from "react";

const content = [
  {
    index: 1,
    title: "상품 구매하기",
    link: "1",
  },
  {
    index: 2,
    title: "포인트 선물하기",
    link: "2",
  },
  {
    index: 3,
    title: "자동 보상 지급",
    link: "3",
  },
  {
    index: 4,
    title: "통계 및 보고서",
    link: "4",
  },
];

const Home: React.FC = () => {
  const { name, point } = useHeaderData();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);

  return (
    <div className="Home">
      <Header name={name} point={point} />
      <div className="main">
        <MainMent />
        <div className="content-container">
          {content.map((item) => (
            <MainContent
              key={item.index}
              index={item.index}
              title={item.title}
              link={item.link}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
