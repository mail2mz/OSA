import React, { Component } from "react";
import axios from 'axios';



export default class ButtonStop extends Component {

  constructor(props) {
    super(props)
    this.state = {
      response: []
    };
  }


  componentDidMount() {
    axios.get('http://flaskosa.herokuapp.com/cmd/Ping')
      .then(res => {
          console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }



  render() {
	  return (
      <div>
        <p>Button Stop Pressed!</p>
      </div>
      )
  }
}