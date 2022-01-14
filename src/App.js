import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./Header"
import Home from "./Home"
import Footer from "./Footer"
import SearchPage from "./SearchPage"
function App() {
  return (
    <div className="app">
    <BrowserRouter>
     <Header /> 
      <Routes>
      
      <Route path="/search" element ={<SearchPage />}/>
        <Route path="/" element ={<Home />}/>
       
      </Routes>

       <Footer /> 
    </BrowserRouter>
      
     
     






    </div>
  );
}

export default App;
