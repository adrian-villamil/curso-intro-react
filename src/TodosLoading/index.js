import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './TodosLoading.css';

const TodosLoading = () => {
  return (
    <div className="TodosLoading">
      <span className="loading-icon">
        <FontAwesomeIcon icon={faSpinner} spin size="6x" />
      </span>
    </div>
  );
};

export { TodosLoading };