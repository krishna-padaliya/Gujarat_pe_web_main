import React from "react";

function Footer() {
  return (
    <div>
      {/* <!-- Footer -->  */}
      <footer className="sticky-footer bg-white mt-4">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>POWER BY GUJARAT PE</span>
          </div>
        </div>
      </footer>
      {/* <!-- End of Footer --> */}

      {/* <!-- Scroll to Top Button-->  */}
        <a className="scroll-to-top rounded-circle" href="#page-top" style={{background:"rgb(5, 40, 118)"}}>
          <i className="fas fa-angle-up text-light"></i>
        </a>
      {/* <!-- Scroll to Top Button-->  */}
      
    </div>
  );
}

export default Footer;
