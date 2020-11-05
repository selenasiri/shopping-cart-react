import { ReactComponent } from '*.svg'
import React from 'react'
import data from "./data.json"

export App extends ReactComponent {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    }
  }

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            Products
          </div>
          <div className="sidebar">
            Cart Items
          </div>
        </div>
      </main>
      <footer>All rights reserved.</footer>
    </div>
  );
}

export default App;
