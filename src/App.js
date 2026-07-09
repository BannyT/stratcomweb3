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
      <Router>
          <Routes>
             <Route  path='/*' element={
              <>
               <Header/>
                <Routes>
                   <Route path='/' element={<Home/>} />
                   <Route path='/aboutus' element={<Aboutus/>} />
                   <Route path='/services' element={<Services/>} />

                </Routes>  
              </>
             } />
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
