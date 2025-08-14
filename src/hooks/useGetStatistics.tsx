import { useSetRecoilState, useRecoilValue } from "recoil";
import { receivePointStatisticsState } from "../states/pointStatisticsState";
import { sendPointStatisticsState } from "../states/pointStatisticsState";
import { tagState } from "../states/tagState";
import type { TagState } from "../states/tagState";
import { useEffect } from "react";
import apiClient from "../api/axiosClient";

const useGetStatistics = () => {
  const setReceivePointStatistics = useSetRecoilState(
    receivePointStatisticsState
  );
  const setSendPointStatistics = useSetRecoilState(sendPointStatisticsState);
  const setTag = useSetRecoilState(tagState);
  const currentTags = useRecoilValue(tagState);

  useEffect(() => {
    const getStatistics = async () => {
      try {
        const response = await apiClient.get("/api/statistics/me");
        console.log(response.data);
        setReceivePointStatistics(response.data.receivedTransactions);
        setSendPointStatistics(response.data.sentTransactions);

        const tagCountsFromApi: number[] = response.data.tagCounts;
        const updatedTags: TagState[] = currentTags.map((tag, index) => {
          return {
            ...tag,
            count: tagCountsFromApi[index],
          };
        });
        setTag(updatedTags);
      } catch (error) {
        console.log(error);
        console.log("오오오오류");
      }
    };
    getStatistics();
  }, [currentTags, setReceivePointStatistics, setSendPointStatistics, setTag]);
};

export default useGetStatistics;
