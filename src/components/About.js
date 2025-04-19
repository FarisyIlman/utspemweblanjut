import React from "react";
import "./About.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiVite } from "react-icons/si";

function About() {
  return (
    <section className="about-section">
      <h2 className="section-title">About Me</h2>

      {/* Background Pendidikan */}
      <div className="section-block">
        <h3 className="section-subtitle">🎓 Background Pendidikan</h3>
        <p>
          Saya Farisy Ilman Syarif, mahasiswa semester 4 jurusan Teknik Informatika di
          Institut Teknologi Nasional (ITENAS) Bandung. Saya memiliki ketertarikan tinggi
          dalam pengembangan web dan teknologi modern.
        </p>
        <ul className="edu-list">
          <li><strong>2023–Sekarang:</strong> ITENAS Bandung – Teknik Informatika</li>
          <li><strong>2019–2022:</strong> SMAN 14 Bandung – Jurusan IPA</li>
          <li><strong>2016–2019:</strong> SMP-IT Istiqamah Bandung</li>
          <li><strong>2010–2016:</strong> SD-IT Cendekia Muda</li>
        </ul>
      </div>

      {/* Skills */}
      <div className="section-block">
        <h3 className="section-subtitle">🛠️ Skills</h3>
        <div className="icon-group">
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
          <FaJs title="JavaScript" />
          <FaReact title="React JS" />
          <FaNodeJs title="Node JS" />
          <FaGitAlt title="Git" />
        </div>
      </div>

      {/* Tools & Framework */}
      <div className="section-block">
        <h3 className="section-subtitle">⚙️ Tools & Framework</h3>
        <div className="icon-group">
          <SiTailwindcss title="Tailwind CSS" />
          <SiVite title="Vite" />
          <SiFigma title="Figma" />
        </div>
      </div>

      {/* Kegiatan Tambahan */}
      <div className="section-block">
        <h3 className="section-subtitle">📌 Kegiatan Tambahan</h3>
        <p>
          Aktif di Himpunan Informatika ITENAS, suka ngoding bareng teman, dan
          tertarik ikut hackathon atau event teknologi. Selain itu, sering jadi mentor
          dadakan buat teman-teman yang baru belajar sql atau database.
        </p>
      </div>

      {/* Fun Fact */}
      <div className="section-block">
        <h3 className="section-subtitle">✨ Fun Fact</h3>
        <p>
          Saya suka memproduksi musik elektronik di waktu luang dan pernah bantu bikin
          audio untuk game indie buatan teman saya. Hobi saya juga termasuk nge-gym,
          main game kompetitif, dan oprek teknologi baru.
        </p>
      </div>
    </section>
  );
}

export default About;