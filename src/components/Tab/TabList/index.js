import classnames from "classnames";
import React, { useContext } from "react";
import Context from "../../../context/Context.js";
import styles from "./style.module.css";

const childrenWithProps = []

const TabList = ({ children, defaultactive, className, ...props }) => {
  const context = useContext(Context);
  const childrenWithProps = React.Children.map(children, (child, index) =>
    React.cloneElement(child, { active: (index + 1) === (context.activeTab || (defaultactive + 1)), id: index + 1 })
  );

  return (
    <ul {...props} className={classnames(className, 'tab__list')}>
      {childrenWithProps}
    </ul>
  );
};

export default TabList;
