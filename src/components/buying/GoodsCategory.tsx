import "../../styles/GoodsCategory.css";
import { IoIosSearch } from "react-icons/io";

const GoodsCategory = () => {
  return (
    <div className="GoodsCategory">
      <div className="category-container">
        <p>전체</p>
        <p>의류</p>
        <p>음식</p>
        <p>가전</p>
        <p>화장품</p>
      </div>
      <div className="input-container">
        <input type="text" placeholder="상품 검색하기" />
        <IoIosSearch className="search-icon" />
      </div>
    </div>
  );
};

export default GoodsCategory;
