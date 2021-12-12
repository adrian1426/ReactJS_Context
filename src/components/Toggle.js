import { useContext } from 'react';
import { Context } from '../context/ContextToggle';

const Toggle = () => {
  const { valor, toggle } = useContext(Context);
  return (
    <div>
      {valor.toString()}

      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default Toggle;