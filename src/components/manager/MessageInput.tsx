import "../../styles/MessageInput.css";
import { IoMdClose } from "react-icons/io";
import Button from "../common/Button";
import type { ChangeEvent } from "react";

const MAX_LENGTH = 300;

interface MessageInputProps {
  message: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({
  message,
  onChange,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="popup-overlay">
      <div className="MessageInput">
        <IoMdClose onClick={onCancel} className="close-icon" />
        <div className="content-container">
          <h3>포인트 전송</h3>
          <div className="Message">
            <textarea
              onChange={onChange}
              value={message}
              maxLength={MAX_LENGTH}
              placeholder="함께 전송할 메세지"
            />
            <p className="messageLength">
              {message.length} / {MAX_LENGTH}자
            </p>
          </div>
          <Button text="전송하기" onClick={onConfirm} className="popup" />
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
