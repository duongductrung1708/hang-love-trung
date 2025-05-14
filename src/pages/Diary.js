import { useState, useEffect } from "react";
import "./Diary.css";

import chuoitiktok from "../assets/chuoitiktok.jpg";
import chuoi300 from "../assets/chuoi300.jpg";

function Diary() {
  const [diaryEntries, setDiaryEntries] = useState(() => {
    // Load diary entries from localStorage on initial render
    const savedEntries = localStorage.getItem('diaryEntries');
    return savedEntries ? JSON.parse(savedEntries) : [
      {
        date: "01/07/2024",
        title: "Bắt đầu tạo chuỗi tiktok",
        content: "Hôm nay là ngày đầu tiên anh bắt đầu tạo chuỗi tiktok cho em. Mỗi ngày một câu chuyện, một kỷ niệm, một khoảnh khắc đặc biệt giữa chúng ta. Anh muốn lưu giữ lại tất cả những điều tuyệt vời này, để sau này khi nhìn lại, chúng ta sẽ thấy được hành trình yêu nhau của mình thật đẹp và ý nghĩa. Em là nguồn cảm hứng vô tận cho những video của anh...",
        image: chuoitiktok
      },
      {
        date: "09/05/2025",
        title: "Chuỗi tiktok 300",
        content: "300 ngày, 300 video, 300 câu chuyện về chúng ta. Mỗi video là một kỷ niệm, một nụ cười, một giọt nước mắt, một khoảnh khắc đặc biệt. Anh vẫn nhớ như in ngày đầu tiên bắt đầu chuỗi video này, và giờ đây, khi đạt đến cột mốc 300, anh càng thêm trân trọng từng khoảnh khắc bên em. Cảm ơn em đã là người đồng hành cùng anh trong hành trình này...",
        image: chuoi300
      },
    ];
  });

  // Save diary entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('diaryEntries', JSON.stringify(diaryEntries));
  }, [diaryEntries]);

  const [showNewEntryForm, setShowNewEntryForm] = useState(false);
  const [newEntry, setNewEntry] = useState({
    date: "",
    title: "",
    content: "",
    image: ""
  });

  const handleAddEntry = (e) => {
    e.preventDefault();
    setDiaryEntries([...diaryEntries, newEntry]);
    setNewEntry({ date: "", title: "", content: "", image: "" });
    setShowNewEntryForm(false);
  };

  const handleDeleteEntry = (index) => {
    const updatedEntries = diaryEntries.filter((_, i) => i !== index);
    setDiaryEntries(updatedEntries);
  };

  return (
    <div className="diary">
      <h1>Nhật Ký Yêu Nhau</h1>
      
      <button 
        className="add-entry-btn"
        onClick={() => setShowNewEntryForm(true)}
      >
        Thêm nhật ký mới
      </button>

      {showNewEntryForm && (
        <div className="new-entry-form">
          <form onSubmit={handleAddEntry}>
            <input
              type="text"
              placeholder="Ngày (DD/MM/YYYY)"
              value={newEntry.date}
              onChange={(e) => setNewEntry({...newEntry, date: e.target.value})}
            />
            <input
              type="text"
              placeholder="Tiêu đề"
              value={newEntry.title}
              onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
            />
            <textarea
              placeholder="Nội dung"
              value={newEntry.content}
              onChange={(e) => setNewEntry({...newEntry, content: e.target.value})}
            />
            <input
              type="text"
              placeholder="URL ảnh"
              value={newEntry.image}
              onChange={(e) => setNewEntry({...newEntry, image: e.target.value})}
            />
            <div className="form-buttons">
              <button type="submit">Lưu</button>
              <button type="button" onClick={() => setShowNewEntryForm(false)}>Hủy</button>
            </div>
          </form>
        </div>
      )}

      <div className="diary-entries">
        {diaryEntries.map((entry, index) => (
          <div key={index} className="diary-entry">
            <div className="entry-header">
              <div className="entry-date">{entry.date}</div>
              <button 
                className="delete-entry-btn"
                onClick={() => handleDeleteEntry(index)}
              >
                Xóa
              </button>
            </div>
            <h2>{entry.title}</h2>
            <div className="entry-content">
              <p>{entry.content}</p>
              {entry.image && (
                <div className="entry-image">
                  <img src={entry.image} alt={entry.title} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Diary; 