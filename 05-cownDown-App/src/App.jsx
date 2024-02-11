import './App.css';
import Timer from './Timer';

function App() {


  return (
    <>
      <Timer duration={1 * 12 * 60 * 60 * 1000} />
    </>
  );
}

export default App;
