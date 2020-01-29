import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-2">
            <div className="logo">
              <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                  <path d="M7.1 16.8C-1.2 31 3.5 49.3 17.7 57.6c.1 0 .1.1.2.1 6 3.5 13.1 4.8 19.9 3.7l-2.2-13.3c-.8.1-1.5.2-2.3.2-3 0-6-.8-8.6-2.3-7.8-4.5-10.5-14.5-6-22.3 0 0 0-.1.1-.1 4.6-7.8 14.8-10.4 22.6-5.8 3.3 1.9 5.8 4.9 7.1 8.5l12.8-4.6C55.6 6.1 38.3-1.9 22.7 3.9c-6.6 2.4-12 6.9-15.6 12.9"></path>
                  </svg>
              </Link>
            </div>
          </div>
          <div className="col-10 text-right">
            <span className="font-weight-bold">Wes Anderson | The Criterion Collection</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;