import "../../styles/ManagerPopup.css";
import Button from "../common/Button";
import { IoMdClose } from "react-icons/io";

interface ManagerPopupProps {
  title: string;
  content: string;
  button: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ManagerPopup: React.FC<ManagerPopupProps> = ({
  title,
  content,
  button,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="popup-overlay">
      <div className="ManagerPopup">
        <IoMdClose onClick={onCancel} className="close-icon" />
        <div className="content-container">
          <h3>{title}</h3>
          <p>{content}</p>
          <Button text={button} onClick={onConfirm} className="popup" />
        </div>
      </div>
    </div>
  );
};

export default ManagerPopup;
