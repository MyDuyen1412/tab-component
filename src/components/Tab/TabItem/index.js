import classnames from "classnames";
import React, { useContext } from "react";
import Context from "../../../context/Context.js";
import styles from "./style.module.css";
const TabItem = ({ children, id, active, disable, className, ...props }) => {
  const context = useContext(Context);
  const handleClick = () => {
    context.setActiveTab(id);
  };
  return (
    <li
      {...props}
      className={classnames(
        className,
        "tab__item",
        {
          ["tab__item-active"]: active
        },
        { ["tab__item-disable"]: disable }
      )}
      onClick={!disable ? handleClick : () => {}}
    >
      {children}
    </li>
  );
};

export default TabItem;
