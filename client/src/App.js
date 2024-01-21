//import logo from './logo.svg';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import InputForm from "./components/InputForm";
import ShowBooks from "./components/ShowBooks";
import './App.css';

function App() {
  const [bookData, setBookData] = useState({});
    /*const handleChange = (e) => {
        setBookData(...bookData,[e.target.name], e.target.value)
    }*/
  return (
    <Router>
    <div className="App">
      <h1>Books</h1>
      <Routes>
      <Route path="/" element={<><form>
        <input id="name" type="string" placeholder="Name for the book.."></input>
        <br></br>
        <input id="author" type="string" placeholder="Name for the author.."></input>
        <br></br>
        <input id="pages" type="number" placeholder="Number of pages in the book"></input>
        <br></br>
        <input id="submit" type="submit" value="Submit"></input>
        </form> 
    </>}></Route>
      <Route path="/book/:book" element={<ShowBooks></ShowBooks>}></Route>
      </Routes>
    </div>
    </Router>

  );
}

export default App;
