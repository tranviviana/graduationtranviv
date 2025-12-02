
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ThemeImage from './images/image.png'
import DinnerLocationOne from './images/great_china.jpg'
import DinnerLocationTwo from './images/great_china_table.jpg'
import Carousel from 'react-bootstrap/Carousel';
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./images/graduation_white', false, /\.(png|jpe?g|svg)$/));


function App() {
  return (
    
    <div className="App">
     <Navbar bg="dark" variant="dark" expand="lg" >
          <Container>
            <Navbar.Brand href="#home" >VT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#rsvp">RSVP</Nav.Link>
                <Nav.Link href="#theme">Theme</Nav.Link>
                <Nav.Link href="#pictures">Pictures</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
          </Navbar>
          <Container className= "main-content">
          <div id = "home">
          <h1>Thank You</h1>
            <Card>
              
    <Card.Body> Throughout my undergraduate degree, I have looked towards you for support and guidance. As I finish out my degree, I wanted to say thank you through inviting you to a meal. On December 20th, please join me at UC Berkeley for pictures and food. On this site, you will find my downloadable graduation pictures, the theme for the night, and the RSVP form to join.</Card.Body>
         </Card>
          </div>
          <div id="rsvp" >
      
          <h1>Agenda For December 20th Is Available Here</h1>
          <iframe
  src={`${process.env.PUBLIC_URL}/December_20.pdf`}
  style={{ width: "100%", height: "100vh", border: "none" }}
  title="PDF Viewer"
/>
          </div>
          <div id="theme" >
          <h1> Theme</h1>
          <p>As it will be cold, please bring warm clothing. The theme will be autumn, with the color palette and intended venue below.</p>
          <div id="image-div">
          <img src={DinnerLocationOne}  />
      <img src={ThemeImage} alt="colors-for-dinner" />
      <img src={DinnerLocationTwo}  />
    </div>
          
          </div>
          <div id="pictures" >
            <h1>Pictures</h1>
<div id="graduation-div">
<h2>Graduation Regalia</h2>
<div id="car">
  <Carousel>
    {images.map((img, index) => (
      <Carousel.Item key={index}>
        <img src={img} alt={`Slide ${index + 1}`} />
      </Carousel.Item>
    ))}
  </Carousel>
  </div>

</div>
<div>
  <h2>Vietnamese Graduation Regalia</h2>
</div>
          </div>
          </Container>
        
    </div>
  );
}

export default App;
