//import logo from './logo.svg';
import './App.css';

function App() {
  function sendRequest() {
    let bookName = document.getElementById("name").value;
    let bookAuthor = document.getElementById("author").value;
    let bookPages = document.getElementById("pages").value; 
    let newBook = {
      name: bookName, 
      author: bookAuthor,
      pages: bookPages
    }
    console.log(newBook)
    
  }
  return (
    <div className="App">
      <h1>Books</h1>
      <input id="name" type="string" placeholder="Name for the book.."></input>
      <br></br>
      <input id="author" type="string" placeholder="Name for the author.."></input>
      <br></br>
      <input id="pages" type="number" placeholder="Number of pages in the book"></input>
      <br></br>
      <input id="submit" type="submit" value="Submit" onClick={() => sendRequest}></input>
    </div>
  );
}

export default App;
