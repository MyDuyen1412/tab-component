import classnames from "classnames";
import React from "react";

const TabPanel = ({ children, active, title, accordion, className, ...props }) => {
  return (
    <div className='tab__panel__container' {...props}>
      {accordion && title}
      <div
        className={classnames(className, "tab__panel", {
          "tab__panel-active": active
        })}
      >
        {children}
      </div>
    </div>
  );
};


export default TabPanel;
