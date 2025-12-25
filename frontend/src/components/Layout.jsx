import { useNavigate } from "react-router-dom";
import "../styles/app.css";

export default function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <div className="hw-app">
      {/* HEADER */}
      <header className="hw-header">
        <div className="hw-logo">Health Wallet</div>

        <nav className="hw-nav">
          <span onClick={() => navigate("/dashboard")}>Dashboard</span>
          <span onClick={() => navigate("/upload")}>Upload Reports</span>
          <span onClick={() => navigate("/vitals")}>Vitals</span>
          <span onClick={() => navigate("/about")}>About</span>
        </nav>

        <button
          className="hw-logout"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          Logout
        </button>
      </header>

      {/* MAIN */}
      <main className="hw-main">{children}</main>

      {/* FOOTER */}
      <footer className="hw-footer">
        © 2025 Health Wallet · Secure Digital Health Records
      </footer>
    </div>
  );
}

