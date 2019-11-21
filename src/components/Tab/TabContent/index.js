import classnames from "classnames";
import React, { useContext } from "react";
import Context from "../../../context/Context.js";
import { setActive } from "../utils/setActive.js";

const TabContent = ({ children, titles, accordion, defaultactive }) => {
  const context = useContext(Context);

  const titles_new = titles.map((item, index) => ({
    ...item,
    props: {
      ...item.props,
      active: setActive(
        context.activeTab,
        index,
        defaultactive,
        children.length
      ),
      id: index + 1
    }
  }));

  const childrenWithProps = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      active: setActive(
        context.activeTab,
        index,
        defaultactive,
        children.length
      )
    })
  );
  const childrenAccordionWithProps = titles_new.map((item, index) => {
    return React.createElement("div", { class: "tab__content__container" }, [
      item,
      childrenWithProps[index] || null
    ]);
  });

  return (
    <div
      className={classnames("tab__content", {
        "tab__content-accordion": accordion
      })}
    >
      {accordion ? childrenAccordionWithProps : childrenWithProps}
    </div>
  );
};

export default TabContent;
