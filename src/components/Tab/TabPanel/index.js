import React, { useContext } from "react";
import classnames from "classnames";
import Context from "../../../context/Context.js";
import styles from './style.module.css'

const TabPanel = ({ children, className, ...props }) => {
  return (
    <div {...props} className={classnames(className)}>
      {children}
    </div>
  );
};

export default TabPanel;
