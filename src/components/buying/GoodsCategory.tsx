import "../../styles/GoodsCategory.css";
import { IoIosSearch } from "react-icons/io";
import { useState, useCallback } from "react";
import { selectedCategoryState } from "../../states/goodsState";
import { searchGoodsState } from "../../states/goodsState";
import { useRecoilState, useSetRecoilState } from "recoil";
import apiClient from "../../api/axiosClient";
import { isSearchGoodsState } from "../../states/goodsState";

const GoodsCategory = () => {
  const setIsSearchGoodsState = useSetRecoilState(isSearchGoodsState);
  const setSearchGoodsState = useSetRecoilState(searchGoodsState);
  const [searchTerm, setSearchTerm] = useState("");
  // BEAUTY, APPLIANCES, FURNITURE, CLOTHING, FOOD
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );

  const performSearch = useCallback(
    async (page: number) => {
      try {
        const response = await apiClient.get(`/api/products/search`, {
          params: {
            q: searchTerm,
            page: page,
            size: 20,
          },
        });

        setSearchGoodsState((prev) => {
          const safePrev = prev || [];
          return page === 0
            ? response.data.content
            : [...safePrev, ...response.data.content];
        });

        if (response.data.hasNext) {
          performSearch(page + 1);
        }
        setIsSearchGoodsState(true);
      } catch (error) {
        console.log(error);
        setSearchGoodsState([]);
      }
    },
    [searchTerm, setSearchGoodsState, setIsSearchGoodsState]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      performSearch(0);
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
            onClick={() => {
              onClickCategory(category.value);
              setIsSearchGoodsState(false);
            }}
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
        <IoIosSearch
          className="search-icon"
          onClick={() => {
            performSearch(0);
          }}
        />
      </div>
    </div>
  );
};

export default GoodsCategory;
