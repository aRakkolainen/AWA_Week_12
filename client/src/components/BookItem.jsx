const BookItem = ({data}) => {
    //console.log(data.name);
    return (
        <div>
            <p>{data.name}</p>
            <p>{data.author}</p>
            <p>{data.pages}</p>
        </div>
    )
} 
export default BookItem; 