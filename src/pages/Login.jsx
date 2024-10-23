import { Link } from "react-router-dom";
import "../assets/css/Login.css";
// logo
import gujarat_pe from "../assets/Logo/Gujarat_pe_Logo.png";
// icon 
import { TbLockFilled } from "react-icons/tb";
import { FaUser } from "react-icons/fa6";

function Login() {
  return (
    <div>
      <div className="login">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-12  d-flex shadow mb-5 m-0 p-0 justify-content-between">
              <div className="login1 col-lg-5 m-0 p-0 ">
                <img
                  src="https://www.shutterstock.com/image-vector/concept-banking-operation-financial-transactions-600nw-1976421749.jpg"
                  alt=""
                  height={"470px"}
                  width={"600px"}
                />
              </div>
              <div className="login2 col-lg-5 m-0 p-0 text-center">
                <div className="login-logo mt-5 mb-4">
                  <img
                    src={gujarat_pe}
                    alt=""
                    width={"150px"}
                    height={"80px"}
                  />
                </div>
                <h4>Login To Gujarat Pe</h4>
                <div className="mb-3 me-5">
                 
                  <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">
                    <i><FaUser /></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      placeholder="Username or Mobile"
                      required
                    />
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className="mb-3 me-5">
                  <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">
                    <i><TbLockFilled /></i>
                    </span>
                    <input
                      type="password"
                      class="form-control"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      placeholder="Password"
                      required
                    />
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between me-5 mb-4">
                  <Link to="/register">New User?</Link>
                  <Link to="/register">Forgot Password</Link>
                </div>
                <Link to="/dashboard" className="me-5" >
                  <button className="btn btn-secondary mt-2" id="log-btn">Log In</button>
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
