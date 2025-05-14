import { useEffect, useRef, useState } from "react";
import "./LoveStory.css";

import hoahangvatrung from "../assets/hoahangvatrung.jpg";

function LoveStory() {
  const timelineRef = useRef(null);

  // Dữ liệu mặc định
  const DEFAULT_EVENTS = [
    {
      date: "28/03/2024",
      title: "Ngày quen nhau",
      description: "Hôm đó tình cờ chúng mình gặp nhau. Ai ngờ từ giây phút ấy, em bước vào đời anh như một điều diệu kỳ…",
      image: hoahangvatrung
    },
    {
      date: "Coming soon",
      title: "Ngày tỏ tình",
      description: "Anh đã nói lời yêu bằng tất cả chân thành.",
      image: "/assets/confession-placeholder.jpg"
    },
    {
      date: "Coming soon",
      title: "Nụ hôn đầu tiên",
      description: "Khoảnh khắc ngọt ngào nhất...",
      image: "/assets/first-kiss-placeholder.jpg"
    },
    {
      date: "Coming soon",
      title: "Lần đầu đi chơi xa",
      description: "Những kỷ niệm đẹp bên nhau...",
      image: "/assets/trip-placeholder.jpg"
    }
  ];

  // Load từ localStorage
  const loadFromLocalStorage = () => {
    try {
      const savedEvents = localStorage.getItem('timelineEvents');
      if (savedEvents) {
        const parsedEvents = JSON.parse(savedEvents);
        if (Array.isArray(parsedEvents)) {
          return parsedEvents;
        }
      }
    } catch (error) {
      console.error('Lỗi khi đọc dữ liệu:', error);
    }
    return DEFAULT_EVENTS;
  };

  const [timelineEvents, setTimelineEvents] = useState(() => loadFromLocalStorage());
  const [editingIndex, setEditingIndex] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    date: "",
    title: "",
    description: "",
    image: ""
  });

  // Lưu vào localStorage
  useEffect(() => {
    localStorage.setItem('timelineEvents', JSON.stringify(timelineEvents));
  }, [timelineEvents]);

  const handleAddEvent = (e) => {
    e.preventDefault();
    setTimelineEvents([...timelineEvents, newEvent]);
    setNewEvent({ date: "", title: "", description: "", image: "" });
    setShowAddForm(false);
  };

  const handleEditEvent = (index) => {
    setEditingIndex(index);
  };

  const handleSaveEdit = (index) => {
    setEditingIndex(null);
  };

  const handleDeleteEvent = (index) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sự kiện này?')) {
      const updatedEvents = timelineEvents.filter((_, i) => i !== index);
      setTimelineEvents(updatedEvents);
    }
  };

  const handleReset = () => {
    if (window.confirm('Bạn có chắc chắn muốn reset về dữ liệu mặc định? Tất cả dữ liệu hiện tại sẽ bị mất!')) {
      setTimelineEvents(DEFAULT_EVENTS);
      localStorage.removeItem('timelineEvents');
      alert('Đã reset về dữ liệu mặc định!');
    }
  };

  // Animation effect
  useEffect(() => {
    const timeline = timelineRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (timeline) {
      observer.observe(timeline);
    }

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      if (timeline) {
        observer.unobserve(timeline);
      }
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, [timelineEvents]); // Thêm timelineEvents vào dependencies

  return (
    <div className="love-story">
      <h1>Chuyện Tình Của Chúng Mình</h1>

      <div className="story-actions">
        <button 
          className="add-event-btn"
          onClick={() => setShowAddForm(true)}
        >
          Thêm sự kiện mới
        </button>
        <button 
          className="reset-btn"
          onClick={handleReset}
        >
          Reset về mặc định
        </button>
      </div>

      {showAddForm && (
        <div className="new-event-form">
          <form onSubmit={handleAddEvent}>
            <h2>Thêm sự kiện mới</h2>
            <input
              type="text"
              placeholder="Ngày (DD/MM/YYYY)"
              value={newEvent.date}
              onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
            />
            <input
              type="text"
              placeholder="Tiêu đề"
              value={newEvent.title}
              onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
            />
            <textarea
              placeholder="Mô tả"
              value={newEvent.description}
              onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
            />
            <input
              type="text"
              placeholder="URL ảnh"
              value={newEvent.image}
              onChange={(e) => setNewEvent({...newEvent, image: e.target.value})}
            />
            <div className="form-buttons">
              <button type="submit">Lưu</button>
              <button type="button" onClick={() => setShowAddForm(false)}>Hủy</button>
            </div>
          </form>
        </div>
      )}

      <div className="timeline" ref={timelineRef}>
        {timelineEvents.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={event.date}
                    onChange={(e) => {
                      const updatedEvents = [...timelineEvents];
                      updatedEvents[index].date = e.target.value;
                      setTimelineEvents(updatedEvents);
                    }}
                    className="timeline-input"
                  />
                  <input
                    type="text"
                    value={event.title}
                    onChange={(e) => {
                      const updatedEvents = [...timelineEvents];
                      updatedEvents[index].title = e.target.value;
                      setTimelineEvents(updatedEvents);
                    }}
                    className="timeline-input"
                  />
                  <textarea
                    value={event.description}
                    onChange={(e) => {
                      const updatedEvents = [...timelineEvents];
                      updatedEvents[index].description = e.target.value;
                      setTimelineEvents(updatedEvents);
                    }}
                    className="timeline-input"
                  />
                  <input
                    type="text"
                    value={event.image}
                    onChange={(e) => {
                      const updatedEvents = [...timelineEvents];
                      updatedEvents[index].image = e.target.value;
                      setTimelineEvents(updatedEvents);
                    }}
                    className="timeline-input"
                  />
                </>
              ) : (
                <>
                  <div className="timeline-date">{event.date}</div>
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
                  <div className="timeline-image">
                    <img src={event.image} alt={event.title} />
                  </div>
                </>
              )}
              <div className="timeline-actions">
                {editingIndex === index ? (
                  <button 
                    className="save-event-btn"
                    onClick={() => handleSaveEdit(index)}
                  >
                    Lưu
                  </button>
                ) : (
                  <button 
                    className="edit-event-btn"
                    onClick={() => handleEditEvent(index)}
                  >
                    Sửa
                  </button>
                )}
                <button 
                  className="delete-event-btn"
                  onClick={() => handleDeleteEvent(index)}
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoveStory; 