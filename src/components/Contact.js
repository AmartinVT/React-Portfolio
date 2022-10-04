import React from 'react';

const styles = {
  sectionStyles: {
    background: '#D3D3D3',
  },
};

export default function Contact() {
  return (
    <section style={styles.sectionStyles} className="section">
    <div>
      <h1>Contact Page</h1>
      <p>
        <li><a href='amartin80108@gmail.com'>Email Me</a></li>
        <li><a href='https://github.com/AmartinVT'>Check out my GitHub</a></li>
        <li><a href='https://www.linkedin.com/in/adam-martin-0350b89b/'>Check out my LinkedIn</a></li>
      </p>
    </div>
    </section>
  );
}