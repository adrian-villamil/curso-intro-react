import { Children, cloneElement } from "react";

const TodoHeader = ({ children, loading }) => {
  return (
    <header>
        {Children.toArray(children).map(child => {
          return cloneElement(child, { loading: loading })
        })}
    </header>
  );
}

export { TodoHeader };