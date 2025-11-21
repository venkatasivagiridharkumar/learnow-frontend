import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Link } from "react-router-dom";

const DEFAULT_AVATAR =
  "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png";

const Header = (props) => {
  const [details, setDetails] = useState({
    img: DEFAULT_AVATAR,
    name: "",
  });

  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const handleLogout = props.onLogout;

  const getDetails = async () => {
    try {
      const username = localStorage.getItem("username");
      if (!username) return; 
      const response = await fetch(
        "https://learnow-backmongo-production.up.railway.app/frontend-user-details",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username }),
        }
      );

      if (!response.ok) {
        return;
      }

      const data = await response.json();

     const user = data.mentor || data || {};

      setDetails({
        name: user.full_name || user.name,
        img: user.photo|| DEFAULT_AVATAR,
      });
    } catch (err) {
      console.log("Error fetching header details:", err);
      
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    const handleKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

 return (
  <nav className="nav-container" aria-label="Main navigation">
    <div className="logo-container">
      <img
        src="https://live.staticflickr.com/65535/54910103636_05549c31fa_c.jpg"
        className="nav-logo"
        alt="Learnow Tech"
      />
    </div>

    <div className="nav-profile-container">
      <p className="nav-name-element">{details.name}</p>

      <button
        ref={btnRef}
        className="nav-profile-button"
        aria-haspopup="menu"
        aria-expanded={open ? "true" : "false"}
        aria-controls="profile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <img
          src={details.img}
          className="nav-profile-image"
          alt={details.name || "Profile"}
        />
        <span className="nav-caret" aria-hidden="true">▾</span>
      </button>

      <div
        id="profile-menu"
        ref={menuRef}
        role="menu"
        className={`profile-menu ${open ? "is-open" : ""}`}
      >
        <Link to="/" className="profile-menu-item" onClick={() => setOpen(false)}>
          Home
        </Link>

        <Link to="/my-journey" className="profile-menu-item" onClick={() => setOpen(false)}>
          Courses
        </Link>

        <Link to="/personal-details" className="profile-menu-item" onClick={() => setOpen(false)}>
          Profile
        </Link>

        <Link to="/question-banks" className="profile-menu-item" onClick={() => setOpen(false)}>
          Question Banks
        </Link>

        <Link to="/jobs-board" className="profile-menu-item" onClick={() => setOpen(false)}>
          Jobs Board
        </Link>

        <Link to="/mentor-details" className="profile-menu-item" onClick={() => setOpen(false)}>
          My Mentor
        </Link>

        <Link to="/communities" className="profile-menu-item" onClick={() => setOpen(false)}>
          Join Us
        </Link>

        <Link to="/announcements" className="profile-menu-item" onClick={() => setOpen(false)}>
          Announcements
        </Link>

        <Link to="/help" className="profile-menu-item" onClick={() => setOpen(false)}>
          Help
        </Link>

        <button
          className="profile-menu-item profile-menu-danger"
          onClick={() => { setOpen(false); handleLogout(); }}
        >
          Logout
        </button>

        <div className="profile-menu-sep" />

        <Link to="/AboutUs" className="profile-menu-item" onClick={() => setOpen(false)}>
          About Us
        </Link>
      </div>
    </div>
  </nav>
);

};

export default Header;
