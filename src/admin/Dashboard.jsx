// packages
import { Link } from "react-router-dom";
// logo
import Logo from "../assets/logo/Gujarat_pe_Logo.png";
// page
import "../assets/css/Dasboard.css";
// icon
import { BsFillBellFill } from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { IoMdWallet } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
// img
import s1 from "../assets/img/s1.png";
import s2 from "../assets/img/s2.png";
import s3 from "../assets/img/s3.png";
import s4 from "../assets/img/s4.png";

function Dashboard() {
  return (
    <div>
      <div className="container-fulid">
        <div className="row">
          <div className="col-lg-12 d-flex">
            <div className="aside">
              <div className="admin-logo border-bottom">
                <img src={Logo} alt="" className="img-fluid" />
              </div>
              <div className="admin-nav ">
                <li>
                  <Link to="/dashboard">
                    <i>
                      <AiFillDashboard />
                    </i>{" "}
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/sales_report">
                    <i>
                      <TbLayoutDashboardFilled />
                    </i>
                    Sales Report
                  </Link>
                </li>
                <li>
                  <Link to="/ledger_report">
                    <i>
                      <IoMdWallet />
                    </i>
                    Ledger Report
                  </Link>
                </li>
                <li>
                  <Link to="/my_commision">
                    <i>
                      <FaIndianRupeeSign />
                    </i>
                    My Commision
                  </Link>
                </li>
                <li>
                  <Link to="/support_ticket">
                    <i>
                      <MdSupportAgent />
                    </i>
                    Support Ticket
                  </Link>
                </li>
              </div>
              <div className="admin-bottom">
                <hr />
                <li>
                  <b>Merchant ID:</b>0123456789
                </li>
                <li>
                  <i>
                    <BiLogoGmail />
                  </i>{" "}
                  support@gujaratpe.com
                </li>
                <li>
                  <i>
                    {" "}
                    <MdSupportAgent />
                  </i>{" "}
                  +91 9924049992
                </li>
              </div>
            </div>
            <div className="adminbody">
              <div className="adminbody-header text-end pe-5">
                <i id="profile">
                  <Link to="#">
                  <BsFillBellFill />
                  </Link>
                </i>
              </div>
              {/* --------------------------------------------------------------------------------------------------------------------------------------------------- */}
              {/* content */}
              <div className="adminbody-content">
                {/* heading */}
               <div className="heading">
               <h4>Dashboard</h4>
               </div>
                {/* heading */}

                <div
                  className="col-lg-12 mt-5 d-flex flex-wrap justify-content-evenly flex-md-wrap flex-sm-wrap"
                  data-aos="fade-up"
                  id="service-section"
                >
                  {/* 1 */}
                  <div
                    className="card text-center"
                    style={{ width: "16rem" }}
                    id="s1"
                  >
                    <img
                      src={s1}
                      className="card-img-top shadow p-2 bg-body-tertiary rounded"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Utility</h5>
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
                    </div>
                  </div>
                  {/* 3 */}
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
                      <h5 className="card-title">Banking</h5>
                    </div>
                  </div>
                  {/* 4 */}
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
                    </div>
                  </div>
                </div>
              </div>
              {/* content */}
              {/* --------------------------------------------------------------------------------------------------------------------------------------------------- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
