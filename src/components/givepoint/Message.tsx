import "../../styles/Message.css";
import message from "../../assets/message.svg";

import type { ChangeEvent } from "react";

const MAX_LENGTH = 300;

interface MessageProps {
  messageContent: string;
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Message: React.FC<MessageProps> = ({
  messageContent,
  handleInputChange,
}) => {
  return (
    <div className="Message">
      <div className="givePoint-title">
        <img src={message} alt="" />
        <h3>메세지를 남기세요</h3>
      </div>
      <textarea
        onChange={handleInputChange}
        value={messageContent}
        maxLength={MAX_LENGTH}
      />
      <p className="messageLength">
        {messageContent.length} / {MAX_LENGTH}자
      </p>
    </div>
  );
};

export default Message;
