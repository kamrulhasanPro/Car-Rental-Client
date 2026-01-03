import React from "react";
import { NavLink } from "react-router";

const SidebarMenuItem = ({ to, className, icon, children, end = false }) => {
  const Icon = icon;
  const defaultStyle =
    "is-drawer-close:tooltip is-drawer-close:tooltip-right my-1.5";
  return (
    <>
      <li>
        <NavLink
          end={end}
          to={to}
          className={({ isActive }) =>
            isActive
              ? `${defaultStyle} border-l-2 border-primary bg-primary-content`
              : defaultStyle
          }
          data-tip={children}
        >
          {/* Home icon */}
          <Icon className="my-1.5 inline-block " />
          <span className="is-drawer-close:hidden text-nowrap">{children}</span>
        </NavLink>
      </li>
    </>
  );
};

export default SidebarMenuItem;
