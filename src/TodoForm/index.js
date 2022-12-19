import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState('');

  const {
    addTodo,
    setOpenModal
  } = useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        autoFocus
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-Row">
        <button
          className="TodoForm-Button"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className="TodoForm-Button"
          type="submit"
        >
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };