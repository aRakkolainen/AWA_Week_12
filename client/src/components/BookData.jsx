import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";

const BookData = () => {
    const  {book} = useParams();
    const [data, setData] = useState({});
    //Here we want to fetch data about book from the database!
    useEffect(() => {
        fetch("/book/:" + book)
        .then (response => console.log(response.status))
        .then (json => setData(json)) 
    })
    //console.log(response)
    //console.log(data.name)
    return(
        <div>
            <h3>{book}</h3>
            <p></p>
            <p></p>
        </div>
    )


}

export default BookData; 