import "../assets/css/otherPage.css";
import Footer from "../component/WebFooter";
import Navbar from "../component/WebHeader";
// icon 
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import { PiCodesandboxLogo } from "react-icons/pi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa6";
import { AiOutlineFileProtect } from "react-icons/ai";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { MdAccountBalance } from "react-icons/md";
import { MdAirplaneTicket } from "react-icons/md";

function Service() {
  return (
    <div>
      <Navbar />
      <div className="conatiner">
        <div className="row" id="main-ser">
          <div className="col-lg-12 otherPage mt-5 mb-5">
            <h1 className="text-center" data-aos="fade-up">
              Our Services
            </h1>
            <div className="m-auto line mb-5"></div>

            <div
              className="col-lg-12 d-flex flex-wrap flex-sm-wrap flex-md-wrap justify-content-evenly mt-5 p-5"
              data-aos="fade-up"
            >
              {/* 1 */}
              <div
                className="card text-center mt-2 shadow p-3 m-3"
                style={{ width: "22rem" }}
              >
                <div className="card-body">
                  <i><MdOutlinePhoneIphone /></i>
                  <h6 className="card-title">Recharge</h6>
                  <p className="card-text">
                    Recharge your DTH and mobile services effortlessly with
                    Gujarat Pe's quick and secure platform. Enjoy fast recharges
                    for all major operators like Airtel, VI, BSNL, Jio, and
                    more, through our website and mobile app.
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div
                className="card text-center mt-2 shadow p-3 m-3"
                style={{ width: "22rem" }}
              >
                <div className="card-body">
                  <i><MdComputer /></i>
                  <h6 className="card-title">Bill Payment</h6>
                  <p className="card-text">
                    We are also offering bill payment service [bbps] all mazor
                    operators like postpaid, landline, broadband, electricity,
                    Water, Gas, fasttag, insurance, loan emi with attractive
                    commission structure.
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div
                className="card text-center mt-2 shadow p-3 m-3"
                style={{ width: "22rem" }}
              >
                <div className="card-body">
                  <i><PiCodesandboxLogo /></i>
                  <h6 className="card-title">Aadhaar Pay</h6>
                  <p className="card-text">
                    AEPS which stands for Aadhaar Enabled Payments Systems which
                    aims to facilitate the financial inclusion via aadhar or
                    fingureprint.
                  </p>
                </div>
              </div>
              {/* 4 */}
              <div
                className="card text-center mt-2 shadow p-3 m-3"
                style={{ width: "22rem" }}
              >
                <div className="card-body">
                  <i><FaMoneyBillTransfer /></i>
                  <h6 className="card-title">Money Transfer</h6>
                  <p className="card-text">
                    Gujarat Pe introduces new, innovative products and services
                    while finding fresh ways to improve mature offerings. We are
                    committed to continuous growth and delivering exceptional
                    value to our customers.
                  </p>
                </div>
              </div>
              {/* 5 */}
              <div
                className="card text-center mt-2 shadow p-3 m-3"
                style={{ width: "22rem" }}
              >
                <div className="card-body">
                  <i><FaCalculator /></i>
                  <h6 className="card-title">Micro ATM</h6>
                  <p className="card-text">
                    Gujarat Pe is dedicated to bringing innovative products and
                    services to market, while also finding creative ways to
                    enhance existing ones. We believe in delivering fresh value
                    and driving continuous growth for our customers and
                    partners.
                  </p>
                </div>
              </div>

              {/* 7 */}
              <div
                className="card text-center mt-2 shadow p-3 m-3"
                style={{ width: "22rem" }}
              >
                <div className="card-body">
                  <i><AiOutlineFileProtect /></i>
                  <h6 className="card-title">Insurance</h6>
                  <p className="card-text">
                    With Gujarat Pe, retailers can offer a range of insurance
                    policies, from life to motor insurance. Easily check plans,
                    premiums, and provide tailored solutions to local customers
                    while earning commissions. Expand your services and help
                    secure your community’s future.
                  </p>
                </div>
              </div>
              {/* 8 */}
              <div
                className="card text-center mt-2 shadow p-3 m-3"
                style={{ width: "22rem" }}
              >
                <div className="card-body">
                  <i><HiArrowTrendingUp /></i>
                  <h6 className="card-title">Investment Plan</h6>
                  <p className="card-text">
                    With Gujarat Pe, be the bank for your customers by offering
                    a wide range of services and earning commissions on every
                    transaction. Expand your reach, serve more people, and
                    increase your earnings effortlessly.
                  </p>
                </div>
              </div>
              {/* 9 */}
              <div
                className="card text-center mt-2 shadow p-3 m-3"
                style={{ width: "22rem" }}
              >
                <div className="card-body">
                  <i><MdAccountBalance /></i>
                  <h6 className="card-title">Account Opening</h6>
                  <p className="card-text">
                    Gujarat Pe offers comprehensive banking tools for all your
                    financial needs, allowing retailers to partner with leading
                    banks and provide various services to local customers. Enjoy
                    cashback, rewards, and commissions with every transaction,
                    making it a win-win for everyone!
                  </p>
                </div>
              </div>
              {/* 9 */}
              <div
                className="card text-center mt-2 shadow p-3 m-3"
                style={{ width: "22rem" }}
              >
                <div className="card-body">
                  <i><MdAirplaneTicket /></i>
                  <h6 className="card-title">Travel Booking</h6>
                  <p className="card-text">
                    Enjoy competitive rates and exclusive deals while managing
                    all your travel needs in one convenient app. Whether booking
                    flights, hotels, or transportation, Gujarat Pe simplifies
                    your travel experience. Make every journey seamless and
                    enjoyable with our user-friendly interface and personalized
                    recommendations!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Service;
