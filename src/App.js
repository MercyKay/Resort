
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar'
import  './App.css';
function App() {
  return (
    <div>
    <Router>
      <Navbar />
      {/* <nav>
        <Link to="/">Home</Link>
        <link to="rooms">ROOMS</link>
        <link to="singleroom">SingleRooms</link>
      </nav> */}
    <Routes>
    
      <Route path="/" element={<Home />} />  
      <Route path="rooms"  element={<Rooms />} />
      <Route path="singleroom" element={<SingleRoom />} />
      <Route path="*" element={<Error /> } />
    </Routes>
    
    </Router>
    </div>
  );
}

export default App;
