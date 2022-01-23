import React from "react";
import TodoCounter from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import TodoList from "../TodoList";
import CreateTodoButton from "../CreateTodoButton";
import TodoItem from "../TodoItem";

export default function AppUI(props) {
  return (
    <React.Fragment>
      <TodoCounter total={props.totalTodos} completed={props.completedTodos} />
      <TodoSearch
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
      />
      <TodoList>
        {props.searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => props.completeTodo(todo.text)}
            onDelete={() => props.deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}
