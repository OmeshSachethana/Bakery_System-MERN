import React from 'react';


import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import DeliveriesList from "./components/deliveries-list.component";
import EditDelivery from "./components/edit-delivery.component";
import CreateDelivery from './components/create-delivery.component';
import pdfGenerator from './components/PDFFile';



function App() {
  return (
    <Router>
      <div className = "container">
      <Navbar />
      <pdfGenerator />
      
      <Route path="/" exact component={DeliveriesList} />
      <Route path="/edit/:id" component={EditDelivery} />
      <Route path="/create" component={CreateDelivery} />
      
      <br/>
      
      </div>

    </Router>
  );
  
}

export default App;



