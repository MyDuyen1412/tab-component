import classnames from "classnames";
import React from "react";

const TabPanel = ({
  children,
  active,
  className,
  ...props
}) => {
  return (
    <div {...props}
      className={classnames(className, "tab__panel", {
        "tab__panel-active": active
      })}
    >
      {children}
    </div>
  );
};

export default TabPanel;
