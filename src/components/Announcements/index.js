import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Cookies from "js-cookie";
import { BeatLoader } from "react-spinners";
import {useState,useEffect} from "react";

const Announcements = () => {
  const [announcementsList,setAnnouncementsList]=useState([])
  const [isLoading,setIsLoading]=useState([])
  const [error,setError]=useState([])

  const getAnnouncementsList=async ()=>{
     const path = "https://learnowbackmongo.onrender.com/frontend-announcements";
    setIsLoading(true);
    setError(null);
    try {
      const token =Cookies.get("jwt_token")
      const response = await fetch(path,{
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  },);

      if (!response.ok) {
        throw new Error("Failed to fetch Announcements");
      }
      const data = await response.json();
      setAnnouncementsList(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(()=>{
     getAnnouncementsList();
  },[]);

  return (
    <div className="home-right-container">
      <h1 className="each-container-main-heading">Announcements</h1>
          
      {isLoading && (
        <div className="loader-container pt-5" aria-live="polite" aria-busy="true">
          <BeatLoader size={13} className="mt-5" />
        </div>
      )}

        {error && (
        <div className="error-box d-flex flex-column align-items-center pt-5">
            <p className="error-text" mt-5>Failed to load Announcements.</p>
            <button className="retry-btn" onClick={getAnnouncementsList}>
            Retry
            </button>
        </div>
        )}        

         {!isLoading && !error && announcementsList.length === 0 && (
        <h3 className="empty-text">Exciting Updates On the Way.</h3>
      )}
       
        <ul className="d-flex flex-row workshops-row">
          {
            announcementsList.map(each=> <li className="workshop-card">
          <div className="workshop-header">
            <h3 className="workshop-title">{each.title}</h3>
          </div>
          <p className="workshop-desc">{each.description}</p>
          <div className="workshop-info">
            <div><strong>Date:</strong> {each.date}</div>
            <div><strong>Duration:</strong>{each.duration}</div>
            <div><strong>Start Time:</strong>{each.time}</div>
            <div>
              <strong>Status:</strong>
              <span className="status completed">Upcoming</span>
            </div>
          </div>
          <div className="workshop-footer">
            <button className="view-btn"><a className="text-white" href={each.link} target="_blank" rel="noreferrer">Join</a></button>
          </div>
        </li>)
          }
      </ul>
    </div>
  );
};

export default Announcements;
