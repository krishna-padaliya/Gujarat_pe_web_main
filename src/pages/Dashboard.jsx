import React from "react";
// pages
import Sidebar from "../Component/Sidebar";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
// css
import "../assets/css/Dasboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="Dashboard" id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div className="Navbar">
              <Navbar />
            </div>

            {/* ----------------------------------------------------------------------------- */}
            <div className="container">
              {/* section1  */}
              <div className="row">
                {/* 1 */}
                <div
                  className="col-lg-2 shadow-sm mb-1 border text-center"
                  style={{ background: "#367588" }}
                  id="box"
                >
                  <Link to="/billPayment" id="d-box">
                    <h3>1</h3>
                    <p>CREDIT CARD PAYMENT</p>
                  </Link>
                </div>
                {/* 2 */}
                <div
                  className="col-lg-2 border shadow-sm p-1 mb-1 text-center"
                  style={{ background: "#367588" }}
                >
                  <Link to="/bbps" id="d-box">
                    <h3>2</h3>
                    <p>BBPS</p>
                  </Link>
                </div>
                {/* 3 */}
                <div
                  className="col-lg-2 border shadow-sm p-1 mb-1 text-center"
                  style={{ background: "#367588" }}
                >
                  <Link to="/dmt" id="d-box">
                    <h3>3</h3>
                    <p>RECHARGE</p>
                  </Link>
                </div>
                {/* 4 */}
                <div
                  className="col-lg-2 border shadow-sm p-1 mb-1 text-center"
                  style={{ background: "#367588" }}
                >
                  <Link to="/recharge" id="d-box">
                    <h3>4</h3>
                    <p>FUND REQUEST</p>
                  </Link>
                </div>
                {/* 5 */}
                <div
                  className="col-lg-2 border shadow-sm p-1 mb-1 text-center"
                  style={{ background: "#367588" }}
                >
                  <Link to="" id="d-box">
                    <h3>5</h3>
                    <p>BANKING SERVICES</p>
                  </Link>
                </div>
                {/* 6 */}
                <div
                  className="col-lg-2 border shadow-sm p-1 mb-1 text-center"
                  style={{ background: "#367588" }}
                >
                  <Link to="" id="d-box">
                    <h3>6</h3>
                    <p>TRAVEL SERVICES</p>
                  </Link>
                </div>
              </div>
              {/* section1  */}

              {/* section-2  */}
              <div className="row mt-5">
                <div className="col-lg-8">
                  <div className="row">
                    {/* table  */}
                    <div className="col-lg-12" id="d-table">
                      <h3>DMT Revised Charges</h3>
                      <div
                        id="carouselExampleInterval"
                        class="carousel slide mb-5 mt-3"
                        data-bs-ride="carousel"
                      >
                        <div class="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                        </div>
                        <div class="carousel-inner">
                          <div class="carousel-item active" data-bs-interval="10000">
                            <img src="https://t3.ftcdn.net/jpg/03/30/66/74/240_F_330667406_pWh6063Wkon5mE93tP4yIsi7TdaJ278i.jpg" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item" data-bs-interval="10000">
                            <img src="https://t3.ftcdn.net/jpg/03/30/66/74/240_F_330667406_pWh6063Wkon5mE93tP4yIsi7TdaJ278i.jpg" class="d-block w-100" alt="..." />
                          </div>
                          <div class="carousel-item" data-bs-interval="10000">
                            <img src="https://t3.ftcdn.net/jpg/03/30/66/74/240_F_330667406_pWh6063Wkon5mE93tP4yIsi7TdaJ278i.jpg" class="d-block w-100" alt="..." />
                          </div>
                        </div>
                        <button
                          class="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="prev"
                        >
                          <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                          class="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="next"
                        >
                          <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                    {/* table  */}
                    {/* Accordion  */}
                    <div className="col-lg-12">
                      <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Transaction Account Details
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laudantium temporibus nulla
                                libero, facilis dolor fugiat rem? Quae cum fugit
                                consequuntur dignissimos amet doloremque
                                repudiandae sunt, officiis et deserunt, corrupti
                                nemo!
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Cash Deposit
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body d-flex">
                              <div className="border me-3" id="cash-box">
                                <li>Name:</li>
                                <li>Bank Name:</li>
                                <li>IFSC Code:</li>
                                <li>Account Number:</li>
                                <li>Account Type:</li>
                              </div>
                              <div className="border me-3" id="cash-box">
                                <li>Name:</li>
                                <li>Bank Name:</li>
                                <li>IFSC Code:</li>
                                <li>Account Number:</li>
                                <li>Account Type:</li>
                              </div>
                              <div className="border me-3" id="cash-box">
                                <li>Name:</li>
                                <li>Bank Name:</li>
                                <li>IFSC Code:</li>
                                <li>Account Number:</li>
                                <li>Account Type:</li>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Online Transfer (IMPS/NEFT/RTGS)
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body d-flex">
                              <div className="border me-3" id="cash-box">
                                <li>Bank Name:</li>
                                <li>IFSC Code:</li>
                                <li>Account Number:</li>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Accordion  */}
                  </div>
                </div>
                <div className="col-lg-4 border" id="update">
                  <h4 className="mt-3 mb-4">Latest Updates</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellendus, ex magnam enim adipisci voluptatem tempora?
                    Facilis neque, eius ex maiores sunt voluptates labore sequi
                    quos. Pariatur nesciunt repellat saepe assumenda!
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellendus, ex magnam enim adipisci voluptatem tempora?
                    Facilis neque, eius ex maiores sunt voluptates labore sequi
                    quos. Pariatur nesciunt repellat saepe assumenda!
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellendus, ex magnam enim adipisci voluptatem tempora?
                    Facilis neque, eius ex maiores sunt voluptates labore sequi
                    quos. Pariatur nesciunt repellat saepe assumenda!
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellendus, ex magnam enim adipisci voluptatem tempora?
                    Facilis neque, eius ex maiores sunt voluptates labore sequi
                    quos. Pariatur nesciunt repellat saepe assumenda!
                  </p>
                </div>
              </div>
            </div>
            {/* section-2  */}

            {/* ----------------------------------------------------------------------------- */}

            <div className="Footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
