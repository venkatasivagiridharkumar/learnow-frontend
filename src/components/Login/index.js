import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import { useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ username: false, password: false });
  const [submitError, setSubmitError] = useState("");

  const handleLogin=props.onLogin;

  const usernameError =
    touched.username && username.trim().length < 3
      ? "Username must be at least 3 characters"
      : "";

  const passwordError =
    touched.password && password.length < 6
      ? "Password must be at least 6 characters"
      : "";

  const hasErrors = !!usernameError || !!passwordError;

 const handleSubmit = async (e) => {
  e.preventDefault();
  setTouched({ username: true, password: true });

  if (hasErrors || !username || !password) {
    setSubmitError("Please fix the errors before logging in.");
    return;
  }

  try {
    const res = await fetch("https://learnowbackmongo.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    console.log("Status:", res.status);

    let data;
    try {
      data = await res.json();
      console.log("Response JSON:", data);
    } catch (err) {
      const text = await res.text();
      console.error("Response is not JSON. Raw text:", text);
      setSubmitError("Server error. Please try again.");
      return;
    }

    if (!res.ok) {
      setSubmitError(data.message || "Invalid credentials");
      return;
    }
    handleLogin(data);
  } catch (error) {
    console.error("Fetch error:", error);
    setSubmitError("Something went wrong. Please try again.");
  }
};

  return (
    <div className="login-page d-flex align-items-center justify-content-center">
      <div className="login-card shadow-lg">
        <div className="row g-0 h-100">
          <div className="col-md-6 login-hero d-none d-md-flex flex-column justify-content-between">
            <div>
              <h1 className="brand-title mt-3">Learnow</h1>
              <p className="brand-tagline mt-3">
                Your personalised journey to skills, mentors, and dream jobs.
              </p>
            </div>
            <div>
              <ul className="brand-points">
                <li>🎓 Track your learning progress</li>
                <li>🧑‍🏫 Connect with expert mentors</li>
                <li>⏰ 24/7 mentor support</li>
                <li>🧠 Personalized Learning Content</li>
                <li>💼 Apply to curated opportunities</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="login-form-wrapper p-4 p-md-5 h-100 d-flex flex-column justify-content-center">
              <h3 className="mb-3 text-center text-md-start">Welcome back 👋</h3>
              <p className="text-muted mb-4 text-center text-md-start">
                Log in to continue your learning journey.
              </p>
              <form onSubmit={handleSubmit} noValidate>
               
                <div className="mb-3">
                  <label className="form-label fw-semibold">Username</label>
                  <input
                    type="text"
                    className={`form-control ${
                      usernameError ? "is-invalid" : touched.username ? "is-valid" : ""
                    }`}
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onBlur={() =>
                      setTouched((prev) => ({ ...prev, username: true }))
                    }
                  />
                  {usernameError && (
                    <div className="invalid-feedback">{usernameError}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Password</label>
                  <input
                    type="password"
                    className={`form-control ${
                      passwordError ? "is-invalid" : touched.password ? "is-valid" : ""
                    }`}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() =>
                      setTouched((prev) => ({ ...prev, password: true }))
                    }
                  />
                  {passwordError && (
                    <div className="invalid-feedback">{passwordError}</div>
                  )}
                </div>
               {submitError && (
                <p className="text-danger">{submitError}</p>
              )}
                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 login-btn"
                >
                  Login
                </button>
              </form>

              <p className="mt-4 mb-0 small text-muted text-center">
                New to Learnow? <span className="link-primary">Contact admin to create an account.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
