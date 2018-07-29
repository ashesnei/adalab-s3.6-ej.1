import React from 'react';
import './Item.css';

class Item extends React.Component {
    render() {
        return (
            this.props.item.map(function (item) {
                return (
                    <div className="item">
                        <h5 className="quantity">{item.quantity}</h5>
                        <div>
                            <h5>{item.name}</h5>
                            <h6 className="text-muted">{item.description}</h6>
                        </div>
                        <div className="badge badge-info">{item.category}</div>
                        <h5 className="price">{item.price}€</h5>
                    </div>
                );
            }
        ))
}
}
 
//Ejercicio 3 (defaultProps)
Item.defaultProps = {
    description: 'No consta descripción', 
    category: 'General'
    }


export default Item;