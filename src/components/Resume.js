import React from 'react';

const styles = {
  sectionStyles: {
    background: '#D3D3D3',
  },
};

export default function Resume() {
  return (
    <section style={styles.sectionStyles} className="section">
    <div>
      <h1>Resume</h1>
      <p>
        <li>Education: Aerospace Engineering, Virigina Tech, 2015</li>
        <li>Work Experience 1: Industrial Engineer, Bell Helicopter, 2015-2016</li>
        <li>Work Experience 2: Mfg, QA, CI Manager, Textron GSE, 2016-2018</li>
        <li>Work Experience 3: Plant Manager, Textron GSE, 2018-2020</li>
        <li>Work Experience 4: Operations Manager, EZ-GO, 2020-2021</li>
        <li>Work Experience 5: Mfg. Engineering Manager, EZ-GO, 2021-2022</li>
        <li>Work Experience 6: Sr. Manager, Industrial Engineering and Innovation, EZ-GO, 2022-Present</li>
        <li>Lean-6 Sigma Black Belt Certified</li>
      </p>
    </div>
    </section>
  );
}