import "../../styles/TagButton.css";

interface TagButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const TagButton: React.FC<TagButtonProps> = ({ text, onClick, className }) => {
  return (
    <button className={`TagButton TagButton_${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default TagButton;
