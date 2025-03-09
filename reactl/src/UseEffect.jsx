import { useEffect } from "react"



function UseEffect(){

    //first -type//
    useEffect(()=>{
console.log("hi from useeffect side")

//data fetch logic making here
    },[])

    //second- type
     useEffect(()=>{

     },[])
    return(
       
        <>
        
        <h1>this hi from useeffect</h1>
        </>
    )
}
export default UseEffect