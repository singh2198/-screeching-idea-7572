// import logo from './logo.svg';
// import { Route } from 'react-router-dom';
// import Navigation from './AllRoutes/Nav';
import Rout from './AllRoutes/Rout';
import './App.css';
import { Footer } from './Footer/Footer';
import Navbar from './Navbar/Navbar';

// import { BrowserRouter } from 'react-router-dom';


function App(){
  return (
    <div className="App">
      <Navbar/>
      {/* <Navigation/> */}
      <Rout/>
      <Footer/>
      
  
     
      
    </div>
  );
}

export default App;
