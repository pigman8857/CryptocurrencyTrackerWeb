import './App.css'
import { DataContextProvider } from './context/data-context';

import Landing from './pages/landing';

function App() {
  return (
    <DataContextProvider >
        <Landing></Landing>
    </DataContextProvider>
  );
}

export default App
