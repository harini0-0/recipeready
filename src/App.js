import './App.css';
import LandingPage from './pages/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CloudKitchenLanding from "./pages/CloudKitchenLanding"; 
import CustomerLanding from "./pages/CustomerLanding"; 
import DeliveryLanding from "./pages/DeliveryLanding"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cloudkitchenlanding" element={<CloudKitchenLanding />} />
          <Route path="/customerlanding" element={<CustomerLanding />} />
          <Route path="/deliverylanding" element={<DeliveryLanding />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
