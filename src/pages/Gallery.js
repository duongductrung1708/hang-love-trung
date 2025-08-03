import { useState, useEffect } from "react";
import "./Gallery.css";

import hang1 from "../assets/hang1.jpg";
import hang2 from "../assets/hang2.jpg";
import photobooth1 from "../assets/photobooth/27e78c3781b008ee51a14.jpg";
import photobooth2 from "../assets/photobooth/fd3184e08867013958761.jpg";
import photobooth3 from "../assets/photobooth/3d86464d4bcac2949bdb2.jpg";
import photobooth4 from "../assets/photobooth/c4ee4c3641b1c8ef91a03.jpg";
import photobooth5 from "../assets/photobooth/8aa4a68bac0c25527c1d6.jpg";
import photobooth6 from "../assets/photobooth/c10788838104085a51155.jpg";

// Import tất cả ảnh museum
import museum1 from "../assets/museum/0950dc58e4df6d8134ce56.jpg";
import museum2 from "../assets/museum/2dda435e44d9cd8794c858.jpg";
import museum3 from "../assets/museum/e024bf2dbfaa36f46fbb57.jpg";
import museum4 from "../assets/museum/11eecda5cd22447c1d3361.jpg";
import museum5 from "../assets/museum/156d523955bedce085af59.jpg";
import museum6 from "../assets/museum/7d6f087c30fbb9a5e0ea60.jpg";
import museum7 from "../assets/museum/33767b044483cddd949263.jpg";
import museum8 from "../assets/museum/37a0d6fae97d6023396c62.jpg";
import museum9 from "../assets/museum/b7728c4eb3c93a9763d864.jpg";
import museum10 from "../assets/museum/2e74606f6be8e2b6bbf97.jpg";
import museum11 from "../assets/museum/5d83e0f1e1766828316767.jpg";
import museum12 from "../assets/museum/98a9674f59c8d09689d965.jpg";
import museum13 from "../assets/museum/e212284516c29f9cc6d366.jpg";
import museum14 from "../assets/museum/f6b55b2f50a8d9f680b98.jpg";
import museum15 from "../assets/museum/222b35dd335aba04e34b9.jpg";
import museum16 from "../assets/museum/5054305534d2bd8ce4c310.jpg";
import museum17 from "../assets/museum/7372bfd5bf52360c6f4368.jpg";
import museum18 from "../assets/museum/b223726f76e8ffb6a6f911.jpg";
import museum19 from "../assets/museum/0db1807a8bfd02a35bec12.jpg";
import museum20 from "../assets/museum/1e55b5798bfe02a05bef69.jpg";
import museum21 from "../assets/museum/d5a661b75f30d66e8f2170.jpg";
import museum22 from "../assets/museum/0fa8f7d4cf53460d1f4288.jpg";
import museum23 from "../assets/museum/44f42aed2a6aa334fa7b13.jpg";
import museum24 from "../assets/museum/74e5a6a59a22137c4a3372.jpg";
import museum25 from "../assets/museum/cc4151e96d6ee430bd7f71.jpg";
import museum26 from "../assets/museum/e570885c89db008559ca14.jpg";
import museum27 from "../assets/museum/3d93dd14e5936ccd358290.jpg";
import museum28 from "../assets/museum/7abbd8e8e06f6931307e89.jpg";
import museum29 from "../assets/museum/89725f176390eaceb38173.jpg";
import museum30 from "../assets/museum/a8ef4f324eb5c7eb9ea416.jpg";
import museum31 from "../assets/museum/caae18f413739a2dc36215.jpg";
import museum32 from "../assets/museum/099c18e72060a93ef07192.jpg";
import museum33 from "../assets/museum/27f3107428f3a1adf8e291.jpg";
import museum34 from "../assets/museum/4d0648d74b50c20e9b4175.jpg";
import museum35 from "../assets/museum/7f638b03898400da599517.jpg";
import museum36 from "../assets/museum/b5a4b6ac8a2b03755a3a74.jpg";
import museum37 from "../assets/museum/03543bc73840b11ee85176.jpg";
import museum38 from "../assets/museum/0be9c177c5f04cae15e118.jpg";
import museum39 from "../assets/museum/41a61fbc1c3b9565cc2a19.jpg";
import museum40 from "../assets/museum/f2a0aebd963a1f64462b93.jpg";
import museum41 from "../assets/museum/358eb0dcb35b3a05634a77.jpg";
import museum42 from "../assets/museum/a4e97c8b7f0cf652af1d20.jpg";
import museum43 from "../assets/museum/b94dc564fde374bd2df295.jpg";
import museum44 from "../assets/museum/df1d462e7ea9f7f7aeb894.jpg";
import museum45 from "../assets/museum/76e8563f69b8e0e6b9a996.jpg";
import museum46 from "../assets/museum/d9799d399ebe17e04eaf78.jpg";
import museum47 from "../assets/museum/c6739e489dcf14914dde79.jpg";
import museum48 from "../assets/museum/f55ef2e9f16e7830217f21.jpg";
import museum49 from "../assets/museum/1ee6800283850adb539422.jpg";
import museum50 from "../assets/museum/ba81a3d0a1572809714680.jpg";
import museum51 from "../assets/museum/e58e334a0ccd8593dcdc97.jpg";
import museum52 from "../assets/museum/692fdc7de2fa6ba432eb99.jpg";
import museum53 from "../assets/museum/6c8958365db1d4ef8da023.jpg";
import museum54 from "../assets/museum/956fda46e5c16c9f35d098.jpg";
import museum55 from "../assets/museum/b78f98e09a6713394a7681.jpg";
import museum56 from "../assets/museum/b9734f2249a5c0fb99b424.jpg";
import museum57 from "../assets/museum/e0b1a3dd9d5a14044d4b100.jpg";
import museum58 from "../assets/museum/1a6d406f78e8f1b6a8f987.jpg";
import museum59 from "../assets/museum/222edb95d012594c000386.jpg";
import museum60 from "../assets/museum/2329af51a9d6208879c726.jpg";
import museum61 from "../assets/museum/849fa38da50a2c54751b25.jpg";
import museum62 from "../assets/museum/84d27d0f7d88f4d6ad9982.jpg";
import museum63 from "../assets/museum/a66d48f24975c02b996483.jpg";
import museum64 from "../assets/museum/07fec2a9c72e4e70173f27.jpg";
import museum65 from "../assets/museum/acfcf64ef3c97a9723d851.jpg";
import museum66 from "../assets/museum/c89aeed1ec5665083c4784.jpg";
import museum67 from "../assets/museum/0ac0ca5dcdda44841dcb53.jpg";
import museum68 from "../assets/museum/122f8e1cb29b3bc5628a29.jpg";
import museum69 from "../assets/museum/16f335cf3248bb16e25952.jpg";
import museum70 from "../assets/museum/16f4e183e3046a5a331585.jpg";
import museum71 from "../assets/museum/f9a5af8393041a5a431528.jpg";
import museum72 from "../assets/museum/18a09f8ca20b2b55721a32.jpg";
import museum73 from "../assets/museum/24b8a6d79a50130e4a4131.jpg";
import museum74 from "../assets/museum/3008c71dfb9a72c42b8b30.jpg";
import museum75 from "../assets/museum/3861aed6a851210f784054.jpg";
import museum76 from "../assets/museum/9d6b56865001d95f801055.jpg";
import museum77 from "../assets/museum/f2dd3f9202158b4bd20433.jpg";
import museum78 from "../assets/museum/279864925a15d34b8a0434.jpg";
import museum79 from "../assets/museum/e4e61c711af693a8cae750.jpg";
import museum80 from "../assets/museum/4f5baae694611d3f447036.jpg";
import museum81 from "../assets/museum/7854c07afffd76a32fec37.jpg";
import museum82 from "../assets/museum/8146bf3381b408ea51a535.jpg";
import museum83 from "../assets/museum/a6313b4e04c98d97d4d838.jpg";
import museum84 from "../assets/museum/4dea63735cf4d5aa8ce539.jpg";
import museum85 from "../assets/museum/bebe062d39aab0f4e9bb40.jpg";
import museum86 from "../assets/museum/21adca19f59e7cc0258f43.jpg";
import museum87 from "../assets/museum/6ed207ea3f6db633ef7c41.jpg";
import museum88 from "../assets/museum/aa8e906eafe926b77ff842.jpg";
import museum89 from "../assets/museum/79803e533bd4b28aebc544.jpg";
import museum90 from "../assets/museum/fa1d69e25665df3b867445.jpg";
import museum91 from "../assets/museum/435f328d370abe54e71b47.jpg";
import museum92 from "../assets/museum/81f5a61da39a2ac4738b48.jpg";
import museum93 from "../assets/museum/e22f7d957b12f24cab0346.jpg";
import museum94 from "../assets/museum/ff0d9dc39b44121a4b5549.jpg";

