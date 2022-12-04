// create your App component here
import React,{useState, useEffect} from "react";


export default function App(){
const [image, setImage] = useState()
useEffect(()=>{
 fetch('https://dog.ceo/api/breeds/image/random')
 .then(res=>res.json())
 .then(data=>setImage(data))
},[])
 const itemsToDisplay = image?<img src={image.message} alt="A Random Dog"></img>:<p>Loading...</p>

    return <div>
        {itemsToDisplay}
    </div>
}