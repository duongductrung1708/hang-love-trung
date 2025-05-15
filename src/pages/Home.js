import { useEffect, useState, useMemo } from "react";
import "./Home.css";
import coupleImage from "../assets/couple-placeholder.jpg";

function Home() {
  const [daysTogether, setDaysTogether] = useState(0);
  const startDate = useMemo(() => new Date("2024-03-28"), []);

  // Function to convert to Vietnam timezone
  const getVietnamTime = () => {
    const now = new Date();
    return new Date(now.getTime() + (7 * 60 * 60 * 1000));
  };

  useEffect(() => {
    const calculateDays = () => {
      const today = getVietnamTime();
      const diffTime = Math.abs(today - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysTogether(diffDays);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 86400000); // Update every day
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="home">
      <div className="profile-section">
        <div className="profile-image">
          <img src={coupleImage} alt="Chúng mình" />
        </div>
        <div className="introduction">
          <h1>Chuyện Của Chúng Mình</h1>
          <p className="love-quote">
            "Kể từ ngày 28/03/2024, thế giới của anh có thêm một điều kỳ diệu mang tên em..."
          </p>
          <div className="days-counter">
            <h2>Đã bên nhau được:</h2>
            <div className="counter">{daysTogether} ngày</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 