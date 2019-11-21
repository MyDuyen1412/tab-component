import classnames from "classnames";
import React, { useContext } from "react";
import Context from "../../../context/Context.js";
const TabItem = ({
  children,
  id,
  active,
  disable,
  icon,
  className,
  ...props
}) => {
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
      {icon && (
        <span
          className={classnames("tab__icon", {
            [`tab__icon__${icon[1]}`]: Array.isArray(icon)
          })}
        >
          {typeof icon === "string" ? (
            <img src={icon} alt={children} />
          ) : !Array.isArray(icon) ? (
            icon
          ) : typeof icon[0] === "string" ? (
            <img src={icon[0]} alt={children} />
          ) : (
            icon[0]
          )}
        </span>
      )}
      <span className="tab__item__title">{children}</span>
    </div>
  );
};

export default TabItem;
