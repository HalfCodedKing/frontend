import React from 'react'
import Navbar from './admin/Navbar'
import CoursesNavbar from './admin/CoursesNavbar'
import { Row, Col } from "antd";
import { SiSemanticscholar } from "react-icons/si";
import { SiGooglescholar } from "react-icons/si";
import { FaRegHandshake } from "react-icons/fa";
import { GiRunningNinja } from "react-icons/gi";
import { LuNetwork } from "react-icons/lu";
import { SiSololearn } from "react-icons/si";
import { MdOutlineLeaderboard } from "react-icons/md";
const AboutUs = () => {
  const images = [
    'images/edu.jpg']

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <Navbar />
      {/* <CoursesNavbar /> */}
      <div className='aboutUs'>
        <div className='aboutLeft'>
          <h4>
            ABOUT US
          </h4>
          <h3 style={{ fontSize: '23px', fontWeight: '600' }}>
            Other than enlightlening
            <br />We Provide a path to <br />
            Success
          </h3>
          <h3 style={{ fontSize: '20px', color: '#fff', fontWeight: '300' }}>
            त्याग दो सब ख्वाहिशें  कुछ अलग करने के लिए
            <br />
            “राम” ने  बहुत कुछ  खोया “श्री राम” बनने के लिए
          </h3>
          <div className='bttn'>
            Get Started
          </div>
        </div>
      </div>
      <div className='aboutDown'>
        <h3 style={{ fontWeight: '600', textAlign: 'center', marginTop: '30px' }}>
          Our Story
        </h3>
        <h3 style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center', marginBottom: '50px' }}>
          History is not only created by swords and wars,It can also be created by the pen <br />
          as they say, “The pen is mightier than the sword.”
        </h3>
        <div className="story" style={{ marginTop:'-80px' }}>
          <div className="storyLeft">
            <img src="images/about2.png" alt="" width={390} />
          </div>
          <div className="storyRight" style={{ width: '500px' }}>
            <p>
              CA Atul Agarwal &amp; CA Ajay Agarwal both emerged as the topper of CA Final, creating a history of ICAI in May 2018 &amp; May 2019 respectively at the age of 21. They were also the rank holders in CA Inter &amp; CA Foundation.
            </p>
            <p>
              All India Rank 1 CA Atul is also the only candidate in the history of ICAI to score the highest ever marks (83) in Audit paper. Being a Gold Medalist in Audit &amp; DT, he scored 618/800 marks (77. 25%) in CA Final Exams.
            </p>
            <p>
              All India Rank 1 CA Atul is also the only candidate in the history of ICAI to score the highest ever marks (83) in Audit paper. Being a Gold Medalist in Audit &amp; DT, he scored 618/800 marks (77. 25%) in CA Final Exams.
            </p>
            <p>
              <b>To get a rank in CA Exams – ICAI Material, Consistent Revision &amp; Mock Test are key to success.</b>
            </p>
          </div>
        </div>
        <div className='vision' style={{ marginBottom: '60px' }}>
          <div className="visionRight" style={{ width: '500px' }}>
            <h3 style={{ fontWeight: '600' }}>Our <span style={{ color: 'goldenrod' }}>Vision</span></h3>
            We started AIR1CA with a vision in effectively engaging students, ensuring their learning, and shaping their development. We believe in providing real value to our students with no  false guidance and show them the sure path to success. We want to revolutionize the existing ecosystem in the CA Coaching Industry for teaching students.
          </div>
          <div className="visionLeft">
            <img src="images/vission.png" alt="" width={450} />
          </div>

        </div>
        <div className='vision' style={{ marginBottom: '60px',flexDirection:'row-reverse' }}>
          <div className="visionRight" style={{ width: '500px' }}>
            <h3 style={{ fontWeight: '600' }}><span style={{ color: 'goldenrod' }}>Our</span> Mission</h3>
            <p>
              Our mission is to get 100% results in CA Exams. We want that the deserving candidate does  not fail due to wrong guidance &amp; wrong coaching.
            </p>
            <p>
              AIR1CA’s mission is to create and nurture a team of successful students who can be recognized as a swiss knife in the rapidly growing CA ecosystem. We want us to be identified as an innovative leader in the world of CA by enlightening our students which revolutionizes the way they study and therefore help them to stay ahead of their competition.
            </p>
          </div>
          <div className="visionLeft">
            <img src="images/mission.png" alt="" width={450} />
          </div>

        </div>
        <div className="vision" style={{marginBottom:'60px',display:'flex',flexDirection:'column',margin:'83px 0'}}>
          <h1 style={{textAlign:'center',fontWeight:'800',fontSize:'34px'}}> Our <span style={{color:'goldenrod'}}>Values</span> </h1>
          <p style={{textAlign:'center',marginBottom:'60px'}}>
            We empower our students with our expertise
            <br />
            We believe in giving conceptual plus exam oriented knowledge, so that students can perform well in both practical life &amp; exams.
            <br />
            We want to enlighten our students with integrity and we choose our thoughts and actions based on our values rather than personal gain.
            </p>
          <div className="action" style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',}}>
              <div style={{width:'400px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                 <div className='aboutImgs'>
                  <img src="images/studentsuc.png" alt="" width={170} />
                 </div>
                 <h3 style={{textAlign:'center'}}>Student Success</h3>
                  <p style={{textAlign:'center',marginTop:'20px',width:'300px'}}>
                  Making our student successful is #1 on our priority list nothing else is more important for us than this.
                  </p>
                </div>
                <div style={{width:'400px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <div className='aboutImgs'>
                  <img src="images/learn.png" alt="" width={170} />
                 </div>
                 <h3 style={{textAlign:'center'}}>Continuous Learning</h3>
                  <p style={{textAlign:'center',marginTop:'20px',width:'300px'}}>
                  Continuous and insatiable hunger for learning will make us and our students stay ahead of the competition.
                  </p>
                </div>
                <div style={{width:'400px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <div className='aboutImgs'>
                  <img src="images/trust.png" alt="" width={170} />
                 </div>
                 <h3 style={{textAlign:'center'}}>Trust & Accountability</h3>
                  <p style={{textAlign:'center',marginTop:'20px',width:'300px'}}>
                  Trust is the glue that holds us all together and we also hold ourselves accountable for our actions and the associated results.
                  </p>
                </div>
                <div style={{width:'400px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>    
                 <div className='aboutImgs'>
                  <img src="images/smart.png" alt="" width={170} />
                 </div>
                 <h3 style={{textAlign:'center'}}>Smart Study</h3>
                  <p style={{textAlign:'center',marginTop:'20px',width:'300px'}}>
                  Only hard work is not sufficient to succeed. We gotta do it with smartness. We believe in the formula of reading 1 book 10 times instead of 10 books 1 time.
                  </p>
                </div>
                <div style={{width:'400px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <div className='aboutImgs'>
                  <img src="images/comm.png" alt="" width={170} />
                 </div>
                 <h3 style={{textAlign:'center'}}>Communication</h3>
                  <p style={{textAlign:'center',marginTop:'20px',width:'300px'}}>
                  We value and emphasize communication as we think it is the key to all the problems and it also helps us understand ourselves, our students..</p>
                </div>
                <div style={{width:'400px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <div className='aboutImgs'>
                  <img src="images/leader.png" alt="" width={170} />
                 </div>
                 <h3 style={{textAlign:'center'}}>Leadership</h3>
                  <p style={{textAlign:'center',marginTop:'20px',width:'250px'}}>
                  We believe in leadership as it is the art of getting someone else to do something you want done because he wants to do it.
                  </p>
                </div>
                
          </div>
        </div>
      </div>
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
  )
}

export default AboutUs
