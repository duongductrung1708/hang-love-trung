import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Chuyện Của Chúng Mình</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Trang Chủ</Link>
        <Link to="/love-story">Chuyện Tình</Link>
        <Link to="/diary">Nhật Ký</Link>
        <Link to="/love-letter">Thư Tình</Link>
        <Link to="/gallery">Album Ảnh</Link>
        <Link to="/special-dates">Ngày Đặc Biệt</Link>
      </div>
    </nav>
  );
}

export default Navbar; 