import apiClient from "../api/axiosClient";
import { recentGoodsState } from "../states/goodsState";
import { useSetRecoilState } from "recoil";
import type { GoodsState } from "../states/goodsState";
import { useEffect } from "react";
import { useCallback } from "react";

interface RecentViewResponseItem {
  product: GoodsState;
  viewedAt: string;
}

const useGetRecent = () => {
  const setRecentGoods = useSetRecoilState(recentGoodsState);

  const getRecentView = useCallback(async () => {
    try {
      const response = await apiClient.get<RecentViewResponseItem[]>(
        `/api/recent-views?limit=20`
      );
      const recentGoodsData: GoodsState[] = response.data.map(
        (item) => item.product
      );
      setRecentGoods(recentGoodsData);
    } catch (error) {
      console.log(error);
    }
  }, [setRecentGoods]);

  useEffect(() => {
    getRecentView();
  }, [getRecentView]);

  return getRecentView;
};

export default useGetRecent;
