import classnames from "classnames";
import React, { useContext } from "react";
import Context from "../../../context/Context.js";
import styles from "./style.module.css";
const TabItem = ({ children, active, className, ...props }) => {
  const context = useContext(Context);
  const handleClick = () => {
    context.setActiveTab(children);
  };
  return (
    <li
      {...props}
      className={classnames(className, styles.item, {
        [styles.active]: active
      })}
      onClick={handleClick}
    >
      {children}
    </li>
  );
};

export default TabItem;

