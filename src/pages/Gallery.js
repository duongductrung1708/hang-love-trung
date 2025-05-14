import { useState } from "react";
import "./Gallery.css";

function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const albums = [
    {
      id: 1,
      title: "Ngày đầu gặp nhau",
      images: [
        "/assets/first-meet-1-placeholder.jpg",
        "/assets/first-meet-2-placeholder.jpg",
        "/assets/first-meet-3-placeholder.jpg"
      ]
    },
    {
      id: 2,
      title: "Những lần đi chơi",
      images: [
        "/assets/date-1-placeholder.jpg",
        "/assets/date-2-placeholder.jpg",
        "/assets/date-3-placeholder.jpg"
      ]
    },
    {
      id: 3,
      title: "Ảnh ngốc nghếch của hai đứa",
      images: [
        "/assets/silly-1-placeholder.jpg",
        "/assets/silly-2-placeholder.jpg",
        "/assets/silly-3-placeholder.jpg"
      ]
    }
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      <h1>Album Ảnh</h1>

      <div className="albums">
        {albums.map((album) => (
          <div
            key={album.id}
            className={`album ${selectedAlbum === album.id ? "active" : ""}`}
            onClick={() => setSelectedAlbum(album.id)}
          >
            <h2>{album.title}</h2>
            <div className="album-preview">
              <img src={album.images[0]} alt={album.title} />
            </div>
          </div>
        ))}
      </div>

      {selectedAlbum && (
        <div className="album-view">
          <h2>{albums.find(a => a.id === selectedAlbum).title}</h2>
          <div className="photo-grid">
            {albums.find(a => a.id === selectedAlbum).images.map((image, index) => (
              <div
                key={index}
                className="photo-item"
                onClick={() => openLightbox(image)}
              >
                <img src={image} alt={`${index + 1}`} />
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