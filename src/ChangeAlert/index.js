import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css';

const ChangeAlert = ({ sincronize }) => {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div className="ChangeAlert">
        <div className="ChangeAlert-container">
          <p>Han habido nuevos cambios en la lista de TODOs. Recarga la aplicación para poder ver los cambios</p>
          <button onClick={() => toggleShow(false)}>Recargar</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };