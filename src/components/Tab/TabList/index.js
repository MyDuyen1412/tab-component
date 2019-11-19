import classnames from "classnames";
import React, { useContext } from "react";
import Context from "../../../context/Context.js";
import styles from "./style.module.css";

const TabList = ({ children, defaultactive, className, ...props }) => {
  const context = useContext(Context);
  
  children.map((item, index) => {
    if (item.props.children === context.activeTab) {
      return context.setIndex(index);
    } else return null;
  });

  const childrenWithProps = React.Children.map(children, (child, index) =>
    React.cloneElement(child, { active: index === (context.index || defaultactive) })
  );
//   console.log(context.index)
  return (
    <ul {...props} className={classnames(className, styles.list)}>
      {childrenWithProps}
    </ul>
  );
};

export default TabList;



//   console.log(
  //     children.findIndex(function(o) {
  //       return o.props.children >= context.activeTab;
  //     })
  //   );
