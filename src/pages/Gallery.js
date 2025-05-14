import { useState, useEffect } from "react";
import "./Gallery.css";

import hang1 from "../assets/hang1.png";
import hang2 from "../assets/hang2.png";
import hang3 from "../assets/hang3.png";
import hang4 from "../assets/hang4.png";
import hang5 from "../assets/hang5.png";
import hang6 from "../assets/hang6.png";
import hang7 from "../assets/hang7.png";
import hang8 from "../assets/hang8.png";
import hang9 from "../assets/hang9.png";

function Gallery() {
  // Dữ liệu mặc định
  const DEFAULT_ALBUMS = [
    {
      id: 1,
      title: "Ngày đầu gặp nhau",
      images: [
        hang1,
        hang2,
        hang3
      ]
    },
    {
      id: 2,
      title: "Những lần đi chơi",
      images: [
        hang4,
        hang5,
        hang6
      ]
    },
    {
      id: 3,
      title: "Ảnh ngốc nghếch của hai đứa",
      images: [
        hang7,
        hang8,
        hang9
      ]
    }
  ];

  // Load từ localStorage
  const loadFromLocalStorage = () => {
    try {
      const savedAlbums = localStorage.getItem('galleryAlbums');
      if (savedAlbums) {
        const parsedAlbums = JSON.parse(savedAlbums);
        if (Array.isArray(parsedAlbums)) {
          return parsedAlbums;
        }
      }
    } catch (error) {
      console.error('Lỗi khi đọc dữ liệu:', error);
    }
    return DEFAULT_ALBUMS;
  };

  const [albums, setAlbums] = useState(() => loadFromLocalStorage());
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editingAlbum, setEditingAlbum] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAlbum, setNewAlbum] = useState({
    title: "",
    images: []
  });

  // Lưu vào localStorage
  useEffect(() => {
    localStorage.setItem('galleryAlbums', JSON.stringify(albums));
  }, [albums]);

  const handleAddAlbum = (e) => {
    e.preventDefault();
    const newAlbumWithId = {
      ...newAlbum,
      id: Date.now() // Tạo ID duy nhất
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
    if (window.confirm('Bạn có chắc chắn muốn xóa album này?')) {
      const updatedAlbums = albums.filter(album => album.id !== albumId);
      setAlbums(updatedAlbums);
      if (selectedAlbum === albumId) {
        setSelectedAlbum(null);
      }
    }
  };

  const handleReset = () => {
    if (window.confirm('Bạn có chắc chắn muốn reset về dữ liệu mặc định? Tất cả dữ liệu hiện tại sẽ bị mất!')) {
      setAlbums(DEFAULT_ALBUMS);
      localStorage.removeItem('galleryAlbums');
      setSelectedAlbum(null);
      alert('Đã reset về dữ liệu mặc định!');
    }
  };

  const handleAddImage = (albumId, imageUrl) => {
    const updatedAlbums = albums.map(album => {
      if (album.id === albumId) {
        return {
          ...album,
          images: [...album.images, imageUrl]
        };
      }
      return album;
    });
    setAlbums(updatedAlbums);
  };

  const handleDeleteImage = (albumId, imageIndex) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa ảnh này?')) {
      const updatedAlbums = albums.map(album => {
        if (album.id === albumId) {
          return {
            ...album,
            images: album.images.filter((_, index) => index !== imageIndex)
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
        <button 
          className="add-album-btn"
          onClick={() => setShowAddForm(true)}
        >
          Thêm album mới
        </button>
        <button 
          className="reset-btn"
          onClick={handleReset}
        >
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
              onChange={(e) => setNewAlbum({...newAlbum, title: e.target.value})}
              maxLength={30}
            />
            <div className="form-buttons">
              <button type="submit">Lưu</button>
              <button type="button" onClick={() => setShowAddForm(false)}>Hủy</button>
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
                  const updatedAlbums = albums.map(a => 
                    a.id === album.id ? {...a, title: e.target.value} : a
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
              <img src={album.images[0] || "/assets/placeholder.png"} alt={album.title} />
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
          <h2>{albums.find(a => a.id === selectedAlbum).title}</h2>
          <div className="add-image-form">
            <input
              type="text"
              placeholder="Thêm URL ảnh mới"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleAddImage(selectedAlbum, e.target.value);
                  e.target.value = '';
                }
              }}
            />
          </div>
          <div className="photo-grid">
            {albums.find(a => a.id === selectedAlbum).images.map((image, index) => (
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
    </div>
  );
}

export default Gallery; 