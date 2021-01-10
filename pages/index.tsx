import { attributes, react as HomeContent } from "../content/home.md";
import { Container, Row, Col } from "react-bootstrap";

const Index = () => {
  let { title, cats } = attributes;
  return (
    <Container>
      <Row>
        <Col>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
