import React from "react";
import "./styles.css";
import axios from "axios";

export default class Names extends React.Component {
  state = {
    persons: []
  };
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      console.log(res);
      this.setState({ persons: res.data });
    });
  }
  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li>
            <img src={person.profilepicture} alt="" /> {person.name}
          </li>
        ))}
      </ul>
    );
  }
}
