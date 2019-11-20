import classnames from "classnames";
import React, { useContext } from "react";
import Context from "../../../context/Context.js";
const TabItem = ({ children, id, active, disable, icon, className, ...props }) => {
  const context = useContext(Context);
  const handleClick = () => {
    context.setActiveTab(id);
  };
  return (
    <div
      {...props}
      className={classnames(
        className,
        "tab__item",
        {
          "tab__item-active": active
        },
        { "tab__item-disable": disable }
      )}
      onClick={!disable ? handleClick : () => {}}
    >
      {icon && <img src={icon} alt={children}/>}
      <span className="tab__item__title">{children}</span>
    </div>
  );
};

export default TabItem;
