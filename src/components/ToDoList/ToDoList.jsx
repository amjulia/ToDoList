import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  editTodo,
  removeTodo,
  selectFilteredTodos,
  toggleTodo,
} from "../../store/features/todoSlice";
import styles from "./ToDoList.module.css";
import cn from "classnames";
import Filter from "../Filter/Filter";

const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);
  const dispatch = useDispatch();
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEdit = (id) => {
    if (newText) {
      dispatch(editTodo({ id, text: newText }));
      setEditingTodoId(null);
      setNewText("");
    }
  };
  return (
    <div className={styles.content}>
      <Filter />
      {todos.map((todo) => (
        <div key={todo.id} className={styles.task}>
          <h3>Сегодня</h3>
          <div className={styles.taskBox}>
            <svg
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={cn(styles.task__icon, {
                [styles.task__iconActive]: todo.completed,
              })}
              width="22"
              height="22"
              viewBox="0 0 22 22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="9" strokeWidth="2" />
            </svg>

            <input
              onChange={(e) => setNewText(e.target.value)}
              className={cn(styles.task__input, styles.task__text, {
                [styles.textCrossed]: todo.completed,
                [styles.task__input_edit]: editingTodoId === todo.id,
              })}
              type="text"
              defaultValue={editingTodoId === todo.id ? newText : todo.text}
              disabled={editingTodoId !== todo.id}
            />
          </div>
          <div className={styles.svgBox}>
            {editingTodoId === todo.id && (
              <button
                className={styles.button__edit}
                onClick={() => handleEdit(todo.id)}
              >
                Сохранить
              </button>
            )}
            <div
              onClick={() => {
                setEditingTodoId(editingTodoId === todo.id ? null : todo.id);
                setNewText(todo.text);
              }}
            >
              <svg
                className={cn(styles.btn__icon, {
                  [styles.btn__iconActive]: editingTodoId === todo.id,
                })}
              >
                <use xlinkHref="/sprite.svg#edit"></use>
              </svg>
            </div>

            <svg
              onClick={() => dispatch(removeTodo(todo.id))}
              className={styles.btn__delete}
            >
              <use xlinkHref="/sprite.svg#delete"></use>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
