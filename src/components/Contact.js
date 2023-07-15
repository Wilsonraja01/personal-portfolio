import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ChatRight } from "react-bootstrap-icons";

 export const Contact = () => {
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   }
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Send');
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//       setFormDetails({
//         ...formDetails,
//         [category]: value
//       })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code == 200) {
//       setStatus({ succes: true, message: 'Message sent successfully'});
//     } else {
//       setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
//     }
//   };

  return (
    <section className="contact" id="about">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""}  src={contactImg} alt="About me"/>
              }
            </TrackVisibility>
            <p style={{ color: "PeachPuff",textAlign:"center",fontSize:"20px", fontWeight:"bold" }}><br></br>
            "Next time you're stuck on a problem,<br></br>try taking a shower and see if you come up with a solution 😅"
            <p style={{textAlign:"right", padding:"0 100px 0 0"}}><br></br>-Wilson Antony</p>
          </p>
          </Col>
          <Col size={10} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>About me</h2>
                {/* <form onSubmit={handleSubmit}> */}
                <div>
                      <p id="about" style={{paddingLeft:"15px",
                   fontSize:"20px", justifyContent:"flex-start", marginBottom:"-100px" }}>
                          <li>Hi, I am <b style={{color: "PeachPuff"}}>Wilson Antony</b> from <b style={{color: "PeachPuff"}}>Tirunelveli,TamilNadu</b>.</li><br></br>
                          <li>I am a recent graduate with a B.Tech in Information Technology from Dr.N.G.P. Institute of Technology, Coimbatore.</li><br></br> 
                          <li>I am proficient in Python, C, C++, SQL, HTML, CSS, and JavaScript.</li><br></br> 
                          <li>I was trained as an Associate Software Developer in Fullstack development at Calibraint Technologies, Chennai as an Intern.</li><br></br> 
                          <li>I am a quick learner and team player, and I am available for full-time employment.</li><br></br> 
                          <li>I am eager to start my career in Information Technology and make a positive impact.</li><br></br>
                          <li>I am a FullStack Developer with experience in building web applications using JavaScript and React frameworks.</li>
                      </p>
                      </div>
                  <Row>
                    <Col size={1} sm={12} className="px-1">
                      {/* <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} /> */}
                                  
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      {/* <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/> */}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      {/* <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} /> */}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      {/* <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/> */}
                    </Col>
                    <Col size={12} className="px-1">
                      {/* <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea> */}
                      {/* <button type="submit"><span>{buttonText}</span></button> */}
                    </Col>
                    {/* {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    } */}
                  </Row>
                {/* </form> */}
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
     </section>
  )
// return(

// )
}

