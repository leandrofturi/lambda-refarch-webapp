import React, { useState, useEffect } from 'react';
import { Container, Jumbotron, Row, Col, Alert, Button } from 'reactstrap';
import axios from 'axios';

import './App.css';
import logo from './valor.png';

import config from './config';

function App() {
  const [alert, setAlert] = useState();
  const [alertStyle, setAlertStyle] = useState('info');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertDismissable, setAlertDismissable] = useState(false);
  const [idToken, setIdToken] = useState('');
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    getIdToken();
    if (idToken.length > 0) {
    }
  }, [idToken]);

  axios.interceptors.response.use(response => {
    console.log('Response was received');
    return response;
  }, error => {
    window.location.href = config.redirect_url;
    return Promise.reject(error);
  });

  function onDismiss() {
    setAlertVisible(false);
  }

  return (
    <div className="App">
      <Container>
        <Alert color={alertStyle} isOpen={alertVisible} toggle={alertDismissable ? onDismiss : null}>
          <p dangerouslySetInnerHTML={{ __html: alert }}></p>
        </Alert>
        <Jumbotron>
          <Row>
            <Col md="6" className="logo">
              <h1>Intranet</h1>
              <p>This is a demo intranet.</p>
              
              <img src={logo} alt="Logo" />
            </Col>
            <Col md="6">
              {idToken.length > 0 ?
                (
                  <h1>Hello Word!</h1>
                ) : (
                  <Button
                    href={`https://${config.cognito_hosted_domain}/login?response_type=token&client_id=${config.aws_user_pools_web_client_id}&redirect_uri=${config.redirect_url}`}
                    color="primary"
                    className="mt-5 float-center"
                  >
                    Log In
                  </Button>
                )
              }
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </div >
  );
}

export default App;
