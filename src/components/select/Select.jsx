import React from "react";
import styles from "./Select.module.scss";

const Select = ({ sortingValue, setSortingValue, selectOptions }) => {
  const renderOptions = () => {
    return selectOptions.map((item, index) => {
      return (
        <option key={index} value={item.value}>
          {item.name}
        </option>
      );
    });
  };

  return (
    <select
      onChange={(e) => {
        setSortingValue(e.target.value);
      }}
      value={sortingValue}
      className={styles.select}
      name="sorting"
      id="sorting"
    >
      {renderOptions()}
    </select>
  );
};

export default Select;
