import React from 'react';
import '../App.css';

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  headerStyle: {
    background: '#800000',
  },
  headingStyle: {
    fontSize: '15px',
  },
};

// We use JSX curly braces to evaluate the style object

function Footer() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>
        <div class="row text-center">
        <div class="col-sm"><a href='amartin80108@gmail.com' class="text-white">Email Me</a></div>
        <div class="col-sm"><a href='https://github.com/AmartinVT' class="text-white">Check out my GitHub</a></div>
        <div class="col-sm"><a href='https://www.linkedin.com/in/adam-martin-0350b89b/' class="text-white">Check out my LinkedIn</a></div>
        </div>
        </h1>
    </header>
  );
}

export default Footer;