import "./index.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

const defaultPhoto =
  "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png";

const PersonalDetails = () => {
  const [profile, setProfile] = useState({
    full_name: "",
    address: "",
    phone: "",
    photo: "",
    highest_study: "",
    college: "",
    graduation_year: "",
    expertise: "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getProfile = async () => {
    try {
      setLoading(true);
      setError("");

      const username = localStorage.getItem("username");
      console.log("PersonalDetails: username from localStorage =", username);

      if (!username) {
        throw new Error("No username found in local storage");
      }

      const response = await fetch(
        "https://learnow-backmongo-production.up.railway.app/frontend-user-details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        }
      );

      console.log("PersonalDetails: response status =", response.status);

      // Try to parse JSON even on error to see message from backend
      const data = await response.json().catch(() => null);
      console.log("PersonalDetails: response data =", data);

      if (response.status === 404) {
        // User not found → show backend message but don't crash
        setError(data?.message || "User details not found");
        return;
      }

      if (!response.ok) {
        throw new Error(data?.error || data?.message || "Failed to fetch profile");
      }

      // Success: data is your user object
      setProfile({
        full_name: data.full_name || "",
        address: data.address || "",
        phone: data.phone || "",
        photo: data.photo || "",
        highest_study: data.highest_study || "",
        college: data.college || "",
        graduation_year: data.graduation_year || "",
        expertise: data.expertise || "",
      });
    } catch (err) {
      console.error("PersonalDetails: fetch error", err);
      setError(err.message || "Unable to load your profile. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const expertiseTags =
    profile.expertise
      ?.split(",")
      .map((tag) => tag.trim())
      .filter(Boolean) || [];

  return (
    <div className="home-right-container student-page">
      <header className="student-header">
        <h1 className="each-container-main-heading">Personal Details</h1>
        <p className="student-header-subtitle">
          Your student profile, education, and skills — all in one place.
        </p>
      </header>

      <button
        onClick={() => navigate("/edit-details")}
        type="button"
        className="student-edit-link-btn"
      >
        ✏️ Edit Profile
      </button>

      {loading ? (
        <div className="student-loader-wrapper">
          <BeatLoader size={12} />
          <p className="student-loader-text">Loading your profile…</p>
        </div>
      ) : error ? (
        <div className="student-error-card">
          <p>{error}</p>
        </div>
      ) : (
        <section className="student-layout">
          <div className="student-column student-column-left">
            <div className="student-summary-card">
              <div className="student-avatar-wrapper-lg">
                <img
                  src={profile.photo || defaultPhoto}
                  alt={profile.full_name || "Student"}
                  className="student-avatar-img-lg"
                />
              </div>

              <h2 className="student-name-main">
                {profile.full_name || "Student Name"}
              </h2>

              <p className="student-tagline-main">
                {profile.highest_study && profile.college
                  ? `${profile.highest_study} • ${profile.college}`
                  : "Student Profile"}
              </p>

              <p className="student-grad-pill">
                🎓 Graduation Year:{" "}
                <span>{profile.graduation_year || "—"}</span>
              </p>
            </div>
          </div>

          <div className="student-column student-column-right">
            <div className="student-info-card">
              <h3 className="student-section-title">Basic Information</h3>
              <div className="student-info-grid">
                <div className="student-info-item">
                  <span className="student-info-label">Full Name</span>
                  <span className="student-info-value">
                    {profile.full_name || "—"}
                  </span>
                </div>
                <div className="student-info-item">
                  <span className="student-info-label">Address</span>
                  <span className="student-info-value">
                    {profile.address || "—"}
                  </span>
                </div>
                <div className="student-info-item">
                  <span className="student-info-label">Phone</span>
                  <span className="student-info-value">
                    {profile.phone || "—"}
                  </span>
                </div>
                <div className="student-info-item">
                  <span className="student-info-label">Highest Study</span>
                  <span className="student-info-value">
                    {profile.highest_study || "—"}
                  </span>
                </div>
                <div className="student-info-item">
                  <span className="student-info-label">College</span>
                  <span className="student-info-value">
                    {profile.college || "—"}
                  </span>
                </div>
                <div className="student-info-item">
                  <span className="student-info-label">Graduation Year</span>
                  <span className="student-info-value">
                    {profile.graduation_year || "—"}
                  </span>
                </div>
              </div>
            </div>

            <div className="student-info-card">
              <h3 className="student-section-title">Skills & Expertise</h3>
              {expertiseTags.length > 0 ? (
                <div className="student-skills-wrap">
                  {expertiseTags.map((tag) => (
                    <span key={tag} className="student-skill-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="student-empty-text">
                  Skills will appear here once added.
                </p>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PersonalDetails;
