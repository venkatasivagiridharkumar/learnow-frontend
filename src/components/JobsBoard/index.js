import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css";
import {useState,useEffect} from "react";
import { BeatLoader } from "react-spinners";


const JobsBoard = () => {
  const [jobsList,setJobsList]=useState([]);
  const [isLoading,setIsLoading]=useState(true)
  const [error, setError] = useState(false);


  const getJobsList = async () => {
  try {
    setIsLoading(true);
    setError(false);

    const url = "https://learnowback.onrender.com/frontend-jobs";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await response.json();
    setJobsList(data);
    setIsLoading(false);
  } catch (err) {
    setIsLoading(false);
    setError(true);
  }
};



  useEffect(()=>{
     getJobsList()
  },[])


  return (
    <div className="home-right-container">
      <h1 className="each-container-main-heading">Jobs Board</h1>

         {isLoading && (
        <div className="loader-container pt-5" aria-live="polite" aria-busy="true">
          <BeatLoader size={13} className="mt-5" />
        </div>
      )}


        {error && (
        <div className="error-box">
            <p className="error-text">Failed to load jobs.</p>
            <button className="retry-btn" onClick={getJobsList}>
            Retry
            </button>
        </div>
        )}

         {!isLoading && !error && jobsList.length === 0 && (
        <h3 className="empty-text">There is no Jobs right now!</h3>
      )}
      
      <div className="jobs-board-container">
        <ul className="jobs-list">
         {jobsList.map(each=>
          <li className="job-card">
            <header className="job-card__header">
              <div>
                <p className="job-card__company">{each.company}</p>
                <h2 className="job-card__title">{each.role}</h2>
              </div>
            </header>
            <section className="job-card__meta">
              <div className="job-card__meta-item">
                <span className="job-card__meta-label">
                  <span className="job-card__icon">📍</span> Location
                </span>
                <span className="job-card__meta-value">{each.location}</span>
              </div>
              <div className="job-card__meta-item">
                <span className="job-card__meta-label">
                  <span className="job-card__icon">💰</span> CTC
                </span>
                <span className="job-card__meta-value">{each.ctc}</span>
              </div>
              <div className="job-card__meta-item">
                <span className="job-card__meta-label">
                  <span className="job-card__icon">⏰</span> Apply By
                </span>
                <span className="job-card__meta-value">{each.last_date}</span>
              </div>
            </section>
            <footer className="job-card__footer">
                <p className="skills-element">Skills: {each.technologies}</p>
              <a href={each.link} target="_blank" rel="noreferrer" className="job-card__link">
               Apply <span className="job-card__link-arrow"> ›</span>
              </a>
            </footer>
          </li>
        )
}
         </ul>
      </div>
    </div>
  );
};

export default JobsBoard;
