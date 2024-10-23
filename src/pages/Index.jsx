import Navbar from "../component/WebHeader";
import "../assets/css/Index.css";

// img
import home_bg from "../assets/img/home-bg.png";
import about_bg from "../assets/img/about-bg.avif";

import s1 from "../assets/img/s1.png";
import s2 from "../assets/img/s2.png";
import s3 from "../assets/img/s3.png";
import s4 from "../assets/img/s4.png";

import sp1 from "../assets/img/sp1.png";
import sp2 from "../assets/img/sp2.png";
import sp3 from "../assets/img/sp3.png";
import sp4 from "../assets/img/sp4.jpg";
import sp5 from "../assets/img/sp5.png";
import sp6 from "../assets/img/sp6.png";
import sp7 from "../assets/img/sp7.jpg";
import sp8 from "../assets/img/sp8.png";
import sp9 from "../assets/img/sp9.png";
import sp10 from "../assets/img/sp10.png";
import sp11 from "../assets/img/sp11.jpg";
import sp12 from "../assets/img/sp12.png";
import sp13 from "../assets/img/sp13.jpg";
import sp14 from "../assets/img/sp14.jpg";
import sp15 from "../assets/img/sp15.png";
import Footer from "../component/WebFooter";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll"; // Import react-scroll for smooth scrolling


