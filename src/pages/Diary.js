import { useState, useEffect } from "react";
import "./Diary.css";

import chuoitiktok from "../assets/chuoitiktok.jpg";
import chuoi300 from "../assets/chuoi300.jpg";
import vongtay from "../assets/vongtay.jpg";
import vi from "../assets/vi.jpg";
import kyniem100 from "../assets/100days.png";
import bb3 from "../assets/bb3.jpeg";
import bb3dog from "../assets/bb3+dog.jpg";
import bb3dogbox from "../assets/bb3+dog+box.jpg";

// Dữ liệu mặc định được tách ra thành biến riêng
const DEFAULT_ENTRIES = [
  {
    date: "01/07/2024",
    title: "Bắt đầu tạo chuỗi tiktok",
    content:
      "Hôm nay là ngày đầu tiên anh bắt đầu tạo chuỗi tiktok cho em. Mỗi ngày một câu chuyện, một kỷ niệm, một khoảnh khắc đặc biệt giữa chúng ta. Anh muốn lưu giữ lại tất cả những điều tuyệt vời này, để sau này khi nhìn lại, chúng ta sẽ thấy được hành trình yêu nhau của mình thật đẹp và ý nghĩa. Em là nguồn cảm hứng vô tận cho những video của anh...",
    image: chuoitiktok,
  },
  {
    date: "09/05/2025",
    title: "Chuỗi tiktok 300",
    content:
      "300 ngày, 300 video, 300 câu chuyện về chúng ta. Mỗi video là một kỷ niệm, một nụ cười, một giọt nước mắt, một khoảnh khắc đặc biệt. Anh vẫn nhớ như in ngày đầu tiên bắt đầu chuỗi video này, và giờ đây, khi đạt đến cột mốc 300, anh càng thêm trân trọng từng khoảnh khắc bên em. Cảm ơn em đã là người đồng hành cùng anh trong hành trình này...",
    image: chuoi300,
  },
  {
    date: "28/05/2024",
    title: "Món quà đầu tiên em tặng",
    content:
      "Hôm nay là một ngày đặc biệt khi em tặng cho anh chiếc vòng tay đầu tiên. Món quà này không chỉ đơn giản là một vật phẩm, mà còn là tình cảm, sự quan tâm và tình yêu em dành cho anh. Mỗi lần nhìn vào chiếc vòng tay này, anh lại nhớ về khoảnh khắc em trao món quà với nụ cười rạng rỡ. Anh sẽ luôn trân trọng và giữ gìn món quà này như một kỷ vật thiêng liêng của tình yêu chúng ta.",
    image: vongtay,
  },
  {
    date: "05/04/2025",
    title: "Nhận chiếc ví đầu tiên của em",
    content:
      "Hôm nay anh nhận được một món quà đặc biệt từ em - chiếc ví đầu tiên. Không chỉ là một món quà vật chất, mà còn là tình cảm và sự quan tâm em dành cho anh. Em đã chọn rất kỹ lưỡng, phù hợp với phong cách của anh. Mỗi lần sử dụng chiếc ví này, anh lại cảm thấy ấm áp vì biết rằng em luôn nghĩ đến anh. Cảm ơn em vì đã mang đến cho anh những điều tuyệt vời như thế này.",
    image: vi,
  },
  {
    date: "16/05/2025",
    title: "Kỉ niệm 100 ngày iu nhao",
    content:
      "Hôm nay là ngày kỷ niệm 100 ngày yêu nhau của chúng ta. 100 ngày không phải là quá dài, nhưng mỗi ngày đều là những kỷ niệm đáng nhớ. Từ những cuộc trò chuyện đầu tiên, những nụ cười ngượng ngùng, đến những khoảnh khắc hạnh phúc bên nhau. Mỗi ngày trôi qua, tình cảm của chúng ta lại càng thêm sâu đậm. Cảm ơn em đã là người đồng hành cùng anh trong 100 ngày qua, và anh mong rằng chúng ta sẽ cùng nhau đi qua thật nhiều ngày hạnh phúc phía trước. Yêu em nhiều lắm!",
    image: kyniem100,
  },
  {
    date: "08/03/2025",
    title: "Món quà babythree đầu tiên",
    content: `Hôm nay là 8/3 – ngày của con gái, của những người phụ nữ.
Và em – một cô gái bé nhỏ của anh – đã được nhận món quà đầu tiên mà anh gọi là "babythree".
Khi em mở hộp quà, thấy con gấu nhỏ nằm gọn bên trong, em đã bật cười... rồi bật khóc.
Không phải vì món quà to lớn gì đâu, mà vì em thấy được cả trái tim anh trong đó.
Em tưởng tượng anh ngồi chọn từng con, nghĩ xem con nào sẽ khiến em vui, con nào giống tính em nhất...
Dù mình cách nhau cả trăm cây số, nhưng em vẫn thấy anh ở rất gần.
Gần như cảm giác khi em ôm con gấu ấy vào lòng, nhắm mắt lại – là có thể mơ thấy anh.
Cảm ơn anh vì đã không để khoảng cách làm em buồn.
Cảm ơn vì đã luôn làm em thấy mình được yêu – dẫu xa thật xa. 🧸💌`,
    image: bb3,
  },
  {
    date: "10/05/2025",
    title: "Con gấu thứ hai",
    content: `Gấu thứ hai đến vào một chiều tháng 5 nắng gắt.
Em mở hộp, nhìn thấy nó nằm đó, làm lòng em thấy dịu hơn bao giờ hết.
Em đặt nó cạnh con gấu đầu tiên. Hai đứa giờ nằm trên cạnh giường ngủ em, như hai nhân chứng thầm lặng của một chuyện tình xa xôi mà ấm áp.
Người ta bảo: yêu xa khó lắm.
Nhưng em thấy, chỉ cần một người đủ kiên trì gửi đi những món quà nhỏ, và một người đủ dịu dàng chờ đợi – thì xa bao nhiêu cũng hóa gần.
Em không cần quà gì to tát đâu, chỉ cần có "dấu vết của anh" trong từng món nhỏ như thế, là đủ để em chờ anh thêm từng ngày.
Nhớ anh. Và ôm gấu – thay vì ôm anh. 🐻💭`,
    image: bb3dog,
  },
  {
    date: "16/05/2025",
    title: "Món quà “100 ngày bên nhau”",
    content: `Hôm nay tròn 100 ngày mình yêu nhau.
Em không đếm từng ngày, nhưng món quà bất ngờ anh gửi tới đã nhắc em nhớ… tụi mình đã đi cùng nhau một đoạn đường nhỏ, mà thật nhiều yêu thương.

Trong hộp quà là những thứ nhỏ nhắn đến dễ thương: lược, dây buộc tóc, kẹp tóc, tất, và cả túi sưởi dành cho “những ngày em khó chịu”.
Em mở từng món ra, tim cứ mềm đi từng chút một.
Anh không ở gần, nhưng vẫn luôn để ý đến những điều nhỏ bé mà em hay chẳng để tâm.

Có người từng bảo: yêu xa là thiếu thốn.
Nhưng em thấy, nếu một người thật lòng quan tâm, thì khoảng cách không làm mối quan hệ thiếu gì cả – ngược lại, nó khiến từng điều nhỏ xíu cũng trở thành món quà to lớn.

100 ngày rồi, và em vẫn thấy mình thật may mắn vì được là "cô gái của anh".
Cảm ơn anh – vì đã luôn chọn cách yêu em một cách dịu dàng như thế. 💝`,
    image: bb3dogbox,
  },
];

