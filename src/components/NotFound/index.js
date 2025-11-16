import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import "./index.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="nf-wrap">
      <div className="nf-bg" aria-hidden="true" />
      <div className="nf-stars" aria-hidden="true" />
      <div className="nf-glow" aria-hidden="true" />

      <main className="nf-content text-center">
        <h1 className="nf-code" aria-label="404">404</h1>
        <h2 className="nf-title">Lost in Space</h2>
        <p className="nf-text">
          The page you’re looking for drifted beyond our orbit.
          Let’s get you back on course. 🛰️
        </p>
        <div className="nf-actions">
          <Button
            variant="outline-light"
            size="lg"
            onClick={() => navigate("/")}
            className="nf-button"
          >
            Back to Home
          </Button>
        </div>
        <div className="nf-scene" aria-hidden="true">
          
          <svg className="nf-planet" viewBox="0 0 120 120">
            <defs>
              <radialGradient id="pl" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#5b21b6" />
                <stop offset="100%" stopColor="#1a1039" />
              </radialGradient>
            </defs>
            <circle cx="60" cy="60" r="46" fill="url(#pl)" />
            <ellipse cx="60" cy="60" rx="60" ry="16" fill="#8b5cf6" opacity=".25" />
          </svg>
          <svg className="nf-astro" viewBox="0 0 120 120">
            <g>
              <circle cx="60" cy="38" r="12" fill="#e5e7eb" />
              <rect x="48" y="50" width="24" height="22" rx="6" fill="#e5e7eb" />
              <rect x="52" y="54" width="16" height="10" rx="3" fill="#111827" />
              <rect x="40" y="74" width="16" height="8" rx="3" fill="#e5e7eb" />
              <rect x="64" y="74" width="16" height="8" rx="3" fill="#e5e7eb" />
              <rect x="38" y="46" width="6" height="14" rx="3" fill="#e5e7eb" />
              <rect x="76" y="46" width="6" height="14" rx="3" fill="#e5e7eb" />
              <path d="M60 72 C 80 84, 96 92, 104 100" stroke="#a78bfa" strokeWidth="2" fill="none" opacity=".6"/>
            </g>
          </svg>
        </div>
      </main>
    </Container>
  );
};

export default NotFound;
