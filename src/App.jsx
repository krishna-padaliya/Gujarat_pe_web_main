// Importing Bootstrap and necessary dependencies
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// Importing React Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing Pages
import Terms_Condition from "./pages/Terms&Condition.jsx";
import Index from "./pages/Index";
import Refund from "./pages/Refund.jsx";
import Error from "./pages/Error.jsx";
import Service from "./pages/Service.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
// admin
import Dashboard from "./admin/Dashboard.jsx";
import SalesReport from "./admin/SalesReport.jsx";
import MyCommision from "./admin/MyCommision.jsx";
import SupportTicket from "./admin/SupportTicket.jsx";
import LedgerReport from "./admin/LedgerReport.jsx";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/service" element={<Service />} />
          <Route path="/terms" element={<Terms_Condition />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sales_report" element={<SalesReport />} />
          <Route path="/ledger_report" element={<LedgerReport />} />
          <Route path="/my_commision" element={<MyCommision />} />
          <Route path="/support_ticket" element={<SupportTicket />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
