import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  FormText,
  Input,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import Footer from "../../components/Footer/Footer.js";

import loginImage from "../../assets/registerImage.svg";
import logobp from "../../assets/logobp.png";
import { registerUser } from "../../actions/register.js";
import hasToken from "../../services/authService";

const Register = (props) => {
  const [state, setState] = useState({ email: '', nom: '', prenom: '', numero: '', password: ''} )

  const changeCred = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const doRegister = (event) => {
    event.preventDefault();
    props.dispatch(registerUser({
      creds: state,
      history: props.history,
    }))
  }

  const { from } = props.location.state || { from: { pathname: '/template' } }

  if (hasToken(JSON.parse(localStorage.getItem('authenticated')))) {
    return (
      <Redirect to={from} />
    );
  }

  return (
    <div className="auth-page">
      <Container className="col-12">
        <Row className="d-flex align-items-center">
          <Col xs={12} lg={6} className="left-column">
            <Widget className="widget-auth widget-p-lg">
              <div className="d-flex align-items-center justify-content-between py-3">
                <p className="auth-header mb-0">elearning.com</p>
                <div className="logo-block">
                  <img width={100} src={logobp} alt="logo" />
                </div>
              </div>

              <form onSubmit={(event => doRegister(event))}>
                <FormGroup className="my-3">
                  <FormText>Adresse professsionnel</FormText>
                  <Input
                    id="email"
                    className="input-transparent pl-3"
                    value={state.email}
                    onChange={(event) => changeCred(event)}
                    type="email"
                    required
                    name="email"
                    placeholder="banquepopulaire@gmail.com"
                  />
                </FormGroup>

                <FormGroup className="my-3">
                  <FormText>Nom</FormText>
                  <Input
                    id="nom"
                    className="input-transparent pl-3"
                    value={state.email}
                    onChange={(event) => changeCred(event)}
                    type="text"
                    required
                    name="nom"
                    placeholder="Monk"
                  />
                </FormGroup>

                <FormGroup className="my-3">
                  <FormText>Prénoms</FormText>
                  <Input
                    id="prenom"
                    className="input-transparent pl-3"
                    value={state.email}
                    onChange={(event) => changeCred(event)}
                    type="text"
                    required
                    name="prenom"
                    placeholder="Henry"
                  />
                </FormGroup>

                <FormGroup className="my-3">
                  <FormText>Numéro de Téléphone</FormText>
                  <Input
                    id="numero"
                    className="input-transparent pl-3"
                    value={state.email}
                    onChange={(event) => changeCred(event)}
                    type="text"
                    required
                    name="numero"
                    placeholder="0011225533"
                  />
                </FormGroup>

                <FormGroup  className="my-3">
                  <div className="d-flex justify-content-between">
                    <FormText>Mot de passe</FormText>
                  </div>
                  <Input
                    id="password"
                    className="input-transparent pl-3"
                    value={state.password}
                    onChange={(event => changeCred(event))}
                    type="password"
                    required
                    name="password"
                    placeholder="Password"
                  />
                </FormGroup>
                <div className="bg-widget d-flex justify-content-center">
                  <Button type="submit" color="success">S'inscrire</Button>
                </div>
                
                <Link to="/login">J'ai déjà un compte</Link>
              </form>
            </Widget>
          </Col>
          <Col xs={0} lg={6} className="right-column">
            <div>
              <img src={loginImage} alt="Error page" />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Register));
