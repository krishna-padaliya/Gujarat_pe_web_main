import React, { useState } from "react";
import { Link } from "react-router-dom";

// css
import "../assets/css/Sidebar.css";
import "../assets/css/Navbar.css";

// icons
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { FaMoneyCheck } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  const changeStyle1 = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  return (
    <div>
      {/*  <!-- Topbar --> */}
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/*  <!-- Sidebar Toggle (Topbar) --> */}
        {/* <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
          onClick={changeStyle1}
        >
          <i className="fa fa-bars"></i>
        </button> */}

        {/*  <!-- Topbar Search --> */}

        <div
          className="d-flex align-items-center ms-auto mb-2 mb-lg-0"
          id="nav-info"
        >
          <i className="email me-3">
            <h6>
              Email: <span>help@gujaratpe.com</span>
            </h6>
          </i>

          <i className="nav-item dropdown no-arrow mx-1 me-3">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <h6>
                Availble Balence: <span>₹ 100.98</span>
                <i>
                  <IoMdArrowDropdown />
                </i>
              </h6>

              {/*  <!-- Counter - Alerts --> */}
            </a>
            {/*   <!-- Dropdown - Alerts --> */}
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <div
                className="d-flex justify-content-evenly"
                id="dropdown-header"
              >
                <h6 className="dropdown-header" id="dropdown-header">
                  Main: <span>₹ 0.00</span>
                </h6>
                <h6 className="dropdown-header" id="dropdown-header">
                  Credit: <span>₹ 100.98</span>{" "}
                </h6>
              </div>
              {/* 1 */}
              <Link
                className="dropdown-item d-flex align-items-center"
                to="#"
                id="navbar-dropdown"
              >
                <div className="mr-3">
                  <div className="icon-circle border">
                    <i className="fs-4">
                      <RiMoneyRupeeCircleFill />
                    </i>
                  </div>
                </div>
                <div>
                  <span className="">Load Money</span>
                </div>
              </Link>
              {/* 2 */}
              <Link
                className="dropdown-item d-flex align-items-center"
                to="#"
                id="navbar-dropdown"
              >
                <div className="mr-3">
                  <div className="icon-circle border">
                    <i className="fs-4">
                      <GiWallet />
                    </i>
                  </div>
                </div>
                <div>
                  <span className=""> Wallet Ledger</span>
                </div>
              </Link>
              {/* 3 */}
              <Link
                className="dropdown-item d-flex align-items-center"
                to="#"
                id="navbar-dropdown"
              >
                <div className="mr-3">
                  <div className="icon-circle border">
                    <i className="fs-4">
                      <FaMoneyCheck />
                    </i>
                  </div>
                </div>
                <div>
                  <span className=""> Wallet Request</span>
                </div>
              </Link>
              {/* 4 */}
              {/* <Link
                className="dropdown-item d-flex align-items-center"
                to="#"
                id="navbar-dropdown"
              >
                <div className="mr-3">
                  <div className="icon-circle border">
                    <i className="fs-4">
                      <FaMoneyBillTrendUp />
                    </i>
                  </div>
                </div>
                <div>
                  <span className="">Fund Withdrawl</span>
                </div>
              </Link> */}
            </div>
          </i>

          <i className="wallet me-3">
            <h6>
              Reserve Wallet: <span>₹ 0.00</span>
            </h6>
          </i>
        </div>

        {/*  <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">
          {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}

          <div className="topbar-divider d-none d-sm-block"></div>

          {/*  <!-- Nav Item - Alerts --> */}
          <li className="nav-item dropdown no-arrow mx-1">
            <Link
              className="nav-link dropdown-toggle fs-5"
              to="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i>
                <IoNotifications />
              </i>
              {/*  <!-- Counter - Alerts --> */}
              {/* <span className="badge badge-danger badge-counter">3+</span> */}
            </Link>
            {/*   <!-- Dropdown - Alerts --> */}
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <h6 className="dropdown-header" id="dropdown-header">
                Alerts Center
              </h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-primary">
                    <i className="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 12, 2019</div>
                  <span className="font-weight-bold">
                    A new monthly report is ready to download!
                  </span>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-success">
                    <i className="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-warning">
                    <i className="fas fa-exclamation-triangle text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your
                  account.
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="#"
              >
                Show All Alerts
              </a>
            </div>
          </li>

          {/*  <!-- Nav Item - Messages --> */}
          <li className="nav-item dropdown no-arrow mx-1">
            <Link
              className="nav-link dropdown-toggle fs-5"
              to="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i>
                <IoMdMailUnread />
              </i>
              {/*  <!-- Counter - Messages --> */}
              {/* <span className="badge badge-danger badge-counter">7</span> */}
            </Link>
            {/*   <!-- Dropdown - Messages --> */}
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <h6 className="dropdown-header" id="dropdown-header">
                Message Center
              </h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="img/undraw_profile_1.svg"
                    alt="..."
                  />
                  <div className="status-indicator bg-success"></div>
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">
                    Hi there! I am wondering if you can help me with a problem
                    I've been having.
                  </div>
                  <div className="small text-gray-500">Emily Fowler · 58m</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="img/undraw_profile_2.svg"
                    alt="..."
                  />
                  <div className="status-indicator"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    I have the photos that you ordered last month, how would you
                    like them sent to you?
                  </div>
                  <div className="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="img/undraw_profile_3.svg"
                    alt="..."
                  />
                  <div className="status-indicator bg-warning"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    Last month's report looks great, I am very happy with the
                    progress so far, keep up the good work!
                  </div>
                  <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                    alt="..."
                  />
                  <div className="status-indicator bg-success"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    Am I a good boy? The reason I ask is because someone told me
                    that people say this to all dogs, even if they aren't
                    good...
                  </div>
                  <div className="small text-gray-500">
                    Chicken the Dog · 2w
                  </div>
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="#"
              >
                Read More Messages
              </a>
            </div>
          </li>

          {/* <!-- Nav Item - User Information --> */}
          <li className="nav-item dropdown no-arrow">
            <Link
              className="nav-link dropdown-toggle fs-5"
              to="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i>
                <FaUserCircle />
              </i>
            </Link>
            {/*  <!-- Dropdown - User Information --> */}
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
              </a>
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
      {/*  <!-- End of Topbar --> */}

      {/*  <!-- Logout Modal--> */}
      <div
        className="modal fade"
        id="logoutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*  <!-- End Logout Modal--> */}
    </div>
  );
}

export default Navbar;
