import React, { useState } from "react";
import { Link } from "react-router-dom";

// css
import "../assets/css/Sidebar.css";

// icons
import { FaTachometerAlt } from "react-icons/fa";
import { FaStore } from "react-icons/fa6";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
import { GiTwoCoins } from "react-icons/gi";
import { IoTicketSharp } from "react-icons/io5";
import { FaBuildingColumns } from "react-icons/fa6";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { RiDownload2Fill } from "react-icons/ri";

// Logo
import Gujarat_pe_Logo from "../assets/Logo/Gujarat_pe_Logo.png";

function Sidebar() {
  const [style, setStyle] = useState(
    "navbar-nav bg-light sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (style == "navbar-nav bg-light sidebar sidebar-dark accordion") {
      setStyle("navbar-nav bg-light sidebar sidebar-dark accordion toggled");
    } else {
      setStyle("navbar-nav bg-light sidebar sidebar-dark accordion");
    }
  };
  const changeStyle1 = () => {
    if (style == "navbar-nav bg-light sidebar sidebar-dark accordion") {
      setStyle("navbar-nav bg-light sidebar sidebar-dark accordion toggled1");
    } else {
      setStyle("navbar-nav bg-light sidebar sidebar-dark accordion");
    }
  };
  return (
    <div>
      <ul className={style} id="accordionSidebar">
        {/*  <!-- Sidebar - Brand --> */}
        <li className="nav-item active border-bottom">
          <Link className="sidebar-brand d-flex align-items-center" to="/">
            <img
              src={Gujarat_pe_Logo}
              alt=""
              width={"150px"}
              height={"130px"}
              className="p-2"
            />
          </Link>
        </li>

        {/*  <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard" id="nav-link">
            <i>
              <FaTachometerAlt />
            </i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* Services  */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseServices"
            aria-expanded="true"
            aria-controls="collapseServices"
            id="nav-link"
          >
            <i>
              <FaStore />
            </i>
            <span>Services</span>
          </Link>
          <div
            id="collapseServices"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Services:</h6>
              <Link className="collapse-item" to="/ccpayment">
                ❒ Credit Card Payment
              </Link>
              <Link className="collapse-item" to="/bbps">
                ❒ BBPS
              </Link>
              <Link className="collapse-item" to="/recharge">
                ❒ Recharge
              </Link>
              <Link className="collapse-item" to="/fundrequest">
                ❒ Fund Request
              </Link>
              <Link className="collapse-item" to="/bankservice">
                ❒ Banking Services
              </Link>
              <Link className="collapse-item" to="">
                ❒ Travel Services
              </Link>
              {/* <Link className="collapse-item" to="">
                ❒ Insurance
              </Link> */}
            </div>
          </div>
        </li>

        {/* Products  */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseProducts"
            aria-expanded="true"
            aria-controls="collapseProducts"
            id="nav-link"
          >
            <i>
              <FaCartFlatbedSuitcase />
            </i>
            <span>Products</span>
          </Link>
          <div
            id="collapseProducts"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Product:</h6>
              <Link className="collapse-item" to="/buyProduct">
                ❒ Buy Product
              </Link>
              <Link className="collapse-item" to="/viewDetalis">
                ❒ View Details
              </Link>
            </div>
          </div>
        </li>

        {/* Reports */}
        <li className="nav-item">
          <Link className="nav-link" to="/reports" id="nav-link">
            <i>
              <BiSolidReport />
            </i>
            <span>Reports</span>
          </Link>
        </li>

        {/* Commision */}
        <li className="nav-item">
          <Link className="nav-link" to="" id="nav-link">
            <i>
              <GiTwoCoins />
            </i>
            <span>My Commision</span>
          </Link>
        </li>

        {/* Tickets */}
        <li className="nav-item">
          <Link className="nav-link" to="" id="nav-link">
            <i>
              <IoTicketSharp />
            </i>
            <span>Support Tickets</span>
          </Link>
        </li>

        {/*  Finacial */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseFinacial"
            aria-expanded="true"
            aria-controls="collapseFinacial"
            id="nav-link"
          >
            <i>
              <FaBuildingColumns />
            </i>
            <span>Finacial</span>
          </Link>
          <div
            id="collapseFinacial"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Finacial:</h6>
              <Link className="collapse-item" to="">
                ❒ Wallet Transfer
              </Link>
              <Link className="collapse-item" to="">
                ❒ Load Money
              </Link>
              {/* <Link className="collapse-item" to="">
                ❒ Fund Request
              </Link> */}
              <Link className="collapse-item" to="">
                ❒ Fund Withdrawal
              </Link>
            </div>
          </div>
        </li>

        {/*  Account Request */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseAccountRequest"
            aria-expanded="true"
            aria-controls="collapseAccountRequest"
            id="nav-link"
          >
            <i>
              <RiAccountPinCircleFill />
            </i>
            <span>Account Request</span>
          </Link>
          <div
            id="collapseAccountRequest"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Account Request:</h6>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr />

        {/*   <!-- Heading --> */}
        <div className="sidebar-heading" id="nav-link">
          Addons
        </div>

        {/*  Settings */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseSettings"
            aria-expanded="true"
            aria-controls="collapseSettings"
            id="nav-link"
          >
            <i>
              <IoIosSettings />
            </i>
            <span>Settings</span>
          </Link>
          <div
            id="collapseSettings"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Setting:</h6>
            </div>
          </div>
        </li>

        {/*  Download */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseDownload"
            aria-expanded="true"
            aria-controls="collapseDownload"
            id="nav-link"
          >
            <i>
              <RiDownload2Fill />
            </i>
            <span>Download Center</span>
          </Link>
          <div
            id="collapseDownload"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Download:</h6>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
