import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ImageIcon from "@mui/icons-material/Image";
import PaymentIcon from "@mui/icons-material/Payment";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <img
          src="https://images.hdqwalls.com/download/beautiful-landscape-nature-scenery-1d-2560x1440.jpg"
          alt=""
          className="itemImg1"
        />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>

            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
              <div class="social-media-links">
                <div class="row1">
                  <div class="wrapper">
                    <PhoneIcon className="icon" />
                    <span class="alt-text">Phone</span>
                  </div>
                  <div class="wrapper">
                    <WhatsAppIcon className="icon" />
                    <span class="alt-text">WhatsApp</span>
                  </div>
                  <div class="wrapper">
                    <YouTubeIcon className="icon" />
                    <span class="alt-text">YouTube</span>
                  </div>
                  <div class="wrapper">
                    <LanguageIcon className="icon" />
                    <span class="alt-text">Website</span>
                  </div>
                  <div class="wrapper">
                    <InstagramIcon className="icon" />
                    <span class="alt-text">Instagram</span>
                  </div>
                  <div class="wrapper">
                    <FacebookIcon className="icon" />
                    <span class="alt-text">Facebook</span>
                  </div>
                  <div class="wrapper">
                    <LinkedInIcon className="icon" />
                    <span class="alt-text">LinkedIn</span>
                  </div>
                  <div class="wrapper">
                    <PinterestIcon className="icon" />
                    <span class="alt-text">Pinterest</span>
                  </div>
                  <div class="wrapper">
                    <RateReviewIcon className="icon" />
                    <span class="alt-text">Google Reviews</span>
                  </div>
                  <div class="wrapper">
                    <ImageIcon className="icon" />
                    <span class="alt-text">Image</span>
                  </div>
                  <div class="wrapper">
                    <PaymentIcon className="icon" />
                    <span class="alt-text">Payment QR code</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-button">
              <button className="connect-btn" onClick={() => {}}>
                Connect with me
              </button>
              <button className="connect-btn" onClick={() => {}}>
                Save to phone
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
