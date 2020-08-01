import React from 'react';

const TotalPrice = props => {
    let message = (<p>Order is empty! <span>Please add some items</span></p>);
    if(props.totalPrice > 0) {
        message = <p>Total price: {props.totalPrice}</p>
    }
    return (
        <div className="total-price">
            {message}
        </div>
    );
};

export default TotalPrice;