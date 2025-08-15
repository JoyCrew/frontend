import { useSetRecoilState } from "recoil";
import { receivePointStatisticsState } from "../states/pointStatisticsState";
import { sendPointStatisticsState } from "../states/pointStatisticsState";
import { tagState } from "../states/tagState";
import { useEffect } from "react";
import { useCallback } from "react";
import apiClient from "../api/axiosClient";

const useGetStatistics = () => {
  const setReceivePointStatistics = useSetRecoilState(
    receivePointStatisticsState
  );
  const setSendPointStatistics = useSetRecoilState(sendPointStatisticsState);
  const setTag = useSetRecoilState(tagState);

  const getStatistics = useCallback(async () => {
    try {
      const response = await apiClient.get("/api/statistics/me");
      console.log(response.data);
      setReceivePointStatistics(response.data.receivedTransactions);
      setSendPointStatistics(response.data.sentTransactions);

      const tagCountsFromApi: number[] = response.data.tagCounts;
      setTag((prevTags) => {
        return prevTags.map((tag, index) => {
          return {
            ...tag,
            count: tagCountsFromApi[index],
          };
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, [setReceivePointStatistics, setSendPointStatistics, setTag]);

  useEffect(() => {
    getStatistics();
  }, [getStatistics]);
};

export default useGetStatistics;