function Gallery() {
  // Dữ liệu mặc định
  const DEFAULT_ALBUMS = [
    {
      id: 1,
      title: "Gửi ngàn nụ hôn đến anh",
      images: [hang1],
    },
    {
      id: 2,
      title: "Đội anh trên đầu",
      images: [hang2],
    },
    {
      id: 3,
      title: "Ảnh ngốc nghếch của hai đứa",
      images: [photobooth1, photobooth2, photobooth3, photobooth4, photobooth5, photobooth6],
    },
    {
      id: 4,
      title: "Ảnh đi bảo tàng quân sự Việt Nam",
      images: [
        museum1, museum2, museum3, museum4, museum5, museum6, museum7, museum8, museum9, museum10,
        museum11, museum12, museum13, museum14, museum15, museum16, museum17, museum18, museum19, museum20,
        museum21, museum22, museum23, museum24, museum25, museum26, museum27, museum28, museum29, museum30,
        museum31, museum32, museum33, museum34, museum35, museum36, museum37, museum38, museum39, museum40,
        museum41, museum42, museum43, museum44, museum45, museum46, museum47, museum48, museum49, museum50,
        museum51, museum52, museum53, museum54, museum55, museum56, museum57, museum58, museum59, museum60,
        museum61, museum62, museum63, museum64, museum65, museum66, museum67, museum68, museum69, museum70,
        museum71, museum72, museum73, museum74, museum75, museum76, museum77, museum78, museum79, museum80,
        museum81, museum82, museum83, museum84, museum85, museum86, museum87, museum88, museum89, museum90,
        museum91, museum92, museum93, museum94
      ],
    },
  ];

  // Load từ localStorage
  const loadFromLocalStorage = () => {
    try {
      const savedAlbums = localStorage.getItem("galleryAlbums");
      if (savedAlbums) {
        const parsedAlbums = JSON.parse(savedAlbums);
        if (Array.isArray(parsedAlbums)) {
          return parsedAlbums;
        }
      }
    } catch (error) {
      console.error("Lỗi khi đọc dữ liệu:", error);
    }
    return DEFAULT_ALBUMS;
  };

  const [albums, setAlbums] = useState(() => loadFromLocalStorage());
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editingAlbum, setEditingAlbum] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [newAlbum, setNewAlbum] = useState({
    title: "",
    images: [],
  });

  // Lưu vào localStorage
  useEffect(() => {
    localStorage.setItem("galleryAlbums", JSON.stringify(albums));
  }, [albums]);

  const handleAddAlbum = (e) => {
    e.preventDefault();
    const newAlbumWithId = {
      ...newAlbum,
      id: Date.now(), // Tạo ID duy nhất
    };
    setAlbums([...albums, newAlbumWithId]);
    setNewAlbum({ title: "", images: [] });
    setShowAddForm(false);
  };

  const handleEditAlbum = (albumId) => {
    setEditingAlbum(albumId);
  };

  const handleSaveEdit = (albumId) => {
    setEditingAlbum(null);
  };

  const handleDeleteAlbum = (albumId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa album này?")) {
      const updatedAlbums = albums.filter((album) => album.id !== albumId);
      setAlbums(updatedAlbums);
      if (selectedAlbum === albumId) {
        setSelectedAlbum(null);
      }
    }
  };

  const handleReset = () => {
    setShowResetModal(true);
  };

  const confirmReset = () => {
    setAlbums(DEFAULT_ALBUMS);
    localStorage.removeItem("galleryAlbums");
    setSelectedAlbum(null);
    setShowResetModal(false);
  };

  const cancelReset = () => {
    setShowResetModal(false);
  };

  const handleAddImage = (albumId, imageUrl) => {
    const updatedAlbums = albums.map((album) => {
      if (album.id === albumId) {
        return {
          ...album,
          images: [...album.images, imageUrl],
        };
      }
      return album;
    });
    setAlbums(updatedAlbums);
  };

  const handleDeleteImage = (albumId, imageIndex) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa ảnh này?")) {
      const updatedAlbums = albums.map((album) => {
        if (album.id === albumId) {
          return {
            ...album,
            images: album.images.filter((_, index) => index !== imageIndex),
          };
        }
        return album;
      });
      setAlbums(updatedAlbums);
    }
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      <h1>Album Ảnh</h1>

      <div className="gallery-actions">
        <button className="add-album-btn" onClick={() => setShowAddForm(true)}>
          Thêm album mới
        </button>
        <button className="reset-btn" onClick={handleReset}>
          Reset về mặc định
        </button>
      </div>

      {showAddForm && (
        <div className="new-album-form">
          <form onSubmit={handleAddAlbum}>
            <h2>Thêm album mới</h2>
            <input
              type="text"
              placeholder="Tên album"
              value={newAlbum.title}
              onChange={(e) =>
                setNewAlbum({ ...newAlbum, title: e.target.value })
              }
              maxLength={30}
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

      <div className="albums">
        {albums.map((album) => (
          <div
            key={album.id}
            className={`album ${selectedAlbum === album.id ? "active" : ""}`}
            onClick={() => setSelectedAlbum(album.id)}
          >
            {editingAlbum === album.id ? (
              <input
                type="text"
                value={album.title}
                onChange={(e) => {
                  const updatedAlbums = albums.map((a) =>
                    a.id === album.id ? { ...a, title: e.target.value } : a
                  );
                  setAlbums(updatedAlbums);
                }}
                className="album-title-input"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <h2>{album.title}</h2>
            )}
            <div className="album-preview">
              <img
                src={album.images[0] || "/assets/placeholder.png"}
                alt={album.title}
              />
            </div>
            <div className="album-actions">
              {editingAlbum === album.id ? (
                <button
                  className="save-album-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSaveEdit(album.id);
                  }}
                >
                  Lưu
                </button>
              ) : (
                <button
                  className="edit-album-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditAlbum(album.id);
                  }}
                >
                  Sửa
                </button>
              )}
              <button
                className="delete-album-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteAlbum(album.id);
                }}
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedAlbum && (
        <div className="album-view">
          <h2>{albums.find((a) => a.id === selectedAlbum).title}</h2>
          <div className="add-image-form">
            <input
              type="text"
              placeholder="Thêm URL ảnh mới"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleAddImage(selectedAlbum, e.target.value);
                  e.target.value = "";
                }
              }}
            />
          </div>
          <div className="photo-grid">
            {albums
              .find((a) => a.id === selectedAlbum)
              .images.map((image, index) => (
                <div key={index} className="photo-item">
                  <img
                    src={image}
                    alt={`${index + 1}`}
                    onClick={() => openLightbox(image)}
                  />
                  <button
                    className="delete-image-btn"
                    onClick={() => handleDeleteImage(selectedAlbum, index)}
                  >
                    Xóa
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}

      {showResetModal && (
        <div className="reset-modal">
          <div className="reset-modal-content">
            <h3>Xác Nhận Reset</h3>
            <p>Bạn có chắc chắn muốn reset tất cả album về mặc định? Tất cả dữ liệu hiện tại sẽ bị mất!</p>
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

export default Gallery;
