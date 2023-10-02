import React from "react";

const Footer = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    
      <div className="album" id="footer-container">
        <div className="container" id="white-container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid" id="footer">
              <div>
                <p>{currentPage} from 10</p>
              </div>
              <div id="footer-i2">
              {pages.map((page, index) => {
                return (
                  <button
                  
                    key={index}
                    onClick={() => setCurrentPage(page)}
                   
                    className={page == currentPage ? "btn btn-sm btn-primary" : "btn btn-sm btn-outline-primary" }
                  >
                    {page}
                  </button>
                );
              })}
              </div>
            </div>
          </nav>
        </div>
      </div>
    
  );
};

export default Footer;
