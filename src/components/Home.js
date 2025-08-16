import React from 'react';

export default function Home() {
  return (
    <div style={{ position: "relative", width: "100%", height: "714px" }}>
      {/* Background image */}
      <img
        src="https://beetrx.com/wp-content/uploads/2024/12/banner-img-img.jpg"
        alt="Banner"
        title="banner-img-img"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
    </div>
  );
}
