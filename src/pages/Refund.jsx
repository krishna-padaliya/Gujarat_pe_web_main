import "../assets/css/otherPage.css";
import Navbar from "../component/WebHeader";
import Footer from "../component/WebFooter";

function Refund() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-5 mb-5 otherPage">
            <h1 className="text-center" data-aos="fade-up">
              Refund Policy
            </h1>
            <div className="m-auto line mb-5"></div>
            <p>
              Once a User chooses to avail any subscription plan/offer announced
              by Gujarat Pe and agrees to buy that plan/offer by due payment for
              that plan/offer to Gujarat Pe, such payment by the User shall not
              be refunded by Gujarat Pe under any circumstances whatsoever.
              Please note that such an act of buying Gujarat Pe’s plan is an
              irreversible process under the applicable law.
            </p>
            <p>
              Post receipt of payment from the User for the above-mentioned
              plan, Gujarat Pe shall create a User ID in its Mobile App/Website
              ONLY after successful KYC verification of such User. If the User
              is unable to get successful KYC done, Gujarat Pe shall not allow
              the User to avail the services mentioned for that particular
              subscription plan. No existing balance will be refunded to the
              User in case of unsuccessful KYC verification. Thus, in order to
              avail Gujarat Pe services on its Mobile App/Website, the User must
              mandatorily complete successful KYC verification.
            </p>
            <p>
              Post User ID creation, while availing various services on the
              Gujarat Pe Mobile App/Website, transactions that have failed for
              any reason directly attributable to Gujarat Pe, and where Gujarat
              Pe has received corresponding confirmation from the payment
              gateway, will be automatically refunded to the User’s bank account
              within 3-15 working days from the date of the transaction, and a
              confirmation mail will be sent to the User’s email ID registered
              with Gujarat Pe. Please note that only the actual transaction
              amount will be refunded, excluding payment gateway charges and all
              applicable taxes. However, in cases where the User has received a
              successful completion confirmation but not received services, the
              User is required to submit a complaint by sending an email to the
              Email ID provided on this website. Gujarat Pe shall investigate
              the matter after receiving the complaint from the User, and based
              on the inquiry, Gujarat Pe may refund the payment, deducting
              necessary service charges. In all cases, Gujarat Pe’s liability
              will be restricted to providing the User a valid refund to the
              extent of the corresponding payment received by Gujarat Pe with
              respect to a particular transaction. Gujarat Pe shall not be
              responsible for any other claim or consequential liability arising
              out of failed services on our system.
            </p>
            <p>
              The User accepts that this refund policy is subject to all the
              terms and conditions as stated in the Agreement of the
              User/business associate/retailer/distributor with Gujarat Pe.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Refund;
