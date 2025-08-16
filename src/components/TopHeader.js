import { FaEnvelope, FaFacebookF, FaTwitter, FaYoutube, FaSkype } from "react-icons/fa";
import "./Topheader.css";

const TopHeader = () => {
  return (
    <>
      <div className="small py-4 bg-dark text-white">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Left side */}
          <div className="d-flex align-items-center">
            <span>The percentage of profit goes back to plantation</span>
            <span
              className="border-start border-secondary mx-3"
              style={{ height: "16px" }}
            ></span>
            {/* separator */}
            <div className="d-flex align-items-center">
              <FaEnvelope className="text-warning me-2" />
              <span>email@example.com</span>
            </div>
          </div>

          {/* Right side - social icons */}
          <div className="d-flex align-items-center">
            <FaFacebookF className="me-3" />
            <FaTwitter className="me-3" />
            <FaYoutube className="me-3" />
            <FaSkype />
          </div>
        </div>
      </div>

      {/* Orange loader under topheader */}
      <div className="loader-bar">
        <div className="loader-line"></div>
      </div>
    </>
  );
};

export default TopHeader;
