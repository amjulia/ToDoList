import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/features/todoSlice";
import styles from "./AddToDo.module.css";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  return (
    <div>
      <div className={styles.top}>
        <input
          className={styles.input}
          type="text"
          value={inputValue}
          placeholder="Создать задачу"
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={handleAddTodo} className={styles.button}>
          <img src="/imgAdd.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
