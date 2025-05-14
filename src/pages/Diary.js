import { useState, useEffect } from "react";
import "./Diary.css";

import chuoitiktok from "../assets/chuoitiktok.jpg";
import chuoi300 from "../assets/chuoi300.jpg";
import vongtay from "../assets/vongtay.jpg";
import vi from "../assets/vi.jpg";

// Dữ liệu mặc định được tách ra thành biến riêng
const DEFAULT_ENTRIES = [
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
  {
    date: "28/05/2024",
    title: "Món quà đầu tiên em tặng",
    content: "Hôm nay là một ngày đặc biệt khi em tặng cho anh chiếc vòng tay đầu tiên. Món quà này không chỉ đơn giản là một vật phẩm, mà còn là tình cảm, sự quan tâm và tình yêu em dành cho anh. Mỗi lần nhìn vào chiếc vòng tay này, anh lại nhớ về khoảnh khắc em trao món quà với nụ cười rạng rỡ. Anh sẽ luôn trân trọng và giữ gìn món quà này như một kỷ vật thiêng liêng của tình yêu chúng ta.",
    image: vongtay
  },
  {
    date: "05/04/2025",
    title: "Nhận chiếc ví đầu tiên của em",
    content: "Hôm nay anh nhận được một món quà đặc biệt từ em - chiếc ví đầu tiên. Không chỉ là một món quà vật chất, mà còn là tình cảm và sự quan tâm em dành cho anh. Em đã chọn rất kỹ lưỡng, phù hợp với phong cách của anh. Mỗi lần sử dụng chiếc ví này, anh lại cảm thấy ấm áp vì biết rằng em luôn nghĩ đến anh. Cảm ơn em vì đã mang đến cho anh những điều tuyệt vời như thế này.",
    image: vi
  },
];

function Diary() {
  const validateDiaryEntry = (entry) => {
    return entry && 
           typeof entry.date === 'string' && 
           typeof entry.title === 'string' && 
           typeof entry.content === 'string' && 
           typeof entry.image === 'string';
  };

  const saveToLocalStorage = (entries) => {
    try {
      localStorage.setItem('diaryEntries', JSON.stringify(entries));
      console.log('Đã lưu nhật ký thành công!');
    } catch (error) {
      console.error('Lỗi khi lưu nhật ký:', error);
      alert('Có lỗi xảy ra khi lưu nhật ký. Vui lòng thử lại!');
    }
  };

  const loadFromLocalStorage = () => {
    try {
      const savedEntries = localStorage.getItem('diaryEntries');
      if (savedEntries) {
        const parsedEntries = JSON.parse(savedEntries);
        if (Array.isArray(parsedEntries) && parsedEntries.every(validateDiaryEntry)) {
          return parsedEntries;
        }
      }
    } catch (error) {
      console.error('Lỗi khi đọc nhật ký:', error);
    }
    return DEFAULT_ENTRIES;
  };

  const [diaryEntries, setDiaryEntries] = useState(() => loadFromLocalStorage());

  useEffect(() => {
    saveToLocalStorage(diaryEntries);
  }, [diaryEntries]);

  const [editingEntry, setEditingEntry] = useState(null);
  const [showNewEntryForm, setShowNewEntryForm] = useState(false);
  const [newEntry, setNewEntry] = useState({
    date: "",
    title: "",
    content: "",
    image: ""
  });

  const handleAddEntry = (e) => {
    e.preventDefault();
    if (!validateDiaryEntry(newEntry)) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    setDiaryEntries([...diaryEntries, newEntry]);
    setNewEntry({ date: "", title: "", content: "", image: "" });
    setShowNewEntryForm(false);
  };

  const handleInlineEdit = (index) => {
    setEditingEntry(index);
  };

  const handleInlineSave = (index) => {
    if (!validateDiaryEntry(diaryEntries[index])) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    setEditingEntry(null);
  };

  const handleInlineChange = (index, field, value) => {
    const updatedEntries = [...diaryEntries];
    updatedEntries[index] = {
      ...updatedEntries[index],
      [field]: value
    };
    setDiaryEntries(updatedEntries);
  };

  const handleDeleteEntry = (index) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa mục nhật ký này?')) {
      const updatedEntries = diaryEntries.filter((_, i) => i !== index);
      setDiaryEntries(updatedEntries);
    }
  };

  const handleReset = () => {
    if (window.confirm('Bạn có chắc chắn muốn reset nhật ký về dữ liệu mặc định? Tất cả dữ liệu hiện tại sẽ bị mất!')) {
      setDiaryEntries(DEFAULT_ENTRIES);
      localStorage.removeItem('diaryEntries');
      alert('Đã reset nhật ký về dữ liệu mặc định!');
    }
  };

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  };

  const formatDateForDisplay = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="diary">
      <h1>Nhật Ký Yêu Nhau</h1>
      
      <div className="diary-actions">
        <button 
          className="add-entry-btn"
          onClick={() => setShowNewEntryForm(true)}
        >
          Thêm nhật ký mới
        </button>
        <button 
          className="reset-btn"
          onClick={handleReset}
        >
          Reset về mặc định
        </button>
      </div>

      {showNewEntryForm && (
        <div className="new-entry-form">
          <form onSubmit={handleAddEntry}>
            <h2>Thêm nhật ký mới</h2>
            <input
              type="date"
              value={newEntry.date ? formatDate(newEntry.date) : ""}
              onChange={(e) => setNewEntry({...newEntry, date: formatDateForDisplay(e.target.value)})}
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
              {editingEntry === index ? (
                <input
                  type="date"
                  value={formatDate(entry.date)}
                  onChange={(e) => handleInlineChange(index, 'date', formatDateForDisplay(e.target.value))}
                  className="date-input"
                />
              ) : (
                <div className="entry-date">{entry.date}</div>
              )}
              <div className="entry-actions">
                {editingEntry === index ? (
                  <button 
                    className="save-entry-btn"
                    onClick={() => handleInlineSave(index)}
                  >
                    Lưu
                  </button>
                ) : (
                  <button 
                    className="edit-entry-btn"
                    onClick={() => handleInlineEdit(index)}
                  >
                    Sửa
                  </button>
                )}
                <button 
                  className="delete-entry-btn"
                  onClick={() => handleDeleteEntry(index)}
                >
                  Xóa
                </button>
              </div>
            </div>
            {editingEntry === index ? (
              <>
                <input
                  type="text"
                  value={entry.title}
                  onChange={(e) => handleInlineChange(index, 'title', e.target.value)}
                  className="title-input"
                />
                <textarea
                  value={entry.content}
                  onChange={(e) => handleInlineChange(index, 'content', e.target.value)}
                  className="content-input"
                />
                <input
                  type="text"
                  value={entry.image}
                  onChange={(e) => handleInlineChange(index, 'image', e.target.value)}
                  placeholder="URL ảnh"
                  className="image-input"
                />
              </>
            ) : (
              <>
                <h2>{entry.title}</h2>
                <div className="entry-content">
                  <p>{entry.content}</p>
                  {entry.image && (
                    <div className="entry-image">
                      <img src={entry.image} alt={entry.title} />
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Diary; 