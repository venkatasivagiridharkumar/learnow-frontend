import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

const AboutUs=()=>{
     return <div className="home-right-container">
        <h1 className="each-container-main-heading">About Us</h1>
       <h3 className="text-dark fs-2 fw-bold text-center mt-4"> Our top notch teams involved in helping you learn programming, not just coding.</h3>
       <div className="founders-main-container mt-3 mb-2">
            <div className="founder-each-container">
               <img alt="Yugandhar" src="https://live.staticflickr.com/65535/54913827400_ddecd4036b_w.jpg" className="founder-avatar"/>
                <h5 className="founder-name">Yugandhar Yamala</h5>
                <h6 className="founder-qualification">Founder & CEO</h6>
                <p className="founder-description">"Education is not just about learning — it’s about transformation. At Learnowtech, we inspire and guide you with values, excellence, and a family-driven commitment to your success.”</p>
            </div>
            <div className="founder-each-container">
               <img alt="Malleshwar Reddy" src="https://live.staticflickr.com/65535/54913738248_61963c6ec9_w.jpg" className="founder-avatar"/>
                <h5 className="founder-name">Malleshwar Reddy</h5>
                <h6 className="founder-qualification">Co-Founder & CTO</h6>
                <p className="founder-description">"Great technology isn’t about doing more — it’s about doing the right things, better.”</p>
            </div>

       </div>


       <div className="team-main-container">
           <div className="trainers-main-container">
              <p className="text-dark fs-5 fw-bold trainers-text">Developers</p>
              <div className="trainers-container">
                <div className="each-trainer-container">
                    <img src="https://live.staticflickr.com/65535/54914203953_58018a4764_w.jpg" alt="Giridhar Kumar" className="each-trainer-avatar"/>
                    <p className="text-dark fs-6 fw-bold">Venkata Siva Giridhar Kumar Somesula</p>
                    <p className="team-qualification">Head of the Product</p>
                </div>
              </div>
           </div>
           <div className="trainers-main-container">
              <p className="text-dark fs-5 fw-bold trainers-text">Trainers</p>
              <div className="trainers-container">
                <div className="each-trainer-container">
                    <img src="https://live.staticflickr.com/65535/54914181258_ee711c99e8_w.jpg" alt="Yugandhar" className="each-trainer-avatar"/>
                    <p className="text-dark fs-6 fw-bold">Venkata Sudheer</p>
                </div>
                 <div className="each-trainer-container">
                    <img src="https://tse1.mm.bing.net/th/id/OIP.zP1mlHnV1bpgODW8gvQSFQHaIP?pid=Api&P=0&h=180" alt="Swetha" className="each-trainer-avatar"/>
                    <p className="text-dark fs-6 fw-bold">Swetha Boya</p>
                </div>
              </div>
           </div>
            <div className="trainers-main-container">
              <p className="text-dark fs-5 fw-bold trainers-text">Business Exceutive</p>
              <div className="trainers-container">
                <div className="each-trainer-container">
                    <img src="https://live.staticflickr.com/65535/54912741337_c6839d7c75_n.jpg" alt="Gc Yswanth" className="each-trainer-avatar"/>
                    <p className="text-dark fs-6 fw-bold">GC Yaswanth</p>
                    <p className="team-qualification">Business Executive Developer</p>
                </div>
                 <div className="each-trainer-container">
                    <img src="https://live.staticflickr.com/65535/54912732437_7b4ee1497e_n.jpg" alt="Reddy Kumar" className="each-trainer-avatar"/>
                    <p className="text-dark fs-6 fw-bold">Reddy Kumar</p>
                    <p className="team-qualification">Business Developer</p>
                </div>
              </div>
           </div>
            <div className="trainers-main-container">
              <p className="text-dark fs-5 fw-bold trainers-text">Career Coaches</p>
              <div className="trainers-container">
                <div className="each-trainer-container">
                    <img src="https://live.staticflickr.com/65535/54914267170_bcf06f0e8b_n.jpg" alt="Ram Charan" className="each-trainer-avatar"/>
                    <p className="text-dark fs-6 fw-bold">Ram Charan</p>
                    <p className="team-qualification">Success Coach</p>
                </div>
                 <div className="each-trainer-container">
                    <img src="https://live.staticflickr.com/65535/54913830563_e32fa4cacf_n.jpg" alt="Sai Kiran" className="each-trainer-avatar"/>
                    <p className="text-dark fs-6 fw-bold">Ravi Kiran</p>
                    <p className="team-qualification">Success Coach</p>
                </div>
              </div>
           </div>
           <div className="trainers-main-container">
              <p className="text-dark fs-5 fw-bold trainers-text">Placement Co-Ordinators</p>
              <div className="trainers-container">
                <div className="each-trainer-container">
                    <img src="https://live.staticflickr.com/65535/54927190941_fd4263c870_n.jpg" alt="Dileep" className="each-trainer-avatar"/>
                    <p className="text-dark fs-6 fw-bold">C Dileep</p>
                    <p className="team-qualification">Placement Head</p>
                </div>
                 <div className="each-trainer-container">
                    <img src="https://tse1.mm.bing.net/th/id/OIP.zP1mlHnV1bpgODW8gvQSFQHaIP?pid=Api&P=0&h=180" alt="Vani" className="each-trainer-avatar"/>
                    <p className="text-dark fs-6 fw-bold">Y Vani</p>
                    <p className="team-qualification">Placment Advisor</p>
                </div>
              </div>
           </div>
       </div>
    </div>  
}
export default AboutUs;