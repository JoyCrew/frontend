import "../../styles/SearchWorker.css";
import searching from "../../assets/searching.svg";
import enter from "../../assets/enter.svg";
import employeePerson from "../../assets/employeePerson.svg";
import { useState, useCallback, useEffect } from "react";
import apiClient from "../../api/axiosClient";
import { useSetRecoilState } from "recoil";
import { searchResultState } from "../../states/searchResultState";
import type { Employee } from "../../states/searchResultState";

const SearchWorker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const setSearchResults = useSetRecoilState(searchResultState);

  const performSearch = useCallback(
    async (page: number) => {
      try {
        const response = await apiClient.get(`/api/employee/query`, {
          params: {
            keyword: searchTerm,
            page: page,
            size: 20,
          },
        });

        const resultsWithSelection: Employee[] = response.data.employees.map(
          (
            employee: Omit<Employee, "isSelected" | "profileImageUrl"> & {
              profileImageUrl?: string;
            }
          ) => ({
            ...employee,
            isSelected: false,
            profileImageUrl: employee.profileImageUrl || employeePerson,
          })
        );
        setSearchResults((prevEmployees) => {
          return page === 0
            ? resultsWithSelection
            : [...prevEmployees, ...resultsWithSelection];
        });

        if (!response.data.last) {
          performSearch(page + 1);
        }
      } catch (error) {
        console.log(error);
        setSearchResults([]);
      }
    },
    [searchTerm, setSearchResults]
  );

  useEffect(() => {
    performSearch(0);
  }, [performSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    performSearch(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchClick();
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
          placeholder="직원 이름을 입력하세요"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <img
          src={enter}
          className="enter"
          alt="enter"
          onClick={handleSearchClick}
        />
      </div>
    </div>
  );
};

export default SearchWorker;
