import React, { useState, useEffect } from 'react';
import './Home.css';

const imageList = [
  process.env.PUBLIC_URL + '/media/img0.jpg',
  process.env.PUBLIC_URL + '/media/img1.jpg',
  process.env.PUBLIC_URL + '/media/img2.jpg',
  process.env.PUBLIC_URL + '/media/img3.jpg',
  process.env.PUBLIC_URL + '/media/img4.jpg'
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // ganti gambar setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home">
      <div className="home-content">
        <div className="text-section">
          <h1>Farisy Ilman Syarif</h1>
          <p className="subtitle">
            Mahasiswa Semester 4 - Institut Teknologi Nasional (ITENAS)
          </p>
          <p className="tags">
            • Frontend Developer • Automotive Enthusiast • <br />
            • Music Producer • Game Addict • <br />
            • Gym Enthusiast • Tech Enthusiast •
          </p>
          <a href="projects" className="cta-button">Lihat Proyek Saya</a>
        </div>

        <div className="image-section">
          <img
            src={imageList[currentIndex]}
            alt="Foto Profil"
            className="profile-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
