import "../common/Button.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={`Button Button_${className}`}>
      {text}
    </button>
  );
};

export default Button;
