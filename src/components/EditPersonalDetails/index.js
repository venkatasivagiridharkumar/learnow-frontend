import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

const defaultPhoto =
  "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png";

const EditPersonalDetails = () => {
  const [profile, setProfile] = useState({
    username: "",
    full_name: "",
    address: "",
    phone: "",
    photo: "",
    highest_study: "",
    college: "",
    graduation_year: 2025,
    expertise: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const getProfile = async () => {
    try {
      setLoading(true);
      setError("");

      const username = localStorage.getItem("username");
      if (!username) {
        throw new Error("No username found in local storage");
      }

      const response = await fetch(
        "https://learnowback.onrender.com/frontend-user-details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch profile");
      }

      const data = await response.json();

      setProfile({
        username,
        full_name: data.full_name || "",
        address: data.address || "",
        phone: data.phone || "",
        photo: data.photo || "",
        highest_study: data.highest_study || "",
        college: data.college || "",
        graduation_year: data.graduation_year || 2025,
        expertise: data.expertise || "",
      });
    } catch (err) {
      console.error(err);
      setError("Unable to load your profile. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: name === "graduation_year" ? Number(value) || "" : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const response = await fetch(
        "https://learnowback.onrender.com/frontend-update-user-details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(profile),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      setSuccess("Profile updated successfully!");
      setTimeout(() => {
        navigate("/personal-details");
      }, 800);
    } catch (err) {
      console.error(err);
      setError("Could not save changes. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="home-right-container student-page">
        <header className="student-header">
          <h1 className="each-container-main-heading">Edit Personal Details</h1>
        </header>

        <div className="student-loader-wrapper">
          <BeatLoader size={12} />
          <p className="student-loader-text">Loading your profile…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="home-right-container student-page">
      <header className="student-header">
        <h1 className="each-container-main-heading">Edit Personal Details</h1>
        <p className="student-header-subtitle">
          Update your basic info, education and skills.
        </p>
      </header>

      <section className="student-edit-layout">
        <form className="student-edit-form" onSubmit={handleSubmit}>
          <div className="student-edit-header">
            <div className="student-avatar-wrapper-lg">
              <img
                src={profile.photo || defaultPhoto}
                alt={profile.full_name || "Student"}
                className="student-avatar-img-lg"
              />
            </div>

            <div className="student-edit-header-text">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  value={profile.full_name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                />
              </div>

              <div className="form-group">
                <label>Profile Photo URL ( give drive link)</label>
                <input
                  type="text"
                  name="photo"
                  value={profile.photo}
                  onChange={handleChange}
                  placeholder="https://example.com/photo.jpg"
                />
              </div>
            </div>
          </div>

        
          <div className="student-edit-grid">
            <div className="form-group">
              <label>Address</label>
              <textarea
                name="address"
                rows="2"
                value={profile.address}
                onChange={handleChange}
                placeholder="City, State"
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                placeholder="+91 ..."
              />
            </div>

            <div className="form-group">
              <label>Highest Study</label>
              <input
                type="text"
                name="highest_study"
                value={profile.highest_study}
                onChange={handleChange}
                placeholder="B.Tech, BSc, etc."
              />
            </div>

            <div className="form-group">
              <label>College</label>
              <input
                type="text"
                name="college"
                value={profile.college}
                onChange={handleChange}
                placeholder="College name"
              />
            </div>

            <div className="form-group">
              <label>Graduation Year</label>
              <input
                type="number"
                name="graduation_year"
                value={profile.graduation_year}
                onChange={handleChange}
                placeholder="2025"
              />
            </div>

            <div className="form-group">
              <label>Skills / Expertise</label>
              <input
                type="text"
                name="expertise"
                value={profile.expertise}
                onChange={handleChange}
                placeholder="Java, Python, React..."
              />
              <small className="form-help">
                Separate skills with commas. (e.g. Java, Python, SQL)
              </small>
            </div>
          </div>

          {error && <p className="student-edit-error">{error}</p>}
          {success && <p className="student-edit-success">{success}</p>}

          <div className="student-edit-actions">
            <button
              type="button"
              className="student-btn-secondary"
              onClick={() => navigate("/personal-details")}
              disabled={saving}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="student-btn-primary"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EditPersonalDetails;
