import "../../styles/Tag.css";
import tag from "../../assets/tag.svg";
import TagButton from "./TagButton";
import { TagState } from "../../states/tagState";
import { useRecoilState } from "recoil";

const Tag: React.FC = () => {
  const [tagState, setTagState] = useRecoilState(TagState);

  const onClickButton = (index: number) => {
    const isCurrentlySelected = tagState[index].isSelected;
    const selectedCount = tagState.filter((item) => item.isSelected).length;

    if (isCurrentlySelected) {
      const newTagState = [...tagState];
      newTagState[index] = {
        ...newTagState[index],
        isSelected: false,
      };
      setTagState(newTagState);
    } else {
      if (selectedCount < 3) {
        const newTagState = [...tagState];
        newTagState[index] = {
          ...newTagState[index],
          isSelected: true,
        };
        setTagState(newTagState);
      } else {
        console.log("태그는 최대 3개까지만 선택할 수 있습니다.");
      }
    }
  };

  return (
    <div className="Tag">
      <div className="givePoint-title">
        <img src={tag} alt="" />
        <h3>태그를 선택하세요 (1~3개)</h3>
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
