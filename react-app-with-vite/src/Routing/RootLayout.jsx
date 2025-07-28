// RootLayout.jsx
import { Link, Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="root-layout">
      <h2>🌐 Root Layout</h2>
      <nav>
        <Link to="/">Form Handling</Link> |
        <Link to="/controlled">Controlled</Link> |
        <Link to="/dummylogin">Login</Link> |
        <Link to="/home">Home</Link>  |
        <Link to ="/aboutus/lazycomponent">About us Lazy Component</Link>
      </nav>
      <hr />
      <Outlet /> {/* Renders nested child route */}
    </div>
  );
};
