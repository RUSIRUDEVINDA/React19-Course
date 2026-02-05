import { useEffect, useMemo, useState } from "react";

function Button({ countToDisplay, buttonName }) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const mutiply = useMemo(() => {
        return count * 2;
    }, [count]);

    useEffect(() => {
        countToDisplay(count);
    }, [count]);

    console.log('Name : ', name);
    console.log('Count : ', count);
    console.log('Multiply : ', mutiply);

    console.log("Button rendered");


    return (
        <div className="card" style={{ backgroundColor: '#ffcaea' }}>
            <button onClick={() => setCount(count + 1)}>
                {buttonName}
            </button>
            <button onClick={() => setName("Rusiru")}>
                Change Name
            </button>
        </div>
    )
}

export default Button;