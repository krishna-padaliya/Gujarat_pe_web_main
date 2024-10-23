import logo from '../assets/logo/Gujarat_pe_Logo.png'
import '../assets/css/Footer.css'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      
        <div className="container-fluid " id='footer'>
          <div
            className="row d-flex justify-content-evenly "
            id="footer-bottom"
          >
            <div className="col-lg-3">
              <h4>
              <img src={logo} alt="" width={'100px'}  />
              </h4>
           <p>Committed to delivering innovative solutions that enhance your digital experience.</p>
              <div className="col-lg-12">
                <li className="social">
                  <a
                    href=""
                    target="_blank"
                  >
                    <i class="bi bi-facebook"></i>
                  </a>
                  &nbsp; &nbsp;
                  <a
                    href="https://wa.me/919924049992?"
                    target="_blank"
                  >
                  <i class="bi bi-whatsapp"></i>
                  </a>
                  &nbsp; &nbsp;
                  <a
                    href=""
                    target="_blank"
                  >
                 <i class="bi bi-instagram"></i>
                  </a>
                
                 
                </li>
              </div>
            </div>
            <div className="col-lg-2">
              <h4>Qulick Links</h4>
              <li>
                <a href="#about"  id="Link">
                 AboutUs
                </a>
              </li>
              <li>
                {" "}
                <a href="/service"  id="Link">
                Service
                </a>
              </li>
              <li>
                {" "}
                <a href="/terms" target="_top" id="Link">
                  Terms & Condition 
                </a>
              </li>
              <li>
                {" "}
                <a href="/refund" target="_top"  id="Link">
                  Refund Policy
                </a>
              </li>
            </div>
            <div className="col-lg-3">
              <h4>Our Location</h4>
              <p>
              <i class="bi bi-geo-alt-fill"></i> &nbsp; Office No. 401 Decora Square Sadhuvasvani Road Rajkot 360005. INDIA </p>
              <li>
              <i class="bi bi-envelope-at-fill"></i> &nbsp; Gujaratpe999@gmail.com
              </li>
              <li>
              <i class="bi bi-telephone-fill"></i> &nbsp; +91 9924049992
              </li>
            </div>
          </div>
        </div>

        <div className="container-fulid ">
          <div className="row">
            <div className="col-lg-12 text-center p-3" id='bootoom-footer'>
            <p class="mb-0">© 2024 Gujarat PE. All Rights Reserved.</p>
            </div>
          </div>
        </div>
        
        
    </div>
  );
}

export default Footer;
