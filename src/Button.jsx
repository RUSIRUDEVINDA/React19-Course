import React from 'react';

const Button = React.memo(({ onClick, buttonName }) => {
    console.log("Child Rendered");
    return (
        <div className="card" style={{ backgroundColor: '#ffcaea' }}>
            <button onClick={() => onClick()}>
                {buttonName}
            </button>
        </div>
    )
})
export default Button;