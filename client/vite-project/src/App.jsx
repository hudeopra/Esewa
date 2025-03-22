import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Failure from "./component/Failure";
import PaymentForm from "./component/PaymentForm";
import Success from "./component/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentForm />} />
        <Route path="/payment-success" element={<Success />} />
        <Route path="/payment-failure" element={<Failure />} />
      </Routes>
    </Router>
  );
}

export default App;
