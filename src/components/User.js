import { useState } from "react";

const User = ({name, location, contact}) => {
    const [count, setCount] = useState(2);

    return (
        <div className="user-card">
            <h3>Name: {name}</h3>
            <h4>Count: {count}</h4>
            <button onClick={()=>{
                setCount(count+1)
            }}>Count increace</button>
            <button onClick={()=>{
                setCount(count-1)
            }}>Count decrease</button>
            <p>Location: {location}</p>
            <p>Contact: {contact}</p>
        </div>
    );
};

export default User;