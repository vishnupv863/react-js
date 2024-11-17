import { useState } from "react";

function Onchange(){
    
    const[name,setName] = useState("Guest")
    const[quantity, setQuantity] = useState(0);
    const[payment,setPayment] = useState();
    const[shipping,setShipping] = useState();

    const handleQuantity = (event) => {
        setQuantity(event.target.value)
    }

    const handleName = (event) => {
        setName(event.target.value)
    }

    const paymentHandler = (event) => {
        setPayment(event.target.value)
    }

    const shipmentHandler = (event) => {
        setShipping(event.target.value)
    }

    return(
        <div>
            <input type="text" value={name} onChange={handleName}/>
            <h2>Name:{name}</h2>

            <input type="number" value={quantity} onChange={handleQuantity}/>
            <h2>Quantity:{quantity}</h2>

            <select name="" id="" value={payment} onChange={paymentHandler}>
                <option value="">Select and option</option>
                <option value="VISA-CARD">Visacard</option>
                <option value="MASTER-CARD">Mastercard</option>
                <option value="UPI METHOD">UPI</option>
            </select>
            <h2>Payment:{payment}</h2>

            <label htmlFor="">
                <input type="radio"  value="pick-up" checked={shipping==='pick-up'} onChange={shipmentHandler}/>
                Pick-up
            </label> <br />
            <label htmlFor="">
                <input type="radio" value="delivery" checked={shipping==='delivery'} onChange={shipmentHandler}/>
                Delivery
            </label>
            <h2>Shipping:{shipping}</h2>
        </div>
    );
}

export default Onchange;