import "../../styles/GoodsCategory.css";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

const GoodsCategory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const performSearch = async () => {
    // try {
    //   const response = await apiClient.get(`/api/employee/query`, {
    //     params: {
    //       keyword: searchTerm,
    //       page: 0, //currentpage, totalpage에 따라 수정필요
    //       size: 20,
    //     },
    //   });
    //   console.log("검색 성공", response.data);
    //   const resultsWithSelection: Employee[] = response.data.employees.map(
    //     (
    //       employee: Omit<Employee, "isSelected" | "profileIamgeUrl"> & {
    //         profileImageUrl?: string;
    //       }
    //     ) => ({
    //       ...employee,
    //       isSelected: false,
    //       profileImageUrl: employee.profileImageUrl || employeePerson,
    //     })
    //   );
    //   setSearchResults(resultsWithSelection);
    // } catch (error) {
    //   console.log(error);
    //   setSearchResults([]);
    // }
  };

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
        <p>전체</p>
        <p>의류</p>
        <p>음식</p>
        <p>가전</p>
        <p>화장품</p>
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
