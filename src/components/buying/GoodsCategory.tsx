import "../../styles/GoodsCategory.css";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { selectedCategoryState } from "../../states/goodsState";
import { useRecoilState } from "recoil";

const GoodsCategory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // BEAUTY, APPLIANCES, FURNITURE, CLOTHING, FOOD
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );

  const performSearch = async () => {};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      performSearch();
    }
  };

  const onClickCategory = (name: string | null) => {
    setSelectedCategory(name);
  };

  const categories = [
    { name: "전체", value: null },
    { name: "뷰티", value: "BEAUTY" },
    { name: "가전", value: "APPLIANCES" },
    { name: "가구", value: "FURNITURE" },
    { name: "의류", value: "CLOTHING" },
    { name: "음식", value: "FOOD" },
  ];

  return (
    <div className="GoodsCategory">
      <div className="category-container">
        {categories.map((category) => (
          <p
            key={category.name}
            onClick={() => onClickCategory(category.value)}
            className={selectedCategory === category.value ? "active" : ""}
          >
            {category.name}
          </p>
        ))}
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
