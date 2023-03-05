import React, { Component } from 'react';
import axios from 'axios';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class CreateDelivery extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeProvince = this.onChangeProvince.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePostalCode = this.onChangePostalCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      phoneNumber: '',
      province: '',
      district: '',
      city: '',
      address: '',
      postalCode: ''
    }
  }

  /*componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
  }*/

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangePhoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value
    });
  }

  onChangeProvince(e) {
    this.setState({
      province: e.target.value
    });
  }

  onChangeDistrict(e) {
    this.setState({
      district: e.target.value
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
        address: e.target.value
    })
  }

  onChangePostalCode(e){
    this.setState({
        postalCode: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const delivery = {
      
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      province: this.state.province,
      district: this.state.district,
      city: this.state.city,
      address: this.state.address,
      postalCode: this.state.postalCode
    }

    console.log(delivery);

    axios.post('http://localhost:5000/deliveries/add', delivery)
          .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Delivery</h3>
      <form onSubmit={this.onSubmit}>
        
        <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              
              />
        </div>
        <div className="form-group">
          <label>Phone Number: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.phoneNumber}

              onChange={this.onChangePhoneNumber}
              />
        </div>
        <div className="form-group">
          <label>Province: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.province}
              onChange={this.onChangeProvince}
              />
        </div>

        <div className="form-group">
          <label>District: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.district}
              onChange={this.onChangeDistrict}
              />
        </div>

        <div className="form-group">
          <label>City: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.city}
              onChange={this.onChangeCity}
              />
        </div>

        <div className="form-group">
          <label>Address: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeAddress}
              />
        </div>

        <div className="form-group">
          <label>Postal Code: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.postalCode}
              onChange={this.onChangePostalCode}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Delivery" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}