import { useRecoilValue } from "recoil";
import { authState } from "../states/authState";

const useHeaderData = () => {
  const auth = useRecoilValue(authState);
  const { name, isLoggedIn } = auth;
  const displayName = isLoggedIn && name ? name : "게스트";
  const displayPoint = isLoggedIn ? 30 : 0;

  return {
    name: displayName,
    point: displayPoint,
  };
};

export default useHeaderData;
