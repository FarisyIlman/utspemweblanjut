import React, { useState } from 'react';
import './Projects.css'; 

const dataProjects = [
  {
    nama: "Portfolio Website",
    deskripsi: "Website pribadi untuk menampilkan informasi diri dan proyek.",
    waktu: "Apr 2025 - Apr 2025",
    teknologi: "React, CSS, JavaScript",
    screenshot: "/media/website.png", // pastikan file-nya ada di /public/images/
    github: "https://github.com/FarisyIlman"
  },
  {
    nama: "Smart Home with Blynk intergration",
    deskripsi: "Simulasi Smart Home menggunakan Blynk dan ESP32.",
    waktu: "Apr 2024 - Jun 2024",
    teknologi: "Arduino, Blynk, ESP32",
    screenshot: "/media/rumah.jpg",
    github: "https://github.com/FarisyIlman"
  },
  {
    nama: "Smart Piggy Bank with RFID and Light Sensor",
    deskripsi: "Simulasi Smart Home menggunakan Blynk dan ESP32.",
    waktu: "May 2024 - Jun 2024",
    teknologi: "Arduino, RFID, ESP32",
    screenshot: "/media/celengan.jpg",
    github: "https://github.com/FarisyIlman"
  }
];

function Projects() {
  const [projects] = useState(dataProjects);

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.screenshot} alt={`Screenshot ${project.nama}`} className="project-img" />
            <div className="project-content">
              <h3>{project.nama}</h3>
              <p className="project-desc">{project.deskripsi}</p>
              <p><strong>Waktu:</strong> {project.waktu}</p>
              <p><strong>Teknologi:</strong> {project.teknologi}</p>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  🔗 View Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
