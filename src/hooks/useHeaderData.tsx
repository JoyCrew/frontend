import { useRecoilValue } from "recoil";
import { authState } from "../states/authState";

const useHeaderData = () => {
  const auth = useRecoilValue(authState);
  const { name, totalPoint, isLoggedIn } = auth;
  const displayName = isLoggedIn && name ? name : "게스트";
  const displayPoint = isLoggedIn && totalPoint ? totalPoint : 0;

  return {
    name: displayName,
    point: displayPoint,
  };
};

export default useHeaderData;
