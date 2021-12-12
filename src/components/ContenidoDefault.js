import { useContext } from 'react';
import { Context } from '../context/ContextDefault';

const ContenidoDefault = () => {
  const context = useContext(Context);

  return (
    <div>
      {context}
    </div>
  );
};

export default ContenidoDefault;