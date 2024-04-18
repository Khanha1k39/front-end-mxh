import { Image } from "react-bootstrap";
import image from "./image.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Posts.module.css";

function PostUser() {
  return (
    <Container fluid>
      <Row xs={12}>
        <Col xs={1}>
          <Image
            src={image}
            className={`${styles.avatar} mt-2 mb-2 justify-content-center align-items-center  `}
          ></Image>
        </Col>
        <Col className=" d-flex align-items-center">
          <span> Khánh Dương</span>
        </Col>
      </Row>
    </Container>
  );
}

export default PostUser;
