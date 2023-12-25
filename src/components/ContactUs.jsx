import React, { useState } from 'react';
import Navbar from './admin/Navbar';
import CoursesNavbar from "./admin/CoursesNavbar";
import { Row, Col, Modal, Form, Input, Button } from "antd";
import { useSpring, animated } from 'react-spring';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
function ContactUs() {
  // Animation for the form container
  const formContainerSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const [isFormVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const onFinish = (values) => {
    console.log('Received values:', values);
    // You can handle form submission logic here
    toggleFormVisibility(); // Close the form after submission
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{backgroundColor:'#fff'}}>
      {/* Navbar components */}
      <Navbar />
      {/* <CoursesNavbar /> */}

      {/* Contact Us container */}
      <div className="contact-us-container" style={{ marginBottom: '45px' }}>

        {/* Cards Section */}
        <div style={{ height: '400px', width: window.innerWidth, textAlign: 'center', position: 'relative', top: '-20px' }} className='contactBanner'>
          <h1 style={{ color: 'black', marginTop: '70px', fontSize: '35px' }}>Contact Us</h1>
        </div>
        <div
          className="feature-cards"
          style={{ display: "flex", justifyContent: "space-between",alignItems:'center', padding: "30px 30px",backgroundColor:'#fff',position:'relative',top:'-20px',boxShadow:'1px 1px 3px lightgray' }}
        >
          <div
            style={{
              width: '300px',
              margin: '-5px',
              textAlign: "center",
              cursor: "pointer",
              display: 'flex',
              justifyContent: 'space-around',
              alignItems:'center'
            }}
            className='contactcard'
          >
            <img src="images/phn.png" alt="" width={80} />

            <div>
              <h3>Call/Whatsapp:</h3>
            <p>
              7742554277
            </p>
            </div>
          </div>
          <div
            style={{
              width: '300px',
              margin: '-5px',
              textAlign: "center",
              cursor: "pointer",
              display: 'flex',
              justifyContent: 'space-around',
              alignItems:'center'
            }}
            className='contactcard'
          >
            <img src="images/tele.png" alt="" width={100} />
            <div>
              <h3>
                Telegram Channel :
              </h3>
              <p>
              https://telegram.me/s/air1ca
              </p>
            </div>
          </div>
          <div
            style={{
              width: '300px',
              margin: '-5px',
              textAlign: "center",
              cursor: "pointer",
              display: 'flex',
              justifyContent: 'space-around',
              alignItems:'center'
            }}
            className='contactcard'
          >
            <img src="images/mail.png" alt="" width={100} />
            <div>
              <h3>Email :</h3>
              <p>
                air1ca@gmail.com
              </p>
            </div>
          </div>

        </div>

      <div className="form-section">
      <div style={{position:'relative',right:'300px',marginTop:'40px'}}>
        <h1 className='reqAfter'>
          <span style={{borderBottom:'2px solid goldenrod'}}>Re</span>q<span style={{borderBottom:'2px solid goldenrod'}}>uest</span> a Call Back
        </h1>
        <p>Please fill the form and we'll get back to you as soon as possible.</p>
        <form action="#" style={{display:'flex',flexDirection:'column'}}>
          <input type="text" placeholder='Name'/>
          <input type="email" placeholder='Email'/>
          <input type="number" placeholder='Phone Number'/>
          <textarea name="query" id="qyery" cols="30" rows="10" placeholder='Your Query'></textarea>
          <button style={{color:'#fff',backgroundColor:'#005fe4',borderRadius:'10px'}}>Contact Us</button>
        </form>
      </div>
      </div>

      </div>

      {/* Footer*/}
      <div
        style={{
          background: "#000",
          color: "#fff",
          padding: "20px 10px",
          height: "350px",
          width: "100%",
        }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6}>
            <div style={{ padding: '20px' }}>
              <img src="/images/header_logo.png" alt="Logo" width={130} style={{ margin: '10px' }} />
              <h5 style={{ color: 'white', margin: '10px' }}>Subscribe to Our NewsLetter</h5>
              <input type="text" placeholder="Enter Your Email" style={{ width: '250px', borderRadius: '13px', border: 'none', color: '#000' }} />
              <span style={{ backgroundColor: 'yellow', borderRadius: '8px', zIndex: '100', cursor: 'pointer' }}><h5 style={{ color: '#fff', position: 'relative', top: '-50px', left: '170px', backgroundColor: 'goldenrod', width: '65px', borderRadius: '8px', textAlign: 'center', padding: '5px' }}>Subscribe</h5></span>
              <div style={{ display: "flex", alignItems: "center" }}>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ margin: "0 10px", color: 'white' }}
                >
                  <i
                    className="fab fa-instagram"
                    style={{ margin: "0 10px", fontSize: '23px' }}
                  ></i>
                  <i
                    className="fab fa-whatsapp"
                    style={{ margin: "0 10px", fontSize: '23px' }}
                  ></i>
                  <i
                    className="fab fa-youtube"
                    style={{ margin: "0 10px", fontSize: '23px' }}
                  ></i>
                  <i
                    className="fa-solid fa-phone"
                    style={{ margin: "0 10px", fontSize: '23px' }}
                  ></i>
                </a>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <div style={{ marginBottom: "20px", display: 'flex', flexDirection: 'column' }}>
              <h1 style={{ color: 'white' }}>Quick Links</h1>
              <a href="/homepage" style={{ color: 'white', margin: '5px' }}>Home</a>
              <a href="/about" style={{ color: 'white', margin: '5px' }}>About Us</a>
              <a href="/allProducts" style={{ color: 'white', margin: '5px' }}>Products</a>
              <a href="/contact" style={{ color: 'white', margin: '5px' }}>Contact Us</a>
              <a href="/termsNdC" style={{ color: 'white', margin: '5px' }}>Terms and Conditions</a>
              <a href="/privacyP" style={{ color: 'white', margin: '5px' }}>Privacy Policy</a>
            </div>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <div style={{ marginBottom: "20px" }}>
              <h1 style={{ color: 'white' }}>CA Classes</h1>
            </div>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <h1 style={{ color: '#fff' }}>Contact us</h1>
            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ color: 'white' }}>Call Us</h3>
              <a href="tel:7742554277" style={{ color: 'white' }}>7742554277</a>
            </div>
            <div>
              <h3 style={{ color: 'white' }}>Email</h3>
              <a href="mailto:air1@gmail.com" style={{ color: 'white' }}>air1@gmail.com</a>
            </div>
          </Col>
        </Row>

        <hr style={{ color: '#fff', width: '94%', position: 'relative', left: '2%', marginTop: '13px' }} />
        <div style={{ color: '#fff', margin: '16px' }}>
          @Air1Ca
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
