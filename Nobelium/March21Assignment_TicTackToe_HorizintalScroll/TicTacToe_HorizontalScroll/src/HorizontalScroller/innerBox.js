function InnerBox(prop){
    return(
        <div className="data-container">
            <img src={prop.data.image} />
            <h2>{prop.data.name}</h2>
            <p>{prop.data.designation}</p>
            <p>{prop.data.experience}</p>
        </div>
    )
}

export default InnerBox;