export function User1(prop){
    return (
        <div>
            <img src={prop.userData.image}/>
            <p className = {`${prop.className}`}>{prop.userData.designation}</p>
            <h1>{prop.userData.name}</h1>
            <p>{prop.userData.description}</p>
        </div>
    )
}

export function User2(prop){
    return (
        <div>
            <img src={prop.userData.image}/>
            <p className= {`${prop.className}`}>{prop.userData.designation}</p>
            <h1>{prop.userData.name}</h1>
            <p>{prop.userData.description}</p>
        </div>
    )
}