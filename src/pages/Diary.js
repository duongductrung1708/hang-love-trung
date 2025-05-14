import { useState } from "react";
import "./Diary.css";

function Diary() {
  const [diaryEntries, setDiaryEntries] = useState([
    {
      date: "10/04/2024",
      title: "Lần đầu nắm tay",
      content: "Cảm giác hôm ấy vẫn còn nguyên – bàn tay nhỏ xíu của em, nhưng khiến tim anh rung lên như lần đầu nghe bản nhạc yêu thích…",
      image: "/assets/holding-hands-placeholder.jpg"
    },
    {
      date: "20/04/2024",
      title: "Gửi em một bài thơ",
      content: "Những vần thơ anh viết cho em...",
      image: "/assets/poem-placeholder.jpg"
    },
    {
      date: "15/05/2024",
      title: "Giận hờn rồi lại thương…",
      content: "Những khoảnh khắc giận hờn rồi lại thương...",
      image: "/assets/makeup-placeholder.jpg"
    }
  ]);

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
            <div className="entry-date">{entry.date}</div>
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