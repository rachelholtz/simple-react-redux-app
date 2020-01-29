import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
  render(){
    const today = new Date();
    return(
      <footer>
        <div className="container">
          <div className="row align-items-center py-3">
            <div className="col-md-9">
              <span className="mr-2">All imagery and info is from</span>
              <Link to="https://www.criterion.com/">
                The Criterion Collection
              </Link>
            </div>
            <div className="col-md-3 text-md-right">
            <span>© {today.getFullYear()} Rachel Holtz</span>
          </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

