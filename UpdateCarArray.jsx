import { useState } from "react";

function UpdateCarArray(){

    const [year, setYear] = useState("");
    const [model, setModel] = useState("");
    const [make, setMake] = useState("");
    const [cars, setCar] = useState([]);

    const handleYear = (event) => {
        setYear(event.target.value)
    }

    const handleModel = (event) => {
        setModel(event.target.value)
    }

    const handleMake = (event) => {
        setMake(event.target.value)
    }

    const handleCar = () => {
        setCar(cars => ([...cars, {Year:year, Model:model, Make:make}]));
        setYear(""); 
        setModel("");
        setMake("");
    }

    const carRemover = (index) => {
        setCar(cars => cars.filter((_,i) => i!=index))
    }

    return(
        <div>
            <h2>{cars.map((car, index) => <li key={index} onClick={() => carRemover(index)}>{car.Year},{car.Model},{car.Make}</li>)}</h2>
            <input type="number" onChange={handleYear} value={year}/><br />
            <input type="text" onChange={handleModel} value={model}/><br />
            <input type="text" onChange={handleMake} value={make}/><br />
            <button onClick={handleCar}>Add care details</button>
        </div>
    );
}

export default UpdateCarArray
