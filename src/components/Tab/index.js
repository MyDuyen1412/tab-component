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
  accordion,
  ...props
}) {
  const childrenWithProps = React.Children.map(children, (child,index) =>
    React.cloneElement(child, {
      defaultactive: defaultactive,
      accordion: accordion,
      titles: children[0].props.children
    })
  );
  return (
    <AppProvider>
      <div
        {...props}
        className={classnames(
          "tab",
          {
            "tab-top": top
          },
          {
            "tab-bottom": bottom
          },
          {
            "tab-left": left
          },
          {
            "tab-right": right
          },
          {
            "tab-accordion": accordion
          },
          className
        )}
      >
        {childrenWithProps}
      </div>
    </AppProvider>
  );
}

// function Tab({
//   children,
//   defaultactive = 0,
//   className,
//   top,
//   bottom,
//   left,
//   right,
//   accordion,
//   ...props
// }) {
//   const childrenWithProps = React.Children.map(children, (child, index) =>
//     React.cloneElement(child, {
//       defaultactive: defaultactive, id: index + 1
//     })
//   );
//   return (
//     <AppProvider>
//       <ul
//         {...props}
//         className={classnames(
//           "tab",
//           {
//             "tab-top": top
//           },
//           {
//             "tab-bottom": bottom
//           },
//           {
//             "tab-left": left
//           },
//           {
//             "tab-right": right
//           },
//           {
//             "tab-accordion": accordion
//           },
//           className
//         )}
//       >
//         {childrenWithProps}
//       </ul>
//     </AppProvider>
//   );
// }

export default Tab;
