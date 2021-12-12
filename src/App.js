import Contenido from './components/Contenido';
import ContenidoDefault from './components/ContenidoDefault';
import { Provider } from './context/Context';

function App() {
  return (
    <Provider>
      <Contenido />
      <ContenidoDefault />
    </Provider>
  );
}

export default App;
