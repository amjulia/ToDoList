import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  editTodo,
  removeTodo,
  toggleTodo,
} from "../../store/features/todoSlice";
import styles from "./ToDoList.module.css";
import cn from "classnames";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className={styles.content}>
      <div className={styles.filter}>
        <div className={cn(styles.filter__btn, styles.btn1)}>Все</div>
        <div className={cn(styles.filter__btn, styles.btn2)}>Выполнено</div>
        <div className={cn(styles.filter__btn, styles.btn3)}>Не выполнено</div>
      </div>
      <div className={styles.task}>
        <h3>Сегодня</h3>
        <div className={styles.taskBox}>
                    <svg className={styles.task__icon}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="9"  stroke-width="2" />
          </svg>
          <p>Завершить написание SEO-текста с учетом всех требований.</p>
        </div>
        <div className={styles.svgBox}>
          <svg className={styles.btn__icon}>
            <use xlinkHref="/sprite.svg#edit"></use>
          </svg>
          <svg className={styles.btn__delete}>
            <use xlinkHref="/sprite.svg#delete"></use>
          </svg>
          
        </div>
      </div>

      {/* {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span>{todo.text}</span>
          <button onClick={() => dispatch(removeTodo(todo.id))}>Удалить</button>
          <button
            onClick={() => {
              const newText = prompt("Редактировать задачу:", todo.text);
              if (newText) {
                dispatch(editTodo({ id: todo.id, text: newText }));
              }
            }}
          >
            Редактировать
          </button>
        </div>
      ))} */}
    </div>
  );
};

export default TodoList;
