import React, { Component } from 'react';
import {
  Input,
  Button,
  Container,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Collapse
} from 'reactstrap';
import NOTFOUND from '../img/rick.gif';
import GITHUBREACT from '../img/Captura.PNG';

class buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      infoUser: [],
      collapse: true
    };
  }

  submitHandler = e => {
    e.preventDefault();
    fetch(`https://api.github.com/search/users?q=${this.state.q}`)
      .then(response => response.json())
      .then(user => this.setState({ infoUser: user.items, empty: false }))
      .catch(error => console.log(error));
    this.toggle();
  };

  toggle = () => {
    this.setState({ collapse: false });
  };

  showHome = () => {
    return (
      <div>
        <div style={{ marginTop: '70px' }}>
          <Container>
            <Row className="justify-content-center">
              <div>
                <Row>
                  <Card
                    style={{ /* width: '350px', height: '430px', */ border: 0 }}
                  >
                    <div style={{ marginTop: '20px' }}>
                      <Col>
                        <img src={GITHUBREACT} alt="NOT FOUND" />
                      </Col>
                      <CardBody>
                        <CardTitle />
                        <CardSubtitle />
                        <br />
                      </CardBody>
                    </div>
                  </Card>
                  &nbsp;
                </Row>
                &nbsp;
              </div>
            </Row>
          </Container>
        </div>
      </div>
    );
  };

  showDataUser = () => {
    const { infoUser } = this.state;
    return (
      <div>
        <Container>
          <Row className="justify-content-center">
            {infoUser.map(item => (
              <div>
                <Row>
                  <Card>
                    <Col>
                      <CardImg
                        src={item.avatar_url}
                        alt="avatar"
                        style={{ width: '200px', height: '200px' }}
                      />
                    </Col>
                    <CardBody>
                      <CardTitle>NickNam: {item.login}</CardTitle>
                      <CardSubtitle>Id: {item.id}</CardSubtitle>
                      <Button outline color="success" href={item.html_url}>
                        Ir al perfil GitHub
                      </Button>
                    </CardBody>
                  </Card>
                  &nbsp;
                </Row>
                &nbsp;
              </div>
            ))}
          </Row>
        </Container>
      </div>
    );
  };

  showNotFound = () => {
    return (
      <div>
        <Container>
          <Row className="justify-content-center">
            <div>
              <Row>
                <Card style={{ width: '350px', height: '430px' }}>
                  <div style={{ marginTop: '20px' }}>
                    <Col>
                      <img
                        src={NOTFOUND}
                        alt="NOT FOUND"
                        style={{ width: '250px', height: '250px' }}
                      />
                    </Col>
                    <CardBody>
                      <CardTitle>USER NOT FOUND</CardTitle>
                      <CardSubtitle>wubba lubba dub dub </CardSubtitle>
                      <br />
                      <Button outline color="danger" href="/">
                        Go back
                      </Button>
                    </CardBody>
                  </div>
                </Card>
                &nbsp;
              </Row>
              &nbsp;
            </div>
          </Row>
        </Container>
      </div>
    );
  };

  render() {
    console.log(this.state.infoUser);

    return (
      <div style={{ marginTop: '100px' }}>
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
                &nbsp; &nbsp;
                <Button outline color="primary" href="/">
                  Home
                </Button>
              </Col>
            </Row>
          </form>
          <br />
          <br />
          <Collapse isOpen={this.state.collapse}>{this.showHome()}</Collapse>
        </Container>
        {this.state.infoUser === undefined
          ? this.showNotFound()
          : this.showDataUser()}
      </div>
    );
  }
}
export default buscador;
