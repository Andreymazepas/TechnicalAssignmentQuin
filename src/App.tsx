import './App.css';
import { LoadingProvider } from './context/loadingContext';
import Home from './pages/home';

function App() {
  return (
    <LoadingProvider>
      <Home />
    </LoadingProvider>
  );
}

export default App;
