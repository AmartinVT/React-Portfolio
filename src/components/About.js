import React from 'react';

const styles = {
  sectionStyles: {
    background: '#D3D3D3',
  },
};

export default function About() {
  return (
    <section style={styles.sectionStyles} className="section">
    <div>
      <h1>About Page</h1>
      <p>
        Hello! My name is Adam Martin. I currently work as an Engineering Manager at EZ-GO, a golf car
        manufacturing company in Augusta, GA. I am enrolled in the Georgia Tech coding bootcamp to help
        develop my software creation skills and understanding to better perform within my current job. This
        portfolio, created using REACT, will demonstrate the skills learned thus far.
      </p>
    </div>
    </section>
  );
}