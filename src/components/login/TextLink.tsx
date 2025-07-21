import "../../styles/TextLink.css";
import { Link } from "react-router-dom";

interface TextLinkProps {
  prefixText: string;
  linkText: string;
  to: string;
}

const TextLink: React.FC<TextLinkProps> = ({ prefixText, linkText, to }) => {
  return (
    <p className="TextLink">
      {prefixText}
      <br />
      <Link to={to}>{linkText}</Link>
    </p>
  );
};

export default TextLink;
