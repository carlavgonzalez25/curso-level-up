import "./App.css";
import { Characters } from "./components/Characters";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Characters />
    </ErrorBoundary>
  );
}

export default App;
