import React from "react";
import "../assets/css/Register.css";
import { Link } from "react-router-dom";
// logo
import gujarat_pe from "../assets/Logo/Gujarat_pe_Logo.png";
// icon
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdCard } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMyLocation } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";
import { BsBuildingsFill } from "react-icons/bs";
function Register() {
  return (
    <div>
      <div className="container-fulid" id="register">
        <div className="row">
          <div className="col-lg-12 mb-5">
            <form action="" className="shadow mt-3">
              <div className="login-logo mb-4">
                <img src={gujarat_pe} alt="" width={"150px"} height={"80px"} className="mt-5"/>
              </div>
              <h4>Register Now!!</h4>
              {/* 1 */}
              <div class="input-group has-validation ps-5 pe-5 mb-3">
                <span class="input-group-text" id="inputGroupPrepend">
                  <i>
                    <FaUser />
                  </i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  placeholder="User ID"
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
              {/* 2 */}
              <div class="input-group has-validation ps-5 pe-5 mb-3">
                <span class="input-group-text" id="inputGroupPrepend">
                  <i>
                  <FaPhoneAlt />
                  </i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  placeholder="Mobile Number"
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
              {/* 3 */}
              <div class="input-group has-validation ps-5 pe-5 mb-3">
                <span class="input-group-text" id="inputGroupPrepend">
                  <i>
                  <IoMdCard />
                  </i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  placeholder="Enter Aadhar Card Number"
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
              {/* 4 */}
              <div className="d-flex">
                {/* front  */}
                <div class=" ps-5 pe-5 mb-3">
                  <label htmlFor="">Upload Aadhar Front Photo</label>
                  <input
                    type="file"
                    class="form-control"
                    aria-label="file example"
                    required
                  />
                  <div class="invalid-feedback">
                    Example invalid form file feedback
                  </div>
                </div>
                {/* back */}
                <div class=" ps-5 pe-5 mb-3">
                  <label htmlFor="">Upload Aadhar Back Photo</label>
                  <input
                    type="file"
                    class="form-control"
                    aria-label="file example"
                    required
                  />
                  <div class="invalid-feedback">
                    Example invalid form file feedback
                  </div>
                </div>
              </div>
              {/* 5 */}
              <div class="input-group has-validation ps-5 pe-5 mb-3">
                <span class="input-group-text" id="inputGroupPrepend">
                  <i>
                  <IoMdCard />
                  </i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  placeholder="Enter PAN Card Number"
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
              {/* 6 */}
              <div class=" ps-5 pe-5 mb-3">
                {/* <label htmlFor="" className="text-start">Upload PAN Photo</label> */}
                <input
                  type="file"
                  class="form-control"
                  aria-label="file example"
                  required
                />
                <div class="invalid-feedback">
                  Example invalid form file feedback
                </div>
              </div>
              {/* 7 */}
              <div class="input-group has-validation ps-5 pe-5 mb-3">
                <span class="input-group-text" id="inputGroupPrepend">
                  <i>
                  <IoMdBusiness />
                  </i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  placeholder="Business Name"
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
              {/* 8 */}
              <div class="input-group has-validation ps-5 pe-5 mb-3">
                <span class="input-group-text" id="inputGroupPrepend">
                  <i>
                  <IoLocationSharp />
                  </i>
                </span>
                <textarea
                  type="text"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  placeholder="Business Address"
                  required
                ></textarea>
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
              {/* 9 */}
              <div class="input-group has-validation ps-5 pe-5 mb-3">
                <span class="input-group-text" id="inputGroupPrepend">
                  <i>
                  <MdOutlineMyLocation />
                  </i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  placeholder="Pin Code"
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
              {/* 10 */}
              <div class="input-group has-validation ps-5 pe-5 mb-3">
                <span class="input-group-text" id="inputGroupPrepend">
                  <i>
                  <BsBuildingsFill />
                  </i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  placeholder="Town"
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
              <Link to="/dashboard" className="" >
                  <button className="btn btn-secondary mt-2 mb-5" id="log-btn">Register</button>
                </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
