import "../../styles/SearchWorker.css";
import searching from "../../assets/searching.svg";
import enter from "../../assets/enter.svg";
import employeePerson from "../../assets/employeePerson.svg";
import { useState } from "react";
import apiClient from "../../api/axiosClient";
import { useSetRecoilState } from "recoil";
import { searchResultState } from "../../states/searchResultState";
import type { Employee } from "../../states/searchResultState";

const SearchWorker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const setSearchResults = useSetRecoilState(searchResultState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const performSearch = async () => {
    try {
      const response = await apiClient.get(`/api/employee/query`, {
        params: {
          keyword: searchTerm,
          page: 0, //currentpage, totalpage에 따라 수정필요
          size: 10,
        },
      });
      console.log("검색 성공");
      const resultsWithSelection: Employee[] = response.data.map(
        (
          employee: Omit<Employee, "isSelected" | "profileIamgeUrl"> & {
            profileImageUrl?: string;
          }
        ) => ({
          ...employee,
          isSelected: false,
          profileImageUrl: employee.profileImageUrl || employeePerson,
        })
      );
      setSearchResults(resultsWithSelection);
    } catch (error) {
      console.log(error);
      setSearchResults([]);
    }
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
