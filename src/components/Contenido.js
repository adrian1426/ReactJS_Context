import { useContext } from 'react';
import { Context } from '../context/Context';

const Contenido = () => {
  const context = useContext(Context);

  return (
    <div>
      {context}
    </div>
  );
};

export default Contenido;