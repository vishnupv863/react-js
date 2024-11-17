import { useState } from "react";
import styles from './Counter.module.css'

function Counter(){
    const[count,setCount] = useState(0)

    const incrementCount = () => {
        setCount(count+1)
    }

    const resitCount = () => {
        setCount(0)
    }

    const decrementCount = () => {
        setCount(count-1)
    }

     return(
        <div className={styles.counterContainer}>
            <p className={styles.counterDisplay}>{count}</p>
            <button className={styles.counterButton} onClick={incrementCount}>Increment</button>
            <button className={styles.counterButton} onClick={resitCount}>Resit</button>
            <button className={styles.counterButton} onClick={decrementCount}>Decrement</button>
        </div>
    );
}

export default Counter