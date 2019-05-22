import React, { Component } from 'react';

class buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts?id=')
      .then(response => response.json())
      .then(json => {
        this.setState({ id: '' });
      });
  };

  render() {
    const { id } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <label>Id:</label>
        <input
          key={id}
          type="text"
          name="id"
          value={id}
          onChange={this.changeHandler}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
export default buscador;
