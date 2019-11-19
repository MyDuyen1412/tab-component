import classnames from "classnames";
import React from "react";
import AppProvider from "../../providers/AppProvider.js";
import "./style.css";

function Tab({
  children,
  defaultactive = 0,
  className,
  top,
  bottom,
  left,
  right,
  ...props
}) {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      defaultactive: defaultactive
    })
  );
  return (
    <AppProvider>
      <div
        {...props}
        className={classnames(
          'tab',
          {
            ['tab-top']: top
          },
          {
            ['tab-bottom']: bottom
          },
          {
            ['tab-left']: left
          },
          {
            ['tab-right']: right
          },
          className
        )}
      >
        {childrenWithProps}
      </div>
    </AppProvider>
  );
}

export default Tab;
