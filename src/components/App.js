// create your App component here
import React, { useEffect, useState } from "react";
function App (){
    const [image,setImage]=useState('')
    const [isLoaded,setIsLoaded]=useState(false)
    useEffect(()=>(
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then(data=>{
            setImage(data.message)
            setIsLoaded(true)
        })
    ),[])
    if(!isLoaded){return <p>Loading...</p>}
    return(
        <img alt="A Random Dog" src={image}></img>
    )
}
export default App