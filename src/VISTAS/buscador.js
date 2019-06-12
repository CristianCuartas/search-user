import React, { Component } from 'react';
import { Input, Button, Container, Col, Row } from 'reactstrap';

class buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      infoUser: [],
      empty: true
    };
  }

  // showDataUser = () => {
  //   const infoUser = this.state;
  //   {
  //     infoUser.map(items => console.log(items.login));
  //   }
  // };

  submitHandler = e => {
    e.preventDefault();
    fetch(`https://api.github.com/search/users?q=${this.state.q}`)
      .then(response => response.json())
      .then(user => {
        this.setState({ infoUser: user.items[0] });
        if (user.incomplete_results === false) {
          this.setState({ empty: false });
        } else {
          return null;
        }
        console.log(user.items[0].login);
      })
      .catch(error => console.error(error));
  };

  render() {
    console.log(this.state.infoUser);
    console.log(this.state.empty);
    return (
      <div style={{ marginTop: '150px' }}>
        <Container>
          <form onSubmit={this.submitHandler}>
            <Row>
              <Col md="4">
                <h3>Id:</h3>
              </Col>
              <Col md="4">
                <Input
                  placeholder="Escribe tu username de GitHub"
                  type="text"
                  name="items"
                  onChange={e => {
                    this.setState({ q: e.target.value });
                  }}
                />
              </Col>
              <Col md="4">
                <Button outline color="success" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </form>
          <br />
          <br />
        </Container>
      </div>
    );
  }
}
export default buscador;
