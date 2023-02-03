import { LogoutBtn } from "./components/LogoutBtn";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">{children}</div>
      <div className="drawer-side">
        <div className="flex flex-col bg-base-100">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content flex-1">
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Page 2</a>
            </li>
          </ul>
          <div className="flex flex-row p-4">
            <LogoutBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
