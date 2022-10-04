import React from 'react';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: '#D3D3D3',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Portfolio() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>Poll Together : A light-weight polling application</h2>
      <p>
        <a href='https://github.com/AmartinVT/PollTogether'>View the Repo</a>
        <div>
          This application was created as a collaborative project. The goal was to make a responsive, modern looking
          application using SQL, Bootstrap, Heroku, Node, and Express. This application functions as a simple polling app.
          Users can register, log-in, create polls, interact with polls, and view their account history. Results plot out 
          in simple bar charts
        </div>
      </p>
      <h2>Social Media API : A demonstration on posting and reacting to content</h2>
      <p>
        <a href='https://github.com/AmartinVT/SocialMediaAPI'>View the Repo</a>
        <div>
          This application allows users to simulate a simple social media experience. Content can be posted, replied to,
          and reacted to. The focal tech behind this app is NoSQL and demonstration of user routes.
        </div>
      </p>
      <h2>E-Commerce Backend : Demonstrating SQL and route management</h2>
      <p>
        <a href='https://github.com/AmartinVT/E_Commerce_Backend'>View the Repo</a>
        <div>
          This application simulates a SQL based backend for an e-commerce site. Users can submit critical info related
          to items such as price, inventory levels, and categories. All required routes for adding, editing, and deleting
          data can be easily tested using Postman.
        </div>
      </p>
    </section>
  );
}

export default Portfolio;