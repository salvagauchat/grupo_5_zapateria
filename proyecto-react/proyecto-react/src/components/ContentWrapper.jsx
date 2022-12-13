import React, { useEffect, useState } from "react";

function ContentWrapper (){

    const [dataApi, setDataApi] = useState(initialState)
    
    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then(response => response.json())
            .then(data => setDataApi(data))
            .catch(error => console.log(error))
        }, [])
        useEffect (()=>{
            console.log(dataApi);
        }, [dataApi])        
        
        return (
            <>
                <h1>Andandoo...</h1>
            </>
        )
}


export default ContentWrapper;
