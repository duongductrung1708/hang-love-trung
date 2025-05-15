import { useEffect, useState, useMemo, useCallback } from "react";
import "./SpecialDates.css";

function SpecialDates() {
  const startDate = useMemo(() => new Date("2025-02-06"), []);
  const [daysTogether, setDaysTogether] = useState(0);

  // Function to convert to Vietnam timezone
  const getVietnamTime = () => {
    const now = new Date();
    return new Date(now.getTime() + (7 * 60 * 60 * 1000));
  };

  const specialDates = useMemo(() => [
    {
      title: "Kỷ niệm 1 tháng",
      date: new Date("2025-03-06"),
      icon: "🎉"
    },
    {
      title: "Kỷ niệm 100 ngày",
      date: new Date("2025-05-17"),
      icon: "💝"
    },
    {
      title: "Kỷ niệm 6 tháng",
      date: new Date("2025-08-06"),
      icon: "🎊"
    },
    {
      title: "Kỷ niệm 1 năm",
      date: new Date("2026-02-06"),
      icon: "💑"
    },
    {
      title: "Kỷ niệm 1 năm rưỡi",
      date: new Date("2026-08-06"),
      icon: "💖"
    },
    {
      title: "Kỷ niệm 2 năm",
      date: new Date("2027-02-06"),
      icon: "💕"
    },
    {
      title: "Kỷ niệm 2 năm rưỡi",
      date: new Date("2027-08-06"),
      icon: "💗"
    },
    {
      title: "Kỷ niệm 3 năm",
      date: new Date("2028-02-06"),
      icon: "💓"
    },
    {
      title: "Kỷ niệm 3 năm rưỡi",
      date: new Date("2028-08-06"),
      icon: "💘"
    }
  ], []);

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

  const calculateTimeLeft = useCallback((targetDate) => {
    const now = getVietnamTime();
    const difference = targetDate - now;
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }, []);

  const [timeLeft, setTimeLeft] = useState(
    specialDates.reduce((acc, date) => ({
      ...acc,
      [date.title]: calculateTimeLeft(date.date)
    }), {})
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(
        specialDates.reduce((acc, date) => ({
          ...acc,
          [date.title]: calculateTimeLeft(date.date)
        }), {})
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [specialDates, calculateTimeLeft]);

  return (
    <div className="special-dates">
      <h1>Ngày Đặc Biệt</h1>

      <div className="days-together">
        <h2>Đã yêu nhau được</h2>
        <div className="counter">{daysTogether} ngày</div>
      </div>

      <div className="countdowns">
        {specialDates.map((date) => (
          <div key={date.title} className="countdown-card">
            <div className="countdown-icon">{date.icon}</div>
            <h3>{date.title}</h3>
            <div className="countdown-timer">
              <div className="time-block">
                <span className="time">{timeLeft[date.title]?.days || 0}</span>
                <span className="label">Ngày</span>
              </div>
              <div className="time-block">
                <span className="time">{timeLeft[date.title]?.hours || 0}</span>
                <span className="label">Giờ</span>
              </div>
              <div className="time-block">
                <span className="time">{timeLeft[date.title]?.minutes || 0}</span>
                <span className="label">Phút</span>
              </div>
              <div className="time-block">
                <span className="time">{timeLeft[date.title]?.seconds || 0}</span>
                <span className="label">Giây</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialDates; 