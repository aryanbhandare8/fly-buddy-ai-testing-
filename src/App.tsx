import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PlanJourney from "./pages/PlanJourney";
import QueuePrediction from "./pages/QueuePrediction";
import Chatbot from "./pages/Chatbot";
import Navigation from "./pages/Navigation";
import FlightTracking from "./pages/FlightTracking";
import DigiYatra from "./pages/DigiYatra";
import Help from "./pages/Help";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/airports/:airportCode" element={<PlanJourney />} />
            <Route path="/queues" element={<QueuePrediction />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/airport" element={<Navigation />} />
            <Route path="/flights" element={<FlightTracking />} />
            <Route path="/digiyatra" element={<DigiYatra />} />
            <Route path="/help" element={<Help />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
