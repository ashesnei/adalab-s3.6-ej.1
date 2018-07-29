import React, { Component } from 'react';
import Item from './Item';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.items = [
    {
      name:"Cereales con chocolate",
      description: "Cereales rellenos de chocolate",
      quantity: 2,
      category: "Cereales",
      price: 5
    },
    {
      name:"Hamburguesa con queso",
      description: "Hamburguesa rica y saludable",
      quantity: 1,
      category: "Fast-food",
      price: 15
    },
    {
      name:"Agua mineral",
      description: "",
      quantity: 2,
      category: "Bebida",
      price: 5
    },
    {
      name:"Cruzcampo",
      description: "Agua de un charco del Guadalquivir",
      quantity: 30,
      category: "Bebida?",
      price: 5
    }
  ]
 }
  render() {
    return (
      <div className="App">
        <Item item={this.items}/>
      </div>
    );
  }
}

export default App;
