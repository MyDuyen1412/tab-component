import classnames from "classnames";
import React, { useContext } from "react";
import Context from "../../../context/Context.js";
import { setActive } from "../utils/setActive.js";

const TabList = ({
  children,
  defaultactive,
  accordion,
  className,
  rotate,
  titles,
  ...props
}) => {
  const context = useContext(Context);
  const childrenWithProps = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      active: setActive(
        context.activeTab,
        index,
        defaultactive,
        children.length
      ),
      id: index + 1
    })
  );
  return (
    <ul {...props} className={classnames(className, "tab__list")}>
      {childrenWithProps}
    </ul>
  );
};

export default TabList;
