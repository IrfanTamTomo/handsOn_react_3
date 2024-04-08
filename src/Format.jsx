const Format = (props) => {
    return (
        <div>
            <h1>{props.item.title}</h1> 
            <p>{props.item.category}</p>
            <img className='image' src={props.item.image} alt={props.item.title} />
            <p className='price'>$ {props.item.price} </p>
            <hr></hr>
        </div>
    )
}

export default Format