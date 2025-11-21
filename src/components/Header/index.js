import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {Link} from "react-router-dom";

const Header = (props) => {
  const [details,setDetails]=useState({img:"https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png",name:""})
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const handleLogout=props.onLogout;
  
const getDetails = async () => {
  try {
    setIsLoading(true);
    setError("");

    const username = localStorage.getItem("username");
    if (!username) {
      throw new Error("No username found in local storage");
    }

    const response = await fetch(
      "https://learnow-backmongo-production.up.railway.app/frontend-mentor-details",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      }
    );

    if (response.status === 404) {
      setDetails({
        username: "",
        name: "",
        photo: "",
        phone: "",
        experience: "",
        expertise: "",
        bio: "No mentor assigned yet. Please contact admin.",
        linkedIn: "",
      });
      setIsLoading(false);
      return;
    }

    if (!response.ok) {
      throw new Error("Failed to fetch mentor details");
    }

    const data = await response.json();
    const mentor = data.mentor || {};

    setDetails({
      name: mentor.name || "",
      username: mentor.username || "",
      photo: mentor.photo || "",
      phone: mentor.phone || "",
      experience: mentor.experience || "",
      expertise: mentor.expertise || "",
      bio: mentor.bio || "",
      linkedIn: mentor.linkedin || mentor.linkedIn || "",
    });
  } catch (err) {
    console.error(err);
    setError(err.message || "Something went wrong");
  } finally {
    setIsLoading(false);
  }
};



  useEffect(()=>{
     getDetails()
  },[])

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
    const handleKey = (e) => e.key === "Escape" && setOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);



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
            alt={details.name}
          />
          <span className="nav-caret" aria-hidden="true">▾</span>
        </button>

        
        <div
          id="profile-menu"
          ref={menuRef}
          role="menu"
          className={`profile-menu ${open ? "is-open" : ""}`}
        >
          <Link to="/" className="profile-menu-item">Home</Link>
          <Link to="/my-journey" className="profile-menu-item">Courses</Link>
          <Link to="/personal-details" className="profile-menu-item">Profile</Link>
          <Link to="/question-banks" className="profile-menu-item">Question Banks</Link>
          <Link to="/jobs-board" className="profile-menu-item">Jobs Board</Link>
          <Link to="/mentor-details" className="profile-menu-item">My Mentor</Link>
          <Link to="/communities" className="profile-menu-item">Join Us</Link>
          <Link to="/announcements" className="profile-menu-item">Announcements</Link>
          <Link to="/help" className="profile-menu-item">Help</Link>
          <button className="profile-menu-item profile-menu-danger" onClick={()=>handleLogout()}>Logout</button>
          <div className="profile-menu-sep" />
          <Link to="/AboutUs" className="profile-menu-item">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
