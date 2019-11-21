export const setActive = (activeTab, index, defaultactive, length) => {
  return (
    index + 1 ===
    (activeTab || (defaultactive >= length ? 1 : defaultactive + 1))
  );
};
