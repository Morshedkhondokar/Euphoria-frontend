import { Outlet } from "react-router";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
    
      {/* navbar */}
      <Navbar/>
      {/* main content */}
      <Outlet />

      {/* Footer */}
    </div>
  );
};

export default App;
