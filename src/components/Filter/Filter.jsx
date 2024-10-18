import React, { useState } from "react";
import styles from "./Filter.module.css";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/features/todoSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState("all");

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    dispatch(setFilter(buttonType));
    
  };

  return (
    <div className={styles.filter}>
      <div
        className={cn(styles.filter__btn, styles.btn1, {
          [styles.btn1_active]: activeButton === "all",
        })}
        onClick={() => handleButtonClick("all")}
      >
        Все
      </div>

      <div
        className={cn(styles.filter__btn, styles.btn2, {
          [styles.btn2_active]: activeButton === "completed",
        })}
        onClick={() => handleButtonClick("completed")}
      >
        Выполнено
      </div>
      <div
        className={cn(styles.filter__btn, styles.btn3, {
          [styles.btn3_active]: activeButton === "not_completed",
        })}
        onClick={() => handleButtonClick("not_completed")}
      >
        Не выполнено
      </div>
    </div>
  );
};

export default Filter;
