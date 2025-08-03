import { useEffect, useRef, useState } from "react";
import "./LoveStory.css";

import hoahangvatrung from "../assets/hoahangvatrung.jpg";
import hang1 from "../assets/hang1.jpg";
import photobooth from "../assets/chup-photobooth.jpg";
import uongnuoc from "../assets/uong-nuoc.jpg";
import namtay from "../assets/cai-nam-tay.jpg";
import nuhon from "../assets/nu-hon.jpg";
import trip from "../assets/di-bao-tang.jpg";
import bonglung from "../assets/bong-lung.jpg";

function LoveStory() {
  const timelineRef = useRef(null);

  // Dữ liệu mặc định
  const DEFAULT_EVENTS = [
    {
      date: "28/03/2024",
      title: "Ngày quen nhau",
      description:
        "Hôm đó tình cờ chúng mình gặp nhau. Ai ngờ từ giây phút ấy, em bước vào đời anh như một điều diệu kỳ…",
      image: hoahangvatrung,
    },
    {
      date: "01/01/2025",
      title: "Ngày tỏ tình",
      description: "Anh đã nói lời yêu bằng tất cả chân thành.",
      image: hang1,
    },
    {
      date: "28/06/2025",
      title: "Cuộc gặp gỡ đầu tiên",
      description: "Lần đầu tiên chúng mình gặp nhau ngoài đời thật. Tim đập nhanh, bàn tay run rẩy, và những câu nói ngập ngừng. Khoảnh khắc ấy đã thay đổi cuộc đời chúng mình mãi mãi...",
      image: bonglung,
    },
    {
      date: "28/06/2025",
      title: "Cái nắm tay đầu tiên",
      description: "Khoảnh khắc ngọt ngào nhất...",
      image: namtay,
    },
    {
      date: "28/06/2025",
      title: "Cùng nhau đi uống nước",
      description: "Ngồi bên nhau, nhìn nhau, và cảm nhận sự ấm áp của tình yêu. Những câu chuyện nhỏ nhặt trở nên ý nghĩa khi có em bên cạnh...",
      image: uongnuoc,
    },
    {
      date: "28/06/2025",
      title: "Lần đầu chụp photobooth",
      description: "Những khoảnh khắc hồn nhiên, những nụ cười tự nhiên nhất. Photobooth đã lưu giữ những kỷ niệm đẹp nhất của chúng mình...",
      image: photobooth,
    },
    {
      date: "28/06/2025",
      title: "Nụ hôn đầu tiên",
      description: "Nụ hôn ngọt ngào nhất, đánh dấu sự khởi đầu của một tình yêu đẹp. Khoảnh khắc ấy như dừng lại thời gian...",
      image: nuhon,
    },
    {
      date: "02/07/2025",
      title: "Lần đầu đi chơi xa",
      description: "Chuyến đi đầu tiên cùng nhau, khám phá những nơi mới, tạo ra những kỷ niệm không thể nào quên. Mỗi bước đi đều có em bên cạnh...",
      image: trip,
    },
  ];

  // Load từ localStorage
  const loadFromLocalStorage = () => {
    try {
      const savedEvents = localStorage.getItem("timelineEvents");
      if (savedEvents) {
        const parsedEvents = JSON.parse(savedEvents);
        if (Array.isArray(parsedEvents)) {
          return parsedEvents;
        }
      }
    } catch (error) {
      console.error("Lỗi khi đọc dữ liệu:", error);
    }
    return DEFAULT_EVENTS;
  };

  const [timelineEvents, setTimelineEvents] = useState(() =>
    loadFromLocalStorage()
  );
  const [editingIndex, setEditingIndex] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [newEvent, setNewEvent] = useState({
    date: "",
    title: "",
    description: "",
    image: "",
  });
  const [showResetModal, setShowResetModal] = useState(false);

  // Lưu vào localStorage
  useEffect(() => {
    localStorage.setItem("timelineEvents", JSON.stringify(timelineEvents));
  }, [timelineEvents]);

  const handleAddEvent = (e) => {
    e.preventDefault();
    setTimelineEvents([...timelineEvents, newEvent]);
    setNewEvent({ date: "", title: "", description: "", image: "" });
    setShowAddForm(false);
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleEditEvent = (index) => {
    setEditingIndex(index);
  };

  const handleSaveEdit = (index) => {
    setEditingIndex(null);
  };

  const handleDeleteEvent = (index) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sự kiện này?")) {
      const updatedEvents = timelineEvents.filter((_, i) => i !== index);
      setTimelineEvents(updatedEvents);
    }
  };

  const handleReset = () => {
    setShowResetModal(true);
  };

  const confirmReset = () => {
    setTimelineEvents(DEFAULT_EVENTS);
    localStorage.removeItem("timelineEvents");
    setShowResetModal(false);
  };

  const cancelReset = () => {
    setShowResetModal(false);
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
        rootMargin: "0px 0px -100px 0px",
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
        <button className="add-event-btn" onClick={() => setShowAddForm(true)}>
          Thêm sự kiện mới
        </button>
        <button className="reset-btn" onClick={handleReset}>
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
              onChange={(e) =>
                setNewEvent({ ...newEvent, date: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Tiêu đề"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
            <textarea
              placeholder="Mô tả"
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent({ ...newEvent, description: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="URL ảnh"
              value={newEvent.image}
              onChange={(e) =>
                setNewEvent({ ...newEvent, image: e.target.value })
              }
            />
            <div className="form-buttons">
              <button type="submit">Lưu</button>
              <button type="button" onClick={() => setShowAddForm(false)}>
                Hủy
              </button>
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
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      onClick={() => openLightbox(event.image)}
                    />
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

      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <img src={selectedImage} alt="Lightbox" />
        </div>
      )}

      {showResetModal && (
        <div className="reset-modal">
          <div className="reset-modal-content">
            <h3>Xác Nhận Reset</h3>
            <p>Bạn có chắc chắn muốn reset về dữ liệu mặc định? Tất cả dữ liệu hiện tại sẽ bị mất!</p>
            <div className="reset-modal-actions">
              <button className="confirm-reset" onClick={confirmReset}>
                Xác Nhận Reset
              </button>
              <button className="cancel-reset" onClick={cancelReset}>
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoveStory;
