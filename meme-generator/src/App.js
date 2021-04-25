import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import MemeDisplay from './Components/MemeGenerator/MemeDisplay'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <MemeDisplay />
    </div>
  );
}

export default App;
