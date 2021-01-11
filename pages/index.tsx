import { attributes, react as HomeContent } from "../content/home.md";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../components/Banner";

const Index = () => {
  let { title, cats, banner } = attributes;
  return (
    <>
      <Banner src={banner} />

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
    </>
  );
};

export default Index;
