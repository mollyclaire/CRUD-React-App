import React, { Component } from "react";
import "./App.css";
import API from "./utils/API";
import Form from "./components/Form";

class App extends Component {

  state = {
    courses: []
  }

  componentDidMount() {
    API.getCourses()
    .then(res => this.setState( { courses: res.data }))
    .catch(err => console.log(err))
    console.log(this.state.courses)
  }

  // componentDidMount() {
  //   const apiUrl = 'http://localhost:3000/api/courses/';

  //   fetch(apiUrl)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           products: result
  //         });
  //       },
  //       (error) => {
  //         this.setState({ error });
  //       }
  //     )
  // }

  // getCourses() {
  //   fetch("http://localhost:3000/")
  //   .then(res => res.json())
  //   .then(res => this.setState({ courses: res.data}))
  //   .catch(err => console.log(err))
  // }

  

  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}

export default App;
