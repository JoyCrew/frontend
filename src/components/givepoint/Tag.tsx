import "../../styles/Tag.css";
import tag from "../../assets/tag.svg";
import TagButton from "./TagButton";
import { TagState } from "../../states/tagState";
import { useRecoilState } from "recoil";

const Tag: React.FC = () => {
  const [tagState, setTagState] = useRecoilState(TagState);

  const onClickButton = (index: number) => {
    const newTagState = [...tagState];
    newTagState[index] = {
      ...newTagState[index],
      isSelected: !newTagState[index].isSelected,
    };
    setTagState(newTagState);
  };

  return (
    <div className="Tag">
      <div className="title">
        <img src={tag} alt="" />
        <h3>태그를 선택하세요</h3>
      </div>
      <div className="button-container">
        {tagState.map((item, index) => (
          <TagButton
            key={index}
            text={item.name}
            onClick={() => onClickButton(index)}
            className={item.isSelected ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
};

export default Tag;
