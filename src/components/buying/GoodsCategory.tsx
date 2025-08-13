import "../../styles/GoodsCategory.css";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

const GoodsCategory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const performSearch = async () => {};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      performSearch();
    }
  };

  return (
    <div className="GoodsCategory">
      <div className="category-container">
        <p className="active">전체</p>
        <p>뷰티</p>
        <p>가구</p>
        <p>의류</p>
        <p>음식</p>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="상품 검색하기"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <IoIosSearch className="search-icon" onClick={performSearch} />
      </div>
    </div>
  );
};

export default GoodsCategory;
