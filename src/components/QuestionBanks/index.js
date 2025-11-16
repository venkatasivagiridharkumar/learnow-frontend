import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const QuestionBanks = () => {
  const [questionsList, setQuestionsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getQuestionsList = async () => {
    const path = "https://learnowback.onrender.com/frontend-coding-questions";
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(path);

      if (!response.ok) {
        throw new Error("Failed to fetch questions");
      }
      const data = await response.json();
      setQuestionsList(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getQuestionsList();
  }, []);

  return (
    <div className="home-right-container">
      <h1 className="each-container-main-heading">Question Banks</h1>

      {isLoading && (
        <div className="loader-container pt-5" aria-live="polite" aria-busy="true">
          <BeatLoader size={13} className="mt-5" />
        </div>
      )}

      {!isLoading && error && (
        <div className="error-container" role="alert">
          <p className="error-text">{error}</p>
          <button className="retry-btn" onClick={getQuestionsList}>
            Retry
          </button>
        </div>
      )}

      {!isLoading && !error && questionsList.length === 0 && (
        <p className="empty-text">No questions found.</p>
      )}
      {!isLoading && !error && questionsList.length > 0 && (
        <ul className="questionbank-container">
          {questionsList.map((each) => (
            <a href={each.link} className="text-decoration-none" target="_blank" rel="noreferrer"><li
              key={each.id ?? each._id ?? `${each.name}-${Math.random()}`}
              className="each-question-list-container"
              onClick={() => console.log("clicked question", each)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") console.log("clicked question", each); }}
            >
              <h6 className="each-question-name">{each.name}</h6>
              <p className="each-question-difficulty">{each.difficulty}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="qb-arrow bi bi-arrow-right"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 
                  0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 
                  4a.5.5 0 0 1-.708-.708L13.293 
                  8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </li>
            </a>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuestionBanks;
