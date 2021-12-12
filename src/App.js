import Toggle from './components/Toggle';
import { Provider } from './context/ContextToggle';

function App() {
  return (
    <Provider>
      <Toggle />
    </Provider>
  );
}

export default App;