function Index() {
  const location = useLocation();

  // Scroll to specific sections based on the URL query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      scroller.scrollTo(scrollTo, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location]);

  const scrollToContact = () => {
    if (location.pathname === "/") {
      // If on the home page, scroll to the section
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    } else {
      // If on a different page, navigate to the home page and scroll to the section
      window.location.href = "/#contact";
    }
  };

  return (
    <div>
      <Navbar />

      {/* hero-section */}
      <div className="container-fulid" id="page-top">
        <div className="row mb-5" id="hero-section">
        
          <div className="col-lg-12 d-flex flex-wrap flex-sm-wrap flex-md-wrap justify-content-center">
      <div className="col-lg-6 text-center animate__animated animate__bounceInLeft">
        <img src={home_bg} alt="" className="img-fluid" />
      </div>
      <div className="col-lg-6 align-self-center mt-3 animate__animated animate__bounceInRight">
        <h1>
          Effortless Payments,
          <br /> All in One Place.
        </h1>
        <p className="mt-4 mb-4 w-75">
          Manage bill payments, travel bookings, utilities, and mobile
          recharges with ease. Seamless, convenient, and designed for
          efficiency.
        </p>
        <span onClick={scrollToContact} className="btn mb-5" style={{ cursor: 'pointer' }}>
          Get In Touch
        </span>
      </div>
    </div>
        </div>
      </div>
      {/* hero-section */}

      <div className="container">
        {/* about-section */}
        <div className="row" id="about">
          <div
            className="col-lg-12 d-flex flex-wrap flex-sm-wrap-reverse flex-md-wrap-reverse justify-content-between mt-5 mb-5 " data-aos="fade-up"
            id="about-section"
          >
            {/* heading  */}
            <div className="col-lg-6 align-self-center heading">
              <h1>
                Get Started Easily With <br /> a Personalized Product Tour
              </h1>
              <div className="line"></div>
              <p>
                At Gujarat PE, we're committed to simplifying your life. Our
                all-in-one payment solution allows you to effortlessly manage
                utility bill payments, telecommunications services, travel
                bookings, and more—all from a single app. We strive to offer a
                seamless, convenient, and efficient experience, enabling you to
                focus on what matters most. Transform the way you manage
                payments with ease and simplicity.
              </p>
            </div>
            {/* heading  */}
            <div className="col-lg-5">
              <img src={about_bg} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        {/* about-section  */}
        <hr />
        {/* service-section */}
        <div className="row mb-5" id="services">
          <div className="col-lg-12 heading text-center mt-5 " data-aos="fade-up">
            {/* heading  */}
            <h6>OUR SERVICES</h6>
            <h1>What We Can Do For You</h1>
            <div className="line m-auto mb-3"></div>
            <p className="w-75 m-auto">
              We offer services like DTH and mobile recharge, utility payments
              through BBPS, seamless travel booking, and the option to open bank
              and Demat accounts. Our goal is to provide convenience and
              efficiency for all your payment needs.
            </p>
            {/* heading  */}
          </div>
          <div
            className="col-lg-12 mt-5 d-flex flex-wrap justify-content-between flex-md-wrap flex-sm-wrap m-5" data-aos="fade-up"
            id="service-section"
          >
            {/* 1 */}
            <div
              className="card text-center mt-1"
              style={{ width: "16rem" }}
              id="s1"
            >
              <img
                src={s1}
                className="card-img-top shadow p-2 bg-body-tertiary rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">DTH</h5>
                <p className="card-text">
                  Effortlessly recharge your DTH services anytime with quick and
                  secure transactions.
                </p>
                <Link to="/service" className="btn btn-light" target="_top">Explore</Link>
              </div>
            </div>
            {/* 2 */}
            <div
              className="card text-center mt-1"
              style={{ width: "16rem" }}
              id="s2"
            >
              <img
                src={s2}
                className="card-img-top shadow p-2 bg-body-tertiary rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">BBPS</h5>
                <p className="card-text">
                  Pay bills for utilities like electricity, water, and more
                  through Bharat Bill Payment System (BBPS).
                </p>
                <Link to="/service" className="btn btn-light" target="_top">Explore</Link>
              </div>
            </div>
            {/* 3 */}
            <div
              className="card text-center mt-1"
              style={{ width: "16rem" }}
              id="s3"
            >
              <img
                src={s3}
                className="card-img-top shadow p-2 bg-body-tertiary rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Travel Booking</h5>
                <p className="card-text">
                  Enjoy competitive rates and exclusive deals while managing all
                  your travel needs in one convenient app.
                </p>
                <Link to="/service" className="btn btn-light" target="_top">Explore</Link>
              </div>
            </div>
            {/* 4 */}
            <div
              className="card text-center mt-1"
              style={{ width: "16rem" }}
              id="s4"
            >
              <img
                src={s4}
                className="card-img-top shadow p-2 bg-body-tertiary rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">New Bank & Demat Account Opening</h5>
                <p className="card-text">
                  Open new bank or Demat accounts quickly and hassle-free.
                </p>
                <Link to="/service" className="btn btn-light" target="_top">Explore</Link>
              </div>
            </div>
          </div>
        </div>
        {/* service-section */}
        <hr />
        {/* service-provider  */}
        <div className="row mb-5" id="service_provider">
          <div className="col-lg-12 heading text-center mt-5" data-aos="fade-up">
            {/* heading  */}
            <h6>OUR SERVICES PROVIDER</h6>
            <h1>Top-Up Anytime, Anywhere with Ease</h1>
            <div className="line m-auto mb-3"></div>
            <p className="w-75 m-auto">
              Provide mobile recharge services and DTH TV recharge for your
              customers in minutes. Ensure fast, reliable, and secure
              transactions every time. With just a few clicks, keep your
              customers connected and entertained without interruption.
            </p>
            {/* heading  */}
          </div>
          <div class="slider mt-5">
            <div class="bd-best" data-aos="fade-up">
              <div class="bd-best-list">
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp1} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp2} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp3} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp4} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp5} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp6} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp7} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp8} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp9} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp10} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp11} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp12} alt="" />
                </figure>
                {/* <figure class="bd-best-item">
                    <img class="kl_img" src={sp13} alt=""/>
                  </figure> */}
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp14} alt="" />
                </figure>
                <figure class="bd-best-item">
                  <img class="kl_img" src={sp15} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        {/* service-provider  */}
        <hr />
        {/* contact us  */}
        <div className="row mb-5" id="contact">
          <div className="col-lg-12 mt-5 d-flex flex-wrap justify-content-between flex-md-wrap flex-sm-wrap " data-aos="fade-up">
            <div className="col-lg-5 map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.688622461758!2d70.75903577434431!3d22.28978199327841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbd300fdec63%3A0xe6a6bcad69f5fe7!2sDecora%20Square!5e0!3m2!1sen!2sin!4v1728358011379!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                 class="img-fluid"
              ></iframe>
            </div>

            <div className="col-lg-6 heading">
              {/* heading  */}
              <h6>GET IN TOUCH</h6>
              <h1>Let’s Talk, We’re Here to Answer Your Questions</h1>
              <div className="line"></div>
              {/* heading  */}

              <div className="border d-flex" id="info">
                <i class="bi bi-person-circle"></i>
                <div className="ms-4">
                  <span>Founder</span>
                  <p>
                    H C KANABAR <br /> R K UNADKAT
                  </p>
                </div>
              </div>

              <div className="border d-flex" id="info">
                <i class="bi bi-envelope-at-fill"></i>
                <div className="ms-4">
                  <span>Email</span>
                  <p>Gujaratpe999@gmail.com</p>
                </div>
              </div>

              <div className="border d-flex" id="info">
                <i class="bi bi-telephone-fill"></i>
                <div className="ms-4">
                  <span>Contact No.</span>
                  <p>91+ 9924049992</p>
                </div>
              </div>

              <div className="border d-flex" id="info">
                <i class="bi bi-geo-alt-fill"></i>
                <div className="ms-4">
                  <span>Address</span>
                  <p>
                    Office No. 401 Decora Square Sadhuvasvani Road Rajkot
                    360005. INDIA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact us  */}
      </div>
      <Footer />
    </div>
  );
}

export default Index;
