import apiClient from "../api/axiosClient";
import { goodsState } from "../states/goodsState";
import { useSetRecoilState } from "recoil";
import { useEffect, useCallback } from "react";

const useProductList = () => {
  const setGoods = useSetRecoilState(goodsState);

  const loadProductList = useCallback(
    async (page: number) => {
      try {
        const response = await apiClient.get("/api/products", {
          params: {
            page: page,
            size: 20,
          },
        });
        setGoods((preGoods) => {
          return page === 0
            ? response.data.content
            : [...preGoods, ...response.data.content];
        });

        // if (response.data.hasNext) {
        //   loadProductList(page + 1);
        // }
      } catch (error) {
        console.log(error);
        setGoods([]);
      }
    },
    [setGoods]
  );

  useEffect(() => {
    loadProductList(0);
  }, [loadProductList]);
};

export default useProductList;
