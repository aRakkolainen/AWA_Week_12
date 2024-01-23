//import logo from './logo.svg';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BookData from "./components/BookData";
//import BookItem from "./components/BookItem";
import './App.css';

function App() {
  const [bookData, setBookData] = useState({});
    /*const handleChange = (e) => {
        setBookData(...bookData,[e.target.name], e.target.value)
    }*/
    // Fetching the data from database!
    useEffect(() => {
      fetch("/book/:book")
      .then(response => response.json())
      .then(json => setBookData(json));
    })

    console.log(bookData)
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
      <Route path="/book/:book" element={
      <BookData></BookData>}></Route>
      </Routes>
    </div>
    </Router>

  );
}

export default App;
