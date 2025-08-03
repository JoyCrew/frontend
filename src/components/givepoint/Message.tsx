import "../../styles/Message.css";
import message from "../../assets/message.svg";
import { useState } from "react";
import type { ChangeEvent } from "react";

const MAX_LENGTH = 300;

const Message: React.FC = () => {
  const [messageContent, setMessageContent] = useState<string>("");
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageContent(e.target.value);
  };
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
