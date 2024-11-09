// packages
import { Link } from "react-router-dom";
// logo
import Logo from "../assets/logo/Gujarat_pe_Logo.png";
// page
import "../assets/css/Dasboard.css";
// icon
import { FaUserCircle } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { IoMdWallet } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";

function LedgerReport() {
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
              <div className="admin-bottom align-items-baseline">
               <hr />
               <li><b>Merchant ID:</b>0123456789</li>
              <li><i><BiLogoGmail /></i> support@gujaratpe.com</li>
              <li><i> <MdSupportAgent /></i> +91 9924049992</li>
              </div>
            </div>
            <div className="adminbody">
              <div className="adminbody-header text-end pe-5">
                <i id="profile">
                  <Link to="#">
                    <FaUserCircle />
                  </Link>
                </i>
              </div>
              {/* --------------------------------------------------------------------------------------------------------------------------------------------------- */}
              {/* content */}
              <div className="adminbody-content"></div>
              {/* content */}
              {/* --------------------------------------------------------------------------------------------------------------------------------------------------- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LedgerReport;

