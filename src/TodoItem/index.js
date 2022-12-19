import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = (props) => {
  return (
    <li className='TodoItem'>
      <span
        className={`icon check-icon${props.completed && '-active'}`}
        onClick={props.onComplete}
      >
        <FontAwesomeIcon icon={faCheck} />
      </span>
      <p
        className={`text-item${props.completed && '-active'}`}
      >
        {props.text}
      </p>
      <span
        className={`icon delete-icon`}
        onClick={props.onDelete}
      >
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </li>
  );
}

export { TodoItem };