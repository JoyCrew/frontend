import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import type { MenuItem } from "../../data/SidebarMenu";

interface SidebarItemProps extends MenuItem {
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  activeIcon,
  inactiveIcon,
  text,
  isActive,
  path,
}) => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav(path)}
      className={`sidebar-item-div ${isActive ? "active" : ""}`}
    >
      <img src={isActive ? activeIcon : inactiveIcon} alt={text} />
      <p>{text}</p>
    </div>
  );
};

interface SidebarProps {
  activePath: string;
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ activePath, menuItems }) => {
  return (
    <div className="Sidebar">
      {menuItems.map((item) => (
        <SidebarItem
          key={item.path}
          activeIcon={item.activeIcon}
          inactiveIcon={item.inactiveIcon}
          text={item.text}
          isActive={activePath === item.path}
          path={item.path}
        />
      ))}
    </div>
  );
};

export default Sidebar;
