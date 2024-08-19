import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { posts } from "./data/post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function App() {
  let headerInfo = {
    email: "salmanfarcy@gmail.com",
    phone: "01602695577",
    name: "salman farcy",
    age: 24,
    biodata: {
      address: "dhaka, md pur 1207",
    },
  };
  return (
    <div>
      <Header headerInfo={headerInfo} cname="GREATE farcy">
        <h1>welcome to Bangladesh</h1>
        <FontAwesomeIcon icon={faWhatsapp} className="text-danger"/>
        <FontAwesomeIcon icon={faPhone} className="text-danger"/>
        <FontAwesomeIcon icon={faAmazon} className="text-danger"/>

      </Header>

      <Container>
        <Row>
          {
          posts.map((post, index) =>{
            return(
              <ProductItems postItem={post} key={post.id} postId={post.id}/>
              
            )
          })
          }
        </Row>
      </Container>

      <Footer>
        <h1>welcome to Bangladesh</h1>
      </Footer>
    </div>
  );
}

export default App;

function ProductItems({postItem, indexes}) {
  let {title, body} = postItem;
  return (
    <div className="col-lg-3  mb-4 ">
      <Card >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
