import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSpring, animated, config, useSprings } from "react-spring";
import { Link } from 'react-router-dom';
import { Card } from "antd";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import {
  GiftOutlined,
  DollarCircleOutlined,
  CustomerServiceOutlined,
  LockOutlined,
  RocketOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Tabs } from "antd";
import Navbar from "./admin/Navbar";
import CoursesNavbar from "./admin/CoursesNavbar";
import { Row, Col } from "antd";
// Destructuring components from Ant Design
const { Meta } = Card;
const { TabPane } = Tabs;

const HomePage = () => {
  // State variables
  const [animateText, setAnimateText] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [productTabs, setProductTabs] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [rankCarouselIndex, setRankCarouselIndex] = useState(0);
  const navigate = useNavigate();
  const [carouselIndex, setCarouselIndex] = useState(0);

  // useEffect to fetch data on component mount
  useEffect(() => {
    // Set a timeout to animate text after 1 second
    const timeoutId = setTimeout(() => {
      setAnimateText(true);
    }, 1000);


    // Fetch products data from the server
    axios
      .get("http://localhost:8081/admin/products")
      .then((response) => {
        const products = response.data;

        // Get unique course names for tabs
        const uniqueCourses = Array.from(
          new Set(products.map((product) => product.course))
        ).slice(-4);

        // Create tab names and set top products
        const tabNames = uniqueCourses.map((course, index) => ({
          key: index,
          tab: course,
        }));

        setProductTabs(tabNames);
        setTopProducts(products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    // Cleanup function to clear timeout
    return () => clearTimeout(timeoutId);
  }, []);

  const ranksData = [
    { title: "Harsh", iconColor: "#FFD700", desc: 'The lectures are best!! ...' },
    { title: "Hardik", iconColor: "#4CAF50", desc: 'The lectures are best!! ...' },
    { title: "Tushar", iconColor: "#2196F3", desc: 'The lectures are best!! ...' },
    { title: "Harsh", iconColor: "#FFD700", desc: 'The lectures are best!! ...' },
    { title: "Hardik", iconColor: "#4CAF50", desc: 'The lectures are best!! ...' },
    { title: "Tushar", iconColor: "#2196F3", desc: 'The lectures are best!! ...' },
    { title: "Harsh", iconColor: "#FFD700", desc: 'The lectures are best!! ...' },
    { title: "Hardik", iconColor: "#4CAF50", desc: 'The lectures are best!! ...' },
    { title: "Tushar", iconColor: "#2196F3", desc: 'The lectures are best!! ...' },
    // ... (Repeat the above 3 objects to create a loop)
  ];
  const handleRankCarouselChange = (index) => {
    setRankCarouselIndex(index);
  };
  // React Spring animation for text
  const textSpring = useSpring({
    opacity: animateText ? 1 : 0,
    transform: animateText ? "translateY(0)" : "translateY(20px)",
  });

  // Hardcoded image URLs for Carousel
  const images = [
    "https://www.investopedia.com/thmb/N-OFg2MCyywPGORRfb3LNAnspHM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/OnlineCourses_Jacek-Kita-e2c9d834d3524d76ac28da76aec203ca.jpg",
    "https://tipa.in/wp-content/uploads/2021/05/Online-courses.jpg",
  ];

  // Hardcoded feature items
  const featureItems = [
    {
      title: "Exclusive Gifts",
      icon: (
        <GiftOutlined
          style={{ fontSize: "36px", marginBottom: "8px", color: "#FFD700" }}
        />
      ),
    },
    {
      title: "Best Deals",
      icon: (
        <DollarCircleOutlined
          style={{ fontSize: "36px", marginBottom: "8px", color: "#4CAF50" }}
        />
      ),
    },
    {
      title: "24/7 Support",
      icon: (
        <CustomerServiceOutlined
          style={{ fontSize: "36px", marginBottom: "8px", color: "#2196F3" }}
        />
      ),
    },
    {
      title: "Secure Ordering",
      icon: (
        <LockOutlined
          style={{ fontSize: "36px", marginBottom: "8px", color: "#FF5722" }}
        />
      ),
    },
    {
      title: "Fast Delivery",
      icon: (
        <RocketOutlined
          style={{ fontSize: "36px", marginBottom: "8px", color: "#E91E63" }}
        />
      ),
    },
  ];
  const featureItems2 = [
    {
      title: "Harsh",
      icon: (
        <UserOutlined
          style={{ fontSize: "36px", marginBottom: "8px", color: "#FFD700" }}
        />
      ),
      desc: 'The lectures are best!! I am watching lectures continuously and its making me feel to learn more and more. The way of teaching concepts with examples is just awesome. I won’t ever forgot the gun and fire extinguisher example in PPE Topic And the Concept Book!! No words sir. It creates a picture of whole topic and makes me love FR more and more. Thank you so much sir!!'
    },
    {
      title: "Hardik",
      icon: (
        <UserOutlined
          style={{ fontSize: "36px", marginBottom: "8px", color: "#4CAF50" }}
        />
      ),
      desc: 'The lectures are best!! I am watching lectures continuously and its making me feel to learn more and more. The way of teaching concepts with examples is just awesome. I won’t ever forgot the gun and fire extinguisher example in PPE Topic And the Concept Book!! No words sir. It creates a picture of whole topic and makes me love FR more and more. Thank you so much sir!!'
    },
    {
      title: "Tushar",
      icon: (
        <UserOutlined
          style={{ fontSize: "36px", marginBottom: "8px", color: "#2196F3" }}
        />
      ),
      desc: 'The lectures are best!! I am watching lectures continuously and its making me feel to learn more and more. The way of teaching concepts with examples is just awesome. I won’t ever forgot the gun and fire extinguisher example in PPE Topic And the Concept Book!! No words sir. It creates a picture of whole topic and makes me love FR more and more. Thank you so much sir!!'
    },
    {
      title: "Krishna",
      icon: (
        <UserOutlined
          style={{ fontSize: "36px", marginBottom: "8px", color: "#FF5722" }}
        />
      ),
      desc: 'The lectures are best!! I am watching lectures continuously and its making me feel to learn more and more. The way of teaching concepts with examples is just awesome. I won’t ever forgot the gun and fire extinguisher example in PPE Topic And the Concept Book!! No words sir. It creates a picture of whole topic and makes me love FR more and more. Thank you so much sir!!'
    },
    {
      title: "Abhishek",
      icon: (
        <UserOutlined
          style={{ fontSize: "36px", marginBottom: "8px", color: "#E91E63" }}
        />
      ),
      desc: 'The lectures are best!! I am watching lectures continuously and its making me feel to learn more and more. The way of teaching concepts with examples is just awesome. I won’t ever forgot the gun and fire extinguisher example in PPE Topic And the Concept Book!! No words sir. It creates a picture of whole topic and makes me love FR more and more. Thank you so much sir!!'
    },
  ];
  const featureItems3 = [
    {
      title: "Shaan Shah",
      image: 'https://air1ca.com/wp-content/uploads/2021/10/air5-img.jpg',
      rank: 'AIR 5',
      time: 'July - 2021'
    },
    {
      title: "Shubham Gupta",
      image: 'https://air1ca.com/wp-content/uploads/2021/10/air10-img.jpg',
      rank: 'AIR 1',
      time: 'July - 2020'
    },
    {
      title: "Avinash Garg",
      image: 'https://air1ca.com/wp-content/uploads/2021/10/Surender-Pal-15.jpg',
      rank: 'AIR 11',
      time: 'July - 2022'
    },
    {
      title: "Arpit Bala",
      image: 'https://air1ca.com/wp-content/uploads/2021/10/Avinash-Garg-39.jpg',
      rank: 'AIR 15',
      time: 'July - 2017'
    },
  ];
  const [springs, set] = useSprings(ranksData.length, (index) => ({
    transform: `translateX(${(index - carouselIndex) * 100}%)`,
    config: config.slow,
  }));

  const handleCarouselChange = (direction) => {
    const newIndex =
      direction === "left"
        ? Math.max(carouselIndex - 1, 0)
        : Math.min(carouselIndex + 1, ranksData.length - 1);

    setCarouselIndex(newIndex);
  };
  // Event handler for tab change
  const handleTabChange = (key) => {
    setSelectedTab(key);
  };

  // Render the component
  return (
    <div style={{ backgroundColor: '#fff' }}>
      {/* Navigation components */}
      <Navbar />
      {/* <CoursesNavbar /> */}

      {/* Image Carousel with welcome text */}
      <div style={{ width: '100%', height: '500px' }}>
        <img src="https://air1ca.com/wp-content/uploads/2020/08/banner_img.jpg" alt="" width={window.innerWidth} height={550} />
        <div style={{ position: 'relative', color: '#fff', zIndex: '1', top: '-400px', left: '300px', textAlign: 'center' }}>
          <p style={{ textAlign: 'center', fontSize: '21px' }}>Welcome to <span style={{ color: 'goldenrod' }}>AIR1CA</span> Career Institute <span style={{ color: 'goldenrod' }}>(ACI)</span></p>
          <h2 style={{ textAlign: 'center', fontSize: '31px', color: '#fff' }}><span style={{ color: 'goldenrod' }}>The</span> Best</h2>
          <h3 style={{ textAlign: 'center', fontSize: '35px', color: '#fff' }}>Online <span style={{ color: 'goldenrod' }}>CA</span> Coaching</h3>
        </div>
      </div>
      {/* Feature cards */}
      <div
        className="feature-cards"
        style={{ display: "flex", justifyContent: "center", padding: "30px 0" }}
      >
        {featureItems.map((item, index) => (
          <Card
            key={index}
            style={{
              width: 280,
              margin: '-5px',
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => alert(`Clicked on ${item.title}`)}
          >
            {item.icon}
            <Meta title={item.title} style={{ marginTop: "10px" }} />
          </Card>
        ))}
      </div>

      {/*  about us*/}

      <div className="about" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row-reverse' }}>
        <div className="text" style={{ textAlign: 'center', width: '600px' }}>
          <h1 style={{ textAlign: 'left', fontSize: '34px', fontWeight: '700', marginTop: '23px' }}>
            About <span style={{ color: 'goldenrod', textDecoration: 'underline' }}> Us
            </span> </h1>
          <h1 style={{ textAlign: 'left', fontSize: '29px', fontWeight: '600' }}>Other than enlightlening ,<br />
            We Provide a path to
            Success</h1>
          <div className="homeAbout">
            <div className="homeAboutChild"><span></span>
              <h3>Millions</h3> <p>Of Students Across India</p></div>
            <div className="homeAboutChild"><h3>All</h3> <p>States Covered</p></div>
            <div className="homeAboutChild"><h3>10%</h3> <p>Of CA Are Our Students</p></div>
            <div className="homeAboutChild"><h3>100%</h3> <p>Results</p></div>
          </div>

          <button style={{ backgroundColor: 'goldenrod', color: '#fff', alignSelf: 'flex-start', position: 'relative', left: '-38%' }}><a href="/about" style={{ color: '#fff', textAlign: 'left' }}>Learn More</a></button>
        </div>
        <div className="image">
          <img src="images/global.png" alt="" width={450} />
        </div>
      </div>

      {/* Top Products with Tabs */}
      <div style={{ textAlign: "center", marginTop: '45px' }}>
        <h2 style={{ fontSize: '34px', fontWeight: '800' }}>Featured <span style={{ color: 'goldenrod', textDecoration: 'underline' }}> Courses</span></h2>
        <Tabs
          centered
          activeKey={selectedTab.toString()}
          onChange={handleTabChange}
          tabBarStyle={{ justifyContent: "center" }}
        >
          {productTabs.map((tab, index) => (
            <TabPane key={index.toString()} tab={tab.tab}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "30px 0",
                }}
              >
                {topProducts
                  .filter((product) => product.course === tab.tab)
                  .map((product) => (
                    <Link key={product.id} to={`/admin/products/view/${product.id}`}>
                      <Card
                        style={{ width: 300, margin: '20px', boxShadow: '1px 1px 5px lightgray', borderRadius: '8px' }}
                        cover={<img alt={product.productName} src={product.image.split(',')[0]} height={200}/>}
                      >
                        <a>{product.productName}</a>
                        <p>{`Rs. ${product.price}`}</p>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "10px",
                          }}
                        >
                          {/* Add your social icons or links here */}
                          <a
                            href={`/admin/products/view/${product.id}`}
                            rel="noopener noreferrer"
                            style={{ margin: "0 5px" }}
                          >
                            {/* Example social icon */}

                            <i
                              className="fa-solid fa-eye"
                              style={{ margin: "0 5px" }}
                            ></i>
                            <i
                              className="fab fa-whatsapp"
                              style={{ margin: "0 5px", color: "green" }}
                            ></i>
                            <i
                              className="fab fa-youtube"
                              style={{ margin: "0 5px", color: "red" }}
                            ></i>
                            <i
                              className="fa-solid fa-phone"
                              style={{ margin: "0 5px", color: "darkgray" }}
                            ></i>
                          </a>
                        </div>
                      </Card>
                    </Link>
                  ))}
              </div>
            </TabPane>
          ))}
        </Tabs>
      </div>
      <div style={{ textAlign: "center", margin: "30px 0", width: "100%", position: "relative" }}>
        {/* Mobile phone image */}


        <div>
          <h1 style={{ fontSize: '34px', fontWeight: '800' }}>Our <span style={{ color: 'goldenrod', textDecoration: 'underline' }}>Results</span></h1>
          <div style={{ background: 'linear-gradient(135deg, #FFD740, #FFB300)', width: '100%', height: '500px', padding: '24px',display:'flex',justifyContent:'space-around' }}>
            <div style={{textAlign:'center',color:'#fff',width:'21%',fontSize:'34px',fontWeight:'800',marginTop:'28  px'}}>
           " History is not only created by swords and wars,It can also be created by the pen "

            </div>
            <div style={{ position: "relative", width: "300px"}}>
              <Carousel autoplay dotPosition="bottom" slidesToShow={1} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                {featureItems3.map((item, index) => (
                  <Card
                    key={index}
                    style={{
                      textAlign: "left",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      cursor: "pointer",
                      width:'50vw',
                      transition: "transform 0.3s",
                      borderRadius: '23px',
                      display: 'flex',
                      flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',margin:'0 40px' }}>
                      <img src={item.image} alt="" width={150} />
                      <h3 style={{ fontWeight: '600', width: '300px', marginTop: '6px', fontSize: '26px' }}>{item.title} </h3>
                      <h2 style={{ fontWeight: '600', width: '300px', fontSize: '37px' ,color:'goldenrod'}}>
                        {item.rank}
                      </h2>
                      <p style={{ fontWeight: '800', width: '300px', fontSize: '18px', color: 'gray' }}>
                        {item.time}
                      </p>
                    </div>
                  </Card>
                ))}
              </Carousel>

            </div>
          </div>
        </div>


        <div
          style={{
            width: '100%',
            padding: '90px',

          }}
        >
          <h1 style={{ textAlign: 'center', fontSize: '34px', marginBottom: '50px' }}>What Our <span style={{ color: 'goldenrod', textDecoration: 'underline' }}>Students</span> Say</h1>
          <Carousel autoplay style={{ width: "100%", height: "200px", boxShadow: '2px 2px 14px lightgray', borderRadius: '13px', borderLeft: '5px solid goldenrod', borderRight: '5px solid goldenrod' }} dotPosition="bottom">
            {featureItems2.map((item, index) => (
              <Card
                key={index}
                style={{
                  width: "100%",
                  margin: "0 auto",
                  textAlign: "left",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  borderRadius: '23px'
                }}
              >
                <div style={{ backgroundColor: "", display: 'flex', alignItems: 'center', justifyContent: "center" }} >
                  <img src="/images/header_logo.png" alt="" width={100} />
                </div>
                <Meta title={item.title} style={{ marginTop: "10px" }} />
                <p style={{ margin: '13px' }}>
                  {item.desc}
                </p>
              </Card>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Contact and Social Links */}
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
};

export default HomePage;
