import './App.css';
import Timer from './Timer';

function App() {

  return (
    <>
      <Timer duration={2 * 21 * 60 * 60 * 1000} />
    </>
  );
}

export default App;
