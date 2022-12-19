import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './EmptyTodos.css';

const EmptyTodos = () => {
  return (
    <div className="EmptyTodos">
      <span className="empty-icon">
        <FontAwesomeIcon icon={faTrash} size="6x" />
      </span>
      <p className="empty-text">Está vacía la lista de tareas</p>
      <p>Crea una nueva tarea</p>
    </div>
  );
};

export { EmptyTodos };