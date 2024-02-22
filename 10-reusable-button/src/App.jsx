import './App.css'
import Button from './component/Button'

function App() {
  const handleClick = (e) => {
    console.log(e)
  }

  return (
    <>
      <Button > Click Me </Button>
      <Button style={{ background: 'green', color: 'white' }} onClick={handleClick}> <h1>Click Me</h1> </Button>
    </>
  )
}

export default App
