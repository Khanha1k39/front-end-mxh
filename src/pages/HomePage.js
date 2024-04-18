import Posts from "../components/Post/Posts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../components/NavBar/NavBar";
import "./HomePage.css";
export default function HomePage() {
  function postImageHandler(e) {
    e.preventDefault();
    const imageFile = document.getElementById("image").files[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    fetch("http://localhost:8080/postimage", {
      method: "post",
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Container fluid={true} className="mr-0 ml-0">
        <Row>
          <Col className="border-right" xs={3}>
            First, but last
            <Navbar></Navbar>
          </Col>
          <Col xs={6}>
            <Posts></Posts>
          </Col>
          <Col xs={3}>Third, but first</Col>
        </Row>
      </Container>
    </>
  );
}
