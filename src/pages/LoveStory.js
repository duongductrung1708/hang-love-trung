import "./LoveStory.css";

function LoveStory() {
  const timelineEvents = [
    {
      date: "28/03/2024",
      title: "Ngày quen nhau",
      description: "Hôm đó tình cờ chúng mình gặp nhau. Ai ngờ từ giây phút ấy, em bước vào đời anh như một điều diệu kỳ…",
      image: "/assets/first-meet-placeholder.jpg"
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

  return (
    <div className="love-story">
      <h1>Chuyện Tình Của Chúng Mình</h1>
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">{event.date}</div>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <div className="timeline-image">
                <img src={event.image} alt={event.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoveStory; 