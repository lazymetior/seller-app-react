import React from "react";

const Footer = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
//  console.log(totalPosts);

// Pagination with next and previous button

  return (
    <div className="album" id="footer-container">
      <div className="container" id="white-container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid" id="footer">
            <div>
              <p>{currentPage} from 10</p>
            </div>
            <div id="footer-i2">
              <button
                type="button"
                className="btn btn-sm btn-outline-primary"
                onClick={() =>
                  setCurrentPage(
                    currentPage <= 1
                      ? Math.ceil(totalPosts / postsPerPage)
                      : currentPage - 1
                  )
                }
              >
                <i className="ri-arrow-left-line"></i>
              </button>
              {pages.map((page, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    className={
                      page == currentPage
                        ? "btn btn-sm btn-primary"
                        : "btn btn-sm  btn-outline-primary"
                    }
                  >
                    {page}
                  </button>
                );
              })}
              <button
                type="button"
                className="btn btn-sm btn-outline-primary"
                onClick={() =>
                  setCurrentPage(
                    currentPage > 9 ? 1 : currentPage + 1
                  )
                }
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
