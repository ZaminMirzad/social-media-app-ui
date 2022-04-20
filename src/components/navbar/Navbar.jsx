import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navContainer">
      {/* left */}
      <div className="leftContainer">
        <span className="logo">SocialApp</span>
      </div>
      {/* center */}
      <div className="centerContainer">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="search for friends"
          />
        </div>
      </div>
      {/* right */}
      <div className="rightContainer">
        <div className="navLinks">
          <span className="links">Home</span>
          <span className="links">Message</span>
          <span className="links">Timeline</span>
        </div>
        <div className="navIcons">
          <div className="navIconItem">
            <Person />
            <span className="navIconBadge">1</span>
          </div>
          <div className="navIconItem">
            <Chat />
            <span className="navIconBadge">3</span>
          </div>
          <div className="navIconItem">
            <Notifications />
            <span className="navIconBadge">5</span>
          </div>
        </div>
        <img
          src="/assets/person/1.jpeg"
          alt="profile"
          className="navProfileImg"
        />
      </div>
    </div>
  );
}

export default Navbar;
