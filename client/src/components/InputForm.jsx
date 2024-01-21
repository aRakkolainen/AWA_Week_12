import {useState} from "react";

const InputForm = () => {
    const [bookData, setBookData] = useState({});
    const handleChange = (e) => {
        setBookData(...bookData,[e.target.name], e.target.value)
    }
    return(<>
        <form onChange={handleChange}>
      <input id="name" type="string" placeholder="Name for the book.."></input>
      <br></br>
      <input id="author" type="string" placeholder="Name for the author.."></input>
      <br></br>
      <input id="pages" type="number" placeholder="Number of pages in the book"></input>
      <br></br>
      <input id="submit" type="submit" value="Submit"></input>
      </form> 
    </>)
} 
export default InputForm;