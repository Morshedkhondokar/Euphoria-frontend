import { Outlet } from "react-router";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
    
      {/* navbar */}

      {/* main content */}
      <Outlet />

      {/* Footer */}
    </div>
  );
};

export default App;
