function Square(prop){
    return(
        <div 
        onClick={prop.onClickk}
        className="square">
            <h5>{prop.value}</h5>
        </div>
    )
};

export default Square;