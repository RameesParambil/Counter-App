import React,{useState} from "react";
import './counterapp.css';

function CounterApp(){

    const [ count, setCount ] = useState(0)

    const decrease = () => {
        setCount(count -  1)
    }

    return(
        <div className="container">
            <h1>Counter App</h1>
            <div className="counter-value">
                <h1 className="value">{count}</h1>
            </div>
            <div className="button-container">
                <button type="button" className="increment-btn" onClick={() => setCount(count + 1)}>+</button>{' '}
                <button type="button" className="reset" onClick={() => setCount(0)}>Reset</button>{' '}
                <button type="button" className="decrement-btn" onClick={decrease}>-</button>{' '}
            </div>
        </div>
    )
}
export default CounterApp;