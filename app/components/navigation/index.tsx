import { useState } from "react";
import { Link, useLocation } from "@remix-run/react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <nav
      className={`fixed top-0 left-0 md:h-screen w-screen md:w-16 m-0 flex flex-row md:flex-col bg-white shadow-lg my-auto justify-end md:justify-center
      transition-[height]
      ${isOpen ? "h-[300px]" : "h-16"}`}
    >
      <SideBarIcon icon="A" to="/" />
      <SideBarIcon icon="B" to="/article" />
      <SideBarIcon icon="C" to="/biography" />
      <SideBarIcon icon="D" to="/alumni" />
      <SideBarIcon icon="E" to="/settings" />

      {/**Mobile nav */}
      <div className="grid grid-template-rows- overflow-hidden  md:hidden bottom-0 right-0 absolute">
        <MobileNavItem label="Home" to="/" toggle={toggle} />
        <MobileNavItem label="Articles" to="/article" toggle={toggle} />
        <MobileNavItem label="Biographies" to="/biography" toggle={toggle} />
        <MobileNavItem label="Alumni" to="/alumni" toggle={toggle} />
        <MobileNavItem label="Settings" to="/settings" toggle={toggle} />
        <MenuIcon toggle={toggle} />
      </div>
    </nav>
  );
}

const SideBarIcon = ({ icon, to }: { icon: string; to: string }) => {
  const location = useLocation();
  const isSelected: boolean = location.pathname === to;
  return (
    <Link to={to} className={`sidebar-icon ${isSelected && "bg-slate-100"}`}>
      {isSelected && <Selected />}
      {icon}
    </Link>
  );
};

const MenuIcon = ({ toggle }: { toggle: () => void }) => {
  return (
    <button className="px-12 md:hidden h-16" onClick={toggle}>
      menu
    </button>
  );
};

const MobileNavItem = ({
  label,
  to,
  toggle,
}: {
  label: string;
  to: string;
  toggle: () => void;
}) => {
  const location = useLocation();
  const isSelected: boolean = location.pathname === to;

  return (
    <Link to={to} onClick={toggle}>
      <p
        className={`text-lg font-medium text-right pr-12 h-10 hover:bg-slate-100 grid place-content-center justify-end ${
          isSelected && "bg-slate-100"
        }`}
      >
        {label}
      </p>
    </Link>
  );
};

const Selected = () => <span className="sidebar-selected"></span>;
