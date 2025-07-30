import logo from './logo.svg';
import './App.css';
import Navi from "./components/Navi";
import Footer from "./components/Footer";
import {Container,Row,Col} from "reactstrap";

function App() {
  return (
      <div>
          <Container>
              <Row>
                  <Navi></Navi>
              </Row>
              <Row>

              </Row>
          <Col>
              <h1>Hello React</h1>
          </Col>

        <Footer></Footer>
          </Container>

      </div>

  );
}

export default App;
