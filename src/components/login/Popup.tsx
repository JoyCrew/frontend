import "../../styles/Popup.css";

interface PopupProps {
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ children }) => {
  return <div className="Popup">{children}</div>;
};

export default Popup;
