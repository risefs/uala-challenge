import AppRouter from './components/AppRouter/AppRouter';
import { AuthProvider } from './context/AuthContext/AuthContext';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
