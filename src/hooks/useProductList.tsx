import apiClient from "../api/axiosClient";
import { goodsState } from "../states/goodsState";
import { categoryState } from "../states/goodsState";
import { selectedCategoryState } from "../states/goodsState";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { useEffect, useCallback } from "react";

const useProductList = () => {
  const setGoods = useSetRecoilState(goodsState);
  const setCategory = useSetRecoilState(categoryState);
  const selectedCategory = useRecoilValue(selectedCategoryState);

  const loadProductList = useCallback(
    async (page: number) => {
      let url = "";

      try {
        if (selectedCategory === null) {
          url = "/api/products";
        } else {
          url = `/api/products/category/${selectedCategory}`;
        }

        const response = await apiClient.get(url, {
          params: {
            page: page,
            size: 20,
          },
        });

        const updateState = selectedCategory === null ? setGoods : setCategory;

        updateState((preGoods) => {
          return page === 0
            ? response.data.content
            : [...preGoods, ...response.data.content];
        });

        if (response.data.hasNext) {
          loadProductList(page + 1);
        }
      } catch (error) {
        console.log(error);
        setGoods([]);
        setCategory([]);
      }
    },
    [selectedCategory, setGoods, setCategory]
  );

  useEffect(() => {
    loadProductList(0);
  }, [loadProductList]);
};

export default useProductList;
