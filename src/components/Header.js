import React, {useState} from 'react';
// Here we are importing a CSS file as a dependency
import '../App.css';
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {

  const [currentPage, setCurrentPage] = useState('about-me');

  const renderPage = () => {
    if (currentPage === 'resume') {
      return <Resume />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }                
    if (currentPage === 'contact') {
      return <Contact />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <header className="p-5 text-center site-heading">
        <h1>Martin's REACT Portfolio </h1>
        </header>
        <nav>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </nav>
        <main className='container'>
          {renderPage()}
        </main>
    </div>
  );
}

export default Header;