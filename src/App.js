
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Add from './Add';
import Tables from './Tables';
import Home from './Home';
import NavbarFile from './NavbarFile';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <NavbarFile/>
    <Routes>
      
      <Route path='/' element={<Home />}></Route> 
      <Route path='/fesztivalHozzaad' element={<Add />}></Route> 
      <Route path='/fesztivalKiir' element={<Tables />}></Route> 
      
     
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;