import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css";
import { useState, useEffect } from "react";

const defaultPhoto =
  "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png";

/*const details={
    username: "charan",
    name: "Meda Sree Ram Charan",
    photo: "https://live.staticflickr.com/65535/54914267170_bcf06f0e8b_n.jpg",
    phone: "+91 9989550883",
    experience: "2 Years",
    expertise: "Java, SQL, Python",
    bio: "Ready to Help you 24/7",
    linkedIn: "https://linkedin.com/",
  };*/

const MentorDetails = () => {
  const [details, setDetails] = useState({
    username: "",
    name: "",
    photo: "",
    phone: "",
    experience: "",
    expertise: "",
    bio: "",
    linkedIn: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");



 
  const openWhatsApp = (number) => {
    if (!number) return;
    const cleaned = String(number).replace(/\D/g, "");
    window.open(`https://wa.me/${cleaned}`, "_blank", "noopener,noreferrer");
  };

  const callMentor = (number) => {
    if (!number) return;
    const cleaned = String(number).replace(/[^\d+]/g, ""); 
    window.location.href = `tel:${cleaned}`;
  };


  const getDetails = async () => {
  try {
    setIsLoading(true);
    setError("");

    const username = localStorage.getItem("username");
    if (!username) {
      throw new Error("No username found in local storage");
    }

    const response = await fetch(
      "https://learnowback.onrender.com/frontend-mentor-details",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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

    setDetails({
      name: data.name,
      username: data.username,
      photo: data.photo,
      phone: data.phone,
      experience: data.experience,
      expertise: data.expertise,
      bio: data.bio,
      linkedIn: data.linkedin || data.linkedIn,
    });
  } catch (err) {
    console.error(err);
    setError(err.message || "Something went wrong");
  } finally {
    setIsLoading(false);
  }
};

  useEffect(() => {
    getDetails();
  }, []);

  const expertiseTags =
    details.expertise?.split(",").map((tag) => tag.trim()).filter(Boolean) ||
    [];

  return (
    <div className="home-right-container mentor-page">
      <header className="mentor-page-header">
        <h1 className="each-container-main-heading">Your Success Coach</h1>
        <p className="text-dark mentor-subtitle">
          The right mentor doesn’t just give answers – they guide your direction.
        </p>
      </header>
    
      
      {!isLoading && error && (
        <div className="mentor-error">
          <p>{error}</p>
        </div>
      )}
     
 {isLoading ? (
        <div className="mentor-loader-wrapper">
          <div className="beat-loader">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="mentor-loading-text">Fetching your mentor details...</p>
        </div>
      ):(
        <section className="mentor-layout">
          <div className="mentor-left">
            <div className="mentor-avatar-wrapper">
              <img
                src={details.photo || defaultPhoto}
                alt={details.name || "Mentor"}
                className="mentor-img"
              />
            </div>

            <h2 className="mentor-name text-dark">
              {details.name || "Your Mentor"}
            </h2>
            {details.username && (
              <p className="mentor-username">@{details.username}</p>
            )}

            {details.experience && (
              <p className="mentor-experience">
                ⭐ {details.experience} years of experience
              </p>
            )}

            <div className="mentor-actions">
              <button
                type="button"
                className="mentor-btn primary"
                onClick={() => callMentor(details.phone)}
              >
                📞 Call
              </button>

              <button
                type="button"
                className="mentor-btn outline"
                onClick={() => openWhatsApp(details.phone)}
              >
                💬 WhatsApp
              </button>

              {details.linkedIn && (
                <a
                  href={details.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mentor-btn ghost"
                >
                  🔗 LinkedIn
                </a>
              )}
            </div>
          </div>

          <div className="mentor-right">
            <div className="mentor-section">
              <h3 className="text-dark">About your mentor</h3>
              <p className="mentor-bio">
                {details.bio ||
                  "Your mentor is ready to guide you on your learning journey."}
              </p>
            </div>

            <div className="mentor-section">
              <h3 className="text-dark">Expertise</h3>
              {expertiseTags.length > 0 ? (
                <div className="mentor-tags">
                  {expertiseTags.map((tag) => (
                    <span key={tag} className="mentor-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mentor-placeholder">Skills will appear here.</p>
              )}
            </div>

            <div className="mentor-section">
              <h3 className="text-dark">Contact info</h3>
              <div className="mentor-contact-list">
                <p>
                  <span className="contact-label text-dark">Phone</span>
                  <span className="contact-value text-dark">
                    {details.phone || "Not provided"}
                  </span>
                </p>
                <p>
                  <span className="contact-label text-dark">LinkedIn</span>
                  {details.linkedIn ? (
                    <a
                      href={details.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      {details.linkedIn}
                    </a>
                  ) : (
                    <span className="contact-value">Not provided</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>)}
    </div>
  );
};

export default MentorDetails;
