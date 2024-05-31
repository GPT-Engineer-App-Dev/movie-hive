import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Watchlist from "./pages/Watchlist.jsx"; // Import the Watchlist component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/watchlist" element={<Watchlist />} /> {/* Add route for Watchlist */}
      </Routes>
    </Router>
  );
}

export default App;
