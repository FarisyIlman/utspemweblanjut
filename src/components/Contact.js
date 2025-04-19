import React from 'react';
import './Contact.css'; // Tambahkan untuk styling

function Contact() {
  return (
    <section className="contact-section">
      <h2>📬 Contact Me</h2>
      <div className="contact-info">
        <p><strong>📧 Kampus:</strong> <a href="mailto:farisy.ilman@mhs.itenas.ac.id">farisy.ilman@mhs.itenas.ac.id</a></p>
        <p><strong>📨 Pribadi:</strong> <a href="mailto:farisyarif@gmail.com">farisyarif@gmail.com</a></p>
        <p><strong>📱 HP:</strong> <a href="tel:+6281323667770">0813 2366 7770</a></p>
        <p><strong>📸 Instagram:</strong> <a href="https://instagram.com/farisyilman" target="_blank" rel="noreferrer">@farisyilman</a></p>
        <p><strong>💼 LinkedIn:</strong> <a href="https://linkedin.com/in/farisy-ilman-890294317/" target="_blank" rel="noreferrer">linkedin.com/in/farisy-ilman</a></p>
      </div>
    </section>
  );
}

export default Contact;
