import classnames from "classnames";
import React, { useContext } from "react";
import Context from "../../../context/Context.js";

const TabContent = ({ children, titles, accordion, defaultactive }) => {
  const context = useContext(Context);

  const titles_new = titles.map((item, index) => ({
    ...item,
    props: {
      ...item.props,
      active: index + 1 === (context.activeTab || defaultactive + 1),
      id: index + 1
    }
  }));


  const childrenWithProps = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      active: index + 1 === (context.activeTab || defaultactive + 1),
      title: titles_new[index],
      accordion: accordion
    })
  );
  return (
    <div
      className={classnames("tab__content", {
        "tab__content-accordion": accordion
      })}
    >
      {childrenWithProps}
    </div>
  );
};

export default TabContent;
