import React from "react";
import TodoCounter from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import TodoList from "../TodoList";
import CreateTodoButton from "../CreateTodoButton";
import TodoItem from "../TodoItem";
import { TodoContext } from "../TodoContext";
import Modal from "../Modal";
import TodoForm from "../TodoForm";

export default function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Error...</p>}
        {loading && <p>Estamos cargando...</p>}
        {!!(!loading && !searchedTodos.lenght) && <p>Crea tu primer TODO</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </React.Fragment>
  );
}
