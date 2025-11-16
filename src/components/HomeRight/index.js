import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const HomeContainer = () => {
  return (
    <div className="home-right-container">
      <h1 className="each-container-main-heading">Welcome, Champs</h1>
      <h5 className="text-dark each-container-main-paragraph mt-5">
        Designed to transform you into a highly skilled Software Professional
      </h5>
      <p className="text-primary fw-500 fs-4 text-center">Why Choose Us?</p>

      <div className="d-flex flex-column align-items-center w-100">
        <div className="home-container-each-special-1 bg-opacity-10 mt-4">
          <div className="d-flex flex-column">
            <h3 className="text-dark fs-2 fw-500">1:1 Support</h3>
            <p className="text-secondary fs-5 mt-4">
              Get a personal coach to guide, support, and push you forward.
            </p>
          </div>
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.O0j7CDLQqON-2WaSMgydsQHaE2?pid=Api&P=0&h=180"
            alt="1:1 Support"
            className="home-container-image"
          />
        </div>

        <div className="home-container-each-special-2 bg-opacity-10 mt-4">
          <div className="d-flex flex-column">
            <h3 className="text-dark fs-2 fw-500">Progress Tracking</h3>
            <p className="text-secondary fs-5 mt-4">
              Personal support + progress tracking = your path to success.
            </p>
          </div>
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.t10c1h_GXctYqPfAN89UtwHaEp?pid=Api&P=0&h=180"
            alt="Progress Tracking"
            className="home-container-image"
          />
        </div>

        <div className="home-container-each-special-3 bg-opacity-10 mt-4">
          <div className="d-flex flex-column">
            <h3 className="text-dark fs-2 fw-500">Confusion to Clarity</h3>
            <p className="text-secondary fs-5 mt-4">
              Confused about what to do next? Your coach knows the way.
            </p>
          </div>
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.2aOo90u3g5SuvfjjgxDoywHaE8?pid=Api&P=0&h=180"
            alt="Confusion To Clarity"
            className="home-container-image"
          />
        </div>

        <div className="home-container-each-special-4 bg-opacity-10 mt-4">
          <div className="d-flex flex-column">
            <h3 className="text-dark fs-2 fw-500">Get Instant Doubt Support, 24/7</h3>
            <p className="text-secondary fs-5 mt-4">
              Stuck anytime? Get clear, fast answers - day or night.
            </p>
          </div>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/004/397/549/small_2x/service-24-7-concept-call-center-support-illustration-flat-vector.jpg"
            alt="Get Instant Doubt Support"
            className="home-container-image"
          />
        </div>
      </div>

      <p className="text-primary fw-500 fs-4 text-center mt-5">Vision & Mission</p>

      <div className="d-flex flex-row w-100 justify-content-evenly">
        <div className="vision-mission-container">
          <h5 className="text-dark fs-5 fw-bold">🌟 Vision</h5>
          <ul className="unordered-list">
            <li>To inspire and empower learners with real-world IT skills and opportunities to build a future-ready career.</li>
            <li>Quality and industry-focused learning.</li>
            <li>Practical, hands-on exposure and real-time projects.</li>
            <li>Personalized mentorship and continuous career support.</li>
            <li>Our vision is to create confident, innovative, and industry-ready professionals who grow, succeed, and make a positive impact in the digital world.</li>
          </ul>
        </div>

        <div className="vision-mission-container">
          <h5 className="text-dark fs-5 fw-bold">🎯 Mission</h5>
          <ul className="unordered-list">
            <li>Our mission is to transform learners into skilled IT professionals.</li>
            <li>Delivering high-quality, industry-aligned Java Full Stack training.</li>
            <li>Providing hands-on projects, real-time learning, and practical exposure.</li>
            <li>Guiding learners with personalized mentorship and career development support.</li>
            <li>Building a learning ecosystem that inspires confidence, creativity, and growth.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
