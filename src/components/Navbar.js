import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Chuyện Của Chúng Mình</Link>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Trang Chủ</Link>
          <Link to="/love-story" onClick={closeMenu}>Chuyện Tình</Link>
          <Link to="/diary" onClick={closeMenu}>Nhật Ký</Link>
          <Link to="/love-letter" onClick={closeMenu}>Thư Tình</Link>
          <Link to="/gallery" onClick={closeMenu}>Album Ảnh</Link>
          <Link to="/special-dates" onClick={closeMenu}>Ngày Đặc Biệt</Link>
          <Link to="https://flower-hang.vercel.app/" onClick={closeMenu}>Đính Kèm</Link>
        </div>
      </nav>
      <div className={`overlay ${isMenuOpen ? "active" : ""}`} onClick={closeMenu} />
    </>
  );
}

export default Navbar; 