import React, { useState } from "react";
import Context from '../context/Context';

function AppProvider({ children }) {
  const [activeTab, setActiveTab] = useState('')
  const [index, setIndex] = useState()
  return (
    <Context.Provider
      value={{
        activeTab,
        index,
        setActiveTab,
        setIndex
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default AppProvider;
