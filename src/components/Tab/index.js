import React from "react";
// import TabItem from "./TabItem";
import AppProvider from "../../providers/AppProvider.js";
import styles from "./style.module.css";

function Tab({ children, ...props }) {
  const { defaultactive } = props;

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { defaultactive: defaultactive })
  );

  return (
    <AppProvider>
      <div {...props} className={styles.tab}>
        {childrenWithProps}
      </div>
    </AppProvider>
  );
}

export default Tab;
