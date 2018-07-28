import React from 'react';
import {Link} from 'react-router-dom';


const Danger = () => {
  return (
    <div className="error-message">
      <div className="error-message__inner">
        <h1>Sorry This Page Does Not Exist</h1>
        <div className="go-back">
          <Link className="close-search" to="/">Close</Link><span>Go Back Home</span>
        </div>
      </div>
    </div>
  )
};

export default Danger;