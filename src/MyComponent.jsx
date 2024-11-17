import { useState } from "react";

function MyComponent(){
    const[name,setName] = useState("Guest");
    const[age,setAge] = useState(0);
    const[isEmployed, setIsEmployed] = useState(false)

    const handleName = () => {
        setName("vishnu")
    }

    const handleAge = () => {
        setAge(age+1)
    }

    const setEmployee = () => {
        setIsEmployed(!isEmployed)
    }
    return(
        <div>
            <h2>Name:{name}</h2>
            <button onClick={handleName}>SetName</button>

            <h2>Age:{age}</h2>
            <button onClick={handleAge}>SetName</button>

            <h2>Employed:{isEmployed? "Yes" : "No"}</h2>
            <button onClick={setEmployee}>Toggle</button>
        </div>
    );

}
export default MyComponent;