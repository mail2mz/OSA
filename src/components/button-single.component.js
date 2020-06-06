import React, { Component } from "react";
import axios from 'axios';



export default class ButtonSingle extends Component {

  constructor(props) {
    super(props)
    this.state = {
      response: []
    };
  }

  componentDidMount() {
    axios.get('https://flaskosa.herokuapp.com/cmd/Ping')
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
        <p>Button Single Pressed!</p>
      </div>
     )
  }
}