function Diary() {
  const validateDiaryEntry = (entry) => {
    return (
      entry &&
      typeof entry.date === "string" &&
      typeof entry.title === "string" &&
      typeof entry.content === "string" &&
      typeof entry.image === "string"
    );
  };

  const saveToLocalStorage = (entries) => {
    try {
      localStorage.setItem("diaryEntries", JSON.stringify(entries));
      console.log("Đã lưu nhật ký thành công!");
    } catch (error) {
      console.error("Lỗi khi lưu nhật ký:", error);
      alert("Có lỗi xảy ra khi lưu nhật ký. Vui lòng thử lại!");
    }
  };

  const loadFromLocalStorage = () => {
    try {
      const savedEntries = localStorage.getItem("diaryEntries");
      if (savedEntries) {
        const parsedEntries = JSON.parse(savedEntries);
        if (
          Array.isArray(parsedEntries) &&
          parsedEntries.every(validateDiaryEntry)
        ) {
          return parsedEntries;
        }
      }
    } catch (error) {
      console.error("Lỗi khi đọc nhật ký:", error);
    }
    return DEFAULT_ENTRIES;
  };

  const [diaryEntries, setDiaryEntries] = useState(() =>
    loadFromLocalStorage()
  );

  useEffect(() => {
    saveToLocalStorage(diaryEntries);
  }, [diaryEntries]);

  const [editingEntry, setEditingEntry] = useState(null);
  const [showNewEntryForm, setShowNewEntryForm] = useState(false);
  const [newEntry, setNewEntry] = useState({
    date: "",
    title: "",
    content: "",
    image: "",
  });

  const [loadedImages, setLoadedImages] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const [showResetModal, setShowResetModal] = useState(false);

  const handleAddEntry = (e) => {
    e.preventDefault();
    if (!validateDiaryEntry(newEntry)) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    setDiaryEntries([...diaryEntries, newEntry]);
    setNewEntry({ date: "", title: "", content: "", image: "" });
    setShowNewEntryForm(false);
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleInlineEdit = (index) => {
    setEditingEntry(index);
  };

  const handleInlineSave = (index) => {
    if (!validateDiaryEntry(diaryEntries[index])) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    setEditingEntry(null);
  };

  const handleInlineChange = (index, field, value) => {
    const updatedEntries = [...diaryEntries];
    updatedEntries[index] = {
      ...updatedEntries[index],
      [field]: value,
    };
    setDiaryEntries(updatedEntries);
  };

  const handleDeleteEntry = (index) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa mục nhật ký này?")) {
      const updatedEntries = diaryEntries.filter((_, i) => i !== index);
      setDiaryEntries(updatedEntries);
    }
  };

  const handleReset = () => {
    setShowResetModal(true);
  };

  const confirmReset = () => {
    setDiaryEntries(DEFAULT_ENTRIES);
    localStorage.removeItem("diaryEntries");
    setShowResetModal(false);
  };

  const cancelReset = () => {
    setShowResetModal(false);
  };

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return `${year}-${month}-${day}`;
  };

  const formatDateForDisplay = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({
      ...prev,
      [index]: true,
    }));
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
        <button className="reset-btn" onClick={handleReset}>
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
              onChange={(e) =>
                setNewEntry({
                  ...newEntry,
                  date: formatDateForDisplay(e.target.value),
                })
              }
            />
            <input
              type="text"
              placeholder="Tiêu đề"
              value={newEntry.title}
              onChange={(e) =>
                setNewEntry({ ...newEntry, title: e.target.value })
              }
            />
            <textarea
              placeholder="Nội dung"
              value={newEntry.content}
              onChange={(e) =>
                setNewEntry({ ...newEntry, content: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="URL ảnh"
              value={newEntry.image}
              onChange={(e) =>
                setNewEntry({ ...newEntry, image: e.target.value })
              }
            />
            <div className="form-buttons">
              <button type="submit">Lưu</button>
              <button type="button" onClick={() => setShowNewEntryForm(false)}>
                Hủy
              </button>
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
                  onChange={(e) =>
                    handleInlineChange(
                      index,
                      "date",
                      formatDateForDisplay(e.target.value)
                    )
                  }
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
                  onChange={(e) =>
                    handleInlineChange(index, "title", e.target.value)
                  }
                  className="title-input"
                />
                <textarea
                  value={entry.content}
                  onChange={(e) =>
                    handleInlineChange(index, "content", e.target.value)
                  }
                  className="content-input"
                />
                <input
                  type="text"
                  value={entry.image}
                  onChange={(e) =>
                    handleInlineChange(index, "image", e.target.value)
                  }
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
                      <img
                        src={entry.image}
                        alt={entry.title}
                        onLoad={() => handleImageLoad(index)}
                        className={loadedImages[index] ? "loaded" : ""}
                        onClick={() => openLightbox(entry.image)}
                      />
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {showResetModal && (
        <div className="reset-modal">
          <div className="reset-modal-content">
            <h3>Xác Nhận Reset</h3>
            <p>
              Bạn có chắc chắn muốn reset nhật ký về dữ liệu mặc định? Tất cả dữ
              liệu hiện tại sẽ bị mất!
            </p>
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

      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <img src={selectedImage} alt="Lightbox" />
        </div>
      )}
    </div>
  );
}

export default Diary;
