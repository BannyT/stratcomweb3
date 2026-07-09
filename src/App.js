import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Aboutus from './Aboutus';
import Services from './Services';
import  {BrowserRouter as Router,Routes,Route} from  'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Aboutus/>
      <Services/>
    </div>
  );
}

export default App;
