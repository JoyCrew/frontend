import "../../styles/TagHistory.css";
import { tagState } from "../../states/tagState";
import type { TagState } from "../../states/tagState";
import { useRecoilValue } from "recoil";

const TagHistory: React.FC = () => {
  const tag = useRecoilValue(tagState);

  return (
    <div className="TagHistory">
      <h3>태그</h3>
      <div className="tag-container">
        {tag.map((tagItem: TagState, index: number) => (
          <p key={index}>{tagItem.name}</p>
        ))}
      </div>
    </div>
  );
};

export default TagHistory;
