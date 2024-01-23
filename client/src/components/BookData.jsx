import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";

const BookData = () => {
    const  {name} = useParams();
    const [data, setData] = useState({});
    //Here we want to fetch data about book from the database!
    useEffect(()=> {
        fetch("/book/"+name)
        .then(response => response.json())
        .then(json => setData(json))
    }, [name])
    return(
        <div>
            <p>{data.name}</p>
            <p>{data.author}</p>
            <p>{data.pages}</p>
        </div>
    )


}

export default BookData; 