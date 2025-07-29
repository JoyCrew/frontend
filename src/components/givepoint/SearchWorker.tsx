import "../../styles/SearchWorker.css";
import searching from "../../assets/searching.svg";
import enter from "../../assets/enter.svg";
import { useState } from "react";

const SearchWorker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const performSearch = () => {
    console.log("검색", searchTerm);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      performSearch();
    }
  };

  return (
    <div className="SearchWorker">
      <div className="ment">
        <img src={searching} alt="searching" className="searching" />
        <p>직원 검색</p>
      </div>
      <div className="search-box">
        <input
          type="search"
          placeholder="직원 이름 또는 부서를 입력하세요..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <img
          src={enter}
          className="enter"
          alt="enter"
          onClick={performSearch}
        />
      </div>
    </div>
  );
};

export default SearchWorker;
