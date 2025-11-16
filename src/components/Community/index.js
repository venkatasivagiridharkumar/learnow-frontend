import "./index.css"
import {Link} from "react-router-dom"

const Community =()=>{

    return <div className="container d-flex flex-column justify-content-center align-items-center text-center maintenance-container">
    <h1 className="display-4 text-primary mb-3 mt-4">Join With us !</h1>
    <div className="row g-3 justify-content-center mt-4">
      <div className="col-12 col-md-3 m-2">
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
          <img src="https://tse2.mm.bing.net/th/id/OIP.w_zDkEJ9aLiWR-g0rff8hwHaHa?pid=Api&P=0&h=180" alt="LinkedIn" className="socialmedia-images"/>
        </a>
      </div>
      <div className="col-12 col-md-3 m-2">
        <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
          <img src="https://tse4.mm.bing.net/th/id/OIP.GbsrglNpiRVjIa8pKAcUzAHaHa?pid=Api&P=0&h=180" className="socialmedia-images" alt="Whatsapp"/>
        </a>
      </div>
      <div className="col-12 col-md-3 m-2">
        <a href="https://www.instagram.com/lernowtech/" target="_blank" rel="noreferrer" >
         <img src="https://tse3.mm.bing.net/th/id/OIP.VHloij6S_ID2JwV7XXZp4wHaHa?pid=Api&P=0&h=180" className="socialmedia-images" alt="Instagram"/>
        </a>
      </div>
    </div>

    <div className="mt-5">
      <p className="text-muted mb-2">Need help?</p>
      <Link to="/help" className="btn btn-primary">Contact Us</Link>
    </div>
  </div>
}
export default Community