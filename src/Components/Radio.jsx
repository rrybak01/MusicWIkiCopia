import React from 'react';
import uuid from 'react-uuid';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import './Elementos.css';
import axios from "axios";

class Radio extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
    }
  }

  async componentDidMount() {
    var myHeaders = new Headers();

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    
    const response = await fetch(
      'https://cors-anywhere.herokuapp.com/https://api.deezer.com/radio',
      requestOptions
    );

    const responseData = await response.json();

    this.setState({
      tableData: responseData.data,
    });
      
  }

  render() {
    return (
      <div className="contenedor">
         
          {this.state.tableData.map((item) => {
            return (
              <div className="contenedorTarjeta">
                <div className='tarjeta'>
                  <img src={item.picture_medium} />
                  <p>{item.title}</p>
                </div>
              </div>
            );
          })}
        
      </div>
    );
  }
}

export default Radio;