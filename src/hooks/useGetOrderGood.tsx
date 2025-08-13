import apiClient from "../api/axiosClient";
import { useSetRecoilState } from "recoil";
import { orderState } from "../states/orderState";
import { useEffect, useCallback } from "react";

const useGetOrderGood = () => {
  const setOrders = useSetRecoilState(orderState);

  const loadOrderList = useCallback(
    async (page: number) => {
      try {
        const response = await apiClient.get("/api/orders", {
          params: {
            page: page,
            size: 20,
          },
        });
        setOrders((preOrders) => {
          return page === 0
            ? response.data.content
            : [...preOrders, ...response.data.content];
        });

        if (response.data.hasNext) {
          loadOrderList(page + 1);
        }
      } catch (error) {
        console.log(error);
        setOrders([]);
      }
    },
    [setOrders]
  );

  useEffect(() => {
    loadOrderList(0);
  }, [loadOrderList]);
};

export default useGetOrderGood;
